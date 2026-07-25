import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Difference from "@/components/home/Difference";
import Compare from "@/components/home/Compare";
import LegalIncluded from "@/components/home/LegalIncluded";
import Situations from "@/components/home/Situations";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Difference />
      <Compare />
      <LegalIncluded />
      <Situations />
      <CtaBanner />
    </>
  );
}
