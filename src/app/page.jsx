import { Navbar } from "@/components/navbar/navbar";
import { Definition } from "../components/definition/definition";
import { Footer } from "../components/footer/footer";

export default function HeroSec() {
  return (
    <>
      <Navbar />
      <div className="heroTitleSec">
        <h1 className="heroTitle">Mine Your Ideas.</h1>
        <p className="heroPara">
          Your versatile note-taking companion. Craft, create, and unleash your
          ideas with ease!
        </p>
      </div>
      <div className="heroScreenshot">
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
}
