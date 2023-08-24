import * as el from './elements.js'
import { text } from './text.js'

export function openCookie(){ 
    el.message.classList.toggle('hidden')
    el.btnChange.classList.toggle("hidden")
    el.closedCookie.classList.toggle('hidden')
    el.openCookie.classList.toggle("hidden");
}

export function restarCookie(){
   el.message.classList.toggle("hidden");
   el.btnChange.classList.toggle("hidden");
   el.closedCookie.classList.toggle("hidden");
   el.openCookie.classList.toggle("hidden");
}

export function sortLuckySystem(){

    el.message.innerHTML = text().toString()
    console.log(text())
}