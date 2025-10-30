export const bdd = {
  setup: false,
  keylogger: {
    type: "Keylogger/JS/Spyware/Malware",
    risk: "Risque de vol de vos mots passe/identifiants",
    level: [3, "Risque probable de vol d'informations personnelles"],
    content : [{
      id : "KeyDOM:1001",
      lvl : 2.5,
      reg : /(?=.*fetch\s*\()(?=.*(\bfunction\s*\(e\)\s*\{|\(e\)\s*=>\s*\{))(?=.*(\.onkeydown|\.onkeypress))/,
    },
    {
      id : "KeyEVENT:1002",
      lvl : 3,
      reg : /(?=.*fetch\s*\()(?=.*(\bfunction\s*\(e\)\s*\{|\(e\)\s*=>\s*\{))(?=.*addEventListener\s*\(\s*['"]?(keydown|keypress)['"]?\s*,)/,
    }],
  },
  trojan: {
    type : "Trojan/JS/Malware",
    risk : "Risque fort d'infection par virus",
    level :[4,"Accès total à votre ordinateur"],
    content : [{
      id : "BckTRJ:1003",
      lvl : 3.5,
      reg : [/MSXML2\.XMLHTTP/i,/ADODB\.Stream/i,/WScript\.Shell/i,/\.exe/i,/http:\/\/[a-z0-9\.\-]+\/[a-z0-9]+\.exe/i],
    }   
    ]
  },
  d_obf:{
    kw : {
      fuck : /^[\s\[\]\(\)\!\+]+$/,
      unicode : /\\(?:u[0-9A-Fa-f]{4}|u\{[0-9A-Fa-f]+\}|x[0-9A-Fa-f]{2})/g,
    }
  }
};
export const kw = ["function","typeof","var","const","let","object",
"return","this","(",")","use strict","throw","new","Error","if","else","else if","!","=","+","-","*","^",":","{","}",";","[","]","false","true","undefined","null","NaN","%","length","push","indexOf","slice","window","document"];

export const user = {
  lvl : 3,

}
