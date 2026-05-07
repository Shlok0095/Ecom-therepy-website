/** Official social & messaging links */
export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/ecom-therapy-pvt-ltd-704768238/',
  instagram: 'https://www.instagram.com/ecom_therapy_pvt_ltd/',
  whatsappBusiness: 'https://wa.me/919122872786',
  /** Digits only (country code + number) for wa.me ?text= links */
  whatsappBusinessPhone: '919122872786',
} as const

/** Set `NEXT_PUBLIC_CALENDLY_URL` in `.env.local` to your scheduling page (e.g. https://calendly.com/your-handle/discovery) */
export const CALENDLY_BOOKING_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() || 'https://calendly.com/'
