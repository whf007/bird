/**
 * 初始化整个游戏精灵，作为游戏开始的入口
 * Created by raden on 2019/5/12.
 */
import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {Director} from "./js/Director.js";
import {BackGround} from "./js/runtime/BackGround.js";
import {Land} from "./js/runtime/Land.js";
import {Birds} from "./js/player/Birds.js";
import {Score} from "./js/player/Score.js";
import {StartButton} from "./js/player/StartButton.js";
import {DataStore} from "./js/base/DataStore.js";
export class Main{
    constructor(){
        this.canvas = wx.createCanvas();
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        this.director = Director.getInstance();
        const loader = ResourceLoader.create();
        loader.onLoaded(map =>this.onResourceFirstLoaded(map));
    }
    onResourceFirstLoaded(map) {
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        this.init();

    }
    init() {
        this.director.isGameOver = false; // 初始化游戏没有结束
        this.dataStore.put('background',BackGround);
        this.dataStore.put('land',Land)
        .put('pencils',[]).put('score',Score)
        .put('birds',Birds).put('startButton',StartButton);
        this.registerEvent();
        this.director.createPencil()
        this.director.run();

    }
    registerEvent(){
        // this.canvas.addEventListener('touchstart',e => {
        //     e.preventDefault();
        //     if(this.director.isGameOver){
        //         this.init();
        //     } else {
        //         this.director.birdsEvent();
        //     }
        // })
        wx.onTouchStart(()=>{
          if (this.director.isGameOver) {
            this.init();
          } else {
            this.director.birdsEvent();
          }
        })
    }
}