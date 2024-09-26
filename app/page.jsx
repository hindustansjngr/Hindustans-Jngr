import Feed from "@components/Feed";
import TypeWriter from "@components/TypeWriter";

export default function Home() {
  const messages = ["Wheel Alignment and Tyres", "Sounds and Pendal Works"];
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Hindustan's
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          {" "}
          <TypeWriter messages={messages} />
        </span>
      </h1>
      <p className="desc text-center">
        <b>Wheel Alignment & Tyres:</b> JS Complex, Mavinakoppa, Hosanagara-577418 <br />
        <b>Sounds and Pendal Works:</b> Jayanagara, Hosanagara-577418
      </p>

      {/* Feed Component */}
      <Feed />
    </section>
  );
}
