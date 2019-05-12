/**
 * Created by raden on 2019/5/12.
 */
import {Spirte} from "../base/Spirte.js";
// 开始按钮
export class StartButton extends Spirte {
    constructor(){
        const image = Spirte.getImage('startButton');
        super(
            image,0,0,image.width,image.height,(window.innerWidth - image.width )/2,(window.innerHeight - image.width)/2,image.width,image.height
        );
    }
}