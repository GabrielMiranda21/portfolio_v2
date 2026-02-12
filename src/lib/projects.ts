import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const filesText = () => {
    const projectFolder = path.join(process.cwd(), 'src', 'content', 'projects');
    const files: string[] = fs.readdirSync(projectFolder);
    const newFile = files.map((file) => { 
        let metadata = fs.readFileSync(path.join(projectFolder, file), 'utf-8') 
        let {data, content} = matter(metadata)
        return { data, content }
    })

    return newFile
}

console.log(filesText())