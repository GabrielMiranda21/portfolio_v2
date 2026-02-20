import ComoTrabalho from "@/components/Sections/ComoTrabalho/ComoTrabalho";
import Hero from "@/components/Sections/Hero/Hero";
import Project from "@/components/Sections/Projetos/Projects";
import Stack from "@/components/Sections/Stack/Stack";

import { filesText } from '@/lib/projects'

export default function Home() {
  const allProjects = filesText();
  return (
    <>
      <Hero />
      <Stack />
      <Project initialProjects={allProjects}/>
      <ComoTrabalho />
    </>
  );
}
