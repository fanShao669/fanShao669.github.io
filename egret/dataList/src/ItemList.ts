class ItemList extends eui.Group {
    public constructor() {
        super();
    }
    protected createChildren():void {
        //先创建一个数组
		var dataJson:Array<Object> = [
            {
                cardNoShow:'K',
                cardColor:'1'
            },
            {
                cardNoShow:'A',
                cardColor:'1'
            },
            {
                cardNoShow:'J',
                cardColor:'1'
            },
            {
                cardNoShow:'9',
                cardColor:'1'
            },
            {
                cardNoShow:'10',
                cardColor:'1'
            }
        ];
        //用ArrayCollection包装
        var myCollection:eui.ArrayCollection = new eui.ArrayCollection(dataJson);
        var dataGroup:eui.DataGroup = new eui.DataGroup();
        dataGroup.dataProvider = myCollection;
        this.addChild(dataGroup);
        // dataGroup.itemRenderer = LabelRenderer;
        dataGroup.itemRendererSkinName = "skins.list";//也可以直接设置 exml 文件做为 ItemRenderer
    }
}