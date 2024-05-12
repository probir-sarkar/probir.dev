import { LinkBadge } from "@/components/common/link-badge";
import ProjectSection from "@/components/home-page/project-section";
import SkillsSection from "@/components/home-page/skills-section";
import Skills from "@/components/home-page/skills-section";
import { SiteHeader } from "@/components/layouts/site-header";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <SiteHeader />
      <main className="grid items-center md:py-8 container max-w-3xl py-4 gap-12 pb-10 md:pb-12">
        <section className="prose prose-zinc dark:prose-invert">
          <p className="leading-loose">
            I am a full-stack developer passionate about building scalable and performant web applications using the
            MERN stack (MongoDB, Express, React and Node.js). I have experience in developing and deploying web
            applications using these technologies, as well as integrating them with other APIs and services.
          </p>
        </section>
        <SkillsSection />
        <ProjectSection />
      </main>
    </>
  );
};

export default Home;
