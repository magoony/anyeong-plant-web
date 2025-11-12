/**
 * Image paths
 * Just store the paths, use img() helper to get optimized URLs
 */

/**
 * Image paths - Simple and maintainable
 * Use with img() helper: img(IMAGES.banner01)
 */
export const IMAGES = {
  // Hero/Banners
  banner01: '/images/banner01.png',

  // Logos
  headerLogo: '/images/header_logo.png',
  headerLogoWhite: '/images/header_logo_white.png',

  // Team/About
  teamCare: '/images/team-care.png',
  philosophySection: '/images/philosophy_section.png',

  // Doctors
  doctor1: '/images/doctor1.png',
  doctor2: '/images/doctor2.png',
  doctor3: '/images/doctor3.png',

  // Treatments
  treatmentImplant: '/images/treatment-implant.jpg',
  treatmentAesthetic: '/images/treatment-aesthetic.jpg',
  treatmentGum: '/images/treatment-gum.jpg',
  treatmentGeneral: '/images/treatment-general.jpg',
  treatmentDetail: '/images/treatment-detail.jpg',

  // Space
  fontDesk: '/images/font_desk.png',
  spaceBrushingRoom: '/images/space/brushing-room.png',
  spaceClinicHallway: '/images/space/clinic-hallway.png',
  spaceFrontDesk: '/images/space/front-desk.png',
  spacePrivateTreatmentRoom: '/images/space/private-treatment-room.png',
  spaceWaitingLounge: '/images/space/waiting-lounge.png',
} as const;
