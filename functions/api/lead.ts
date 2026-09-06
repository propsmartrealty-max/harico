/**
 * Cloudflare Edge Worker API: /api/lead
 * Handles lead logging and instant background email dispatch to propsmartrealty@gmail.com
 */

interface Env {
  LEAD_RECIPIENT?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const data = await context.request.json() as any;
    const clientIp = context.request.headers.get('cf-connecting-ip') || 'Unknown';
    const clientCountry = (context.request as any).cf?.country || 'IN';
    const clientCity = (context.request as any).cf?.city || 'Pune';
    const clientColo = (context.request as any).cf?.colo || 'BOM';
    const recipientEmail = 'propsmartrealty@gmail.com';
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    console.log(`[Cloudflare Lead Capture] Lead from ${clientCity}, ${clientCountry} (${clientIp}) at PoP ${clientColo}:`, data);

    const emailPayload = {
      _subject: `🚨 Real Estate Lead [Edge Ingest]: ${data.name || 'Enquiry'} - ${data.project || 'Harico Estates'}`,
      _replyto: data.email || recipientEmail,
      _template: 'table',
      _captcha: 'false',
      "Lead Name": data.name,
      "Phone Number": data.phone,
      "Email Address": data.email || 'Not Provided (Phone Preferred)',
      "Target Project": data.project || 'Harico Estates General Enquiry',
      "Configuration / Requirement": data.requirement || '2 & 3 BHK Luxury Residences',
      "Interest Type": data.interestType || 'Direct Website Lead',
      "Preferred Time Slot": data.timeSlot || 'Flexible / Priority',
      "Buyer Message": data.message || 'Developer consultation requested',
      "Origin Location": `${clientCity}, ${clientCountry} (${clientIp})`,
      "Edge PoP": clientColo,
      "Timestamp (IST)": `${timestamp} IST`
    };

    // Forward to FormSubmit in background using waitUntil
    if ((context as any).waitUntil) {
      (context as any).waitUntil(
        fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(emailPayload)
        }).catch(err => console.warn('[Cloudflare Edge Lead] Dispatch error:', err))
      );
    } else {
      fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      }).catch(() => {});
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Lead dispatched via Cloudflare Edge Network',
      origin: `${clientCity}, ${clientCountry}`,
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const onRequestOptions: PagesFunction<Env> = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400'
    }
  });
};
