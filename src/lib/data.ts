import { imageData } from "./imagedata";

// FAQ Data
export const faqInfo = {
  title: "FAQ",
  description: `Welcome to iCloud Wireless — your trusted mobile repair experts. We offer fast, reliable, and professional phone repair services with the convenience you deserve. Whether it’s a cracked screen, battery issue, or other device problem, our skilled technicians will get your phone working like new.`,
  highlights: [
    {
      icon: "clock",
      title: "Open Every Day | 10:30 AM – 8:00 PM",
      description: `We’re here for you Monday to Friday from 10:30 AM to 8:00 PM, Saturdays 11:00 AM to 8:00 PM, and Sundays 11:00 AM to 4:00 PM. Get your device repaired at your convenience.`,
    },
    {
      icon: "users",
      title: "Trusted & Experienced Technicians",
      description: `Our team has over 15 years of combined experience repairing mobile phones and tablets. All technicians are certified and handle your device with care and security.`,
    },
  ],
};

export const faqQuestions = [
  {
    question: "Q: What should I expect when I visit iCloud Wireless for a repair?",
    answer:
      "Expect a friendly and professional experience. Our technicians quickly assess your device and provide repair options with clear communication.",
  },
  {
    question: "Q: Do I need an appointment to get my phone repaired?",
    answer:
      "Walk-ins are welcome, but booking ahead can speed up your service.",
  },
  {
    question: "Q: How long do most repairs take?",
    answer: "Many repairs, like screen replacements or battery swaps, are completed the same day—often within an hour.",
  },
  {
    question: "Q: What types of devices do you repair?",
    answer:
      "We repair iPhones, Samsung phones, iPads, tablets, and many other popular smartphone and tablet brands.",
  },
  {
    question: "Q: Do you use original parts for repairs?",
    answer: "We use only genuine or high-quality replacement parts to ensure your device functions like new.",
  },
  {
    question: "Q: How do you protect my data during repair?",
    answer:
      "We do not access or copy your data at any point. Your device remains secure and private throughout the process.",
  },
];

// Devices data
export const devices: CategoryItem[] = [
  {
    id: "iphone",
    name: "Apple iPhone",
    image: imageData.iphoneWhite,
    subcategories: [
      {
        id: "iphone8-series",
        name: "iPhone 8 Series",
        subcategories: [
          { id: "iphone8", name: "iPhone 8" },
          { id: "iphone8plus", name: "iPhone 8 Plus" },
        ],
      },
      {
        id: "iphone9-series",
        name: "iPhone 9 Series",
        subcategories: [
          { id: "iphone9", name: "iPhone 9" },
          { id: "iphone9plus", name: "iPhone 9 Plus" },
        ],
      },
      // You can add more recent iPhone series like 10, 11, 12, etc.
    ],
  },
  {
    id: "ipad",
    name: "Apple iPad",
    image: imageData.ipadWhite,
    subcategories: [
      { id: "ipad-air", name: "iPad Air" },
      { id: "ipad-pro", name: "iPad Pro" },
    ],
  },
  {
    id: "watch",
    name: "Apple Watch",
    image: imageData.watchWhite,
    subcategories: [
      { id: "series6", name: "Series 6" },
      { id: "series7", name: "Series 7" },
    ],
  },
  {
    id: "samsung",
    name: "Samsung",
    image: imageData.samsungWhite,  // Make sure this image exists in your imageData
    subcategories: [
      { id: "galaxy-s21", name: "Galaxy S21" },
      { id: "galaxy-s20", name: "Galaxy S20" },
      { id: "galaxy-note20", name: "Galaxy Note 20" },
      // Add more Samsung models as needed
    ],
  },
  {
    id: "blackberry",
    name: "BlackBerry",
    image: imageData.blackberryWhite, // Make sure this image exists in your imageData
    subcategories: [
      { id: "blackberry-key2", name: "BlackBerry KEY2" },
      { id: "blackberry-motion", name: "BlackBerry Motion" },
      // Add more BlackBerry models if needed
    ],
  },
];


// Footer data
export const phoneSeries = [
  {
    title: "12 SERIES",
    models: ["iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12", "iPhone 12 Mini"],
  },
  {
    title: "11 SERIES",
    models: ["iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11"],
  },
  {
    title: "10 SERIES",
    models: ["iPhone Xs Max", "iPhone Xs", "iPhone Xr", "iPhone X"],
  },
  {
    title: "8 SERIES",
    models: ["iPhone 8 Plus", "iPhone 8"],
  },
  {
    title: "7 SERIES",
    models: ["iPhone 7 Plus", "iPhone 7"],
  },
  {
    title: "6 SERIES",
    models: ["iPhone 6s Plus", "iPhone 6s", "iPhone 6 Plus", "iPhone 6"],
  },
];

export const locations = [
  "9658 Plano RD, Suite 100, Dallas, TX 75238",
  "8702 Spring Valley Road, Suite D, Dallas, TX 75240 (Inside Valley Mart)",
  "Business: 214-436-7998",
  "Phone: 469-544-7447",
  "Email: itech@icloudwireless.com",
];

export const middleLinksLeft = ["HOME", "SF HEADQUARTERS", "MY ACCOUNT | LOGIN", "FAQ"];
export const middleLinksRight = ["SCHEDULE SERVICE", "HOW IT WORKS", "QUALITY STANDARDS", "CONTACT US"];

export const copyright = "© 2024 iCloud Wireless | All Rights Reserved";

export const covidNotice = "COVID-19 - METHODS & PROCEDURES - CONTACTLESS & CURBSIDE SERVICES";
