import Navbar from "@/src/app/components/navigation/Navbar";
import Header from "@/src/app/components/header/Header";
import SectionOverview from "@/src/app/components/sections/SectionOverview";
import SectionCommunity from "@/src/app/components/sections/SectionCommunity";
import SectionFaq from "@/src/app/components/sections/SectionFaq";
import SectionLatest from "@/src/app/components/sections/SectionLatest";
import SectionQualified from "@/src/app/components/sections/SectionQualified";

export default function Home() {
  return (
    <div id="page-wrapper">
      <Navbar />
      <main className="mt-[4.5rem] block">
        <Header />
      </main>
      <SectionOverview />
      <SectionCommunity />
      <SectionFaq />
      <SectionLatest />
      <SectionQualified />
    </div>
  );
}
