import Application from "@/components/home/Application";
import Designdecisions from "@/components/home/Designdecisions";
import Hero from "@/components/home/Hero";
import Manufacturing from "@/components/home/Manufacturing";
import Motordesigns from "@/components/home/Motordesigns";
import Solder from "@/components/home/Solder";
import Solderless from "@/components/home/Solderless";
import Technology from "@/components/home/Technology";
import Tooling from "@/components/home/Tooling";

export default function Home() {
  return (
    <>
      <Hero />
      <Manufacturing />
      <Solder />
      <Solderless />
      <Technology />
      <Tooling />
      <Motordesigns />
      <Application />
      <Designdecisions />
    </>
  );
}
