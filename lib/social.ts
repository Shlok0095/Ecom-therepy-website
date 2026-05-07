/** Official social & messaging links */
export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/ecom-therapy-pvt-ltd-704768238/',
  instagram: 'https://www.instagram.com/ecom_therapy_pvt_ltd/',
  whatsappBusiness: 'https://wa.me/919122872786',
  /** Digits only (country code + number) for wa.me ?text= links */
  whatsappBusinessPhone: '919122872786',
} as const

/** Public booking page — override with NEXT_PUBLIC_CALENDLY_URL if you change event types */
const DEFAULT_CALENDLY_BOOKING = 'https://calendly.com/shlok-kumar0-1-2-3-4/new-meeting'

export const CALENDLY_BOOKING_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() || DEFAULT_CALENDLY_BOOKING
