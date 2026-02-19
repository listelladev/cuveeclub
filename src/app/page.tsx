import HomeCard from "@/components/sections/HomeCard";

const services = [
  {
    title: "Corporate and Personal\nWine Tastings Events",
    imageSrc: "/corporate-personal-home.png",
    href: "/corporate-wine-tastings",
  },
  {
    title: "Restaurant Consulting",
    imageSrc: "/restraurant-consulting-home.png",
    href: "/restaurant-consulting",
  },
  {
    title: "Sommelier / Maitre\nd'Hotel At Home",
    imageSrc: "/sommelier-home.png",
    href: "/sommelier-at-home",
  },
];

export default function Home() {
  return (
    <main
      className="h-dvh flex flex-col lg:flex-row"
      data-header-theme="light"
    >
      {services.map((service) => (
        <HomeCard key={service.href} {...service} />
      ))}
    </main>
  );
}
