/**
 *
 * @author 
 *
 */
class MainWindow extends eui.Component{
    private img:eui.Image;
    constructor() {
        super();
        this.skinName = "resource/components/gameLayout.exml";
        this.addEventListener(egret.Event.COMPLETE,this.onCreateComplete,this);
    }
    //创建完成函数回调
    private onCreateComplete(event: any) {
        this.removeEventListener(egret.Event.COMPLETE,this.onCreateComplete,this);
    }
    public childrenCreated() {
        super.childrenCreated();
        this.left = 0;
        this.right = 0;
        this.top = 0;
        this.bottom = 0;
    }
    
    public show():void{
    }
}
