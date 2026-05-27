
/**
 * Describes the layout of project components. 
 */
import { Project } from "./Project"
import * as MV from './MagicVariables';
export const Projects = () => {
  return (
    <section className = "Projects">
    <h1> Projects: </h1>
    <a href={MV.GameInventoryLink} target="_blank">
    <Project Title = {MV.GameInventoryTitle} Para = {MV.GameInventoryPara} Img = {MV.GameInventoryImg} TechList = {MV.GameInventoryList}/>
    </a>
    <a href={MV.RUCafeLink} target="_blank">
    <Project Title = {MV.RUCafeTitle} Para = {MV.RUCafePara} Img = {MV.RUCafeImg} TechList = {MV.RUCafechList}/>
    </a>
    <a href={MV.POWLink} target="_blank">
    <Project Title = {MV.POWTitle} Para = {MV.POWPara} Img = {MV.POWImg} TechList = {MV.POWList}/>
    </a>
    </section>
  )
};
