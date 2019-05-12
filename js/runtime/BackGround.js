/**
 *
 * Created by raden on 2019/5/12.
 */
    import {Spirte} from "../base/Spirte.js";
export class BackGround extends Spirte{
    constructor() {
        const image = BackGround.getImage('background');
        super(image,0,0,image.width,image.height,0,0,window.innerWidth,window.innerHeight);
    }
}