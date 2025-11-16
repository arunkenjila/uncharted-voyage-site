import React, { useEffect, useRef } from "react";
import "./WhyUs.css";

const whyUsCards = [
  {
    title: "No Third Party Mess",
    description:
      "100 percent in-house operations for all trips! No third parties involved, hence no fishy claims!",
    icon: "🌏",
  },
  {
    title: "Transparency and Security",
    description:
      "Real time monitoring of all trips by ground team! All routes and weather condition are accurately updated!",
    icon: "🛫",
  },
  {
    title: "Co-Travelers Filtering",
    description:
      "Multi-step filtering to bring only like minded people together! That's our key to have fuss free trips!",
    icon: "📞",
  },
  {
    title: "One Stop Hassle Free Expertise",
    description:
      "Comfortable stays, trained drives, hospitable staff and friendly trip leaders to put together that one memorable trip for you!",
    icon: "💰",
  },
];

const WhyUs: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="why-us">
      <h2 className="why-us-title">Why Uncharted Voyage?</h2>
      <div className="why-us-cards">
        {whyUsCards.map((card, idx) => (
          <div className="why-us-card" key={idx}>
            <div className="why-us-card-title">{card.title}</div>
            <div className="why-us-card-desc">{card.description}</div>
            <div className="why-us-card-icon-wrap">
              <span className="why-us-card-icon">{card.icon}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
