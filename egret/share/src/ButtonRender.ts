// TypeScript file
class ButtonRenderer extends eui.ItemRenderer {
    private buttonDisplay:eui.Button;
    public constructor(){
        super();
        //自定义的 ItemRenderer
        this.touchChildren = true;
        var bg = new eui.Image("resource/assets/Panel/border.png");
        this.buttonDisplay = new eui.Button();
        this.addChild( this.buttonDisplay );
    }
    protected dataChanged():void{
        //数据改变时，会自动调用 dataChanged 这个方法
        //显示数据中的 button 值
        this.buttonDisplay.label = this.data.name;
    }
}