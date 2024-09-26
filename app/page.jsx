import Feed from "@components/Feed";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Hindustan's
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          {" "}
          Wheel Alignment and Tyres
        </span>
        <br />
        <span className="orange_gradient text-center">
          {" "}
          Sounds and Pendal Works
        </span>
      </h1>
      <p className="desc text-center">
        Wheel Alignment & Tyres: JS Complex, Mavinakoppa, Hosanagara-577418
        Sounds and Pendal Works: Jayanagara, Hosanagara-577418
      </p>

      {/* Feed Component */}
      <Feed />
    </section>
  );
}
