(()=>{"use strict";const e=function(e){const t=document.querySelector(".cardholder");let n=document.createElement("p");const c=document.createElement("div");c.classList.add("proj");const d=document.createElement("p");d.textContent=e,c.appendChild(d);{const t=document.createElement("button");t.classList.add("desAdd"),t.textContent="Add Description",c.appendChild(t),t.addEventListener("click",(()=>{t.remove();const d=document.createElement("input");d.classList.add("desInput");const o=document.createElement("button");o.textContent="Save",o.addEventListener("click",(()=>{o.remove(),n.textContent=d.value,d.remove(),c.appendChild(n);const t=document.createElement("button");t.textContent="Open Project",t.classList.add("tab"),t.value=e,t.addEventListener("click",function(e){const t=document.createElement("h1");t.textContent=e;const n=document.querySelector(".container");document.querySelector(".cardholder").remove();const c=document.createElement("div");return c.classList.add("tabDiv"),n.appendChild(c),c.appendChild(t),{tabDiv:c,container:n,holderTitle:t}}(t.value)),c.appendChild(t)})),c.appendChild(d),c.appendChild(o)}))}return t.appendChild(c),{title:e,projDiv:c,container:t,desTxt:""}};let t=[];t[0]=e("Example"),function(t){let n=t.length;for(let c=0;c===n;c++)e(t[c].title)}(t),function(){const n=document.querySelector(".add"),c=document.querySelector(".project-title");c.value="",n.addEventListener("click",(()=>{let n=c.value;const d=e(n);t.push(d),c.value=""}))}()})();