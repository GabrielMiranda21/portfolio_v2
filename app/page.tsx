import ComoTrabalho from "@/components/Sections/ComoTrabalho/ComoTrabalho";
import Freelancer from "@/components/Sections/Freelancer/Freelancer";
import Hero from "@/components/Sections/Hero/Hero";
import Project from "@/components/Sections/Projetos/Projects";
import Sobremim from "@/components/Sections/Sobremim/Sobremim";
import Stack from "@/components/Sections/Stack/Stack";
import Contato from "@/components/Sections/Contato/Contato"
import TipoServico from "@/components/Sections/TipoServico/TipoServico";

import { getProjects } from "@/lib/projects";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <Hero />
      <Stack />
      <Project initialProjects={projects}/>
      <ComoTrabalho />
      <TipoServico />
      <Freelancer />
      <Sobremim />
      <Contato />
    </>
  );
}
