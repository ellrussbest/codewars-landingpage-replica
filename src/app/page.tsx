import { lazy } from "react";

const Header = lazy(() => import("@/src/app/components/header/Header"));
const Navbar = lazy(() => import("@/src/app/components/navigation/Navbar"));
const SectionOverview = lazy(() => import("@/src/app/components/sections/SectionOverview"));
const SectionCommunity = lazy(() => import("@/src/app/components/sections/SectionCommunity"));
const SectionFaq = lazy(() => import("@/src/app/components/sections/SectionFaq"));
const SectionLatest = lazy(() => import("@/src/app/components/sections/SectionLatest"));
const SectionQualified = lazy(() => import("@/src/app/components/sections/SectionQualified"));

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
