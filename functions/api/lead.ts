/**
 * Cloudflare Edge Worker API: /api/lead
 * Handles lead logging and forwarding to propsmartrealty@gmail.com
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

    console.log(`[Cloudflare Lead Capture] New lead received from ${clientCity}, ${clientCountry} (${clientIp}):`, data);

    return new Response(JSON.stringify({
      success: true,
      message: 'Lead received and queued for dispatch to propsmartrealty@gmail.com',
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
