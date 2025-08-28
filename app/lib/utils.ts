import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function getBookingButtonText(): string {
  const array = [
    "Book Now",
    "Book Today",
    "Reserve Now",
    "Reserve Your Spot",
    "Schedule Now",
    "Schedule Today",
    "Get Started",
    "Get Booked",
    "Grab Your Slot",
    "Confirm Your Booking",
    "Confirm Your Spot",
    "Set Your Booking",
    "Book Your Appointment",
    "Book Your Slot",
    "Book Your Time",
    "Book Your Meeting",
    "Book Your Session",
    "Book Your Consult",
    "Get Your Appointment",
    "Get Your Booking",
    "Get Your Spot",
    "Get Your Time",
  ];

  return array[Math.floor(Math.random() * array.length)];
}


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}