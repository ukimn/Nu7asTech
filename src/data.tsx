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
}


export const Data: DataInterface[] = [
  {
    id: 1,
    imgPath: C,
    name: "C"
  },
  {
    id: 2, 
    imgPath: figma,
    name: "Figma"
  },
  {
    id: 3,
    imgPath: css,
    name: "CSS"
  },
  {
    id: 4,
    imgPath: html,
    name: "HTML"
  },
  {
    id: 5,
    imgPath: js,
    name: "Javascript"
  },
  {
    id: 6,
    imgPath: typescript,
    name: "Typescript"
  },
  {
    id: 7,
    imgPath: sass,
    name: "Sass"
  },
  {
    id: 8,
    imgPath: blender,
    name: "Blender"
  },
  {
    id: 9,
    imgPath: react, 
    name: "React"
  },
  {
    id: 10,
    imgPath: illustrator,
    name: "Illustrator"
  },
  {
    id: 11, 
    imgPath: filmora,
    name: "Filmora"
  },
  {
    id: 12, 
    imgPath: gimp,
    name: "Gimp"
  }

];
