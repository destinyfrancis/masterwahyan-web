import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const APP_STORE_URL = 'https://apps.apple.com/gb/app/soundscribe-ai-transcribe/id6760260471?mt=12'

export const WHATSAPP_URL = 'https://wa.me/message/3CH6O4BQWF7CO1'
export const INSTAGRAM_URL = 'https://www.instagram.com/masterwahyan/'
