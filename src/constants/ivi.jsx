import { Icon } from "@iconify/react";
import { clusters, cockpits, displays, imxImg, npx, qualcomm, toradex, vehicles } from "../assets/ivi";

const heroContent = {
  mainContent: "Infotainment Revolution: Elevate Your Driving Experience",
  content: "Connected Journeys, Unmatched Performance",
};

const vision = {
    blueHead: "Experience the Future of Living",
    heading: "Discover Our Transformative Home Automation Vision",
    content: "The automotive industry's shift to software-defined vehicles is revolutionizing customer experience, vehicle functionality, and safety through advanced software innovation and expertise in development, integration, cybersecurity, and safety, positioning companies as technology leaders."
}

const digitalSec = [
    {
        img : cockpits,
        heading : "Digital Cockpits ",
        content : "Digital Cockpits integrate displays and functionalities, providing a comprehensive and interactive driving experience. They represent the evolution of infotainment systems into sophisticated digital interfaces.",
        listContent : ["Multimedia & Navigation","Advanced Infotainment","Personalization"]
    },
    {
        img : vehicles,
        heading : "Connected Vehicles",
        content : "Vehicle expectations now prioritize a connected, engaging experience. This shift drives our development of advanced Connected Vehicle systems, transforming Instrument Clusters, Digital Cockpits, and Infotainment systems into current realities.",
        listContent : ["Unified User Experience","Enhanced Driver Assistance","Cloud Integration"]
    },
    {
        img : displays,
        heading : "Head-Up Displays ",
        content : "Head-Up Displays (HUDs) present essential information directly in the driver's line of sight, enhancing safety and convenience by minimizing distraction. These advanced systems contribute to a more informed and focused driving experience.",
        listContent : ["Line-of-Sight Information","Enhanced Safety","Customizable UI"]
    },
    {
        img : clusters,
        heading : "Digital Instrument Clusters ",
        content : "Digital Instrument Clusters have replaced traditional analog gauges with dynamic, customizable digital displays. They enhance the driving experience by providing real-time data.",
        listContent : ["Enhance driver interaction","Enhanced Performance","Real-Time Operating System"]
    }
]

const technology = {
    blueHead: "Smart Home Technology",
    heading: "Personalize Your Smart Home Experience",
    listContent: [
      {
        icon: <Icon icon="mdi:multimedia"  />,
        title: "Multimedia",
        content:
          "High-quality audio and video deliver an immersive entertainment experience for all passengers.",
      },
      {
        icon: <Icon icon="ic:sharp-security" />,
        title: "Cyber Security",
        content:
          "Industry-leading protection for your vehicle's data, ensuring a safe and secure driving experience.",
      },
      {
        icon: <Icon icon="ic:round-update" />,
        title: "OTA Updates:",
        content:
          "Keep your infotainment system up-to-date with the latest features and security patches through over-the-air updates.",
      },
      {
        icon: <Icon icon= "carbon:application-web"  />,
        title: "System Applications",
        content:
          "A suite of tailored applications designed to enhance functionality and user experience.",
      },
      {
        icon: <Icon icon="ic:round-dashboard" />,
        title: "Board Bringup",
        content:
          "Complete initialization and testing of all hardware components, ensuring optimal performance.",
      },
      {
        icon: <Icon icon="solar:logout-3-bold" />,
        title: "OS Migration",
        content:"Effortless transitions between operating systems to maintain compatibility and performance.",
      }
    ],
  };

  const integration = {
    blueHead: "Supported Hardware",
    heading: "Embedded Android Solutions for Optimal Integration",
    listContent : [
        {
            img : npx,
            title : "NXP",
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
  }

  const contactSec = {
    heading: "Looking to elevate your device management capabilities?",
    content: "We invite you to join us and discover the future of device management through our innovative solutions."
};

  export {
    heroContent,
    vision,
    digitalSec,
    technology,
    integration,
    contactSec
  };