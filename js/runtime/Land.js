/**
 * Created by raden on 2019/5/12.
 */
import {Spirte} from "../base/Spirte.js";
import {Director} from "../Director.js";
export class Land extends Spirte {
    constructor() {
        const image = Land.getImage('land');
        super(image, 0, 0, image.width, image.height, 0, window.innerHeight - image.height, image.width, image.height);
        this.landX = 0; // 水平座标的变换
        this.landSpeed = Director.getInstance().moveSpeed; // 速度

    }

    draw() {
        this.landX = this.landX + this.landSpeed;
        if(this.landX > (this.img.width - window.innerWidth)) {
            this.landX = 0;
        }
        super.draw(this.img,this.srcX,this.srcY,this.srcW,this.srcH,-this.landX,this.y,this.width,this.height);
    }

}