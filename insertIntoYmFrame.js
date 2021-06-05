(function injectJS() {
    try {
        var iFrameHead = window.frames["ymIframe"].document.getElementsByTagName("head")[0];         
        var modularBars = document.createElement('script');
        modularBars.type = 'text/javascript';
        modularBars.src = 'https://ghost-tt.github.io/ym-frames/addFrames.js';
        iFrameHead.appendChild(modularBars);
        
    } catch(e) {
        console.error("failed while inserting to iFrame", e);
    }
})();
