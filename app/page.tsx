import ComoTrabalho from "@/components/Sections/ComoTrabalho/ComoTrabalho";
import Freelancer from "@/components/Sections/Freelancer/Freelancer";
import Hero from "@/components/Sections/Hero/Hero";
import Project from "@/components/Sections/Projetos/Projects";
import Sobremim from "@/components/Sections/Sobremim/Sobremim";
import Stack from "@/components/Sections/Stack/Stack";
import Contato from "@/components/Sections/Contato/Contato"

import { filesText } from '@/lib/projects'
import TipoServico from "@/components/Sections/TipoServico/TipoServico";

export default function Home() {
  const allProjects = filesText();
  return (
    <>
      <Hero />
      <Stack />
      <Project initialProjects={allProjects}/>
      <ComoTrabalho />
      <TipoServico />
      <Freelancer />
      <Sobremim />
      <Contato />
    </>
  );
}
