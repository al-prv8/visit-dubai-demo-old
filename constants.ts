
import { NavItem, ChatMessage, ExperienceCard, FeatureItem, MembershipTier, Testimonial, FAQItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Concierge', href: '#hero' },
  { label: 'Benefits', href: '#features' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Membership', href: '#membership' },
  { label: 'FAQ', href: '#faq' },
];

export const INITIAL_CHAT_MESSAGES: ChatMessage[] = [
  {
    id: '1',
    sender: 'system',
    text: 'Good evening, Alexander. Your suite in Kyoto is confirmed. Would you like me to arrange the kaiseki dinner for 8:00 PM?',
    timestamp: 'Just now'
  },
  {
    id: '2',
    sender: 'user',
    text: 'Yes, please. Also, ensure the vintage sake pairing is included.',
    timestamp: '1 min ago'
  },
  {
    id: '3',
    sender: 'system',
    text: 'Consider it done. I have also alerted the sommelier to your preference.',
    timestamp: 'Now'
  }
];

export const EXPERIENCE_CARDS: ExperienceCard[] = [
  {
    id: '1',
    title: 'The Arctic Horizon',
    subtitle: 'Expedition',
    description: 'A private glass-igloo retreat under the Northern Lights, complete with personal chef and guided glacier tours.',
    image: 'https://picsum.photos/id/1036/800/600',
    tags: [{ label: 'Nature' }, { label: 'Private' }, { label: 'Adventure' }],
    ctaText: 'View Itinerary'
  },
  {
    id: '2',
    title: 'Kyoto Sanctuary',
    subtitle: 'Wellness',
    description: 'Exclusive access to a centuries-old Ryokan normally closed to the public, featuring private onsen and Zen gardens.',
    image: 'https://picsum.photos/id/1028/800/600',
    tags: [{ label: 'Culture' }, { label: 'Wellness' }, { label: 'Exclusive' }],
    ctaText: 'Request Access'
  },
  {
    id: '3',
    title: 'Monaco Grand Prix',
    subtitle: 'Event',
    description: 'Paddock Club access with a meet-and-greet opportunity with top drivers and a private yacht after-party.',
    image: 'https://picsum.photos/id/1076/800/600',
    tags: [{ label: 'Sports' }, { label: 'VIP' }, { label: 'Lifestyle' }],
    ctaText: 'Reserve Spot'
  },
  {
    id: '4',
    title: 'Galactic Viewing',
    subtitle: 'Space',
    description: 'Priority access to the next commercial launch viewing from a restricted VIP observation deck with astronaut meet-and-greet.',
    image: 'https://picsum.photos/id/1039/800/600',
    tags: [{ label: 'Future' }, { label: 'Space' }, { label: 'Once-in-a-lifetime' }],
    ctaText: 'Join Waitlist'
  },
  {
    id: '5',
    title: 'Tuscan Vintage',
    subtitle: 'Culinary',
    description: 'A helicopter tour of restricted vineyards in Tuscany followed by a private tasting of the 1982 vintage with the estate owner.',
    image: 'https://picsum.photos/id/1056/800/600',
    tags: [{ label: 'Wine' }, { label: 'Italy' }, { label: 'Gastronomy' }],
    ctaText: 'Savor Experience'
  },
  {
    id: '6',
    title: 'Raja Ampat Dive',
    subtitle: 'Marine',
    description: 'Chartered superyacht expedition to the most biodiverse marine region on Earth, guided by National Geographic photographers.',
    image: 'https://picsum.photos/id/1015/800/600',
    tags: [{ label: 'Ocean' }, { label: 'Photography' }, { label: 'Yacht' }],
    ctaText: 'Chart Course'
  }
];

export const FEATURES: FeatureItem[] = [
  {
    id: '1',
    title: 'Global Access',
    description: 'From sold-out galas in Paris to private islands in the Maldives, our network opens doors that remain closed to others.',
    icon: 'globe'
  },
  {
    id: '2',
    title: 'Hyper-Personalization',
    description: 'Our AI learns your preferences with every interaction, anticipating your needs before you voice them.',
    icon: 'sparkles'
  },
  {
    id: '3',
    title: 'Absolute Discretion',
    description: 'Bank-level encryption meets discrete lifestyle management. Your data and itinerary remain strictly confidential.',
    icon: 'shield'
  }
];

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: 'noir',
    name: 'Lumina Noir',
    price: '$2,500',
    period: '/quarter',
    description: 'Essential access to the Lumina platform and our digital AI concierge.',
    features: [
      '24/7 AI Concierge Access',
      'Global Hotel Perks',
      'Priority Restaurant Booking',
      'Curated City Guides'
    ],
    ctaText: 'Request Invitation',
    highlight: false
  },
  {
    id: 'gold',
    name: 'Lumina Gold',
    price: '$10,000',
    period: '/quarter',
    description: 'The pinnacle of service. Dedicated human lifestyle management for the ultra-elite.',
    features: [
      'Dedicated Lifestyle Manager',
      'Private Aviation Logistics',
      'Fashion Week & VIP Event Access',
      'Off-Market Real Estate',
      'All Noir Benefits'
    ],
    ctaText: 'Apply for Gold',
    highlight: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "I needed a table at Noma with 24 hours notice for a crucial client dinner. Lumina didn't just get the table; they arranged a meet-and-greet with the head chef.",
    author: "Jonathan S.",
    role: "Venture Capital Partner",
    location: "London"
  },
  {
    id: '2',
    quote: "The seamless integration between the AI response speed and the human team's execution is unlike anything I've experienced in 15 years of using concierge services.",
    author: "Elena R.",
    role: "Fashion Director",
    location: "Milan"
  },
  {
    id: '3',
    quote: "My entire family vacation to Patagonia was replanned mid-trip due to weather. Lumina handled private transfers and new lodges while I slept. Flawless.",
    author: "Marcus Chen",
    role: "Tech Entrepreneur",
    location: "San Francisco"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: '1',
    question: "How does the AI concierge compare to a human agent?",
    answer: "Our AI handles instant requests, logistics, and recommendations with zero latency, 24/7. For complex negotiations or high-touch events, it seamlessly hands off to your dedicated human lifestyle manager (Gold Tier)."
  },
  {
    id: '2',
    question: "Is there a vetting process for membership?",
    answer: "Yes. To maintain our service standards and exclusive partner relationships, we accept a limited number of members per quarter. The application focuses on your lifestyle needs and alignment with our community."
  },
  {
    id: '3',
    question: "Can I use Lumina for corporate travel?",
    answer: "Absolutely. Many of our members utilize Lumina for C-suite travel arrangements, client entertainment, and corporate retreat planning, ensuring the same level of luxury for business as for leisure."
  },
  {
    id: '4',
    question: "What makes your 'sold-out' access possible?",
    answer: "We hold pre-purchased inventory and maintain direct relationships with hospitality groups, event organizers, and private estate owners globally, bypassing public booking channels entirely."
  }
];
