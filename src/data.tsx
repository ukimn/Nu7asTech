import C from './assets/c.png'
import css from './assets/css.png'
import html from './assets/html.png'
import js from './assets/javascript.jpg'
import sass from './assets/sass.png'
import figma from './assets/figma.png'
import blender from './assets/blender.png'
import react from './assets/react.png'
import typescript from './assets/typescript.jpg'
import illustrator from './assets/illustorator.png'
import filmora from './assets/filmora.png'
import gimp from './assets/gimp.png'

interface DataInterface{
  id: number;
  imgPath: string;
  name: string;
  type: "Programming" | "Design";
}


export const Data: DataInterface[] = [
  {
    id: 1,
    imgPath: C,
    name: "C",
    type: "Programming"
  },
  {
    id: 2, 
    imgPath: figma,
    name: "Figma",
    type: "Design"
  },
  {
    id: 3,
    imgPath: css,
    name: "CSS",
    type: "Programming"
  },
  {
    id: 4,
    imgPath: html,
    name: "HTML",
    type: "Programming"
  },
  {
    id: 5,
    imgPath: js,
    name: "Javascript",
    type: "Programming"
  },
  {
    id: 6,
    imgPath: typescript,
    name: "Typescript",
    type: "Programming"
  },
  {
    id: 7,
    imgPath: sass,
    name: "Sass",
    type: "Programming"
  },
  {
    id: 8,
    imgPath: blender,
    name: "Blender",
    type: "Design"
  },
  {
    id: 9,
    imgPath: react, 
    name: "React",
    type: "Programming"
  },
  {
    id: 10,
    imgPath: illustrator,
    name: "Illustrator",
    type: "Design"
  },
  {
    id: 11, 
    imgPath: filmora,
    name: "Filmora",
    type: "Design"
  },
  {
    id: 12, 
    imgPath: gimp,
    name: "Gimp", 
    type: "Design"
  }

];
