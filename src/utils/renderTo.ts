import Block from "./block.js";

export default function renderTo(query: string, block: Block) {
    const root: HTMLElement | null = document.querySelector(query);

    if (root === null) {
        throw new Error(`Элемента ${query} не существует`);
    }

    root.appendChild(block.getContent());
    return root;
}