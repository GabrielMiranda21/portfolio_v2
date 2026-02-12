import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const filesText = () => {
    const projectFolder = path.join(process.cwd(), 'src', 'content', 'projects'); // Salva o caminho da pasta
    const files: string[] = fs.readdirSync(projectFolder); // Lista os arquivos que estão dentro da pasta que devolve ['projeto1.md', 'projeto2.md']
    const newFile = files.map((file) => { 
        let metadata = fs.readFileSync(path.join(projectFolder, file), 'utf-8') 
        let {data, content} = matter(metadata)
        return { data, content }
    }) // Pega o conteudo dos arquivos e transforma em texto

    return newFile
    /**
     * A váriavel projectFoldes me devolve o caminho, a váriavel files me devolve a lista de arquivos do caminho recebido pela váriavel projectFoldes
     * nesse contexto quando percore a váriavel files com o map ela me retorna um array de nomes de arquivos que são strings portanto se a cada interação ele me
     * tras o nome isso significa que ao usar o readFileSync passando a variavel files eu permito que seja pego o conteudo dentro dos arquivos interados pelo files
     */
}

console.log(filesText())