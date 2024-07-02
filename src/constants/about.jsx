import { Icon } from "@iconify/react";
import { missionImg, team, visionImg } from "../assets/about-us";

const heroContent = {
  mainContent: "Simplifying Android Device Management for the Modern Business",
  content:
    "Effortless updates, real-time flow—innovate your home and on-the-go",
};

const aboutUs = {
  blueHead: "About Us",
  heading: "Our Story",
  content:
    "Experience seamless integration of smart devices for enhanced home automation and automotive infotainment with regular updates and effortless over-the-air support.",
  listContent: [
    {
      title: "Home Automation",
      content:
        "Integrates smart devices for lighting, entertainment, security, and vehicles.",
    },
    {
      title: "Automotive Infotainment",
      content:
        "Develops advanced in-car entertainment and home control via vehicle systems.",
    },
    {
      title: "Security Updates",
      content:
        "Provides regular updates to enhance security in home and automotive systems.",
    },
    {
      title: "OTA Updates",
      content:
        "Supports over-the-air updates for both home and automotive systems to stay current.",
    },
  ],
};

const vision = [
  {
    img: visionImg,
    title: "Our Vision",
    content1:
      "Our vision is to become the leading provider of Android-based management solutions for industrial and enterprise environments. We aim to revolutionize how businesses manage and maintain their devices, driving efficiency, security, and innovation across various sectors.",
    content2:
      "With regular updates and over-the-air capabilities, we ensure your systems stay current and optimized, offering a connected living experience that evolves with you.",
  },
  {
    img: missionImg,
    title: "Our Mission",
    content1:
      "Our mission is to empower businesses by providing a robust and flexible platform that simplifies the management of Android OS for industrial and enterprise use. We strive to deliver top-notch solutions that enhance productivity, ensure security, and foster continuous innovation.",
    content2:
      "Through our commitment to excellence and relentless pursuit of innovation, we aim to set new standards in device management and operational efficiency.",
  },
];

const connecting = {
  blueHead: "Why Us",
  heading: "Connecting Your World: From Home to Car, Securely and Efficiently.",
  listContent: [
    {
      icon: (
        <Icon icon="ri:dashboard-2-line" className="text-4xl" />
      ),
      title: "Energy Consumption Dashboard",
      content:
        "Monitor and manage energy efficiently with our intuitive dashboard. Gain insights to reduce costs and enhance sustainability efforts.",
    },
    {
      icon: <Icon icon="mdi:car-electric" className="text-4xl" />,
      title: "Unified Management",
      content:
        "Control devices from one centralized user-friendly interface, simplifying updates, monitoring, and maintenance.",
    },
    {
      icon: <Icon icon="iconoir:voice" className="text-4xl" />,
      title: "Voice Control and AI Integration",
      content:
        "Enable seamless hands-free control & AI-driven automation through voice integration, enhancing convenience to manage your smart devices.",
    },
    {
      icon: <Icon icon="material-symbols-light:view-in-ar" className="text-4xl" />,
      title: "AR/VR Solutions",
      content:
        "Develop cutting-edge AR/VR solutions to significantly elevate user experiences and engagement.",
    },
  ],
};

const outTeams = {
    blueHead: "Our Team",
    heading: "Meet the Minds of Embiview",
    listContent: [team,team,team,team,team,team,team]
}

const contactSec = {
    heading: "Looking to elevate your device management capabilities?",
    content: "We invite you to join us and discover the future of device management through our innovative solutions."
};

export {
  heroContent,
  aboutUs,
  vision,
  connecting,
  outTeams,
  contactSec
};