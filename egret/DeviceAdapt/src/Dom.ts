module test{
    export class DomElement{
        private _node:HTMLElement;
        private _rotation:number;

        public constructor(ele:HTMLElement){
            this._node = ele;
            this._rotation = 0;
        }

        public css(){

        }

        public transition(animate:any={},transition:number=1000){
            this._node.style.transition = transition+"ms";
            this._node.style["-webkit-transition"] = transition+"ms";

            if(animate.rotate==0||animate.rotate){
                var rotate = animate.rotate-this._rotation;
                //console.log(rotate);
                this._node.style.transform = "rotate("+rotate+"deg)";
                this._node.style["-webkit-transform"] = "rotate("+rotate+"deg)";
                this._rotation = rotate;
            }

        }

        public get node():HTMLElement{
            return this._node;
        }
    }

    export class Dom{
        private init(){
            //root.anchorX = root.anchorY = 0.5;
            window.onresize = this.resized.bind(this);
        }

        /**
         * ready
         */
        public checkready(){
            //console.log(this._readytask,document.readyState);
            if ( document.readyState === "complete" ) {
                this.readyed();

            } else {
                // Use the handy event callback
                document.addEventListener( "DOMContentLoaded", this.readyed.bind(this), false );
                // A fallback to window.onload, that will always work
                window.addEventListener( "load", this.readyed.bind(this), false );
            }
        }

        private readyed(){
            document.removeEventListener( "DOMContentLoaded", this.readyed, false );
            window.removeEventListener( "load", this.readyed, false );

            this.init();
            this._readytask = this.runtask(this._readytask);
        }


        private _readytask:any;
        public ready(callback:Function,thisArg?:any,...param){
            if(!this._readytask){this._readytask = [];}
            this._readytask.push({callback:callback,thisArg:thisArg,paramArr:param});
            this.checkready();
        }

        /**
         * resized
         */
        private resized(){
            this.runtask(this._resizetask);
        }
        private _resizetask:any;
        public resize(callback:Function,thisArg?:any,...param){
            if(!this._resizetask){this._resizetask = [];}
            this._resizetask.push({callback:callback,thisArg:thisArg,paramArr:param});
        }

        private runtask(task){
            if(task){
                for(var i=0;i<task.length;i++){
                    task[i].callback.apply(task[i].thisArg,task[i].paramArr);
                }
            }
            task = []
            return task;
        }

        public select(ele:HTMLElement):DomElement{
            return new DomElement(ele);
        }

        //instance mode
        private static _instance:Dom;
        public static get instance():Dom{
            if (Dom._instance == null) {
                Dom._instance = new Dom();
            }
            return Dom._instance;
        }
    }
    export var d$:Dom = Dom.instance;
}