// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
const message = "Pievienojies man, un apgūsti profesijas.";
const title = "Topošās spēles nosaukums";
const link = "https://www.game.com";

cc.Class({
    extends: cc.Component,

    properties: {
        ShareBox: cc.Layout
    },
    
    onInstagramClick : function() {
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
        } else {
            cc.sys.openURL('https://www.instagram.com/thegame')
        }
    },
    onDraugiemClick : function() {
        cc.sys.openURL(`https://www.draugiem.lv/say/ext/add.php?title=${encodeURIComponent(message)}&url=${encodeURIComponent(link)}&titlePrefix=${encodeURIComponent(title)}`);
    },
    onFacebookClick : function() {
        cc.sys.openURL(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}&quote=${encodeURIComponent(message)}`)
    },
    onTwitterClick : function() {
        cc.sys.openURL(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}%20${encodeURIComponent(link)}`);
    },
    onShareClick : function() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            //Mobile device
            if (this.node._parent.y >= Math.abs(231)) {
                    this.node._parent.runAction(cc.moveBy(0.45, 0, -Math.abs(140)));
            } else {
                this.node._parent.runAction(cc.moveBy(0.45, 0, Math.abs(140)));
            }
        } else {
            //Desktop version excludes Instagram share
            if (this.node._parent.y >= Math.abs(266)) {
                this.node._parent.runAction(cc.moveBy(0.45, 0, -Math.abs(105)));
            } else {
                this.node._parent.runAction(cc.moveBy(0.45, 0, Math.abs(105)));
            }
        }
    },

    start () {

    }
});
