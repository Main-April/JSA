import { bdd,kw,user} from "./bdd.js";
import { $Bkg,Dc,Wn } from "./jsa_background.js";
const Usr = {
  lvl: 2,
};
$Eye = {
  Alert: {},
  Scn : function () {},
};

$Eye.Key = function (){
  $Bkg.Mnk_Pth.KeyFuc();
  Dc.addEventListener = function(e,v){
    if(["keydown","keyup","keypress"].includes(e)){
        $Eye.Alert["Keylog"] = "Keylog:1002/DC.ADDEVENTLISTENER";
        $Eye.Scn();
    }else $Bkg.Mnk_Pth.AddEvn.call(this,e,v);
  }
  Dc.onkeydown,Dc.onkeyup,Dc.onkeypress = function(e){
    $Eye.Alert["Keylog"] = "Keylog:1001/DC.ONKEY";
    $Eye.Scn();
  }
}
// N'utiliser qu'en cas D'URGENCE ABSOLUE (menace présente ou non, impossible à désaciver)
$Eye.Key_Alt = function (){
  Wn.addEventListener("keydown",(e)=>{
    e.stopImmediatePropagation();
    e.preventDefault()
  })
}

$Eye.Obf = class {
  constructor() {}
  Det(s) {
    let e = 0;
    if (typeof s !== "string") return 0;
    let p = s.split(";");
    for (let i = 0; i < p.length; i++) {
      try {
        if (this.Kew(p[i]) || Usr.lvl <= this.CREATE_MOTIF(p[i])) {
          e++;
        }
      } catch (err) {
        continue;
      }
    }
    return e;
  }

  Kew(s) {
    if (typeof s !== "string") return false;
    let b = bdd.d_obf.kw;
    let n = 0;
    for (let k in b) {
      let v = b[k];
      if (typeof v === "string") {
        if (s.includes(v)) n++;
      } 
      else if (Array.isArray(v)) {
        for (let j = 0; j < v.length; j++) {
          if (s.includes(v[j])) n += 1 / v.length;
        }
      } 
      else if (v instanceof RegExp) {
        if (v.test(s)) n++;
      } else if (typeof v === "object" && v !== null) {
        if (v.test && typeof v.test === "function" && v.test(s)) n++;
      }
    }
    return n > 0;
  }

  CREATE_MOTIF(s) {
    if (typeof s !== "string" || s.length === 0) return 0;
    let counts = {};
    s = s.split(".").split("(").split(")").split("{").split("}")
    for (let i = 0; i < s.length; i++) {
      counts[s[i]] = (counts[s[i]]||0)+1;
    }

  }

  HAVE_ELEMENT(...e) {
    for (let i = 0; i < e.length; i++) {
      try {
        if (document.querySelector(e[i])) return true;
      } catch (err) {
        continue;
      }
    }
    return false;
  }

  START() {
    return new EYE_MODULE();
  }
}



function b_s(s, t) {
  s = s.toString();
  let b = bdd[t].content;
  let r = bdd[t];
  for (let i = 0; i < b.length; i++) {
    if (b[i].reg.test(s)) {
      return {
        id: b[i].id,
        type: r.type,
        risk: r.risk + " / " + r.level[1],
        lvl: b[i].lvl,
      };
    }
  }
  return false;
}

function on() {
  let c = localStorage.getItem("_jsa") ? true : false;
  if (!c) {
    let s = crypto.randomUUID();
    localStorage.setItem("_jsa", s);
    return s;
  } else {
    return localStorage.getItem("_jsa");
  }
}


function p_scan(){
  let s = [...document.scripts];
  s.forEach((item)=>{
    scan(item.textContent);
  });
}

function scan(s){return s;}
let k = "document.addEventListener('keypress', (e) => {fetch()})";
console.log(d_obf(``));
const _jsa_eye = new EYE_MODULE();
_jsa_eye.DETECTION_OBF("alert('rnd')")