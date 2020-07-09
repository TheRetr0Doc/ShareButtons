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
        const title = "Topošās spēles nosaukums";
        const link = "https://www.game.com";

        this.node.on('click', function (button) {

            switch(button.node.name) {
                case "Draugiem":{
                    cc.sys.openURL(`https://www.draugiem.lv/say/ext/add.php?title=${encodeURIComponent(message)}&url=${encodeURIComponent(link)}&titlePrefix=${encodeURIComponent(title)}`);
                    break;
                }
                case "Facebook": {
                    cc.sys.openURL(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}&quote=${encodeURIComponent(message)}`)
                    break;
                }
                case "Instagram": {
                    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                        if (navigator.share) {
                            navigator.share({
                              title: title,
                              text: message,
                              url: link,
                            })
                              .then(() => console.log('Successful share'))
                              .catch((error) => console.log('Error sharing', error));
                          }
                        // cc.sys.openURL("instagram://camera")
                    } else {
                        //Open web page
                        button.enabled = false;
                    }
                    break;
                }
                case "Twitter": {
                    cc.sys.openURL(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}%20${encodeURIComponent(link)}`);
                    break;
                }
                case "ShareButton": {
                    if (button.node._parent.y >= Math.abs(231)) {
                        button.node._parent.runAction(cc.moveBy(0.45, 0, -Math.abs(140)));
                    } else {
                        button.node._parent.runAction(cc.moveBy(0.45, 0, Math.abs(140)));
                    }
                    break;
                }
            }
            console.log(`Clicked on ${button.node.name}`);
        });
    }
    
    start () {
        
    }

    // update (dt) {}
}
