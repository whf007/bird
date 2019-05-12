/**
 * Created by raden on 2019/5/12.
 */
    import {Pencil} from './Pencil.js';
import {Spirte} from '../base/Spirte.js';
export class DownPencil extends Pencil{
    constructor(top){
        const image = Spirte.getImage('pencilDown');
        super(image,top)
    }
    draw(){
        let gap = window.innerHeight / 5;
        this.y = this.top + gap;
        super.draw();
    }
}