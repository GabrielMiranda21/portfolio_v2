import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ProjectProps {
    data: {
        title: string
        description: string
        tags: string[]
        img: string
        type: string
    }
    content: string
}

export const filesText= (): ProjectProps[] => {
    const projectFolder = path.join(process.cwd(), 'src', 'content', 'projects');
    const files: string[] = fs.readdirSync(projectFolder);
    const newFile = files.map((file) => { 
        let metadata = fs.readFileSync(path.join(projectFolder, file), 'utf-8') 
        let {data, content} = matter(metadata)
        return { data, content } as ProjectProps
    })

    return newFile;
}