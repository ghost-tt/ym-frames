(function addFrames() {
    try {
//         window.onresize = function (event) {
//             console.log("window.innerHeight ---> ", window.innerHeight);
//             var innerFrameHeight = document.getElementById("chatBoxMainContainer");
//             console.log(innerFrameHeight);
//             innerFrameHeight.style.setProperty('height', `calc(${window.innerHeight} - 95px - 3rem - 0px)`);
//         }; 
//         document.getElementById("chatBoxMainContainer").style.margin = "3rem 0 0 3rem"; 
        
        window.onresize = function (event) {
            var innerFrameHeight = document.getElementById("chatBoxMainContainer");
            innerFrameHeight.style.setProperty('height', `calc(${window.innerHeight} - 95px - 3rem - 0px) !important;`);
            console.log("innerFrameHeight");
        };

        document.querySelector('#chatContainer').insertAdjacentHTML('afterbegin', `
            <div class="mod-head-side-bar-container">
                <div class="overflow-container-sidebar">
                    <ul class="sidebar-wrapper">
                        <div onclick="dynamicHeaderTitle(event)" class="side-bar-icon-box" title="title 1"><img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/LS9XYE9urVcj1605084428877.png" /></div>
                        <div onclick="dynamicHeaderTitle(event)" class="side-bar-icon-box" title="title 2"><img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/GnxBWRVeIm6i1622800692538.png" /></div>
                        <div onclick="dynamicHeaderTitle(event)" class="side-bar-icon-box" title="title 3"><img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/4dnzmSDugrwW1622800597860.png" /></div>
                        <div onclick="dynamicHeaderTitle(event)" class="side-bar-icon-box" title="title 4"><img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/peOgkPdE8n0A1622800752931.png" /></div>
                        <div onclick="dynamicHeaderTitle(event)" class="side-bar-icon-box" title="title 5"><img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/FPloPRu3LmfA1622800812350.png" /></div>
                        <div onclick="dynamicHeaderTitle(event)" class="side-bar-icon-box" title="title 6"><img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/sULHcUPQH5RL1622800858305.png" /></div>
                        <div onclick="dynamicHeaderTitle(event)" class="side-bar-icon-box" title="title 7"><img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/VLla29GmwVpi1622800914321.png" /></div>
                        <div onclick="dynamicHeaderTitle(event)" class="side-bar-icon-box" title="title 8"><img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/o2BBDya1HiQT1622800956549.png" /></div>
                        <div onclick="dynamicHeaderTitle(event)" class="side-bar-icon-box" title="title 9"><img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/g6Fdrr5NeUj01622800983140.png" /></div>
                    </ul>
                </div>
                <div class="overflow-container-header">
                    <ul class="header-wrapper">
                        <div class="header-title" id="main-header-title">Header</div>
                        <div class="icons-box"><span class="header-bar-icon-box" title="Minimize">-</span> <span class="header-bar-icon-box" title="Close">x</span></div>
                    </ul>
                </div>
            </div>
        ` ) ;
    } catch(e) { 
        console.log("failing while trying to insert add frame script", e); 
    } 
})(); 

function dynamicHeaderTitle(e) {
    e.preventDefault(); var title = e.srcElement.getAttribute("title");
    document.getElementById("main-header-title").textContent = title;
}
