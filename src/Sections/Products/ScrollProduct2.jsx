import { Icon } from "@iconify/react/dist/iconify.js";
import Container from "../../layout/Container";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { content } from "../../constants/products";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProduct() {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    const cardLength = content.length;
    const cardsBreakpoints = content.map((_, index) => index / (cardLength - 1));

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${window.innerHeight * (cardLength - 1)}`,
      scrub: true,
      pin: imageRef.current,
      onUpdate: (self) => {
        const scrollProgress = self.progress;
        const closestBreakpointIndex = cardsBreakpoints.reduce(
          (acc, breakpoint, index) => {
            const distance = Math.abs(scrollProgress - breakpoint);
            if (distance < Math.abs(scrollProgress - cardsBreakpoints[acc])) {
              return index;
            }
            return acc;
          },
          0
        );
        setActiveCard(closestBreakpointIndex);
      },
    });

    return () => scrollTriggerInstance.kill();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".content-item",
      { opacity: 0 },
      { opacity: 1, stagger: 0.3, duration: 1 }
    );
  }, [activeCard]);

  return (
    <div className="bg-secondary min-h-screen" ref={containerRef}>
      <Container className="flex justify-center items-start">
        <div
          ref={imageRef}
          className="hidden lg:block w-[500px] aspect-square sticky top-20 rounded-2xl border-[1px] border-light-text overflow-hidden"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #4B3987 0%, #111A28 100%)",
          }}
        >
          {content[activeCard].image ?? null}
        </div>
        <div className="lg:max-w-xl w-full mt-20 lg:mt-0 lg:ml-10" ref={textContainerRef}>
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className={`content-item ${activeCard === index ? "block" : "hidden"}`}
            >
              <h2
                className={`heading-lg text-white ${
                  activeCard === index ? "opacity-1" : "opacity-30"
                }`}
              >
                {item.title}
              </h2>
              <div className="mt-3 pl-6 border-l border-[#4E4D4F]">
                <p
                  className={`content-2 text-light-text ${
                    activeCard === index ? "opacity-1" : "opacity-30"
                  }`}
                >
                  {item.description}
                </p>
                <ul className="list-none mt-3 text-white">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-center content-2">
                      <Icon
                        icon="mdi:check-bold"
                        className="bg-blue-500 rounded-full p-1 mr-2"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="btn btn-outline lg:mt-8">
                {item.button}
              </button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
