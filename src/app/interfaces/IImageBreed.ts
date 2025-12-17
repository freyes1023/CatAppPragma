import { IBreed } from "./IBreed";

export interface IImageBreed {
id: string,
url: string,
breeds: IBreed[],
width:number,
height: number
}