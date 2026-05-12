import { prisma } from './prisma';

// Você pode exportar este tipo para usar nos seus componentes
export interface ProjectProps {
    id: string
    title: string
    description: string
    techStack: string[]
    thumbnail: string | null
    repoUrl: string | null
    liveUrl: string | null
    content: string | null
    category: 'Web' | 'Design'
    featured: boolean
    createdAt: Date
}

export const getProjects = async () => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return projects;
  } catch (error) {
    console.error("Erro ao buscar projetos:", error);
    return [];
  }
};