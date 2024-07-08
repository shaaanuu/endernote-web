import { Definition } from "../../components/definition/definition";
import Footer from "../../components/footer/footer";
import "./hero_section.scss";

export const HeroSec = () => {
  return (
    <>
      <div className="hero-title-sec">
        <h1 className="hero-title">Mine Your Ideas.</h1>
        <p className="hero-para">
          Your versatile note-taking companion. Craft, create, and unleash your
          ideas with ease!
        </p>
      </div>
      <div className="hero-screenshot">
        <img
          src="https://obsidian.md/images/screenshot-1.0-hero-combo.png"
          alt="screenshot"
        />
      </div>
      <div className="definitions">
        <Definition
          title={"Your thoughts, your fortress:"}
          description={
            "EnderNote securely stores your notes on your device, ensuring quick access anywhere, even offline. Your ideas remain protected."
          }
        />
        <Definition
          title={"Forge your unique workspace:"}
          description={
            "Explore a vast array of plugins and themes with EnderNote, customizing it to match your crafting style and creativity."
          }
        />
        <Definition
          title={"Preserve knowledge, break free:"}
          description={
            "EnderNote embraces open, non-proprietary formats, ensuring your data's freedom and longevity for the adventures ahead."
          }
        />
      </div>
      <Footer />
    </>
  );
};
