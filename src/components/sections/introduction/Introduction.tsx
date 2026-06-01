import IntroContent from "./IntroContent";
import Badges from "./Badges";
import ContactRow from "./ContactRow";

export default function Introduction() {
  return (
    <section id="introduction" className="intro">
      <IntroContent />
      <Badges/>
      <ContactRow />
    </section>
  );
}
