(function injectJS() {
    try {        
        var iFrameHead = window.frames["ymIframe"].document.getElementsByTagName("head")[0];         
        var modularBars = document.createElement('script');
        modularBars.type = 'text/javascript';
        modularBars.src = 'https://ghost-tt.github.io/ym-frames/addFrames.js';
        iFrameHead.appendChild(modularBars);
        
        injectDynamicCss();
    } catch(e) {
        console.error("failed while inserting to iFrame", e);
    }
})();


function injectDynamicCss() {
    alert("1");
    document.getElementById("ymFrameHolder").style.width = "440px";

    var ymFrameHead = window.frames["ymIframe"].document.getElementsByTagName("head")[0];  
    var modularStyles = document.createElement('style');
    modularStyles.type = 'text/css';

    var css = '#chatBoxMainContainer.message-icons.live-chat { margin: 3rem 0 0 3rem; }';
    if (modularStyles.styleSheet){
      modularStyles.styleSheet.cssText = css;
    } else {
      modularStyles.appendChild(document.createTextNode(css));
    }
    ymFrameHead.appendChild(modularStyles);
}
