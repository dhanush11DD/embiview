import { Icon } from "@iconify/react";

const heroContent = {
  mainContent: "Effortless Living with Advanced Home Automation Solutions",
  content: "Enhance Your Comfort, Security, and Convenience",
};

const vision = {
  blueHead: "Experience the Future of Living",
  heading: "Discover Our Transformative Home Automation Vision",
  content:
    "Our mission is to enhance everyday living through advanced technology, offering innovative solutions that make your home smarter, safer, and more energy-efficient.",
  listContent: [
    "Customer Support and Community",
    "Security and Privacy",
    "Device Compatibility",
    "Features and Customization",
    "Integration Capabilities",
    "Scalability",
  ],
};

const lifeStyle = {
  blueHead: "Benefits & Features of Home Automation",
  heading:
    "Living place which is Safe, Secure, Convenient that reflects your Lifestyle.",
  icons: [
    {
      icon: <Icon icon="mdi:smart-home" className='mx-auto text-5xl text-white' />,
      title: "Smart Home",
    },
    {
      icon: <Icon icon="iconoir:voice" className='mx-auto text-5xl text-white' />,
      title: "Voice control",
    },
    {
      icon: <Icon icon="mdi:security-home" className='mx-auto text-5xl text-white' />,
      title: "Home security",
    },
    {
      icon: <Icon icon="mdi:home-theatre" className='mx-auto text-5xl text-white' />,
      title: "Home theatre",
    },
    {
      icon: <Icon icon="gg:smart-home-light" className='mx-auto text-5xl text-white' />,
      title: "Smart lighting",
    },
    {
      icon: <Icon icon="hugeicons:catalogue" className='mx-auto text-5xl text-white' />,
      title: "Product catalogue",
    },
    {
      icon: <Icon icon="ic:round-camera" className='mx-auto text-5xl text-white' />,
      title: "Camera Monitoring",
    },
    {
      icon: <Icon icon="radix-icons:update"  className='mx-auto text-5xl text-white' />,
      title: "OTA Updates",
    },
    {
      icon: <Icon icon="simple-icons:homeassistant" className='mx-auto text-5xl text-white' />,
      title: "Kitchen assist",
    },
    {
      icon: <Icon icon="arcticons:home-connect" className='mx-auto text-5xl text-white' />,
      title: "Home connect",
    },
  ],
};

const technology = {
  blueHead: "Integrated Technologies",
  heading: "Unlocking Seamless Connectivity",
  listContent: [
    {
      icon: <Icon icon="fluent:headphones-sound-wave-32-filled"  />,
      title: "Enhanced Entertainment",
      content:
        "Transform your space with AV integration for stunning sound and visuals.",
    },
    {
      icon: <Icon icon="bi:headset-vr"  />,
      title: "Virtual Reality Experience",
      content:
        "Enjoy VR integration for immersive gaming, exploration, and home travel.",
    },
    {
      icon: <Icon icon="oi:audio" />,
      title: "Personalized Solutions",
      content:
        "We tailor AV/VR setups to your lifestyle for unparalleled entertainment.",
    },
  ],
};

const benefits = {
  blueHead: "Our Features",
  heading: "Our Key Benefits",
  listContent: [
    {
      title: "Voice Control",
      listItems: [
        "Seamlessly integrate systems with Voice Assistant.",
        "Manage smart home devices with simple voice commands.",
        "Enjoy hands-free convenience and control.",
      ],
    },
    {
      title: "Cyber Security & Functional Safety",
      listItems: [
        "Secure your systems with camera-managed cybersecurity compliance.",
        "Ensure GDPR compliance with ISO functional safety standards.",
        "Safeguard personal data with ISO measures.",
      ],
    },
    {
      title: "Energy Consumption Dashboard",
      listItems: [
        "Monitor solar energy production and appliance electricity usage.",
        "Track total energy usage consumption.",
        "Make informed decisions for energy efficiency.",
      ],
    },
    
    {
      title: "AR/VR Gaming Integration",
      listItems: [
        "Dive into immersive gaming experiences.",
        "Elevate gameplay with interactive environments.",
        "Explore limitless entertainment possibilities and beyond",
      ],
    },
  ],
};

const homeExp = {
  blueHead: "Smart Home Technology",
  heading: "Personalize Your Smart Home Experience",
  listContent: [
    {
      icon: <Icon icon="solar:home-wifi-bold" />,
      title: "Home Appliances ",
      content:
        "Effortlessly oversee and optimize your home appliances for added convenience.",
    },
    {
      icon: <Icon icon="ic:round-queue-music"  />,
      title: "All Music System",
      content: "Unified control for an immersive audio experience",
    },
    {
      icon: <Icon icon="tabler:circuit-switch-closed" />,
      title: "Smart Electric Switch",
      content:
        "Effortlessly control your home's lighting and devices with intelligent automation.",
    },
    {
      icon: <Icon icon="ri:dashboard-2-line"  />,
      title: "Energy Consumption Dashboard",
      content:
        "Stay informed about your energy usage and make smart decisions for efficiency.",
    },
    {
      icon: <Icon icon="mdi:solar-energy-outline"  />,
      title: "Solar Energy",
      content:
        "Harness the power of the sun to fuel your home's energy needs efficiently.",
    },
    {
      icon: <Icon icon="hugeicons:tv-smart" />,
      title: "Smart TV",
      content:
        "Enhance your entertainment with a smart TV that adapts to your preferences.",
    },
  ],
};

const contactSec = {
  heading: "Ready to Transform Your Home ?",
  content:
    "Explore smart home benefits and Upgrade your living space with ease.",
};


export {
  heroContent,vision,lifeStyle,technology,benefits,homeExp,contactSec
};