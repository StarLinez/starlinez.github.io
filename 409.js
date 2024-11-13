"use strict";(self.webpackChunkRandomProject=self.webpackChunkRandomProject||[]).push([[409],{83409:(G,l,p)=>{p.r(l),p.d(l,{HiddenHexRGBConverterModule:()=>I});var d=p(60177),s=p(66859),t=p(54438),c=p(345),g=p(70792),a=p(18326);function h(o,u){if(1&o){const e=t.RV6();t.j41(0,"div",14)(1,"div",15)(2,"label",16),t.EFF(3,"Hex color code (#RRGGBB)"),t.k0s(),t.j41(4,"input",17),t.bIt("ngModelChange",function(n){t.eBV(e);const i=t.XpG();return t.Njj(i.hexInput=n)})("input",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.convert())}),t.k0s()()()}if(2&o){const e=t.XpG();t.R7$(4),t.Y8G("ngModel",e.hexInput)}}function x(o,u){if(1&o){const e=t.RV6();t.j41(0,"div",18)(1,"div",15)(2,"label",19),t.EFF(3,"Red (R)"),t.k0s(),t.j41(4,"input",20),t.bIt("ngModelChange",function(n){t.eBV(e);const i=t.XpG();return t.Njj(i.rgbRedInput=n)})("input",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.convert())}),t.k0s()(),t.j41(5,"div",15)(6,"label",21),t.EFF(7,"Green (G)"),t.k0s(),t.j41(8,"input",22),t.bIt("ngModelChange",function(n){t.eBV(e);const i=t.XpG();return t.Njj(i.rgbGreenInput=n)})("input",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.convert())}),t.k0s()(),t.j41(9,"div",15)(10,"label",23),t.EFF(11,"Blue (B)"),t.k0s(),t.j41(12,"input",24),t.bIt("ngModelChange",function(n){t.eBV(e);const i=t.XpG();return t.Njj(i.rgbBlueInput=n)})("input",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.convert())}),t.k0s()()()}if(2&o){const e=t.XpG();t.R7$(4),t.Y8G("ngModel",e.rgbRedInput),t.R7$(4),t.Y8G("ngModel",e.rgbGreenInput),t.R7$(4),t.Y8G("ngModel",e.rgbBlueInput)}}function m(o,u){if(1&o){const e=t.RV6();t.j41(0,"div",25)(1,"div",26)(2,"label",27),t.EFF(3,"Hex color code"),t.k0s(),t.j41(4,"input",28),t.bIt("ngModelChange",function(n){t.eBV(e);const i=t.XpG();return t.Njj(i.hexOutput=n)}),t.k0s()()()}if(2&o){const e=t.XpG();t.R7$(4),t.Y8G("ngModel",e.hexOutput)}}function v(o,u){if(1&o){const e=t.RV6();t.j41(0,"div",29)(1,"div",26)(2,"label",30),t.EFF(3,"RGB color code"),t.k0s(),t.j41(4,"input",31),t.bIt("ngModelChange",function(n){t.eBV(e);const i=t.XpG();return t.Njj(i.rgbOutput=n)}),t.k0s()()()}if(2&o){const e=t.XpG();t.R7$(4),t.Y8G("ngModel",e.rgbOutput)}}function _(o,u){if(1&o&&(t.j41(0,"tr"),t.nrm(1,"td"),t.j41(2,"td"),t.EFF(3),t.k0s(),t.nrm(4,"td"),t.j41(5,"td"),t.EFF(6),t.k0s(),t.nrm(7,"td"),t.k0s()),2&o){const e=u.index,r=t.XpG();t.R7$(),t.xc7("background",r.colorShades[e]),t.R7$(2),t.JRh(r.colorShades[e]),t.R7$(3),t.JRh(r.colorTints[e]),t.R7$(),t.xc7("background",r.colorTints[e])}}const C=[{path:"",component:(()=>{class o{constructor(e,r){this.titleService=e,this.metaService=r,this.inputSetToHex=!0,this.hexInput="",this.rgbRedInput=null,this.rgbGreenInput=null,this.rgbBlueInput=null,this.hexOutput="",this.rgbOutput="",this.color="",this.colorShades=new Array(11),this.colorTints=new Array(11)}ngOnInit(){this.titleService.setTitle("Hex & RGB Converter | Random Stuff"),this.metaService.updateTag({name:"description",content:"Personal Hex & RGB converter."}),this.metaService.getTag("name='robots'")?this.metaService.updateTag({name:"robots",content:"noindex, follow"}):this.metaService.addTag({name:"robots",content:"noindex, follow"})}ngOnDestroy(){this.titleService.setTitle("Random Stuff")}swapConversion(){this.inputSetToHex=!this.inputSetToHex,this.clearInput()}convert(){if(this.inputSetToHex){var e=this.hexToRGB(this.hexInput);e?(this.rgbOutput="rgb("+e.red+", "+e.green+", "+e.blue+")",this.createTintsAndShades(this.hexInput)):(this.rgbOutput=null,this.clearShadesAndTintsOutput()),this.color=this.rgbOutput}else this.hexOutput="#"+this.rgbToHex(this.rgbRedInput,this.rgbGreenInput,this.rgbBlueInput),this.createTintsAndShades(this.hexOutput),this.color=this.hexOutput}createTintsAndShades(e){var r=this.hexToRGB(e);this.colorShades=this.calculateShades(r),this.colorTints=this.calculateTints(r)}calculateShades(e){for(var r=[],n=0;n<10;n++)r[n]="#"+this.rgbToHex(e.red*(1-.1*n),e.green*(1-.1*n),e.blue*(1-.1*n));return r.push("#000000"),r}calculateTints(e){for(var r=[],n=0;n<10;n++)r[n]="#"+this.rgbToHex(e.red+(255-e.red)*n*.1,e.green+(255-e.green)*n*.1,e.blue+(255-e.blue)*n*.1);return r.push("#FFFFFF"),r}hexToRGB(e){var r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return r?{red:parseInt(r[1],16),green:parseInt(r[2],16),blue:parseInt(r[3],16)}:null}rgbToHex(e,r,n){return(this.intToHex(e)+this.intToHex(r)+this.intToHex(n)).toUpperCase()}intToHex(e){return this.pad(Math.min(Math.max(Math.round(e),0),255).toString(16),2)}pad(e,r){for(var n=""+e;n.length<r;)n="0"+n;return n}clearInput(){this.hexInput="",this.rgbRedInput=null,this.rgbGreenInput=null,this.rgbBlueInput=null,this.hexOutput="",this.rgbOutput="",this.color="",this.clearShadesAndTintsOutput()}clearShadesAndTintsOutput(){this.colorShades=new Array(11),this.colorTints=new Array(11)}static{this.\u0275fac=function(r){return new(r||o)(t.rXU(c.hE),t.rXU(c.W8))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-hidden-hexrgb-converter"]],decls:23,vars:7,consts:[[1,"contentPageOverride"],[1,"inputWrapper"],["class","hexInputWrapper",4,"ngIf"],["class","rgbInputWrapper",4,"ngIf"],[1,"controlsWrapper"],[1,"buttonStyle","clear",3,"click"],[1,"buttonStyle","swap",3,"click"],[1,"outputWrapper"],["class","hexOutputWrapper",4,"ngIf"],["class","rgbOutputWrapper",4,"ngIf"],[1,"colorPreviewLabel"],[1,"colorPreview"],[1,"colorTable"],[4,"ngFor","ngForOf"],[1,"hexInputWrapper"],[1,"inputLabelWrapper"],["for","hexInput"],["name","hexInput","id","hexInput","type","text","placeholder","#000000",1,"textInput",3,"ngModel","ngModelChange","input"],[1,"rgbInputWrapper"],["for","rgbRedInput"],["name","rgbRedInput","id","rgbRedInput","type","number","placeholder","0",1,"numberInput",3,"ngModel","ngModelChange","input"],["for","rgbGreenInput"],["name","rgbGreenInput","id","rgbGreenInput","type","number","placeholder","0",1,"numberInput",3,"ngModel","ngModelChange","input"],["for","rgbBlueInput"],["name","rgbBlueInput","id","rgbBlueInput","type","number","placeholder","0",1,"numberInput",3,"ngModel","ngModelChange","input"],[1,"hexOutputWrapper"],[1,"outputLabelWrapper"],["for","hexOutput"],["name","hexOutput","id","hexOutput","type","text","disabled","",1,"textInput",3,"ngModel","ngModelChange"],[1,"rgbOutputWrapper"],["for","rgbOutput"],["name","rgbOutput","id","rgbOutput","type","text","disabled","",1,"textInput",3,"ngModel","ngModelChange"]],template:function(r,n){1&r&&(t.nrm(0,"app-hidden-side-navigation"),t.j41(1,"div",0)(2,"div",1),t.DNE(3,h,5,1,"div",2)(4,x,13,3,"div",3),t.k0s(),t.j41(5,"div",4)(6,"button",5),t.bIt("click",function(){return n.clearInput()}),t.j41(7,"span"),t.EFF(8,"\u2716"),t.k0s(),t.EFF(9," Clear Input"),t.k0s(),t.j41(10,"button",6),t.bIt("click",function(){return n.swapConversion()}),t.j41(11,"span"),t.EFF(12,"\u21c5"),t.k0s(),t.EFF(13," Swap Conversion"),t.k0s()(),t.j41(14,"div",7),t.DNE(15,m,5,1,"div",8)(16,v,5,1,"div",9),t.j41(17,"p",10),t.EFF(18,"Color preview"),t.k0s(),t.nrm(19,"div",11),t.k0s(),t.j41(20,"div",12)(21,"table"),t.DNE(22,_,8,6,"tr",13),t.k0s()()()),2&r&&(t.R7$(3),t.Y8G("ngIf",n.inputSetToHex),t.R7$(),t.Y8G("ngIf",!n.inputSetToHex),t.R7$(11),t.Y8G("ngIf",!n.inputSetToHex),t.R7$(),t.Y8G("ngIf",n.inputSetToHex),t.R7$(3),t.xc7("background",n.color),t.R7$(3),t.Y8G("ngForOf",n.colorShades))},dependencies:[d.Sq,d.bT,g.r,a.me,a.Q0,a.BC,a.vS],styles:[".contentPageOverride[_ngcontent-%COMP%]{width:800px;background-color:var(--content-page-background-color);border:1px solid var(--content-page-border-color);min-height:calc(100vh - 72px);margin:8px auto 0}#hexInput[_ngcontent-%COMP%], #hexOutput[_ngcontent-%COMP%], #rgbOutput[_ngcontent-%COMP%]{width:330px}#rgbRedInput[_ngcontent-%COMP%], #rgbGreenInput[_ngcontent-%COMP%], #rgbBlueInput[_ngcontent-%COMP%]{width:100px}#rgbRedInput[_ngcontent-%COMP%], #rgbGreenInput[_ngcontent-%COMP%]{margin-right:15px}.inputWrapper[_ngcontent-%COMP%], .outputWrapper[_ngcontent-%COMP%]{width:330px;margin:0 auto}.inputWrapper[_ngcontent-%COMP%]{margin-top:15px}.controlsWrapper[_ngcontent-%COMP%]{width:330px;height:50px;margin:0 auto}.buttonStyle[_ngcontent-%COMP%]{float:left;height:35px;line-height:normal}.clear[_ngcontent-%COMP%]{margin-left:4px}.swap[_ngcontent-%COMP%]{padding-top:9px}.colorPreviewLabel[_ngcontent-%COMP%]{margin:6px 0 2px 3px}.colorPreview[_ngcontent-%COMP%]{width:328px;height:65px;border:1px solid var(--input-box-border-color);border-radius:5px}.colorTable[_ngcontent-%COMP%]{width:330px;margin:15px auto 0;text-align:center}.colorTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.colorTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:70px;height:30px;text-align:left;padding-left:3px}.colorTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3){width:20px}@media only screen and (max-width: 1305px){.contentPageOverride[_ngcontent-%COMP%]{float:left;margin:unset;margin-top:8px;margin-left:9px}}@media only screen and (max-width: 1061px){.contentPageOverride[_ngcontent-%COMP%]{width:calc(100% - 262px)}}@media only screen and (max-width: 800px){.contentPageOverride[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px;min-height:calc(100vh - 100px);width:calc(100% - 18px)}}@media only screen and (max-width: 444px){.inputWrapper[_ngcontent-%COMP%]{margin-top:5px}}"]})}}return o})()}];let b=(()=>{class o{static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275mod=t.$C({type:o})}static{this.\u0275inj=t.G2t({imports:[s.iI.forChild(C),s.iI]})}}return o})();var f=p(8241);let I=(()=>{class o{static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275mod=t.$C({type:o})}static{this.\u0275inj=t.G2t({imports:[d.MD,b,f.e]})}}return o})()}}]);