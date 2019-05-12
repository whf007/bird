/**
 * Created by raden on 2019/5/12.
 */
import {Spirte} from "../base/Spirte.js";
import {Director} from "../Director.js";
export class Pencil extends Spirte{
    constructor(image,top){
        super(image,0,0,image.width,image.height,window.innerWidth,0,image.width,image.height);
        this.top = top;
    }
    draw(){
        this.x =  this.x - Director.getInstance().moveSpeed;
        super.draw(this.img,0,0,this.img.width,this.img.height,this.x,this.y,this.img.width,this.img.height);
    }
}