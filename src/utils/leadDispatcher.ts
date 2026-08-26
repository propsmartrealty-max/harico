/**
 * Enterprise Lead Dispatcher Engine
 * Automatically delivers all website enquiry leads to propsmartrealty@gmail.com
 * and simultaneously initiates priority WhatsApp consultation.
 */

export interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  project?: string;
  requirement?: string;
  interestType?: string;
  timeSlot?: string;
  message?: string;
  sourceUrl?: string;
}

export async function dispatchLead(payload: LeadPayload): Promise<{ success: boolean }> {
  const recipientEmail = 'propsmartrealty@gmail.com';
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const source = payload.sourceUrl || window.location.href;

  const emailData = {
    _subject: `🚨 New Real Estate Lead: ${payload.name} - ${payload.project || 'Harico Estates'}`,
    _replyto: payload.email || 'propsmartrealty@gmail.com',
    _template: 'table',
    _captcha: 'false',
    "Lead Name": payload.name,
    "Phone Number": payload.phone,
    "Email Address": payload.email || 'Not Provided (Phone Preferred)',
    "Target Project": payload.project || 'Harico Estates General Enquiry',
    "Configuration / Requirement": payload.requirement || '2 & 3 BHK Luxury Residences',
    "Interest Type": payload.interestType || 'Direct Website Lead',
    "Preferred Site Visit Slot": payload.timeSlot || 'Immediate / Flexible',
    "Buyer Notes / Message": payload.message || 'Direct developer consultation requested',
    "Landing Page URL": source,
    "Received At (IST)": `${timestamp} IST`
  };

  // 1. Send asynchronous email dispatch to propsmartrealty@gmail.com via FormSubmit
  try {
    fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(emailData)
    }).catch(err => console.warn('[LeadDispatcher] Email background dispatch:', err));
  } catch (e) {
    console.warn('[LeadDispatcher] Failed sending email:', e);
  }

  // 2. Also dispatch to internal Cloudflare Edge API endpoint
  try {
    fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, timestamp, recipient: recipientEmail })
    }).catch(() => {});
  } catch (e) {}

  return { success: true };
}
