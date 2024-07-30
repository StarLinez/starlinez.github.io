"use strict";(self.webpackChunkRandomProject=self.webpackChunkRandomProject||[]).push([[290],{48290:(_,m,a)=>{a.r(m),a.d(m,{MaplestorySettingsModule:()=>v});var t=a(96814),g=a(15251),e=a(52425),c=a(6593),u=a(91288);const p=[{path:"",component:(()=>{class n{constructor(s,r){this.titleService=s,this.metaService=r,this.settingsData={dailiesDataV3:"",weekliesDataV3:"",arcaneSymbolSaveDataV2:"",flameData:"",weaponFlameData:""}}ngOnInit(){this.titleService.setTitle("Maplestory Settings Export | Random Stuff"),this.metaService.updateTag({name:"description",content:"The page for exporting your saved settings for the various Maplestory calculators and trackers."}),this.metaService.getTag("name='robots'")?this.metaService.updateTag({name:"robots",content:"index, follow"}):this.metaService.addTag({name:"robots",content:"index, follow"})}exportSettings(){localStorage.getItem("dailiesDataV3")&&(this.settingsData.dailiesDataV3=localStorage.getItem("dailiesDataV3")),localStorage.getItem("weekliesDataV3")&&(this.settingsData.weekliesDataV3=localStorage.getItem("weekliesDataV3")),localStorage.getItem("arcaneSymbolSaveDataV2")&&(this.settingsData.arcaneSymbolSaveDataV2=localStorage.getItem("arcaneSymbolSaveDataV2")),localStorage.getItem("flameData")&&(this.settingsData.flameData=localStorage.getItem("flameData")),localStorage.getItem("weaponFlameData")&&(this.settingsData.weaponFlameData=localStorage.getItem("weaponFlameData"));var s=document.createElement("a");s.setAttribute("href","data:text/plain;charset=utf-u,"+encodeURIComponent(JSON.stringify(this.settingsData))),s.setAttribute("download","MapleTrackerSettings.json"),s.click(),this.clearSettingsData()}importSettings(s){var r=s.target.files[0];let i=new FileReader;i.onload=l=>{try{this.settingsData=JSON.parse(i.result.toString()),this.settingsData.dailiesDataV3&&localStorage.setItem("dailiesDataV3",this.settingsData.dailiesDataV3),this.settingsData.weekliesDataV3&&localStorage.setItem("weekliesDataV3",this.settingsData.weekliesDataV3),this.settingsData.arcaneSymbolSaveDataV2&&localStorage.setItem("arcaneSymbolSaveDataV2",this.settingsData.arcaneSymbolSaveDataV2),this.settingsData.flameData&&localStorage.setItem("flameData",this.settingsData.flameData),this.settingsData.weaponFlameData&&localStorage.setItem("weaponFlameData",this.settingsData.weaponFlameData),alert("The settings have been successfully imported.")}catch{alert("Something went wrong when importing the settings, make sure you are selecting the correct file.")}},i.readAsText(r),this.clearSettingsData()}resetData(s){localStorage.getItem(s)&&localStorage.removeItem(s)}clearSettingsData(){this.settingsData={dailiesDataV3:"",weekliesDataV3:"",arcaneSymbolSaveDataV2:"",flameData:"",weaponFlameData:""}}static#t=this.\u0275fac=function(r){return new(r||n)(e.Y36(c.Dx),e.Y36(c.h_))};static#e=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-maplestory-settings"]],decls:45,vars:0,consts:[[1,"contentPageOverride"],[1,"title"],[1,"intro"],[1,"buttonWrapper"],[1,"buttonStyle",3,"click"],["for","file-upload",1,"buttonStyle"],["id","file-upload","type","file",3,"change"],[1,"title","title2"],[1,"reset"],[1,"resetTitle"]],template:function(r,i){1&r&&(e._UZ(0,"app-maplestory-side-navigation"),e.TgZ(1,"div",0)(2,"p",1),e._uU(3,"Settings Export"),e.qZA(),e.TgZ(4,"p",2),e._uU(5,"Create an export if your settings or import previously saved settings."),e.qZA(),e.TgZ(6,"div",3)(7,"button",4),e.NdJ("click",function(){return i.exportSettings()}),e._uU(8," Export Settings "),e.qZA(),e.TgZ(9,"label",5),e._uU(10," Import Settings "),e.qZA(),e.TgZ(11,"input",6),e.NdJ("change",function(f){return i.importSettings(f)}),e.qZA()(),e.TgZ(12,"p",7),e._uU(13,"Reset saved data"),e.qZA(),e.TgZ(14,"p",2),e._uU(15,"Experiencing issues with a tracker or calculator? Use this to reset the saved data, if this doesn't fix the issue please contact me on discord so i can look into it (StarLines#0001)."),e.qZA(),e.TgZ(16,"div",8)(17,"p",9),e._uU(18,"Calculators"),e.qZA(),e.TgZ(19,"p"),e._uU(20,"Arcane symbols"),e.qZA(),e.TgZ(21,"button",4),e.NdJ("click",function(){return i.resetData("arcaneSymbolSaveData")}),e._uU(22,"Reset"),e.qZA(),e.TgZ(23,"p"),e._uU(24,"Sacred symbols"),e.qZA(),e.TgZ(25,"button",4),e.NdJ("click",function(){return i.resetData("sacredSymbolSaveDataV2")}),e._uU(26,"Reset"),e.qZA(),e.TgZ(27,"p"),e._uU(28,"Item flame"),e.qZA(),e.TgZ(29,"button",4),e.NdJ("click",function(){return i.resetData("flameData")}),e._uU(30,"Reset"),e.qZA(),e.TgZ(31,"p"),e._uU(32,"Weapon flame"),e.qZA(),e.TgZ(33,"button",4),e.NdJ("click",function(){return i.resetData("weaponFlameData")}),e._uU(34,"Reset"),e.qZA(),e.TgZ(35,"p",9),e._uU(36,"Trackers"),e.qZA(),e.TgZ(37,"p"),e._uU(38,"Dailies"),e.qZA(),e.TgZ(39,"button",4),e.NdJ("click",function(){return i.resetData("dailiesData")})("click",function(){return i.resetData("dailiesDataV3")}),e._uU(40,"Reset"),e.qZA(),e.TgZ(41,"p"),e._uU(42,"Weeklies"),e.qZA(),e.TgZ(43,"button",4),e.NdJ("click",function(){return i.resetData("weekliesData")})("click",function(){return i.resetData("weekliesDataV3")}),e._uU(44,"Reset"),e.qZA()()())},dependencies:[u.G],styles:[".contentPageOverride[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin:5px 0 0;text-align:center;font-size:25px;text-decoration:underline}.contentPageOverride[_ngcontent-%COMP%]{width:800px;background-color:var(--content-page-background-color);border:1px solid var(--content-page-border-color);min-height:calc(100vh - 72px);margin:8px auto}.contentPageOverride[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}.contentPageOverride[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]{margin-left:50px;margin-right:50px;font-size:18px;text-align:center;margin-bottom:5px}.buttonWrapper[_ngcontent-%COMP%]{text-align:center}.title2[_ngcontent-%COMP%]{padding-top:30px}input[type=file][_ngcontent-%COMP%]{display:none}.reset[_ngcontent-%COMP%]{width:210px;margin:0 auto}.reset[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:150px;display:inline-block}.reset[_ngcontent-%COMP%]   .resetTitle[_ngcontent-%COMP%]{width:210px;text-align:center;margin-bottom:0;font-size:20px}.reset[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:60px;margin-right:0}@media only screen and (max-width: 1305px){.contentPageOverride[_ngcontent-%COMP%]{float:left;margin:unset;margin-top:8px;margin-left:9px}}@media only screen and (max-width: 1061px){.contentPageOverride[_ngcontent-%COMP%]{width:calc(100% - 262px)}}@media only screen and (max-width: 813px){.contentPageOverride[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px;min-height:calc(100vh - 100px);width:calc(100% - 18px)}}"]})}return n})()}];let o=(()=>{class n{static#t=this.\u0275fac=function(r){return new(r||n)};static#e=this.\u0275mod=e.oAB({type:n});static#a=this.\u0275inj=e.cJS({imports:[g.Bz.forChild(p),g.Bz]})}return n})();var h=a(32459);let v=(()=>{class n{static#t=this.\u0275fac=function(r){return new(r||n)};static#e=this.\u0275mod=e.oAB({type:n});static#a=this.\u0275inj=e.cJS({imports:[t.ez,o,h.C]})}return n})()},32459:(_,m,a)=>{a.d(m,{C:()=>c});var t=a(96814),g=a(21367),e=a(52425);let c=(()=>{class u{static#t=this.\u0275fac=function(o){return new(o||u)};static#e=this.\u0275mod=e.oAB({type:u});static#a=this.\u0275inj=e.cJS({imports:[t.ez,g.m,g.m]})}return u})()},91288:(_,m,a)=>{a.d(m,{G:()=>e});var t=a(52425),g=a(15251);let e=(()=>{class c{constructor(d){this.router=d}ngOnInit(){}static#t=this.\u0275fac=function(p){return new(p||c)(t.Y36(g.F0))};static#e=this.\u0275cmp=t.Xpm({type:c,selectors:[["app-maplestory-side-navigation"]],decls:42,vars:24,consts:[[1,"sidenavbar"],[1,"sidenavbartitle"],[3,"routerLink"],[1,"horizontalSeparator"],["href","https://www.buymeacoffee.com/starlines","target","_blank"]],template:function(p,o){1&p&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"Maplestory"),t.qZA(),t.TgZ(3,"p"),t._uU(4,"General"),t.qZA(),t.TgZ(5,"a",2)(6,"span"),t._uU(7,"Home"),t.qZA()(),t._UZ(8,"div",3),t.TgZ(9,"p"),t._uU(10,"Calculators"),t.qZA(),t.TgZ(11,"a",2)(12,"span"),t._uU(13,"Arcane symbols"),t.qZA()(),t.TgZ(14,"a",2)(15,"span"),t._uU(16,"Sacred symbols"),t.qZA()(),t.TgZ(17,"a",2)(18,"span"),t._uU(19,"Item flames"),t.qZA()(),t.TgZ(20,"a",2)(21,"span"),t._uU(22,"Weapon flame"),t.qZA()(),t._UZ(23,"div",3),t.TgZ(24,"p"),t._uU(25,"Trackers"),t.qZA(),t.TgZ(26,"a",2)(27,"span"),t._uU(28,"Dailies"),t.qZA()(),t.TgZ(29,"a",2)(30,"span"),t._uU(31,"Weeklies"),t.qZA()(),t._UZ(32,"div",3),t.TgZ(33,"a",2)(34,"span"),t._uU(35,"Export settings"),t.qZA()(),t._UZ(36,"div",3),t.TgZ(37,"p"),t._uU(38,"Enjoying my creations?"),t.qZA(),t.TgZ(39,"a",4)(40,"span"),t._uU(41,"consider donating here"),t.qZA()()()),2&p&&(t.xp6(5),t.Q6J("routerLink","/games/maplestory/home"),t.xp6(1),t.ekj("sidenavbaractivelink",o.router.isActive("/games/maplestory/home",!1)),t.xp6(5),t.Q6J("routerLink","/games/maplestory/arcane-symbols"),t.xp6(1),t.ekj("sidenavbaractivelink",o.router.isActive("/games/maplestory/arcane-symbols",!1)),t.xp6(2),t.Q6J("routerLink","/games/maplestory/sacred-symbols"),t.xp6(1),t.ekj("sidenavbaractivelink",o.router.isActive("/games/maplestory/sacred-symbols",!1)),t.xp6(2),t.Q6J("routerLink","/games/maplestory/item-flames"),t.xp6(1),t.ekj("sidenavbaractivelink",o.router.isActive("/games/maplestory/item-flames",!1)),t.xp6(2),t.Q6J("routerLink","/games/maplestory/weapon-flame"),t.xp6(1),t.ekj("sidenavbaractivelink",o.router.isActive("/games/maplestory/weapon-flame",!1)),t.xp6(5),t.Q6J("routerLink","/games/maplestory/dailies"),t.xp6(1),t.ekj("sidenavbaractivelink",o.router.isActive("/games/maplestory/dailies",!1)),t.xp6(2),t.Q6J("routerLink","/games/maplestory/weeklies"),t.xp6(1),t.ekj("sidenavbaractivelink",o.router.isActive("/games/maplestory/weeklies",!1)),t.xp6(3),t.Q6J("routerLink","/games/maplestory/settings"),t.xp6(1),t.ekj("sidenavbaractivelink",o.router.isActive("/games/maplestory/settings",!1)))},dependencies:[g.rH]})}return c})()}}]);