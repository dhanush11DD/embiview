import { Icon } from "@iconify/react/dist/iconify.js";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import { MobileHeroProduct, Product_Hero } from "../../assets/img/products";

export default function HeroProduct() {
  return (
    <Section isBlack={true} className="lg:min-h-screen ">
      <HeroGradingTop />

      <HeroGradingBottom1 />
      <HeroGradingBottom2 />

      <Container className="lg:relative">
        {/* Content */}
        <div className="lg:w-6/12 h-full flex flex-col lg:text-start text-center">
          <h1 className="heading-xl lg:mb-8 md:mb-6 mb-3">
            Revolutionize Your Home Automation With Embedded Android Systems
          </h1>
          <p className="heading-md lg:mb-[56px] mb-12 text-light-text">
            Optimize, Manage, and Innovate Your Embedded Devices with Ease
          </p>
          {window.innerWidth > 1025 && (
            <button className="btn btn-outline flex gap-2 group self-start">
              <p>Explore More</p>
              <Icon
                icon="heroicons:arrow-up-16-solid"
                className="text-2xl rotate-45 group-hover:rotate-90 transition-all duration-75"
              />
            </button>
          )}
        </div>

        {/* Image */}
        <div className="lg:w-3/12 lg:block hidden">
          <div className="lg:w-[650px] lg:absolute top-1/2 right-0">
            <img src={Product_Hero} alt="android-link" />
          </div>
        </div>

        <div className="items-center justify-center mb-12 lg:hidden block">
          <img
            src={MobileHeroProduct}
            alt="android-link"
            className="w-full h-full object-cover"
          />
        </div>

        <button className="btn btn-outline gap-2 group self-center lg:hidden block">
          <p>Explore More</p>
          <Icon
            icon="heroicons:arrow-up-16-solid"
            className="text-2xl rotate-45 group-hover:rotate-90 transition-all duration-75"
          />
        </button>
      </Container>
    </Section>
  );
}

function HeroGradingTop() {
  return (
    <span
      className="absolute w-[344.006px] h-[172.083px] transform -rotate-[12.698deg] flex-shrink-0 top-2 left-8 lg:block hidden"
      style={{ fill: "#1F73F6", filter: "blur(138.36184692382812px)" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="680"
        height="452"
        viewBox="0 0 680 452"
        fill="none"
      >
        <g filter="url(#filter0_f_968_12108)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M207.708 -8.22194C248.759 -15.9199 272.711 7.1563 305.088 17.293C337.023 27.2914 392.73 25.8911 393.006 49.7924C393.286 73.9744 335.13 88.8242 306.164 110.318C283.947 126.804 275.908 150.018 245.451 159.284C212.81 169.215 181.369 162.573 151.925 157.243C114.983 150.555 65.5492 148.728 57.8168 125.319C49.9949 101.639 90.6577 76.2629 117.328 52.5022C143.375 29.2961 165.965 -0.394159 207.708 -8.22194Z"
            fill="#1F73F6"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_968_12108"
            x="-229.889"
            y="-296.489"
            width="909.62"
            height="747.621"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="143.362"
              result="effect1_foregroundBlur_968_12108"
            />
          </filter>
        </defs>
      </svg>
    </span>
  );
}

function HeroGradingBottom1() {
  return (
    <span
      className="absolute w-[483px] h-[374px] transform -rotate-[26.33deg] flex-shrink-0 top-1/3 right-1/2 lg:block hidden"
      style={{ fill: "#921774", filter: "blur(174px)" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="948"
        height="868"
        viewBox="0 0 948 868"
        fill="none"
      >
        <g filter="url(#filter0_f_968_8103)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M684.749 358.025C738.733 334.981 788.529 377.694 841.864 392.538C894.471 407.178 973.731 394.335 989.995 442.976C1006.45 492.188 932.591 532.869 905.162 581.849C884.123 619.418 887.96 668.151 850.269 692.489C809.873 718.573 760.205 710.681 714.283 705.104C656.665 698.106 584.292 703.248 557.623 656.948C530.645 610.111 572.335 551.124 594.954 497.938C617.046 445.992 629.856 381.457 684.749 358.025Z"
            fill="#921774"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_968_8103"
            x="0.837891"
            y="-196.664"
            width="1539.52"
            height="1455.4"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="274"
              result="effect1_foregroundBlur_968_8103"
            />
          </filter>
        </defs>
      </svg>
    </span>
  );
}

function HeroGradingBottom2() {
  return (
    <span
      className="absolute w-[483px] h-[374px] transform -rotate-[26.33deg] flex-shrink-0 top-1/2 right-1/2 lg:block hidden"
      style={{ fill: "#1F73F6", filter: "blur(174px)" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1037"
        height="844"
        viewBox="0 0 1037 844"
        fill="none"
      >
        <g filter="url(#filter0_f_968_8102)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M684.739 555.479C738.722 532.435 788.518 575.149 841.853 589.992C894.46 604.633 973.721 591.789 989.984 640.43C1006.44 689.642 932.58 730.323 905.151 779.304C884.113 816.873 887.949 865.605 850.258 889.943C809.862 916.027 760.194 908.135 714.272 902.558C656.654 895.56 584.281 900.703 557.612 854.402C530.634 807.566 572.324 748.579 594.943 695.392C617.035 643.446 629.845 578.912 684.739 555.479Z"
            fill="#1F73F6"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_968_8102"
            x="0.827148"
            y="0.790771"
            width="1539.52"
            height="1455.4"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="274"
              result="effect1_foregroundBlur_968_8102"
            />
          </filter>
        </defs>
      </svg>
    </span>
  );
}
