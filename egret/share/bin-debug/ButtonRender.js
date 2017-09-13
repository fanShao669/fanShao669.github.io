var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TypeScript file
var ButtonRenderer = (function (_super) {
    __extends(ButtonRenderer, _super);
    function ButtonRenderer() {
        var _this = _super.call(this) || this;
        //自定义的 ItemRenderer
        _this.touchChildren = true;
        var bg = new eui.Image("resource/assets/Panel/border.png");
        _this.buttonDisplay = new eui.Button();
        _this.addChild(_this.buttonDisplay);
        return _this;
    }
    ButtonRenderer.prototype.dataChanged = function () {
        //数据改变时，会自动调用 dataChanged 这个方法
        //显示数据中的 button 值
        this.buttonDisplay.label = this.data.name;
    };
    return ButtonRenderer;
}(eui.ItemRenderer));
__reflect(ButtonRenderer.prototype, "ButtonRenderer");
