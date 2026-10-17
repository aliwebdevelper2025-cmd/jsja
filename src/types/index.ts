export type ServiceCategory = 'massage' | 'salon' | 'facial' | 'grooming' | 'packages';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  categoryLabel: string;
  duration: string;
  price: number;
  description: string;
  benefits: string[];
  popular?: boolean;
  image?: string;
  genderSuitability?: 'All' | 'Men' | 'Women';
  pressureLevel?: 'Gentle' | 'Medium' | 'Firm' | 'Custom';
}

export interface BookingDetails {
  id: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  date: string;
  timeSlot: string;
  therapistPreference: string;
  genderPreference: 'No Preference' | 'Female Specialist' | 'Male Specialist';
  specialNotes?: string;
  selectedServices: ServiceItem[];
  totalAmount: number;
  status: 'confirmed' | 'pending';
  createdAt: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  treatment: string;
  comment: string;
  rating: number;
  date: string;
}
