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
    category: 'Web' | 'Design'
    featured: boolean
    createdAt: Date
}

// Função para buscar todos os projetos
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

// Função específica para buscar por categoria (Web ou Design)
/*export const getProjectsByCategory = async (category: 'WEB' | 'DESIGN') => {
    return await prisma.project.findMany({
      where: { category },
      orderBy: { createdAt: 'desc' }
    });
};*/