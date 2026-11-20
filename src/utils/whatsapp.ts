import { BUSINESS_INFO } from '../data/businessData';

export interface WhatsAppMessageOptions {
  branchName?: string;
  serviceTitle?: string;
  clientName?: string;
  clientPhone?: string;
  preferredDate?: string;
  enquiryType?: 'consultation' | 'pricing' | 'maintenance' | 'general';
  customNotes?: string;
}

export function buildWhatsAppUrl(options: WhatsAppMessageOptions = {}): string {
  const phone = BUSINESS_INFO.rawPrimaryPhone;
  const greeting = "Hello Golden Hair Wig Studio,";
  
  const lines: string[] = [greeting];

  if (options.clientName) {
    lines.push(`My name is: ${options.clientName.trim()}`);
  }

  if (options.branchName) {
    lines.push(`Preferred Branch: ${options.branchName}`);
  }

  if (options.serviceTitle) {
    lines.push(`Interested in: ${options.serviceTitle}`);
  }

  if (options.preferredDate) {
    lines.push(`Preferred Date / Time: ${options.preferredDate}`);
  }

  if (options.customNotes && options.customNotes.trim().length > 0) {
    lines.push(`Note: ${options.customNotes.trim()}`);
  }

  if (lines.length === 1) {
    lines.push("I would like to book a private consultation for non-surgical hair replacement solutions.");
  } else {
    lines.push("Please let me know the availability and pricing guidance. Thank you!");
  }

  const encodedText = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${phone}?text=${encodedText}`;
}

export function getDirectCallUrl(): string {
  return `tel:${BUSINESS_INFO.primaryPhone.replace(/\s+/g, '')}`;
}

export function getSecondaryCallUrl(): string {
  return `tel:${BUSINESS_INFO.secondaryPhone.replace(/\s+/g, '')}`;
}
