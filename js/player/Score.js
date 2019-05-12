/**
 * Created by raden on 2019/5/12.
 */
import {DataStore} from '../base/DataStore.js';
export class Score {
    constructor(){
        this.ctx = DataStore.getInstance().ctx;
        this.scoreNumber = 0;
        // canvas刷新速度快,所以控制加分，只加一次
        this.isScore = true;
    }
    draw() {
        this.ctx.font = '25px Arial';
        this.ctx.fillStyle = '#ffcbeb';
        this.ctx.fillText(
            this.scoreNumber,
            window.innerWidth / 2,//DataStore.getInstance().canvas.width / 2,
            window.innerHeight / 18,//DataStore.getInstance().canvas.height / 18,
            1000
        );
    }
}
