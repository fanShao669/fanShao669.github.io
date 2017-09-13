var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GroupRect = (function (_super) {
    __extends(GroupRect, _super);
    function GroupRect() {
        var _this = _super.call(this) || this;
        _this._currentRow = 0;
        _this._currentBlackRectIndex = 0;
        _this.createRects();
        return _this;
    }
    GroupRect.prototype.createRects = function () {
        this._rects = [];
        for (var i = 0; i < 4; i++) {
            var rect = new Rect();
            this._rects.push(rect);
            rect.x = rect.width * i;
            this.addChild(rect);
            rect.addEventListener(egret.TouchEvent.TOUCH_END, this.onClickRect, this);
        }
    };
    GroupRect.prototype.onClickRect = function (evt) {
        evt.target.onRectClick();
        if (evt.target.type == RectType.NONCLICKABLE || this._currentRow != (Data.getRectRow() - 2)) {
            this.dispatchEventWith('gameOver');
        }
        else {
            this.dispatchEventWith('clickRight');
        }
    };
    GroupRect.prototype.createBlackRect = function () {
        this.init();
        var n = Math.random();
        if (n >= 0 && n < 0.25) {
            this._currentBlackRectIndex = 0;
        }
        else if (n >= 0.25 && n < 0.5) {
            this._currentBlackRectIndex = 1;
        }
        else if (n >= 0.5 && n < 0.75) {
            this._currentBlackRectIndex = 2;
        }
        else if (n >= 0.75 && n <= 1) {
            this._currentBlackRectIndex = 3;
        }
        this._rects[this._currentBlackRectIndex].type = RectType.CLICKABLE;
    };
    GroupRect.prototype.init = function () {
        for (var i = 0; i < 4; i++) {
            this._rects[i].type = RectType.NONCLICKABLE;
        }
    };
    GroupRect.prototype.move = function () {
        this._currentRow++;
        if (this._currentRow == Data.getRectRow()) {
            this._currentRow = 0;
            this.createBlackRect();
        }
        this.y = this._currentRow * Data.getRectWidth();
    };
    return GroupRect;
}(egret.Sprite));
__reflect(GroupRect.prototype, "GroupRect");
