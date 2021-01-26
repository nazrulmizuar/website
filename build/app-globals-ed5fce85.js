import { i as ionicCoreGlobalScript } from './ionic-global-90bce0a7.js';

// import { setupConfig } from '@ionic/core';
const appGlobalScript = () => {
  // setupConfig({
  //   mode: 'ios'
  // });
};

const globalScripts = () => {
  appGlobalScript();
  ionicCoreGlobalScript();
};

export { globalScripts as g };
