import { IMX, NXP, Qualcomm, Sticky1, Sticky2, Sticky3, Toradex } from "../assets/img/products";
import { imxImg, npx, qualcomm, toradex } from "../assets/ivi";

const heroContent = {
  mainContent:
    "Revolutionize Your Home Automation With Embedded Android Systems",
  content: "Optimize, Manage, and Innovate Your Embedded Devices with Ease ",
};

const nextGen = {
  blueHead: "Next-Generation Smart Systems",
  heading: "Android Integration in Home and Automotive",
  content:
    "Android OS streamlines smart device control with intuitive customization, efficient management, voice control, and robust security features in home environments. In automotive applications, Android OS integrates seamlessly to provide advanced navigation, entertainment, and connectivity services, elevating your driving experience with sophisticated features and seamless access.",
  listContent: [
    "Connectivity",
    "Entertainment Integration",
    "Advanced Navigation",
  ],
};

const productSections = [
  {
    heading: "Home Automation",
    content:
      "Explore our vision for transformative home automation, prioritizing advanced technology for everyday living. We focus on customer support, security, privacy, and seamless device compatibility, ensuring a safe, secure, and convenient home environment tailored to your lifestyle.",
    listContent: [
      "Remote Access and Control",
      "Automation and Scheduling",
      "Integration with Smart Devices",
    ],
  },
  {
    heading: "Automotive Infotainment",
    content:
      "Enhance your driving with Android OS-powered infotainment systems, offering seamless access to apps, advanced navigation, entertainment, and connectivity features for enhanced comfort and convenience on the road.",
    listContent: [
      "Digital Instrument Clusters",
      "Head Up Displays (HUD)",
      "Rear Seat Entertainment Systems (RSE)",
    ],
  },
  {
    heading: "Tailored Android OS Solutions",
    content:
      "We specialize in customizing Android operating systems to meet the unique requirements of diverse products and industries. Our automated solutions streamline the development and deployment of tailored Android ROMs, integrating features and industrial settings.",
    listContent: [
      "Customized Linux Kernel",
      "Enhanced Cybersecurity and Functional Safety",
      "HALs and Services",
    ],
  },
];

const content = [
  {
    title: "Home Automation",
    description:
      "Explore our vision for transformative home automation, prioritizing advanced technology for everyday living. We focus on customer support, security, privacy, and seamless device compatibility, ensuring a safe, secure, and convenient home environment tailored to your lifestyle.",
    points: [
      "Remote Access and Control",
      "Automation and Scheduling",
      "Integration with Smart Devices",
    ],
    mobileImage: Sticky1,
    image: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src={Sticky1}
          className="max-w-[300px] aspect-square"
          alt="linear board demo"
        />
      </div>
    ),
    button: "Smartify Now",
  },
  {
    title: "Automotive Infotainment",
    description:
      "Enhance your driving with Android OS-powered infotainment systems, offering seamless access to apps, advanced navigation, entertainment, and connectivity features for enhanced comfort and convenience on the road.",
    points: [
      "Digital Instrument Clusters",
      "Head Up Displays (HUD)",
      "Rear Seat Entertainment Systems (RSE)",
    ],
    mobileImage: Sticky2,
    image: (
      <div
        className="h-full w-full flex items-center justify-center text-white"
        style={{
          backgroundColor:
            "radial-gradient(50% 50% at 50% 50%, #4B3987 0%, #111A28 100%)",
        }}
      >
        <img
          src={Sticky2}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    button: "Explore More",
  },
  {
    title: "Tailored Android OS Solutions",
    description:
      "We specialize in customizing Android operating systems to meet the unique requirements of diverse products and industries. Our automated solutions streamline the development and deployment of tailored Android ROMs, integrating features and industrial settings.",
    points: [
      "Customized Linux Kernel",
      "Enhanced Cybersecurity & Functional Safety",
      "HALs and Services",
    ],
    mobileImage: Sticky3,
    image: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src={Sticky3}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    button: "Explore More",
  },
];

const customization = {
  blueHead: "Customization and Integration",
  heading: "OTA Updates and Device Management",
  listContent: [
    {
      title: "SCHEDULED UPDATES",
      content:
        "Updates can be scheduled for the entire device fleet to avoid operational disruptions.",
    },
    {
      title: "STAGED UPDATE ROLLOUT",
      content:
        "System updates are incrementally deployed to all Android devices to minimize malfunction risks.",
    },
    {
      title: "AUTOMATIC FALLBACK",
      content:
        "Ensures devices automatically revert to the last working state if an Android OTA update fails.",
    },
  ],
};

const services = {
  blueHead: "Our Services",
  heading: "Tech at Your Fingertips",
  listContent: [
    {
      icon: "Android",
      title: "Advanced Android Integration",
      content:
        "Embedded systems solutions with optimized Android OS integration.",
    },
    {
      icon: "OS",
      title: "Personalized Android OS",
      content:
        "Custom Android development for unique business needs and requirements.",
    },
    {
      icon: "Updates",
      title: "Reliable  Updates and Maintenance",
      content:
        "OS updates and maintenance for secure, up-to-date, and reliable devices.",
    },
    {
      icon: "Hardware",
      title: "Advanced Hardware Integration",
      content:
        "Hardware specialization for optimal device performance and integration.",
    },
  ],
};

const securityFeatures = {
  blueHead: "Device Management and Security Features",
  heading: "Advanced Features of Android OS for Industrial Applications",
  listContent: [
    {
      id: 1,
      icon: "ant-design:linux-outlined",
      title: "Kernel Enhancement ",
      content:
        "Enhance system performance with customized kernel optimizations.",
    },
    {
      id: 2,
      icon: "ion:hardware-chip",
      title: "Hardware Support Frameworks ",
      content:
        "Optimize HALs and services for seamless hardware integration & peak performance.",
    },
    {
      id: 3,
      icon: "mdi:security-lock",
      title: "Cyber Security Updates ",
      content:
        "Secure your devices with regular updates against vulnerabilities and threats.",
    },
    {
      id: 4,
      icon: "carbon:certificate-check",
      title: "Custom Certificates ",
      content: "Integrate custom certificates for enhanced security.",
    },
    {
      id: 5,
      icon: "academicons:open-access",
      title: "Root Access ",
      content:
        "Achieve full control with root access for system modifications and optimization.",
    },
    {
      id: 6,
      icon: "carbon:application-web",
      title: "System Applications ",
      content:
        "Develop custom system apps to enhance functionality and user experience.",
    },
    {
      id: 7,
      icon: "fluent:device-meeting-room-remote-28-regular",
      title: "Remote Screen Mirroring ",
      content:
        "Enable remote screen mirroring for device control from anywhere.",
    },
    {
      id: 8,
      icon: "ic:round-update",
      title: "Over-The-Air Client & Delta Updates ",
      content:
        "Use our OTA client for efficient updates, minimizing data usage with delta updates.",
    },
    {
      id: 9,
      icon: "streamline:user-protection-2",
      title: "Privacy Protection",
      content:
        "Protect user privacy with advanced data security and regulatory compliance.",
    },
  ],
};

const supportedHardware = {
  blueHead: "Supported Hardware",
  heading: "Embedded Android Solutions for Optimal Integration",
  listContent : [
    {
        img : npx,
        title : "NPX",
        content: "Robust compatibility with NxP platforms, delivering high reliability and performance for diverse applications."
    },
    {
        img : imxImg,
        title : "IMX",
        content: "Comprehensive support for i.MX hardware platforms, guaranteeing exceptional performance and dependability."
    },
    {
        img : toradex,
        title : "Toradex",
        content: "Integration with Toradex modules for flexible and scalable solutions."
    },
    {
        img : qualcomm,
        title : "Qualcomm",
        content: "Compatibility with Qualcomm chipsets for powerful and efficient infotainment systems."
    }
]
};

const faqs = {
  heading: "FAQs",
  listContent: [
    "Who is this service ideal for?",
    "Who is this service ideal for?",
    "Who is this service ideal for?",
    "Who is this service ideal for?",
    "Who is this service ideal for?",
    "Who is this service ideal for?",
  ],
};

const contactSec = {
  heading: "Start Your Custom OS Journey ",
  content:
    "Explore how we can tailor an Android OS solution to elevate your embedded systems today.",
};

const faq = {
  heading:'Frequently asked questions',
  content:'Explore our frequently asked questions to learn more about Embiview’s features and more.',
  query:[
    {
      heading:'What is EMBIVIEW and what services do you offer?',
      answer:'We specialize in providing custom embedded AOSP solutions tailored for embedded systems. Our services include Android OS integration, custom OS development, hardware optimization, security updates, and more. We focus on delivering high-performance, secure, and optimized operating systems to meet the specific needs of our clients. ',
       active:1
    },
    {
      heading:'How does EMBIVIEW ensure the safety & security of custom Android OS? ',
      answer:'We prioritize safety &security by implementing regular security updates, integrating custom certificates, and utilizing advanced security measures. Our custom Android OS solutions are designed to protect your data and systems from vulnerabilities, ensuring a secure operating environment for your devices.',
       active:2
    },
    {
      heading:'Can EMBIVIEW provide support for HAL layer customization?',
      answer:'Yes, We customize Hardware Abstraction Layers (HALs), optimize performance, and ensure seamless integration with your hardware components, resulting in an efficient and reliable system. ',
       active:3
    },
    {
      heading:'Can I integrate Neuros with other tools and platforms I currently use?',
      answer:'We customize Embedded AOSP solutions for Human-Machine Interface (HMI) and In-Vehicle Infotainment (IVI) applications offer intuitive, user-friendly interfaces and robust performance. Our expertise in HMI and IVI technology ensures that your applications are responsive, reliable, and enhance the overall user experience. ',
       active:4
    },
    {
      heading:`How does EMBIVIEW handle OS updates and maintenance?`,
      answer:'We provide seamless Over-The-Air (OTA) updates and delta updates to keep your systems current without significant downtime. We offer continuous support and regular maintenance to ensure your devices stay updated with the latest features and security patches, maintaining optimal performance.',
       active:5
    },
    {
      heading:'How does EMBIVIEW Provide support for kernel and hardware? ',
      answer:`We support kernel and hardware by offering custom Android builds optimized for specific devices, ensuring compatibility through validated kernels, driver support, and ongoing updates.`,
       active:6
    },
  ]
}


export {
  heroContent,
  customization,
  services,
  securityFeatures,
  supportedHardware,
  faqs,
  contactSec,
  content,
  faq
};