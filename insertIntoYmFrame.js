//code
(function injectJS() {
  try {
    var iFrameHead =
      window.frames["ymIframe"].document.getElementsByTagName("head")[0];
    var modularBars = document.createElement("script");
    modularBars.type = "text/javascript";
    modularBars.src = "https://sup-yellow.github.io/adb-custom/addFrame.js";
    iFrameHead.appendChild(modularBars);
    injectDynamicCssToParent();
    injectDynamicCssToChild();
  } catch (e) {
    console.error("failed while inserting to iFrame", e);
  }
})();

function injectDynamicCssToChild() {
  var ymFrameHead =
    window.frames["ymIframe"].document.getElementsByTagName("head")[0];
  var modularStyles = document.createElement("style");
  modularStyles.type = "text/css";

  var css ='#fadeshow {display: flex; align-items:center; justify-content: flex-end; flex: auto;} #chatBoxMainContainer.message-icons.live-chat { style="height: 344px;margin-left: 0px;margin-top: 0px;}.mod-head-side-bar-container .overflow-container-sidebar{position:absolute;top:0;left:0;right:0;bottom:0;}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper{display:flex;flex-direction:column;justify-content:center;background-color:#fff;padding:0;width:4rem;list-style:none;height:calc(100% - 91px);justify-content:space-between;border:.5px solid #ccc}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper .side-bar-icon-box{text-decoration:none;color:#fff;padding:5px;cursor:pointer;display:flex}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper .side-bar-icon-box:hover{background:#caf7e3;border-right:3px solid #39a6a3}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper .side-bar-icon-box .sidebar-img-icon{width:3.5rem;height:auto;pointer-events:none;}.mod-head-side-bar-container .overflow-container-header{position:fixed;top:0;right:0;width:calc(100% - 4rem - 2px);z-index:99999}.mod-head-side-bar-container .overflow-container-header .header-wrapper{display:flex;flex-direction:row;align-items:center;justify-content:space-between;background-color:#fff;padding:0;list-style:none;height:3rem;border:.5px solid #ccc;border-left:0}.mod-head-side-bar-container .overflow-container-header .header-wrapper .header-title{font-size:16px;font-weight:600;color:#999;padding:0 1rem}.mod-head-side-bar-container .overflow-container-header .header-wrapper .icons-box{padding:0 1rem}.mod-head-side-bar-container .overflow-container-header .header-wrapper .icons-box .header-bar-icon-box{color:#000;font-weight:900;font-size:20px;width:100%;padding-left:.5rem;cursor:pointer}.mod-head-side-bar-container .overflow-container-header .header-wrapper .icons-box .header-bar-icon-box .header-icons{width:1.2rem;height:auto}';

  if (modularStyles.styleSheet) {
    modularStyles.styleSheet.cssText = css;
  } else {
    modularStyles.appendChild(document.createTextNode(css));
  }
  ymFrameHead.appendChild(modularStyles);
}

function injectDynamicCssToParent() {
  var parentCssHead = document.head || document.getElementsByTagName("head")[0];
  var parentStyles = document.createElement("style");
  parentStyles.type = "text/css";

  var parentCssStyles =
    '#ymFrameHolder { width: 100%; } @media only screen and (min-width: 768px) { #ymFrameHolder { width: 440px; } #fadeshow { display: none;} }';
    
  if (parentStyles.styleSheet) {
    parentStyles.styleSheet.cssText = parentCssStyles;
  } else {
    parentStyles.appendChild(document.createTextNode(parentCssStyles));
  }
  parentCssHead.appendChild(parentStyles);
}

window.addEventListener(
  "message",
  function (eventData) {
    console.log("onload---->");
    console.log(eventData);
    try {
      console.error("Data----------------->>>", eventData.data);

      if (eventData.data == "CLOSE") {
        window.YellowMessengerPlugin.closeBot();
      }

      if (eventData.data == "Maxamize") {
        (function injectJS() {
          try {
            var parentCssHead =
              document.head || document.getElementsByTagName("head")[0];
            var parentStyles = document.createElement("style");
            parentStyles.type = "text/css";

            var parentCssStyles =
              "#ymFrameHolder { width: 100%; } @media only screen and (min-width: 768px) { #ymFrameHolder { width: 880px; } }";
            if (parentStyles.styleSheet) {
              parentStyles.styleSheet.cssText = parentCssStyles;
            } else {
              parentStyles.appendChild(
                document.createTextNode(parentCssStyles)
              );
            }
            parentCssHead.appendChild(parentStyles);
          } catch (e) {
            console.error("failed while inserting to iFrame", e);
          }
        })();
      }

      if (eventData.data == "MINIMIZE") {
        (function injectJS() {
          try {
            var parentCssHead =
              document.head || document.getElementsByTagName("head")[0];
            var parentStyles = document.createElement("style");
            parentStyles.type = "text/css";

            var parentCssStyles =
              "#ymFrameHolder { width: 100%; } @media only screen and (min-width: 768px) { #ymFrameHolder { width: 440px; } }";
            if (parentStyles.styleSheet) {
              parentStyles.styleSheet.cssText = parentCssStyles;
            } else {
              parentStyles.appendChild(
                document.createTextNode(parentCssStyles)
              );
            }
            parentCssHead.appendChild(parentStyles);
          } catch (e) {
            console.error("failed while inserting to iFrame", e);
          }
        })();
      }

      // if(eventData.data == 'MINIMIZE') {
      //     document.getElementById('ymIframe').style.display ="none"
      // }
    } catch (error) {
      console.log(error);
      return;
    }
  },
  false
);
