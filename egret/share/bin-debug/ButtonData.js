var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TypeScript file
var ButtonData = (function (_super) {
    __extends(ButtonData, _super);
    function ButtonData() {
        var _this = _super.call(this) || this;
        _this.pokerArr = [];
        _this.pokerResult = [];
        _this.clockNum = 10;
        // 卡牌索引
        _this.num = 0;
        // 发牌组
        _this.group = 0;
        // 结果组
        _this.resultGroup = 0;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.onComplete, _this);
        _this.skinName = skins.gameLayout;
        return _this;
    }
    ButtonData.prototype.createChildren = function () {
        this.left = 0;
        this.right = 0;
        this.top = 0;
        this.bottom = 0;
    };
    ButtonData.prototype.onComplete = function () {
        this.stateTip.visible = true;
        this.tipText.text = "即将开始，请稍后";
        egret.setTimeout(function () {
            this.stateTip.visible = false;
            this.createPoker();
        }, this, 2000);
        for (var t = 0; t < 3; t++) {
            var pokerRe = this.gameGroup.getChildAt(2 + t);
            console.log(pokerRe);
            this.pokerResult.push(pokerRe);
        }
        console.log(this.pokerResult);
    };
    ButtonData.prototype.createPoker = function () {
        // 添加扑克牌
        for (var i = 0; i < 15; i++) {
            var poker = new egret.Bitmap(RES.getRes("poker_back_png"));
            poker.x = 375;
            poker.y = -200;
            poker.anchorOffsetX = 40;
            poker.anchorOffsetY = 55;
            // this.gameGroup.addChildAt(poker,1);
            this.gameGroup.addChild(poker);
            this.pokerArr.push(poker);
        }
        // console.log(this.pokerArr);
        //创建一个计时器对象
        var groupTimer = new egret.Timer(800, 3);
        groupTimer.addEventListener(egret.TimerEvent.TIMER, this.groupTimerFunc, this);
        groupTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.groupTimerComFunc, this);
        groupTimer.start();
    };
    ButtonData.prototype.groupTimerFunc = function () {
        var timer = new egret.Timer(100, 5);
        //注册事件侦听器
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        //开始计时
        timer.start();
        this.group += 1;
    };
    ButtonData.prototype.groupTimerComFunc = function () {
        console.log("组计时结束");
    };
    ButtonData.prototype.timerFunc = function () {
        // console.log("计时");
        if (this.group == 1) {
            var tw = egret.Tween.get(this.pokerArr[this.num]);
            tw.to({ x: 64 + 30 * (this.num % 5), y: 78, rotation: 360 }, 500);
        }
        else if (this.group == 2) {
            var tw = egret.Tween.get(this.pokerArr[this.num]);
            tw.to({ x: 315 + 30 * (this.num % 5), y: 78, rotation: 360 }, 500);
        }
        else {
            var tw = egret.Tween.get(this.pokerArr[this.num]);
            tw.to({ x: 566 + 30 * (this.num % 5), y: 78, rotation: 360 }, 500);
        }
        this.num += 1;
        // console.log(this.num);
    };
    ButtonData.prototype.timerComFunc = function () {
        console.log("牌计时结束");
        if (this.num == 15) {
            var that = this;
            egret.setTimeout(function () {
                that.stateTip.visible = true;
                that.tipText.text = "开始下注";
                egret.setTimeout(function () {
                    that.stateTip.visible = false;
                    that.clock.visible = true;
                    that.gameGroup.setChildIndex(that.clock, 21);
                    var clockTimer = new egret.Timer(1000, 11);
                    //注册事件侦听器
                    clockTimer.addEventListener(egret.TimerEvent.TIMER, function () {
                        that.clockTime.text = String(that.clockNum);
                        that.clockNum -= 1;
                    }, this);
                    clockTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
                        that.showResult();
                        that.clock.visible = false;
                        // for(var i=0;i<15;i++){
                        //     that.gameGroup.removeChild(that.pokerArr[i]);
                        // }   
                    }, that);
                    clockTimer.start();
                }, that, 2000);
            }, this.gameGroup, 500);
        }
    };
    // 揭牌
    ButtonData.prototype.showResult = function () {
        var resultTimer = new egret.Timer(1000, 3);
        //注册事件侦听器
        resultTimer.addEventListener(egret.TimerEvent.TIMER, this.resultTimerFunc, this);
        resultTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.resultTimerComFunc, this);
        this.stateTip.visible = true;
        this.tipText.text = "揭晓结果";
        egret.setTimeout(function () {
            this.stateTip.visible = false;
            resultTimer.start();
        }, this, 2000);
    };
    ButtonData.prototype.resultTimerFunc = function () {
        var pokerGroup = this.pokerResult[this.resultGroup].getChildAt(0);
        console.log(pokerGroup);
        pokerGroup.visible = true;
        this.gameGroup.setChildIndex(this.pokerResult[this.resultGroup], 21);
        this.resultGroup += 1;
    };
    ButtonData.prototype.resultTimerComFunc = function () {
    };
    return ButtonData;
}(eui.Component));
__reflect(ButtonData.prototype, "ButtonData");
