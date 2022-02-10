(function addFrames() {
  try {
    window.onresize = function (event) {
      var frameHeight = window.innerHeight - 104 - 48;
      document.getElementById(
        "chatBoxMainContainer"
      ).style.height = `${frameHeight}px`;
    };
    document.getElementById("player").style.width = "0px";
    document.querySelector("#chatContainer").insertAdjacentHTML(
      "afterbegin",
      `<div class="mod-head-side-bar-container">
         <div class="overflow-container-header">
<ul class="header-wrapper" style="display: flex;display: flex;flex-direction: row;align-items: center;background-color: rgb(0, 37, 105);padding: 0;list-style: none;height: 4rem;border: 0.5px solid #ccc;border-left: 0;">
                  <div><img class="sidebar-img-icon" src="https://www.chatbotsportal.com/api/chat/get-file/60a74746edb96a69de78af7e" style="width: 37px; height: auto;margin-left: 10px;margin-right: 10px;vertical-align: middle;"></div><div class="header-title" id="main-header-title" style="font-weight: 400;font-size: medium;color: white;font-family: 'botplatform-font';display: flex;flex-direction: column;margin-left: 0px;">
                  TAMI - UAT<div style="/* margin-left: 58px; */font-size: small;">TA Messaging Intelligence</div></div>
                   <div id="fadeshow">
                   <div id="e11" class="icons-box" style="padding: 0 1rem;"> 
                       <span class="header-bar-icon-box" title="minimize" style="color: white;font-weight: 900;font-size: 30px;width: 100%;padding-left: 0.5rem;cursor: pointer;">-</span>
                   </div>
                   <div id="e10" style="cursor:pointer;"> 
                   <span class="header-bar-icon-box" title="maxamize"><img src="https://cdn.yellowmessenger.com/m65zoVM7Si3s1624952263631.png" style="width: 1.7rem; height: 20px;"></span>
                   </div>
                   <div id="e9" class="icons-box" padding:="" 0="" 1rem;=""> 
                       <span class="header-bar-icon-box" title="Close" style="padding: 0 1rem;color: white;font-weight: 900;font-size: 20px;width: 100%;cursor: pointer;">x</span>
                   </div>
              </div>
             </ul>
          </div> 
      </div> `
    );
  } catch (e) {
    console.log("failing while trying to insert add frame script", e);
  }
})();

function dynamicHeaderTitle(e) {
  e.preventDefault();
  var title = e.srcElement.getAttribute("title");
}
document.getElementById("e9").onclick = function () {
  parent.postMessage("CLOSE", "*");
};

document.getElementById("e10").onclick = function () {
  parent.postMessage("Maxamize", "*");
};

document.getElementById("e11").onclick = function () {
  parent.postMessage("MINIMIZE", "*");
};
