import { r as registerInstance, h, j as Host } from './index-4f08d556.js';
import { g as getIonMode } from './ionic-global-90bce0a7.js';

const rowCss = ":host{display:flex;flex-wrap:wrap}";

const Row = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: getIonMode(this) }, h("slot", null)));
  }
};
Row.style = rowCss;

export { Row as ion_row };
