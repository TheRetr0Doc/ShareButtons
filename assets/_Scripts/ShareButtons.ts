// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Share extends cc.Component {

    onLoad () {
        const message = "Pievienojies man, un apgūsti profesijas.";
        const titlePrefix = "Topošās spēles nosaukums"
        const link = "https://www.game.com";

        this.node.on('click', function (button) {

            switch(button.node.name) {
                case "Draugiem":{
                    cc.sys.openURL(`https://www.draugiem.lv/say/ext/add.php?title=${encodeURIComponent(message)}&url=${encodeURIComponent(link)}&titlePrefix=${encodeURIComponent(titlePrefix)}`);
                    break;
                }
                case "Facebook": {
                    cc.sys.openURL(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`)
                    break;
                }
                case "Instagram": {
                    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                        cc.sys.openURL("instagram://camera")
                    } else {
                        cc.sys.openURL("https://www.instagram.com/");
                    }
                    break;
                }
                case "Twitter": {
                    cc.sys.openURL(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}%20${encodeURIComponent(link)}`);
                    break;
                }
                case "ShareBtn": {

                    if (button.node._parent.y >= 200) {
                        button.node._parent.runAction(cc.moveBy(1, 0, -185));
                    } else {
                        button.node._parent.runAction(cc.moveBy(1, 0, 185));
                    }
                    break;
                }
            }
            console.log('click on ' + button.name);
        });
    }
    
    start () {
        
    }

    // update (dt) {}
}
