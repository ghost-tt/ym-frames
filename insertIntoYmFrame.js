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
    var isMobile = checkIfMobile();
    if(!isMobile) {
        document.getElementById("ymFrameHolder").style.width = "440px";
    } {
        document.getElementById("ymFrameHolder").style.width = "100%";
    }

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

function checkIfMobile() {
    return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
}
