(function injectJS() {
    try {
        document.getElementById("ymFrameHolder").style.width = "440px";
       
        var css = '#chatBoxMainContainer.message-icons.live-chat { margin: 3rem 0 0 3rem; }',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');
        head.appendChild(style);

        style.type = 'text/css';
        if (style.styleSheet){
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }
        
        var iFrameHead = window.frames["ymIframe"].document.getElementsByTagName("head")[0];         
        var modularBars = document.createElement('script');
        modularBars.type = 'text/javascript';
        modularBars.src = 'https://ghost-tt.github.io/ym-frames/addFrames.js';
        iFrameHead.appendChild(modularBars);
        
    } catch(e) {
        console.error("failed while inserting to iFrame", e);
    }
})();
