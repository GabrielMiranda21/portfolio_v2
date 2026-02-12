import { DialogHTMLAttributes, useRef } from 'react';
import ReactMarkDown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface DetailsModalProps {
    title: string
    tags: string
    thumbnail: string
    content: string
}

//const infoProject: DetailsModalProps = {}

export default function Modal(){
    return (
        <dialog></dialog>
    )
}