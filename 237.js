"use strict";(self.webpackChunkRandomProject=self.webpackChunkRandomProject||[]).push([[237],{70237:(Y,u,s)=>{s.r(u),s.d(u,{MiscPlutusCalculatorModule:()=>$});var c=s(60177),h=s(66859),d=s(75512),b=s(64791),e=s(54438),m=s(345),f=s(21626),p=s(18326),g=s(37044);function x(n,a){if(1&n&&(e.j41(0,"ng-option",39),e.EFF(1),e.k0s()),2&n){const t=e.XpG().$implicit;e.Y8G("value",t),e.R7$(),e.SpI("\xa0",t.name.padEnd(14,"\xa0"),"")}}function C(n,a){if(1&n&&(e.j41(0,"ng-option",39),e.EFF(1),e.j41(2,"span",40),e.EFF(3),e.nI1(4,"number"),e.k0s()()),2&n){const t=e.XpG().$implicit,o=e.XpG();e.Y8G("value",t),e.R7$(),e.SpI("\xa0",t.name.padEnd(14,"\xa0")," "),e.R7$(2),e.Lme("",o.currencySymbol,"",e.i5U(4,4,t.cost,"1.2-2"),"/m")}}function _(n,a){if(1&n&&(e.qex(0),e.DNE(1,x,2,2,"ng-option",38)(2,C,5,7,"ng-option",38),e.bVm()),2&n){const t=a.$implicit;e.R7$(),e.Y8G("ngIf",0==t.cost),e.R7$(),e.Y8G("ngIf",0!=t.cost)}}function P(n,a){if(1&n&&(e.j41(0,"span",40),e.EFF(1),e.k0s()),2&n){const t=e.XpG().$implicit;e.R7$(),e.SpI("",t.pluRequired," PLU")}}function M(n,a){if(1&n&&(e.j41(0,"ng-option",39),e.EFF(1),e.DNE(2,P,2,1,"span",41),e.k0s()),2&n){const t=a.$implicit;e.Y8G("value",t),e.R7$(),e.SpI("\xa0",t.name.padEnd(14,"\xa0")," "),e.R7$(),e.Y8G("ngIf",0!=t.pluRequired)}}function S(n,a){if(1&n&&(e.j41(0,"span"),e.EFF(1),e.k0s()),2&n){const t=e.XpG().$implicit;e.R7$(),e.SpI("\xa0",t.name,"")}}function T(n,a){1&n&&(e.j41(0,"span"),e.EFF(1,"\xa0"),e.k0s())}function k(n,a){if(1&n&&(e.j41(0,"span"),e.EFF(1),e.nI1(2,"number"),e.DNE(3,T,2,0,"span",17),e.j41(4,"span",40),e.EFF(5),e.k0s()()),2&n){const t=e.XpG().$implicit,o=e.XpG();e.R7$(),e.Lme("\xa0",o.currencySymbol,"",e.i5U(2,4,t.eligibleSpend,"1.0-0"),"/m \xa0\xa0\xa0"),e.R7$(2),e.Y8G("ngIf","10000"!=t.name),e.R7$(2),e.SpI("",t.cost," PLU/yr")}}function y(n,a){if(1&n&&(e.j41(0,"ng-option",39),e.DNE(1,S,2,1,"span",17)(2,k,6,7,"span",17),e.k0s()),2&n){const t=a.$implicit;e.Y8G("value",t),e.R7$(),e.Y8G("ngIf","No Higher Cap"==t.name),e.R7$(),e.Y8G("ngIf","No Higher Cap"!=t.name)}}function v(n,a){1&n&&(e.j41(0,"span"),e.EFF(1,"Show Promotions "),e.k0s())}function w(n,a){1&n&&(e.j41(0,"span"),e.EFF(1,"Hide Promotions "),e.k0s())}function O(n,a){1&n&&(e.j41(0,"p",42),e.EFF(1," With the standard account, you will not earn any rewards. "),e.nrm(2,"br"),e.EFF(3," Please select one of the three subscriptions to get rewards on your spending. "),e.k0s())}function F(n,a){if(1&n){const t=e.RV6();e.qex(0),e.j41(1,"div",45),e.bIt("click",function(){const l=e.eBV(t).index,r=e.XpG(2);return e.Njj(r.togglePromo(l))}),e.j41(2,"span",46),e.EFF(3),e.k0s(),e.j41(4,"span",47),e.EFF(5),e.k0s(),e.j41(6,"p",48),e.EFF(7),e.k0s(),e.j41(8,"a",49),e.EFF(9,"Full terms"),e.k0s()(),e.bVm()}if(2&n){const t=a.$implicit,o=e.XpG(2);e.R7$(),e.Y8G("ngClass",t.enabled?"selected":"notSelected"),e.R7$(2),e.JRh(t.name),e.R7$(2),e.JRh(t.date),e.R7$(2),e.JRh(t.description.replace("#",o.currencySymbol)),e.R7$(),e.FS9("href",t.termsLink,e.B4B)}}const R=n=>({promoRequiredSubOffset:n});function E(n,a){if(1&n&&(e.j41(0,"div",43)(1,"p",44),e.EFF(2," Click on a promotion to enable the benefits "),e.k0s(),e.DNE(3,F,10,5,"ng-container",8),e.k0s()),2&n){const t=e.XpG();e.Y8G("ngClass",e.eq3(2,R,t.showSubRequiredMessage)),e.R7$(3),e.Y8G("ngForOf",t.promos)}}const I=[{path:"",component:(()=>{class n{constructor(t,o,i){this.titleService=t,this.metaService=o,this.http=i,this.url="https://api.coingecko.com/api/v3/simple/price?ids=pluton&vs_currencies=eur%2Cgbp",this.pluPrice={eur:0,gbp:0},this.subscriptionTiers=d.nb,this.subscriptionTiersDefault=JSON.parse(JSON.stringify(d.nb)),this.stackingTiers=d.k_,this.eligibleSpendTiers=d.Pn,this.eligibleSpendTiersDefault=JSON.parse(JSON.stringify(d.Pn)),this.promos=b.j,this.selectedSubscriptionTier=this.subscriptionTiers[0],this.selectedStackingTier=this.stackingTiers[0],this.selectedEligibleSpendTier=this.eligibleSpendTiers[0],this.currencySymbol="\u20ac",this.showSubRequiredMessage=!1,this.showPromotions=!1,this.cashbackRate=0,this.perkCount=0,this.eligibleSpend=0,this.monthlyCashbackValue=0,this.monthlyPerkValue=0,this.totalMonthlyValue=0,this.subscriptionCost=0,this.redeemCost=0,this.totalYearlyValue=0,this.actualTotalYearlyValue=0,this.superChargedPerksValue=[0,0,0],this.superChargedPerksActualValue=[0,0,0],this.goldenTicketReferralsValue=[0,0,0],this.goldenTicketReferralsActualValue=[0,0,0],this.doubleRewardsVoucherValue=[0,0,0],this.doubleRewardsVoucherActualValue=[0,0,0],this.originalBenefitsValue=[0,0,0],this.superChargedPerksTotalCalc=!0,this.superChargedPerksActualTotalCalc=!1,this.goldenTicketReferralsTotalCalc=!0,this.goldenTicketReferralsActualTotalCalc=!1,this.doubleRewardsVoucherTotalCalc=!0,this.doubleRewardsVoucherActualTotalCalc=!1,this.totalValue=[0,0,0],this.totalActualValue=[0,0,0],this.totalValueMinusCost=[0,0,0],this.totalOriginalBenefits=[0,0,0]}ngOnInit(){this.titleService.setTitle("Plutus Subscriptions & Reward Levels"),this.metaService.updateTag({name:"description",content:"Community calculator for Plutus Subscriptions & Reward Levels"}),this.metaService.getTag("name='robots'")?this.metaService.updateTag({name:"robots",content:"noindex, follow"}):this.metaService.addTag({name:"robots",content:"noindex, follow"}),this.initialise()}ngOnDestroy(){this.titleService.setTitle("Random Stuff")}initialise(){localStorage.getItem("pluCurrencySymbol")&&(this.currencySymbol=localStorage.getItem("pluCurrencySymbol")),this.fetchPluPrice(),this.applyPromos()}fetchPluPrice(){this.http.get(this.url).subscribe(o=>{this.pluPrice=o.pluton}),this.calculateRedeemCost()}getPrices(){return this.http.get(this.url)}subscriptionTierChange(t){this.calculate()}stackingTierChange(t){this.calculate()}eligibleSpendTierChange(t){this.calculate()}averageSpendChange(t){this.averageMonthlySpend<0&&(this.averageMonthlySpend=void 0),this.calculate()}togglePromoVisiblity(){this.showPromotions=!this.showPromotions}togglePromo(t){this.promos[t].enabled=!this.promos[t].enabled,this.promos[3].enabled||this.promos[4].enabled?this.selectedEligibleSpendTier=this.eligibleSpendTiers[4]:this.promos[2].enabled?this.selectedEligibleSpendTier=this.eligibleSpendTiers[3]:this.promos[1].enabled?this.selectedEligibleSpendTier=this.eligibleSpendTiers[2]:this.promos[5].enabled&&(this.selectedEligibleSpendTier=this.eligibleSpendTiers[1]),this.applyPromos()}applyPromos(){for(let t=0;t<this.eligibleSpendTiers.length;t++)this.eligibleSpendTiers[t].cost=this.eligibleSpendTiersDefault[t].cost;for(let t=0;t<this.subscriptionTiers.length;t++)this.subscriptionTiers[t].cost=this.subscriptionTiersDefault[t].cost;if(this.promos[0].enabled)for(let t=0;t<this.subscriptionTiers.length;t++)0!=this.subscriptionTiers[t].cost&&(this.subscriptionTiers[t].cost=.83333*this.subscriptionTiers[t].cost);if(this.promos[1].enabled&&this.eligibleSpendTiers.findIndex(t=>"2000"==t.name)>0&&(this.eligibleSpendTiers[this.eligibleSpendTiers.findIndex(t=>"2000"==t.name)].cost=0),this.promos[2].enabled&&this.eligibleSpendTiers.findIndex(t=>"5000"==t.name)>0&&(this.eligibleSpendTiers[this.eligibleSpendTiers.findIndex(t=>"5000"==t.name)].cost=0),this.promos[3].enabled&&this.eligibleSpendTiers.findIndex(t=>"10000"==t.name)>0&&(this.eligibleSpendTiers[this.eligibleSpendTiers.findIndex(t=>"10000"==t.name)].cost=0),this.promos[4].enabled&&this.eligibleSpendTiers.findIndex(t=>"10000"==t.name)>0&&(this.eligibleSpendTiers[this.eligibleSpendTiers.findIndex(t=>"10000"==t.name)].cost=0),this.promos[5].enabled&&this.eligibleSpendTiers.findIndex(t=>"1000"==t.name)>0&&(this.eligibleSpendTiers[this.eligibleSpendTiers.findIndex(t=>"1000"==t.name)].cost=0),this.promos[6].enabled)for(let t=0;t<this.eligibleSpendTiers.length;t++)0!=this.eligibleSpendTiers[t].cost&&(this.eligibleSpendTiers[t].cost=this.eligibleSpendTiers[t].cost/2);this.calculate()}calculate(){this.calculateCashbackRate(),this.calculatePerkCount(),this.calculateEligibleSpend(),this.calculateMonthlyCashback(),this.calculateMonthlyPerkValue(),this.calculateTotalMonthlyValue(),this.calculateTotalYearlyValue(),this.calculateSubscriptionCost(),this.calculateRedeemCost(),this.calculateActualTotalYearlyValue(),this.showSubRequiredMessage=this.selectedSubscriptionTier==this.subscriptionTiers[0]&&(this.selectedStackingTier!=this.stackingTiers[0]||this.selectedEligibleSpendTier!=this.eligibleSpendTiers[0])}calculateCashbackRate(){this.cashbackRate="None"===this.selectedStackingTier.name?"Standard Account"===this.selectedSubscriptionTier.name?0:this.selectedSubscriptionTier.cashbackPercentage:this.selectedStackingTier.cashbackPercentage}calculatePerkCount(){this.perkCount=this.selectedSubscriptionTier.perkCount+this.selectedStackingTier.perkCount}calculateEligibleSpend(){this.eligibleSpend=this.selectedSubscriptionTier.eligibleSpend+this.selectedEligibleSpendTier.eligibleSpend}calculateMonthlyCashback(){this.monthlyCashbackValue="Standard Account"!==this.selectedSubscriptionTier.name?this.averageMonthlySpend>this.eligibleSpend||null==this.averageMonthlySpend||0==this.averageMonthlySpend?this.eligibleSpend*(this.cashbackRate/100):this.averageMonthlySpend*(this.cashbackRate/100):0}calculateMonthlyPerkValue(){this.monthlyPerkValue="Standard Account"!==this.selectedSubscriptionTier.name?10*this.perkCount:0}calculateTotalMonthlyValue(){this.totalMonthlyValue=this.monthlyCashbackValue+this.monthlyPerkValue}calculateTotalYearlyValue(){this.totalYearlyValue=12*this.totalMonthlyValue}calculateSubscriptionCost(){this.subscriptionCost=12*this.selectedSubscriptionTier.cost}calculateRedeemCost(){this.redeemCost="\u20ac"===this.currencySymbol?this.selectedEligibleSpendTier.cost*this.pluPrice.eur:this.selectedEligibleSpendTier.cost*this.pluPrice.gbp}calculateActualTotalYearlyValue(){this.actualTotalYearlyValue=this.totalYearlyValue-this.subscriptionCost-this.redeemCost}changeCurrency(){this.currencySymbol="\u20ac"===this.currencySymbol?"\xa3":"\u20ac",localStorage.setItem("pluCurrencySymbol",this.currencySymbol),this.calculate()}static{this.\u0275fac=function(o){return new(o||n)(e.rXU(m.hE),e.rXU(m.W8),e.rXU(f.Qq))}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-misc-plutus-calculator"]],decls:122,vars:55,consts:[[1,"contentPageOverride"],[1,"currencyButton",3,"click"],[1,"title"],[1,"infoTextTop"],[1,"inputWrapper"],[1,"inputLabelWrapper"],["for","subscriptionTier"],["name","subscriptionTier",3,"searchable","clearable","ngModel","ngModelChange","change"],[4,"ngFor","ngForOf"],["for","stackingTier"],["name","stackingTier",3,"searchable","clearable","ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],["for","eligibleSpendTier"],["name","eligibleSpendTier",3,"searchable","clearable","ngModel","ngModelChange","change"],[1,"secondaryInputWrapper"],["type","number","min","0","max","20000","placeholder","Enter Average Monthly Spend",1,"averageSpendInput",3,"ngModel","ngModelChange","input"],[1,"promoButton",3,"click"],[4,"ngIf"],[3,"ngClass"],["class","requiredSubInfo",4,"ngIf"],["class","promoSelectionScreen",3,"ngClass",4,"ngIf"],[1,"overview"],[1,"overviewItem"],[1,"contentPageOverride","contentpageSecondaryColor"],[1,"outputWrapper"],[1,"headerBackDrop"],[1,"header"],[1,"values"],[1,"explainer"],[1,"explainerTitle"],[1,"explainerText"],[1,"contentPageOverride","contentpageTertiaryColor"],[1,"importantNotes"],[1,"notesTitle"],[1,"noteItem"],[1,"noteCheckmarkWrapper"],[1,"noteCheckMark"],[1,"noteText"],[3,"value",4,"ngIf"],[3,"value"],[1,"optionSmallText"],["class","optionSmallText",4,"ngIf"],[1,"requiredSubInfo"],[1,"promoSelectionScreen",3,"ngClass"],[1,"promoHeader"],[1,"promoItem",3,"ngClass","click"],[1,"promoTitle"],[1,"promoDate"],[1,"promoInfo"],["target","_blank",1,"promoTerms",3,"href"]],template:function(o,i){1&o&&(e.j41(0,"div",0)(1,"button",1),e.bIt("click",function(){return i.changeCurrency()}),e.EFF(2,"Switch \xa3/\u20ac"),e.k0s(),e.j41(3,"p",2),e.EFF(4,"Pluton Rewards Calculator (OLD)"),e.k0s(),e.j41(5,"p",3),e.EFF(6," This is a community-created calculator based on the subscriptions and "),e.j41(7,"span"),e.EFF(8,"OLD"),e.k0s(),e.EFF(9," reward levels of Plutus. "),e.k0s(),e.j41(10,"div",4)(11,"div",5)(12,"label",6),e.EFF(13,"Subscription Plan"),e.k0s(),e.j41(14,"ng-select",7),e.bIt("ngModelChange",function(r){return i.selectedSubscriptionTier=r})("change",function(r){return i.subscriptionTierChange(r)}),e.DNE(15,_,3,2,"ng-container",8),e.k0s()(),e.j41(16,"div",5)(17,"label",9),e.EFF(18,"Reward Levels"),e.k0s(),e.j41(19,"ng-select",10),e.bIt("ngModelChange",function(r){return i.selectedStackingTier=r})("change",function(r){return i.stackingTierChange(r)}),e.DNE(20,M,3,3,"ng-option",11),e.k0s()(),e.j41(21,"div",5)(22,"label",12),e.EFF(23,"Rewards Cap"),e.k0s(),e.j41(24,"ng-select",13),e.bIt("ngModelChange",function(r){return i.selectedEligibleSpendTier=r})("change",function(r){return i.eligibleSpendTierChange(r)}),e.DNE(25,y,3,3,"ng-option",11),e.k0s()()(),e.j41(26,"div",14)(27,"input",15),e.bIt("ngModelChange",function(r){return i.averageMonthlySpend=r})("input",function(r){return i.averageSpendChange(r)}),e.k0s(),e.j41(28,"button",16),e.bIt("click",function(){return i.togglePromoVisiblity()}),e.DNE(29,v,2,0,"span",17)(30,w,2,0,"span",17),e.nrm(31,"div",18),e.k0s()(),e.DNE(32,O,4,0,"p",19)(33,E,4,4,"div",20),e.j41(34,"div",21)(35,"div",22)(36,"h1"),e.EFF(37),e.k0s(),e.j41(38,"h5"),e.EFF(39,"REWARDS"),e.k0s()(),e.j41(40,"div",22)(41,"h1"),e.EFF(42),e.k0s(),e.j41(43,"h5"),e.EFF(44,"PERKS"),e.k0s()(),e.j41(45,"div",22)(46,"h1"),e.EFF(47),e.nI1(48,"number"),e.k0s(),e.j41(49,"h5"),e.EFF(50,"REWARDS CAP"),e.k0s()()()(),e.j41(51,"div",23)(52,"div",24)(53,"div",25)(54,"div",26)(55,"p"),e.EFF(56,"Monthly Rewards"),e.k0s(),e.j41(57,"p"),e.EFF(58,"Monthly Perks"),e.k0s(),e.j41(59,"p"),e.EFF(60,"Total Monthly Value"),e.k0s(),e.j41(61,"p"),e.EFF(62,"Subscription Cost "),e.j41(63,"span"),e.EFF(64,"(Yearly)"),e.k0s()(),e.j41(65,"p"),e.EFF(66,"Redeem Cost "),e.j41(67,"span"),e.EFF(68,"(Yearly)"),e.k0s()(),e.j41(69,"p"),e.EFF(70,"Earn Yearly Value "),e.j41(71,"span"),e.EFF(72,"(Costs Subtracted)"),e.k0s()()()(),e.j41(73,"div",27)(74,"p"),e.EFF(75),e.nI1(76,"number"),e.k0s(),e.j41(77,"p"),e.EFF(78),e.nI1(79,"number"),e.k0s(),e.j41(80,"p"),e.EFF(81),e.nI1(82,"number"),e.k0s(),e.j41(83,"p"),e.EFF(84),e.nI1(85,"number"),e.k0s(),e.j41(86,"p"),e.EFF(87),e.nI1(88,"number"),e.k0s(),e.j41(89,"p"),e.EFF(90),e.nI1(91,"number"),e.k0s()()()(),e.j41(92,"div",0)(93,"div",28)(94,"div",29),e.EFF(95,"Subscription Plan"),e.k0s(),e.j41(96,"div",30),e.EFF(97,"To earn rewards and perks, you must sign up for a monthly subscription plan."),e.k0s(),e.j41(98,"div",29),e.EFF(99,"Reward Levels"),e.k0s(),e.j41(100,"div",30),e.EFF(101,"Stack your earned PLU to unlock higher reward rates and additional perks as you progress through Reward Levels."),e.k0s(),e.j41(102,"div",29),e.EFF(103,"Rewards Cap"),e.k0s(),e.j41(104,"div",30),e.EFF(105,"Increase your monthly spending eligible for rewards by redeeming earned PLU. Redeemed PLU goes back to the Rewards Pool for sustainability."),e.k0s()()(),e.j41(106,"div",31)(107,"div",32)(108,"p",33),e.EFF(109,"Important Notes"),e.k0s(),e.j41(110,"div",34)(111,"div",35)(112,"span",36),e.EFF(113,"\u2713"),e.k0s()(),e.j41(114,"div",37),e.EFF(115," The redemption cost for boosting rewards cap is determined by customer-set values on third-party platforms. "),e.k0s()(),e.j41(116,"div",34)(117,"div",35)(118,"span",36),e.EFF(119,"\u2713"),e.k0s()(),e.j41(120,"div",37),e.EFF(121," The PLU needed for Reward Levels is not considered a cost, as customers keep both their stack and rewards in personal wallets, available for swapping at any time. "),e.k0s()()()()),2&o&&(e.R7$(14),e.Y8G("searchable",!1)("clearable",!1)("ngModel",i.selectedSubscriptionTier),e.R7$(),e.Y8G("ngForOf",i.subscriptionTiers),e.R7$(4),e.Y8G("searchable",!1)("clearable",!1)("ngModel",i.selectedStackingTier),e.R7$(),e.Y8G("ngForOf",i.stackingTiers),e.R7$(4),e.Y8G("searchable",!1)("clearable",!1)("ngModel",i.selectedEligibleSpendTier),e.R7$(),e.Y8G("ngForOf",i.eligibleSpendTiers),e.R7$(2),e.Y8G("ngModel",i.averageMonthlySpend),e.R7$(2),e.Y8G("ngIf",!i.showPromotions),e.R7$(),e.Y8G("ngIf",i.showPromotions),e.R7$(),e.Y8G("ngClass",i.showPromotions?"arrow-up":"arrow-down"),e.R7$(),e.Y8G("ngIf",i.showSubRequiredMessage),e.R7$(),e.Y8G("ngIf",i.showPromotions),e.R7$(4),e.SpI("",i.cashbackRate,"%"),e.R7$(5),e.JRh(i.perkCount),e.R7$(5),e.Lme("",i.currencySymbol,"",e.i5U(48,34,i.eligibleSpend,"1.0-0"),"/m"),e.R7$(28),e.Lme("",i.currencySymbol,"",e.i5U(76,37,i.monthlyCashbackValue,"1.2-2"),""),e.R7$(3),e.Lme("",i.currencySymbol,"",e.i5U(79,40,i.monthlyPerkValue,"1.2-2"),""),e.R7$(3),e.Lme("",i.currencySymbol,"",e.i5U(82,43,i.totalMonthlyValue,"1.2-2"),""),e.R7$(3),e.Lme("",i.currencySymbol,"",e.i5U(85,46,i.subscriptionCost,"1.2-2"),""),e.R7$(3),e.Lme("",i.currencySymbol,"",e.i5U(88,49,i.redeemCost,"1.2-2"),""),e.R7$(3),e.Lme("",i.currencySymbol,"",e.i5U(91,52,i.actualTotalYearlyValue,"1.2-2"),""))},dependencies:[c.YU,c.Sq,c.bT,p.me,p.Q0,p.BC,p.VZ,p.zX,p.vS,g.vr,g.xt,c.QX],styles:[".contentPageOverride[_ngcontent-%COMP%]{width:100%;background-color:#fff;position:relative;z-index:2}.contentpageSecondaryColor[_ngcontent-%COMP%]{background-color:#f5f9ff;z-index:1}.contentpageTertiaryColor[_ngcontent-%COMP%]{background-color:#2649ec;z-index:3}.currencyButton[_ngcontent-%COMP%]{background-color:#2649ec;border:none;color:#fff;padding:5px 8px;text-align:center;font-size:16px;margin:8px 8px 0 0;outline:none;position:absolute;top:0;right:0;cursor:pointer}.title[_ngcontent-%COMP%]{padding-top:70px;padding-bottom:30px;margin:0;text-align:center;font-size:38px;color:#2649ec}.infoTextTop[_ngcontent-%COMP%]{text-align:center;margin:0 auto 20px;padding-right:10px;padding-left:10px;font-size:14px;max-width:400px;color:#848d9c}.infoTextTop[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700}.inputWrapper[_ngcontent-%COMP%]{width:762px;margin:70px auto 20px;height:100px}.inputLabelWrapper[_ngcontent-%COMP%]{float:left}.inputWrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#2649ec;font-weight:700;font-size:20px;margin-left:12px;margin-bottom:10px}.ng-select[_ngcontent-%COMP%]{border:0px;min-height:0px;border-radius:0;width:230px;height:40px;font-family:monospace;font-size:14px;font-weight:700;margin-left:12px;margin-right:12px}  .ng-select-container{border:1px solid #0921B4!important;border-radius:30px!important;height:40px!important}  .ng-placeholder{color:#172a46!important}  .ng-dropdown-panel{border-radius:10px!important;transform:translateY(1px)!important}  .ng-option:first-child{border-top-left-radius:10px!important;border-top-right-radius:10px!important}  .ng-option:last-child{border-bottom-left-radius:10px!important;border-bottom-right-radius:10px!important}.secondaryInputWrapper[_ngcontent-%COMP%]{width:762px;margin:0 auto;text-align:center}.averageSpendInput[_ngcontent-%COMP%]{width:208px;border:1px solid #0921B4;border-radius:30px;height:36px;padding-left:18px;margin-right:24px}.averageSpendInput[_ngcontent-%COMP%]:focus{outline:none}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}.promoButton[_ngcontent-%COMP%]{width:230px;background-color:transparent;border:1px solid #0921B4;border-radius:30px;height:40px;font-family:monospace;font-size:14px;font-weight:700}.requiredSubInfo[_ngcontent-%COMP%]{position:absolute;left:0;right:0;width:100%;max-width:400px;margin:0 auto;transform:translateY(23px);text-align:center;font-size:14px;color:#848d9c}.promoSelectionScreen[_ngcontent-%COMP%]{margin:30px auto 0;width:762px;padding-bottom:16px;background-color:#fbfbfb;border-radius:8px;color:#000;z-index:1001;text-align:center}.promoRequiredSubOffset[_ngcontent-%COMP%]{margin-top:90px}.promoHeader[_ngcontent-%COMP%]{margin:0;padding:15px 10px 0;font-size:17px;font-weight:700;color:#2649ec}.promoItem[_ngcontent-%COMP%]{position:relative;display:inline-block;vertical-align:top;width:351px;height:180px;margin:20px 10px 0;background-color:#fff;border-radius:8px;box-shadow:-1px 0 25px -18px #0000006b;-webkit-box-shadow:-1px 0px 25px -18px rgba(0,0,0,.42);-moz-box-shadow:-1px 0px 25px -18px rgba(0,0,0,.42)}.promoTitle[_ngcontent-%COMP%]{float:left;width:300px;margin:20px 0 0 20px;text-align:left;font-size:18px}.promoDate[_ngcontent-%COMP%]{float:left;width:250px;margin:2px 0 0 28px;text-align:left;font-size:13px}.promoInfo[_ngcontent-%COMP%]{float:left;width:310px;margin:5px 0 0 20px;text-align:left;color:#848d9c}.promoTerms[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;font-size:11px;margin:0 10px 5px 0;color:#c2c6ce;text-decoration:underline}.selected[_ngcontent-%COMP%]{border:2px solid #0921B4}.notSelected[_ngcontent-%COMP%]{border:2px solid white}.arrow-up[_ngcontent-%COMP%]{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #999999;transform:translateY(-1px)}.arrow-down[_ngcontent-%COMP%]{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #999999;transform:translateY(-1px)}.overview[_ngcontent-%COMP%]{clear:both;display:flex;align-items:center;width:738px;padding-left:12px;padding-right:12px;height:180px;margin:0 auto;justify-content:space-around;text-align:center;transform:translateY(50%)}.overviewItem[_ngcontent-%COMP%]{background-color:#001271;border-radius:20px;width:236px;height:170px}.overviewItem[_ngcontent-%COMP%]:nth-child(-n+2){margin-right:15px}.overviewItem[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:45px 0 0;padding:9px 12px 7px;display:inline-block;background-color:#0923b5;border-radius:6px;font-weight:lighter;min-width:80px}.overviewItem[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:30px 0 0;font-weight:700}.optionSmallText[_ngcontent-%COMP%]{font-size:14px;color:#848d9c}.outputWrapper[_ngcontent-%COMP%]{display:flex;align-items:center;width:762px;margin:0 auto;justify-content:center;text-align:center;padding-top:150px;padding-bottom:100px}.headerBackDrop[_ngcontent-%COMP%]{background:linear-gradient(to right,#f5f9ff 50%,#fff 50%)}.header[_ngcontent-%COMP%]{background-color:#2649ea;border-radius:20px;width:375px;margin-left:12px;box-shadow:0 7px 26px 4px #2649ea54;z-index:999;padding-top:20px;padding-bottom:20px}.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:19px;margin:0;padding:18px 10px 12px 34px;text-align:left;font-weight:lighter}.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:right;font-size:12px;color:#f3f4f5;transform:translateY(5px);padding:0 20px}.header[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border:1px solid transparent}.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{border-bottom:1px solid transparent}.values[_ngcontent-%COMP%]{background-color:#fff;border-radius:0 20px 20px 0;z-index:-1;width:375px;margin-right:12px;padding-top:20px;padding-bottom:20px}.values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{-webkit-font-smoothing:antialiased;font-size:19px;margin:0;padding:18px 10px 12px 34px;color:#172a46}.values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{border-bottom:1px solid #EEEEEE}hr[_ngcontent-%COMP%]{margin:0}.values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child, .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{border-bottom:none}.explainer[_ngcontent-%COMP%]{padding-top:97px;padding-bottom:120px;width:738px;margin:0 auto;min-height:300px}.explainerTitle[_ngcontent-%COMP%]{color:#2649ec;font-weight:700;width:300px;margin-left:30px;float:left;font-size:19px;height:90px}.explainerText[_ngcontent-%COMP%]{color:#848d9c;width:378px;float:left;margin-right:30px;font-size:14px;height:90px}.importantNotes[_ngcontent-%COMP%]{width:738px;height:200px;background-color:#fff;border-radius:20px;margin:0 auto;padding-top:0;font-size:12px;transform:translateY(-50%);box-shadow:-1px 0 25px -18px #0000006b;-webkit-box-shadow:-1px 0px 25px -18px rgba(0,0,0,.42);-moz-box-shadow:-1px 0px 25px -18px rgba(0,0,0,.42)}.notesTitle[_ngcontent-%COMP%]{color:#2649ec;font-weight:700;font-size:19px;text-align:center;width:100%;margin:0;padding-top:40px;padding-bottom:40px}.noteItem[_ngcontent-%COMP%]{color:#848d9c;float:left;width:50%}.noteCheckmarkWrapper[_ngcontent-%COMP%]{width:18%;float:left;text-align:center}.noteCheckMark[_ngcontent-%COMP%]{display:inline-block;font-weight:700;background-color:#2649ec;color:#fff;font-family:monospace;border-radius:50%;padding:2px 6px;margin-left:15px;transform:translateY(-3px)}.noteText[_ngcontent-%COMP%]{width:75%;float:left;font-size:14px}@media only screen and (max-width: 761px){.inputWrapper[_ngcontent-%COMP%]{margin-top:30px;width:254px;text-align:center;height:250px}.inputLabelWrapper[_ngcontent-%COMP%]{padding-top:10px}.inputWrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:5px}.secondaryInputWrapper[_ngcontent-%COMP%]{width:254px;margin-top:24px;margin-bottom:10px}.averageSpendInput[_ngcontent-%COMP%]{margin:0 0 31px}.requiredSubInfo[_ngcontent-%COMP%]{position:relative;transform:translateY(5px)}.promoButton[_ngcontent-%COMP%]{width:230px}.promoSelectionScreen[_ngcontent-%COMP%]{width:430px;padding-bottom:38px}.overview[_ngcontent-%COMP%]{display:inline-block;width:100%;height:auto;transform:none;padding:5px 0 25px}.overviewItem[_ngcontent-%COMP%]{margin:20px auto 0;height:105px}.overviewItem[_ngcontent-%COMP%]:nth-child(-n+2){margin-right:auto}.overviewItem[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:15px}.overviewItem[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-top:10px}.outputWrapper[_ngcontent-%COMP%]{width:100%;padding-top:25px;padding-bottom:25px}.header[_ngcontent-%COMP%]{width:230px}.values[_ngcontent-%COMP%]{width:200px;padding-top:9px;padding-bottom:9px}.values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:18px 0 12px}.values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{padding-bottom:34px}.explainer[_ngcontent-%COMP%]{min-height:300px;width:300px;padding-top:35px;margin:0 auto}.explainerTitle[_ngcontent-%COMP%]{width:200px;float:none;height:auto;margin-left:0;padding-bottom:5px}.explainerText[_ngcontent-%COMP%]{width:290px;float:none;margin-right:0;padding-left:10px;height:auto;padding-bottom:20px}.importantNotes[_ngcontent-%COMP%]{width:430px;height:225px}.notesTitle[_ngcontent-%COMP%]{padding-top:20px;padding-bottom:20px}.noteCheckmarkWrapper[_ngcontent-%COMP%]{width:30px;margin-right:10px}.noteCheckMark[_ngcontent-%COMP%]{margin-left:0}.noteText[_ngcontent-%COMP%]{width:300px}.noteItem[_ngcontent-%COMP%]{width:340px;margin:0 auto;float:none;height:48px;padding-bottom:25px}}@media only screen and (max-width: 453px){.promoSelectionScreen[_ngcontent-%COMP%]{width:100%}.promoItem[_ngcontent-%COMP%], .promoInfo[_ngcontent-%COMP%], .importantNotes[_ngcontent-%COMP%]{width:calc(100% - 24px)}.noteItem[_ngcontent-%COMP%]{width:calc(100% - 24px);margin:0 auto;float:none;height:48px;padding-bottom:25px}.noteText[_ngcontent-%COMP%]{width:calc(100% - 40px)}}@media only screen and (max-width: 353px){.importantNotes[_ngcontent-%COMP%]{height:240px}}"]})}}return n})()}];let j=(()=>{class n{static{this.\u0275fac=function(o){return new(o||n)}}static{this.\u0275mod=e.$C({type:n})}static{this.\u0275inj=e.G2t({imports:[h.iI.forChild(I),h.iI]})}}return n})();var V=s(33439);let $=(()=>{class n{static{this.\u0275fac=function(o){return new(o||n)}}static{this.\u0275mod=e.$C({type:n})}static{this.\u0275inj=e.G2t({imports:[c.MD,V.G,j,g.MQ,p.YN]})}}return n})()}}]);