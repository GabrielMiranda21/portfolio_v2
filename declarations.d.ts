declare module "*.css" {
    const content: { [className: string]: string };
    export default content;
}

/**
 * Ei, toda vez que você vir um import de um arquivo .css, não se preocupe, eu já sei que ele é um arquivo de estilo
 * e não precisa ser validado como código TypeScript
**/ 