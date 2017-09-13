var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *
 * @author
 *
 */
var MainWindow = (function (_super) {
    __extends(MainWindow, _super);
    function MainWindow() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/components/gameLayout.exml";
        _this.addEventListener(egret.Event.COMPLETE, _this.onCreateComplete, _this);
        return _this;
    }
    //创建完成函数回调
    MainWindow.prototype.onCreateComplete = function (event) {
        this.removeEventListener(egret.Event.COMPLETE, this.onCreateComplete, this);
    };
    MainWindow.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.left = 0;
        this.right = 0;
        this.top = 0;
        this.bottom = 0;
    };
    MainWindow.prototype.show = function () {
    };
    return MainWindow;
}(eui.Component));
__reflect(MainWindow.prototype, "MainWindow");
