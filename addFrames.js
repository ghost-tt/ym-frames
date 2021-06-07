(function addFrames () {
  try {    
    document.querySelector('#chatContainer').insertAdjacentHTML(
      'afterbegin',
      `<div>
          <div style="position: absolute; top: 0; left: 0px; right: 0; bottom: 0;">
              <ul class="sc-eCApnc jvVggF" style="display: flex; flex-direction: column; justify-content: center; background-color: #fff; padding: 0; width: 3rem; list-style: none; height: calc(100% - 55px); justify-content: space-between;border: 1px solid #ccc">
                  <a to="/" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                      <img src="https://cdn.yellowmessenger.com/LS9XYE9urVcj1605084428877.png" style="width: 1.2rem; height: auto; filter:" />
                  </a>
                  <a to="/" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                      <img src="https://cdn.yellowmessenger.com/GnxBWRVeIm6i1622800692538.png" style="width: 1.2rem; height: auto; filter:" />
                  </a>
                  <a to="/" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                      <img src="https://cdn.yellowmessenger.com/4dnzmSDugrwW1622800597860.png" style="width: 1.2rem; height: auto; filter:" />
                  </a>
                  <a to="/" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                      <img src="https://cdn.yellowmessenger.com/peOgkPdE8n0A1622800752931.png" style="width: 1.2rem; height: auto; filter:" />
                  </a>
                  <a to="/" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                      <img src="https://cdn.yellowmessenger.com/FPloPRu3LmfA1622800812350.png" style="width: 1.2rem; height: auto; filter:" />
                  </a>
                  <a to="/" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                      <img src="https://cdn.yellowmessenger.com/sULHcUPQH5RL1622800858305.png" style="width: 1.2rem; height: auto; filter:" />
                  </a>
                <a to="/" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                      <img src="https://cdn.yellowmessenger.com/VLla29GmwVpi1622800914321.png" style="width: 1.2rem; height: auto; filter:" />
                  </a>
                <a to="/" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                      <img src="https://cdn.yellowmessenger.com/o2BBDya1HiQT1622800956549.png" style="width: 1.2rem; height: auto; filter:" />
                  </a>
                <a to="/" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer; display: flex;">
                      <img src="https://cdn.yellowmessenger.com/g6Fdrr5NeUj01622800983140.png" style="width: 1.2rem; height: auto; filter:" />
                  </a>
              </ul>
          </div>

          <div style="position: fixed; top: 0; right: 0; width: calc(100% - 3rem - 2px); z-index: 1;">
              <ul class="sc-eCApnc jvVggF" style="display: flex; flex-direction: row; align-items: center; justify-content: flex-end; background-color: #fff; padding: 0; list-style: none; height: 3rem;border: 1px solid #ccc;border-left: 0">
                  <div>
                      <a to="/" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer;">
                          <img src="https://cdn.yellowmessenger.com/LS9XYE9urVcj1605084428877.png" style="width: 1.2rem; height: auto; filter:" />
                      </a>
                      <a to="/" class="sc-jSFjdj jcTaHb" style="text-decoration: none; color: #fff; width: 100%; padding: 1rem; cursor: pointer;">
                          <img src="https://cdn.yellowmessenger.com/LS9XYE9urVcj1605084428877.png" style="width: 1.2rem; height: auto; filter:" />
                      </a>
                  </div>
              </ul>
          </div>
      </div>`      
    );
  } catch(e) {
    console.log("failing while trying to insert add frame script", e);
  }
})();
