let Dc = document;
let Wn = window;
let $Bkg;
Dc.select = function(s){
    let i,c;
    if(i=this.getElementById(s)) return i;
    if(c=this.getElementsByClassName(s)) return c;
    return this.querySelectorAll(s);
}
$Bkg.MainUi = class {
    constructor() {
        this.Lk = Dc.select("a");
        this.If = Dc.select("iframe");
        this.Ti = Dc.select("input, textarea");
    }
    init_ui() {
        this.Lk.forEach((l) => {if(!l.includes(l.href)) l.textContent = l.href;});
        this.If.forEach((i) => {if(!this.same_site(i.src))i.remove();});
        this.Ti.forEach((t)=>{t.value = t.value.replace("<","&lt;").replace(">","&gt;")});
    }
    same_site(url){
        if(url.includes(window.location.hostname)) return !+[];
        return ![];
    }
    
}
// MONKEY PATCH
$Bkg.Mnk_Pth = {
    KeyFuc : function (){
        this.AddEvn = Dc.addEventListener;
        this.Key = [Dc.onkeydown,Dc.onkeyup,Dc.onkeypress];
    }
}
export { $Bkg,Dc,Wn };