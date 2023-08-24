import * as el from "./elements.js";
import * as actions from "./actions.js";

export function open() {
  el.closedCookie.addEventListener("click", () => {
    console.log("Foi");
    actions.openCookie();
    actions.sortLuckySystem();
    
  });
}

export function again() {
  el.btnChange.addEventListener("click", () => {
    console.log('Restart');
    actions.restarCookie()
  });
}
