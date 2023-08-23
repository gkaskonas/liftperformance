export function getBookingButtonText(): string {
    const array = [
        'Book Now',
        'Book Today',
        'Book Free Consult',
        'Reserve Now',
        'Reserve Your Spot',
        'Schedule Now',
        'Schedule Today',
        'Secure Your Booking',
        'Secure Your Spot',
        'Get Started',
        'Get Booked',
        'Grab Your Slot',
        'Lock in Your Appointment',
        'Confirm Your Booking',
        'Confirm Your Spot',
        'Set Your Appointment',
        'Set Your Booking',
        'Request Your Reservation',
        'Request Your Appointment',
        'Reserve Your Free Consultation',
        'Book Your Appointment',
        'Book Your Slot',
        'Book Your Time',
        'Book Your Meeting',
        'Book Your Session',
        'Book Your Consultation',
        'Book Your Free Consultation',
        'Get Your Appointment',
        'Get Your Booking',
        'Get Your Spot',
        'Get Your Time'
      ];
      
    return array[Math.floor(Math.random()*array.length)];
}