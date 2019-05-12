/**
 * Created by raden on 2019/5/12.
 */
    import {Pencil} from './Pencil.js';
import {Spirte} from '../base/Spirte.js';
export class UpPencil extends Pencil{
    constructor(top){
        const image = Spirte.getImage('pencilUp');
        super(image,top);
    }
    draw(){
        this.y = this.top - this.height;
        super.draw();
    }
}