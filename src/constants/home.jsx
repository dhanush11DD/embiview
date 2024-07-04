import { DragonBoard, Ev, RbPi, healthcare, nxp, retail, rockPi, smartHome } from "../assets/home";

const heroContent = {
  mainContent: "Manage, update & personalize your Android device",
  content: "Discover Embedded Android Solutions with us ",
};

const creatingOs = {
  blueHead: "Creating OS of the Future ",
  heading: "Transformations Beyond Expectations with us",
  content:
    "Customized Android OS for home automation, embedded systems, industry, and vehicle infotainment, with reliable and efficient hardware management. we specialize in customizing Android OS solutions tailored to your hardware specifications and customer requirements.",
  gridContent: [
    { count: "99", symbols:"%", title: "System Uptime" },
    { count: "100", symbols:"+", title: "Supported Hardware" },
    { count: "50", symbols:"%", title: "Faster Deployment" },
    { count: "24", symbols:"/7", title: "Customer Support" },
  ],
};

const supportedHardware = {
  blueHead: "Supported Hardware",
  heading:
    "Seamless integration with comprehensive range of compatible devices.",
  content:"We specialize in guiding clients through embedded Android systems, ensuring seamless hardware compatibility and optimal performance. Our consultancy offers custom solutions development and ongoing support to maximize system efficiency and reliability.",
  gridContent: [
    {
      img : RbPi,
      content: "Raspberry Pi CM3 IO Board",
    },
    {
      img : rockPi,
      content: "Rock Pi 4",
    },
    {
      img : nxp,
      content: "NXP i.MX 6",
    },
    {
      img : DragonBoard,
      content: "DragonBoard 410c",
    },
  ],
};

const whatSets = {
  blueHead: "What sets us apart",
  heading: "Embracing Excellence with Embiview",
  listContent: [
    "End-to-end support ensures lasting client value from consultation to implementation.",
    "Tailored solutions for home automation, in-vehicle infotainment, and Android OS.",
    "Innovative solutions with AI integration and immersive experience",
    "User-centric design ensures usability, accessibility, and satisfaction.",
  ],
};

const features = {
  blueHead: "Our Features",
  heading: "Our Key Benefits",
  listContent: [
    {
      title: "Android Framework",
      content:
        "Develop robust Android frameworks for system and user applications. Enhance functionality and user experience with versatile solutions.",
    },
    {
      title: "OTA updates and automation ",
      content:
        "Upgrade your living space with hassle-free smart home automation for enhanced convenience, comfort, and efficiency.",
    },
    {
      title: "Linux Kernal",
      content:
        "Specializing in solutions, we provide drivers for camera, multimedia, and voice control features, ensuring seamless integration.",
    },
    {
      title: "Security and Safety",
      content:
        "Safeguard your systems with ISO 21434 cybersecurity and GDPR compliance, alongside ISO 26262 functional safety standards.",
    },
  ],
};

const specialize = {
  blueHead: "Industries we specialize in",
  heading: "Unlocking Potential across Industries",
  listContent: [
    {
      icon: smartHome,
      title: "Home Automation",
      content:
        "Revolutionizing living spaces with cutting-edge smart solutions that enhance convenience, security, and energy efficiency.",
    },
    {
      icon: healthcare,
      title: "Health Care",
      content:
        "Empowering healthcare professionals with transformative technologies to improve patient care and drive better outcomes. ",
    },
    {
      icon: retail,
      title: "Retail",
      content:
        "Transforming the retail landscape with innovative digital solutions to enhance customer experiences and drive business growth. ",
    },
    {
      icon: Ev,
      title: "Electric Vehicles",
      content:
        "Pioneering groundbreaking advancements in electric mobility to create sustainable and innovative transportation solutions for the future",
    },
  ],
};

const smartLiving = {
  blueHead: "Home Automation",
  heading: "Smart Living Made Simple",
  content:
    "Explore the future of home living with EMBIVIEW, where integrated technology and innovative solutions empower effortless control and customization for enhanced comfort and lifestyle",
  consten2: "Experience personalized automation that adapts to your preferences, creating a more comfortable living environment."
};

const contactSec = {
  heading: "Upgrade device efficiency with customized solutions with us",
    content:"",
};

export {
  heroContent,
  creatingOs,
  supportedHardware,
  whatSets,
  features,
  specialize,
  smartLiving,
  contactSec,
};