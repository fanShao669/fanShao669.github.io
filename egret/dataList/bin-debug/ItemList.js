var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ItemList = (function (_super) {
    __extends(ItemList, _super);
    function ItemList() {
        return _super.call(this) || this;
    }
    ItemList.prototype.createChildren = function () {
        //先创建一个数组
        var dataJson = [
            {
                cardNoShow: 'K',
                cardColor: '1'
            },
            {
                cardNoShow: 'A',
                cardColor: '1'
            },
            {
                cardNoShow: 'J',
                cardColor: '1'
            },
            {
                cardNoShow: '9',
                cardColor: '1'
            },
            {
                cardNoShow: '10',
                cardColor: '1'
            }
        ];
        //用ArrayCollection包装
        var myCollection = new eui.ArrayCollection(dataJson);
        var dataGroup = new eui.DataGroup();
        dataGroup.dataProvider = myCollection;
        this.addChild(dataGroup);
        // dataGroup.itemRenderer = LabelRenderer;
        dataGroup.itemRendererSkinName = "skins.list"; //也可以直接设置 exml 文件做为 ItemRenderer
    };
    return ItemList;
}(eui.Group));
__reflect(ItemList.prototype, "ItemList");
//# sourceMappingURL=ItemList.js.map