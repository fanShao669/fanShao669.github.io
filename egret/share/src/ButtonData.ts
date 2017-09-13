// TypeScript file
class ButtonData extends eui.Component {
    private image:eui.Image; 
    private gameGroup:eui.Group;
    private pokerArr:any[] = [];
    private pokerResult:any[] = [];
    private clockTime:eui.Label;
    private clockNum:number = 10;
    // 状态提示
    private stateTip:eui.Group;
    private tipText:eui.Label;
    // 卡牌索引
    private num:number = 0;
    // 发牌组
    private group:number = 0;
    // 结果组
    private resultGroup:number = 0;
    // 倒计时
    private clock:eui.Group;
    // 结果牌
    private result_poker1:eui.Group;
    private result_poker2:eui.Group;
    private result_poker3:eui.Group;
    public constructor() {
        super();
        this.addEventListener(eui.UIEvent.COMPLETE,this.onComplete,this);
        this.skinName = skins.gameLayout;
    }
    protected createChildren():void {
        this.left = 0;
        this.right = 0;
        this.top = 0;
        this.bottom = 0;
    }

    private onComplete():void{
        this.stateTip.visible = true; 
        this.tipText.text = "即将开始，请稍后";
        egret.setTimeout(function(){
            this.stateTip.visible = false; 
            this.createPoker();
        },this,2000);
        for(let t=0;t<3;t++){
            let pokerRe = this.gameGroup.getChildAt(2+t);
            console.log(pokerRe);
            this.pokerResult.push(pokerRe);
        }
        console.log(this.pokerResult);
    }

    private createPoker(){
        // 添加扑克牌
        for(let i=0;i<15;i++){
            let poker:egret.Bitmap = new egret.Bitmap(RES.getRes("poker_back_png"));
            poker.x = 375;
            poker.y = -200;
            poker.anchorOffsetX = 40;
            poker.anchorOffsetY = 55;
            // this.gameGroup.addChildAt(poker,1);
            this.gameGroup.addChild( poker );
            this.pokerArr.push(poker);          
        }
        // console.log(this.pokerArr);
        //创建一个计时器对象
        var groupTimer:egret.Timer = new egret.Timer(800,3);
        groupTimer.addEventListener(egret.TimerEvent.TIMER,this.groupTimerFunc,this);
        groupTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.groupTimerComFunc,this);
        groupTimer.start();
    }
    private groupTimerFunc(){
        var timer:egret.Timer = new egret.Timer(100,5);
        //注册事件侦听器
        timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);
        //开始计时
        timer.start();
        
        this.group += 1;
    }
    private groupTimerComFunc(){
        console.log("组计时结束");
    }
    private timerFunc(){
        // console.log("计时");
        if(this.group==1){
            var tw = egret.Tween.get( this.pokerArr[this.num] );
            tw.to( {x:64+30*(this.num%5),y:78,rotation:360}, 500 );
        }else if(this.group == 2 ){
            var tw = egret.Tween.get( this.pokerArr[this.num] );
            tw.to( {x:315+30*(this.num%5),y:78,rotation:360}, 500 );
        }else{
            var tw = egret.Tween.get( this.pokerArr[this.num] );
            tw.to( {x:566+30*(this.num%5),y:78,rotation:360}, 500 );
        }
        
        this.num += 1;
        // console.log(this.num);
    }
    private timerComFunc(){
        console.log("牌计时结束");
        if(this.num==15){
            var that = this;
            egret.setTimeout(function(){ 
                that.stateTip.visible = true;
                that.tipText.text = "开始下注";
                egret.setTimeout(function(){
                    that.stateTip.visible = false; 
                    that.clock.visible = true; 
                    that.gameGroup.setChildIndex(that.clock,21); 
                    var clockTimer:egret.Timer = new egret.Timer(1000,11);
                    //注册事件侦听器
                    clockTimer.addEventListener(egret.TimerEvent.TIMER,function(){
                        that.clockTime.text = String(that.clockNum); 
                        that.clockNum -= 1;
                    },this);
                    clockTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,function(){
                        that.showResult();
                        that.clock.visible = false;
                        // for(var i=0;i<15;i++){
                        //     that.gameGroup.removeChild(that.pokerArr[i]);
                        // }   
                    },that);
                    clockTimer.start();   
                },that,2000);                
            },this.gameGroup,500);
          
        }
    }
    // 揭牌
    private showResult(){
        var resultTimer:egret.Timer = new egret.Timer(1000,3);
        //注册事件侦听器
        resultTimer.addEventListener(egret.TimerEvent.TIMER,this.resultTimerFunc,this);
        resultTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.resultTimerComFunc,this);
        this.stateTip.visible = true; 
        this.tipText.text = "揭晓结果";
        egret.setTimeout(function(){
            this.stateTip.visible = false; 
            resultTimer.start();
        },this,2000);
    }
    private resultTimerFunc(){
        var pokerGroup = this.pokerResult[this.resultGroup].getChildAt(0);
        console.log(pokerGroup);
        pokerGroup.visible = true;
        this.gameGroup.setChildIndex(this.pokerResult[this.resultGroup],21);
        this.resultGroup += 1;
        
    }
    private resultTimerComFunc(){
        
    }
}