import '../src/styles/main.css';

import { ISiteBlocks } from "./spec";

const initialBlocks: ISiteBlocks = [
    {
        type: "title",
        value: "Hello World"
    },
    {
        type: "text",
        value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ut?"
    },
    {
        type: "column",
        value: [
            "123",
            "456",
            "789"
        ]
    }
]

const site = document.querySelector("#site");

for (const block of initialBlocks) {
    console.log(block);
}