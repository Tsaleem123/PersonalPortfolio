
/**
 * Describes the layout of project components. 
 */
import { Project } from "./Project"
import * as MV from './MagicVariables';
export const Projects = () => {
  return (
    <section className = "Projects">
    <h1> Projects: </h1>
    <a href={MV.NoteTakerLink} target="_blank">
    <Project Title = {MV.NoteTakerTitle} Para = {MV.NoteTakerPara} Img = {MV.NoteTakerImg} TechList = {MV.NoteTakerList}/>
    </a>
    <a href={MV.RUCafeLink} target="_blank">
    <Project Title = {MV.RUCafeTitle} Para = {MV.RUCafePara} Img = {MV.RUCafeImg} TechList = {MV.RUCafechList}/>
    </a>
    <a href={MV.BooksAPILink} target="_blank">
    <Project Title = {MV.BooksAPITitle} Para = {MV.BooksAPIPara} Img = {MV.BooksAPIImg} TechList = {MV.BookAPITechList}/>
    </a>
    <a href={MV.CalcLink} target="_blank">
    <Project Title = {MV.CalcTitle} Para = {MV.CalcPara} Img = {MV.CalcImg} TechList = {MV.CalcTechList}/>
    </a>
    <a href={MV.POWLink} target="_blank">
    <Project Title = {MV.POWTitle} Para = {MV.POWPara} Img = {MV.POWImg} TechList = {MV.POWList}/>
    </a>
    <a href={MV.TTCLink} target="_blank">
    <Project Title = {MV.TTCTitle} Para = {MV.TTCPara} Img = {MV.TTCImg} TechList = {MV.TTCList}/>
    </a>
    </section>
  )
};
