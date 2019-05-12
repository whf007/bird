/**
 * Created by raden on 2019/5/12.
 */
// 精灵的积累，负责初始化精灵加载 的资源和大小位置
import {DataStore} from './DataStore.js';
export class Spirte{
    constructor(
    img = null,
    srcX =0,
    srcY =0 ,
    srcW =0,
    srcH=0,
    x= 0,
    y=0,
     width=0,
     height=0
    ) {
        this.dataStore = DataStore.getInstance();
        this.ctx = this.dataStore.ctx;
        this.img = img;
        this.srcX = srcX;
        this.srcY = srcY;
        this.srcW = srcW;
        this.srcH = srcH;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw(img = this.img,
         srcX = this.srcX,
         srcY = this.srcY,
         srcW = this.srcW,
         srcH = this.srcH,
         x = this.x,
         y = this.y,
         width = this.width,
         height = this.height) {
        this.ctx.drawImage(
            img,
            srcX,
            srcY,
            srcW,
            srcH,
            x,
            y,
            width,
            height
        );
    }
    static getImage(key){
        return DataStore.getInstance().res.get(key);
    }
}