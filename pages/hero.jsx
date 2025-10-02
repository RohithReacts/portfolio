import Image from "next/image";

export default function Hero() {
  return (
    <div id="home">
      <Image
        src="/images/office.jpg"
        alt="travel"
        width={1300}
        height={400}
        priority
        className="object-cover rounded-xl"
      />
    </div>
  );
}
