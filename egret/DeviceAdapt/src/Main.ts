class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        console.info("%cGameperture","color:#1ac2ff;font-weight:bold;",
            "A Quick Game Devlope Template for Egret Engine!");
        console.info("gitHub:",'https://github.com/tommyZZM/gameperture-egret');
        client.setRender(320,480);
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.start,this);
    }

    private start(event: egret.Event) {
        egret.Profiler.getInstance().run();
        this.hackEgret()
        test.d$.checkready();
        test.d$.ready(()=>{
            this.onResize();
            test.d$.resize(()=>{
                this.onResize();
            });
        });

        var a = new egret.Sprite();
        a.width = a.height = 100;
        a.graphics.beginFill(0xffffff);
        a.graphics.drawRect(0,0,100,100);
        a.graphics.endFill();
        a.anchorX = a.anchorY = 0.5;
        test.canvasele.GamePosition.instance.lockPosition(a,0.5,0.5)
        a.touchEnabled = true;
        this.addChild(a);
        a.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBegin,this);
        a.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.onTouchEnd,this);
        a.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this);
    }

    protected onTouchBegin(e:egret.Event){
        //console.log('onTouchBegin');
        egret.Tween.get(e.target).to({scaleX:0.8,scaleY:0.8},200);
    }

    protected onTouchEnd(e:egret.Event){
        //console.log('onTouchEnd');
        egret.Tween.get(e.target).to({scaleX:1,scaleY:1},200);
    }

    private _contentstrategy:test.AutoOrient;
    private onResize(){
        var container = new egret.EqualToFrame();
        this._contentstrategy = new test.AutoOrient();
        var policy = new egret.ResolutionPolicy(container, this._contentstrategy);
        egret.StageDelegate.getInstance()._setResolutionPolicy(policy);
        stage().dispatchEventWith(egret.Event.RESIZE);
    }

    private hackEgret(){
        var relocationtouch = (x,y)=>{
            var tmp:number;
            switch (this._contentstrategy.orient){
                default :
                case 0:{
                    break;
                }
                case -90:{
                    tmp = x;
                    x = stageWidth()-y;
                    y = tmp;
                    break;
                }
                case 90:{
                    tmp = x;
                    x = y;
                    y = stageHeight()-tmp;
                    break;
                }
            }
            return {x:x,y:y}
        };
        implementMethod(context().touchContext, "onTouchBegan",
            (x:number, y:number, identifier:number)=>{
                var result = relocationtouch(x,y);
                x = result.x;
                y = result.y;
                context().touchContext["__origin__"]["onTouchBegan"](x,y,identifier)
            }
        );
        implementMethod(context().touchContext, "onTouchMove",
            (x:number, y:number, identifier:number)=>{
                var result = relocationtouch(x,y);
                x = result.x;
                y = result.y;
                context().touchContext["__origin__"]["onTouchMove"](x,y,identifier)
            }
        );
        implementMethod(context().touchContext, "onTouchEnd",
            (x:number, y:number, identifier:number)=>{
                var result = relocationtouch(x,y);
                x = result.x;
                y = result.y;
                context().touchContext["__origin__"]["onTouchEnd"](x,y,identifier)
            }
        );
    }
}


module client{
    var _renderWidth:number = 480;
    var _renderHeight:number = 800;
    export function setRender(width:number,height:number,offset:number = 1.26,free?){
        _renderWidth = width;
        _renderHeight = height;
        if(!free){
            orient = width>height?Orient.Horizontal:Orient.Vertical;
            switch (orient){
                case Orient.Horizontal:{
                    _renderWidth = width*offset;
                    break;
                }
                case Orient.Vertical:{
                    _renderHeight = height*offset;
                    break;
                }
            }
            //orient = Orient.Free;
        }
    }

    export function renderWidth():number{
        return _renderWidth
    }
    export function renderHeight():number{
        return _renderHeight
    }
    export function renderSize(){
        return renderWidth()/renderHeight()
    }

    export var orient:Orient = Orient.Free;

    export enum Orient{
        Horizontal=1,
        Vertical=2,
        Free=0
    }

    export function width():number{
        var result;
        if (document.documentElement.clientWidth)
        {
            result= document.documentElement.clientWidth;
        }else{
            result= window.innerWidth;
        }

        return result;
    }

    export function height():number{
        var result;
        if (document.documentElement.clientHeight) {
            result= document.documentElement.clientHeight;
        }else{
            result= window.innerHeight;
        }

        return result;
    }

    export function size(){
        return client.width()/client.height()
    }

    export function perfectSize(){
        return _renderHeight/_renderWidth;
    }
}

module test {
    //游戏元素定位系统
    export module canvasele {
        export class GamePosition {
            private _displayobjpool:Dict;
            public constructor(){
                this._displayobjpool = new Dict();
                stage().addEventListener(egret.Event.RESIZE,this.onResize,this);
            }

            public onResize(){
                this._displayobjpool.forEach((value)=>{
                    value.obj.x = stageWidth(value.posx);
                    value.obj.y = stageHeight(value.posy);
                });
                //console.log(this._displayobjpool);
            }

            public lockPosition(target:egret.DisplayObject,posx:number,posy:number){
                this._displayobjpool.set(target.hashCode,{obj:target,posx:posx,posy:posy});
                target.x = stageWidth(posx);
                target.y = stageHeight(posy);
            }

            public unlockPosition(target:egret.DisplayObject){
                this._displayobjpool.delete(target.hashCode)
            }

            private static _instance:GamePosition;
            public static get instance():GamePosition{
                if (GamePosition._instance == null) {
                    GamePosition._instance = new GamePosition();
                }
                return GamePosition._instance;
            }
        }

    }
}

function context():egret.MainContext{
    return egret.MainContext.instance
}

function stage():egret.Stage{
    return egret.MainContext.instance.stage;
}

function stageWidth(multiple:number=1):number
{
    return egret.MainContext.instance.stage.stageWidth*multiple;
}

function stageHeight(multiple:number=1):number
{
    return egret.MainContext.instance.stage.stageHeight*multiple;
}


function egret_canvas_container():HTMLElement{
    var container = document.getElementById(egret.StageDelegate.canvas_div_name);
    return container;
}

function egret_canvas():HTMLCanvasElement{
    var canvas = egret_canvas_container().getElementsByTagName("canvas")[0];
    return canvas;
}


function implementMethod(thisArg:any,method:string,fn:Function,forceOverride:boolean=true){
    if(fn && method!='__class__'){
        if(thisArg[method]){
            if(!forceOverride){
                console.warn(method+"() already exist in "+thisArg._name+" use forceOverride and try?");
                return;
            }
            if(!thisArg["__origin__"])thisArg["__origin__"]={};
            thisArg["__origin__"][method] = thisArg[method].bind(thisArg);
        }
        thisArg['__proto__'][method] = fn;
    }
}