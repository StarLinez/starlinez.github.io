"use strict";(self.webpackChunkRandomProject=self.webpackChunkRandomProject||[]).push([[213],{70213:(J,u,l)=>{l.r(u),l.d(u,{MiscPlutusCalculatorModule:()=>V});var c=l(96814),h=l(15251),g=l(77396),x=l(52066),e=l(52425),m=l(6593),b=l(69862),p=l(40285),d=l(31501);function f(n,a){if(1&n&&(e.TgZ(0,"ng-option",39),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.Q6J("value",t),e.xp6(1),e.hij("\xa0",t.name.padEnd(14,"\xa0"),"")}}function _(n,a){if(1&n&&(e.TgZ(0,"ng-option",39),e._uU(1),e.TgZ(2,"span",40),e._uU(3),e.ALo(4,"number"),e.qZA()()),2&n){const t=e.oxw().$implicit,o=e.oxw();e.Q6J("value",t),e.xp6(1),e.hij("\xa0",t.name.padEnd(14,"\xa0")," "),e.xp6(2),e.AsE("",o.currencySymbol,"",e.xi3(4,4,t.cost,"1.2-2"),"/m")}}function C(n,a){if(1&n&&(e.ynx(0),e.YNc(1,f,2,2,"ng-option",38)(2,_,5,7,"ng-option",38),e.BQk()),2&n){const t=a.$implicit;e.xp6(1),e.Q6J("ngIf",0==t.cost),e.xp6(1),e.Q6J("ngIf",0!=t.cost)}}function T(n,a){if(1&n&&(e.TgZ(0,"span",40),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.hij("",t.pluRequired," PLU")}}function P(n,a){if(1&n&&(e.TgZ(0,"ng-option",39),e._uU(1),e.YNc(2,T,2,1,"span",41),e.qZA()),2&n){const t=a.$implicit;e.Q6J("value",t),e.xp6(1),e.hij("\xa0",t.name.padEnd(14,"\xa0")," "),e.xp6(1),e.Q6J("ngIf",0!=t.pluRequired)}}function M(n,a){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.hij("\xa0",t.name,"")}}function S(n,a){1&n&&(e.TgZ(0,"span"),e._uU(1,"\xa0"),e.qZA())}function y(n,a){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"number"),e.YNc(3,S,2,0,"span",17),e.TgZ(4,"span",40),e._uU(5),e.qZA()()),2&n){const t=e.oxw().$implicit,o=e.oxw();e.xp6(1),e.AsE("\xa0",o.currencySymbol,"",e.xi3(2,4,t.eligibleSpend,"1.0-0"),"/m \xa0\xa0\xa0"),e.xp6(2),e.Q6J("ngIf","10000"!=t.name),e.xp6(2),e.hij("",t.cost," PLU/yr")}}function w(n,a){if(1&n&&(e.TgZ(0,"ng-option",39),e.YNc(1,M,2,1,"span",17)(2,y,6,7,"span",17),e.qZA()),2&n){const t=a.$implicit;e.Q6J("value",t),e.xp6(1),e.Q6J("ngIf","No Higher Cap"==t.name),e.xp6(1),e.Q6J("ngIf","No Higher Cap"!=t.name)}}function v(n,a){1&n&&(e.TgZ(0,"span"),e._uU(1,"Show Promotions "),e.qZA())}function O(n,a){1&n&&(e.TgZ(0,"span"),e._uU(1,"Hide Promotions "),e.qZA())}function Z(n,a){1&n&&(e.TgZ(0,"p",42),e._uU(1," With the standard account, you will not earn any rewards. "),e._UZ(2,"br"),e._uU(3," Please select one of the three subscriptions to get rewards on your spending. "),e.qZA())}function k(n,a){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",45),e.NdJ("click",function(){const s=e.CHM(t).index,r=e.oxw(2);return e.KtG(r.togglePromo(s))}),e.TgZ(2,"span",46),e._uU(3),e.qZA(),e.TgZ(4,"span",47),e._uU(5),e.qZA(),e.TgZ(6,"p",48),e._uU(7),e.qZA(),e.TgZ(8,"a",49),e._uU(9,"Full terms"),e.qZA()(),e.BQk()}if(2&n){const t=a.$implicit,o=e.oxw(2);e.xp6(1),e.Q6J("ngClass",t.enabled?"selected":"notSelected"),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.date),e.xp6(2),e.Oqu(t.description.replace("#",o.currencySymbol)),e.xp6(1),e.s9C("href",t.termsLink,e.LSH)}}const A=n=>({promoRequiredSubOffset:n});function q(n,a){if(1&n&&(e.TgZ(0,"div",43)(1,"p",44),e._uU(2," Click on a promotion to enable the benefits "),e.qZA(),e.YNc(3,k,10,5,"ng-container",8),e.qZA()),2&n){const t=e.oxw();e.Q6J("ngClass",e.VKq(2,A,t.showSubRequiredMessage)),e.xp6(3),e.Q6J("ngForOf",t.promos)}}const U=[{path:"",component:(()=>{class n{constructor(t,o,i){this.titleService=t,this.metaService=o,this.http=i,this.url="https://api.coingecko.com/api/v3/simple/price?ids=pluton&vs_currencies=eur%2Cgbp",this.pluPrice={eur:0,gbp:0},this.subscriptionTiers=g.bR,this.subscriptionTiersDefault=JSON.parse(JSON.stringify(g.bR)),this.stackingTiers=g.F3,this.eligibleSpendTiers=g.Kl,this.eligibleSpendTiersDefault=JSON.parse(JSON.stringify(g.Kl)),this.promos=x.a,this.selectedSubscriptionTier=this.subscriptionTiers[0],this.selectedStackingTier=this.stackingTiers[0],this.selectedEligibleSpendTier=this.eligibleSpendTiers[0],this.currencySymbol="\u20ac",this.showSubRequiredMessage=!1,this.showPromotions=!1,this.cashbackRate=0,this.perkCount=0,this.eligibleSpend=0,this.monthlyCashbackValue=0,this.monthlyPerkValue=0,this.totalMonthlyValue=0,this.subscriptionCost=0,this.redeemCost=0,this.totalYearlyValue=0,this.actualTotalYearlyValue=0,this.superChargedPerksValue=[0,0,0],this.superChargedPerksActualValue=[0,0,0],this.goldenTicketReferralsValue=[0,0,0],this.goldenTicketReferralsActualValue=[0,0,0],this.doubleRewardsVoucherValue=[0,0,0],this.doubleRewardsVoucherActualValue=[0,0,0],this.originalBenefitsValue=[0,0,0],this.superChargedPerksTotalCalc=!0,this.superChargedPerksActualTotalCalc=!1,this.goldenTicketReferralsTotalCalc=!0,this.goldenTicketReferralsActualTotalCalc=!1,this.doubleRewardsVoucherTotalCalc=!0,this.doubleRewardsVoucherActualTotalCalc=!1,this.totalValue=[0,0,0],this.totalActualValue=[0,0,0],this.totalValueMinusCost=[0,0,0],this.totalOriginalBenefits=[0,0,0]}ngOnInit(){this.titleService.setTitle("Plutus Subscriptions & Reward Levels"),this.metaService.updateTag({name:"description",content:"Community calculator for Plutus Subscriptions & Reward Levels"}),this.metaService.getTag("name='robots'")?this.metaService.updateTag({name:"robots",content:"noindex, follow"}):this.metaService.addTag({name:"robots",content:"noindex, follow"}),this.initialise()}ngOnDestroy(){this.titleService.setTitle("Random Stuff")}initialise(){localStorage.getItem("pluCurrencySymbol")&&(this.currencySymbol=localStorage.getItem("pluCurrencySymbol")),this.fetchPluPrice(),this.applyPromos()}fetchPluPrice(){this.http.get(this.url).subscribe(o=>{this.pluPrice=o.pluton}),this.calculateRedeemCost()}getPrices(){return this.http.get(this.url)}subscriptionTierChange(t){this.calculate()}stackingTierChange(t){this.calculate()}eligibleSpendTierChange(t){this.calculate()}averageSpendChange(t){this.averageMonthlySpend<0&&(this.averageMonthlySpend=void 0),this.calculate()}togglePromoVisiblity(){this.showPromotions=!this.showPromotions}togglePromo(t){this.promos[t].enabled=!this.promos[t].enabled,this.promos[3].enabled||this.promos[4].enabled?this.selectedEligibleSpendTier=this.eligibleSpendTiers[4]:this.promos[2].enabled?this.selectedEligibleSpendTier=this.eligibleSpendTiers[3]:this.promos[1].enabled?this.selectedEligibleSpendTier=this.eligibleSpendTiers[2]:this.promos[5].enabled&&(this.selectedEligibleSpendTier=this.eligibleSpendTiers[1]),this.applyPromos()}applyPromos(){for(let t=0;t<this.eligibleSpendTiers.length;t++)this.eligibleSpendTiers[t].cost=this.eligibleSpendTiersDefault[t].cost;for(let t=0;t<this.subscriptionTiers.length;t++)this.subscriptionTiers[t].cost=this.subscriptionTiersDefault[t].cost;if(this.promos[0].enabled)for(let t=0;t<this.subscriptionTiers.length;t++)0!=this.subscriptionTiers[t].cost&&(this.subscriptionTiers[t].cost=.83333*this.subscriptionTiers[t].cost);if(this.promos[1].enabled&&this.eligibleSpendTiers.findIndex(t=>"2000"==t.name)>0&&(this.eligibleSpendTiers[this.eligibleSpendTiers.findIndex(t=>"2000"==t.name)].cost=0),this.promos[2].enabled&&this.eligibleSpendTiers.findIndex(t=>"5000"==t.name)>0&&(this.eligibleSpendTiers[this.eligibleSpendTiers.findIndex(t=>"5000"==t.name)].cost=0),this.promos[3].enabled&&this.eligibleSpendTiers.findIndex(t=>"10000"==t.name)>0&&(this.eligibleSpendTiers[this.eligibleSpendTiers.findIndex(t=>"10000"==t.name)].cost=0),this.promos[4].enabled&&this.eligibleSpendTiers.findIndex(t=>"10000"==t.name)>0&&(this.eligibleSpendTiers[this.eligibleSpendTiers.findIndex(t=>"10000"==t.name)].cost=0),this.promos[5].enabled&&this.eligibleSpendTiers.findIndex(t=>"1000"==t.name)>0&&(this.eligibleSpendTiers[this.eligibleSpendTiers.findIndex(t=>"1000"==t.name)].cost=0),this.promos[6].enabled)for(let t=0;t<this.eligibleSpendTiers.length;t++)0!=this.eligibleSpendTiers[t].cost&&(this.eligibleSpendTiers[t].cost=this.eligibleSpendTiers[t].cost/2);this.calculate()}calculate(){this.calculateCashbackRate(),this.calculatePerkCount(),this.calculateEligibleSpend(),this.calculateMonthlyCashback(),this.calculateMonthlyPerkValue(),this.calculateTotalMonthlyValue(),this.calculateTotalYearlyValue(),this.calculateSubscriptionCost(),this.calculateRedeemCost(),this.calculateActualTotalYearlyValue(),this.showSubRequiredMessage=this.selectedSubscriptionTier==this.subscriptionTiers[0]&&(this.selectedStackingTier!=this.stackingTiers[0]||this.selectedEligibleSpendTier!=this.eligibleSpendTiers[0])}calculateCashbackRate(){this.cashbackRate="None"===this.selectedStackingTier.name?"Standard Account"===this.selectedSubscriptionTier.name?0:this.selectedSubscriptionTier.cashbackPercentage:this.selectedStackingTier.cashbackPercentage}calculatePerkCount(){this.perkCount=this.selectedSubscriptionTier.perkCount+this.selectedStackingTier.perkCount}calculateEligibleSpend(){this.eligibleSpend=this.selectedSubscriptionTier.eligibleSpend+this.selectedEligibleSpendTier.eligibleSpend}calculateMonthlyCashback(){this.monthlyCashbackValue="Standard Account"!==this.selectedSubscriptionTier.name?this.averageMonthlySpend>this.eligibleSpend||null==this.averageMonthlySpend||0==this.averageMonthlySpend?this.eligibleSpend*(this.cashbackRate/100):this.averageMonthlySpend*(this.cashbackRate/100):0}calculateMonthlyPerkValue(){this.monthlyPerkValue="Standard Account"!==this.selectedSubscriptionTier.name?10*this.perkCount:0}calculateTotalMonthlyValue(){this.totalMonthlyValue=this.monthlyCashbackValue+this.monthlyPerkValue}calculateTotalYearlyValue(){this.totalYearlyValue=12*this.totalMonthlyValue}calculateSubscriptionCost(){this.subscriptionCost=12*this.selectedSubscriptionTier.cost}calculateRedeemCost(){this.redeemCost="\u20ac"===this.currencySymbol?this.selectedEligibleSpendTier.cost*this.pluPrice.eur:this.selectedEligibleSpendTier.cost*this.pluPrice.gbp}calculateActualTotalYearlyValue(){this.actualTotalYearlyValue=this.totalYearlyValue-this.subscriptionCost-this.redeemCost}changeCurrency(){this.currencySymbol="\u20ac"===this.currencySymbol?"\xa3":"\u20ac",localStorage.setItem("pluCurrencySymbol",this.currencySymbol),this.calculate()}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(m.Dx),e.Y36(m.h_),e.Y36(b.eN))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-misc-plutus-calculator"]],decls:119,vars:55,consts:[[1,"contentPageOverride"],[1,"currencyButton",3,"click"],[1,"title"],[1,"infoTextTop"],[1,"inputWrapper"],[1,"inputLabelWrapper"],["for","subscriptionTier"],["name","subscriptionTier",3,"searchable","clearable","ngModel","ngModelChange","change"],[4,"ngFor","ngForOf"],["for","stackingTier"],["name","stackingTier",3,"searchable","clearable","ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],["for","eligibleSpendTier"],["name","eligibleSpendTier",3,"searchable","clearable","ngModel","ngModelChange","change"],[1,"secondaryInputWrapper"],["type","number","min","0","max","20000","placeholder","Enter Average Monthly Spend",1,"averageSpendInput",3,"ngModel","ngModelChange","input"],[1,"promoButton",3,"click"],[4,"ngIf"],[3,"ngClass"],["class","requiredSubInfo",4,"ngIf"],["class","promoSelectionScreen",3,"ngClass",4,"ngIf"],[1,"overview"],[1,"overviewItem"],[1,"contentPageOverride","contentpageSecondaryColor"],[1,"outputWrapper"],[1,"headerBackDrop"],[1,"header"],[1,"values"],[1,"explainer"],[1,"explainerTitle"],[1,"explainerText"],[1,"contentPageOverride","contentpageTertiaryColor"],[1,"importantNotes"],[1,"notesTitle"],[1,"noteItem"],[1,"noteCheckmarkWrapper"],[1,"noteCheckMark"],[1,"noteText"],[3,"value",4,"ngIf"],[3,"value"],[1,"optionSmallText"],["class","optionSmallText",4,"ngIf"],[1,"requiredSubInfo"],[1,"promoSelectionScreen",3,"ngClass"],[1,"promoHeader"],[1,"promoItem",3,"ngClass","click"],[1,"promoTitle"],[1,"promoDate"],[1,"promoInfo"],["target","_blank",1,"promoTerms",3,"href"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return i.changeCurrency()}),e._uU(2,"Switch \xa3/\u20ac"),e.qZA(),e.TgZ(3,"p",2),e._uU(4,"Pluton Rewards Calculator"),e.qZA(),e.TgZ(5,"p",3),e._uU(6," This is a community-created calculator based on the subscriptions and reward levels of Plutus. "),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"label",6),e._uU(10,"Subscription Plan"),e.qZA(),e.TgZ(11,"ng-select",7),e.NdJ("ngModelChange",function(r){return i.selectedSubscriptionTier=r})("change",function(r){return i.subscriptionTierChange(r)}),e.YNc(12,C,3,2,"ng-container",8),e.qZA()(),e.TgZ(13,"div",5)(14,"label",9),e._uU(15,"Reward Levels"),e.qZA(),e.TgZ(16,"ng-select",10),e.NdJ("ngModelChange",function(r){return i.selectedStackingTier=r})("change",function(r){return i.stackingTierChange(r)}),e.YNc(17,P,3,3,"ng-option",11),e.qZA()(),e.TgZ(18,"div",5)(19,"label",12),e._uU(20,"Rewards Cap"),e.qZA(),e.TgZ(21,"ng-select",13),e.NdJ("ngModelChange",function(r){return i.selectedEligibleSpendTier=r})("change",function(r){return i.eligibleSpendTierChange(r)}),e.YNc(22,w,3,3,"ng-option",11),e.qZA()()(),e.TgZ(23,"div",14)(24,"input",15),e.NdJ("ngModelChange",function(r){return i.averageMonthlySpend=r})("input",function(r){return i.averageSpendChange(r)}),e.qZA(),e.TgZ(25,"button",16),e.NdJ("click",function(){return i.togglePromoVisiblity()}),e.YNc(26,v,2,0,"span",17)(27,O,2,0,"span",17),e._UZ(28,"div",18),e.qZA()(),e.YNc(29,Z,4,0,"p",19)(30,q,4,4,"div",20),e.TgZ(31,"div",21)(32,"div",22)(33,"h1"),e._uU(34),e.qZA(),e.TgZ(35,"h5"),e._uU(36,"REWARDS"),e.qZA()(),e.TgZ(37,"div",22)(38,"h1"),e._uU(39),e.qZA(),e.TgZ(40,"h5"),e._uU(41,"PERKS"),e.qZA()(),e.TgZ(42,"div",22)(43,"h1"),e._uU(44),e.ALo(45,"number"),e.qZA(),e.TgZ(46,"h5"),e._uU(47,"REWARDS CAP"),e.qZA()()()(),e.TgZ(48,"div",23)(49,"div",24)(50,"div",25)(51,"div",26)(52,"p"),e._uU(53,"Monthly Rewards"),e.qZA(),e.TgZ(54,"p"),e._uU(55,"Monthly Perks"),e.qZA(),e.TgZ(56,"p"),e._uU(57,"Total Monthly Value"),e.qZA(),e.TgZ(58,"p"),e._uU(59,"Subscription Cost "),e.TgZ(60,"span"),e._uU(61,"(Yearly)"),e.qZA()(),e.TgZ(62,"p"),e._uU(63,"Redeem Cost "),e.TgZ(64,"span"),e._uU(65,"(Yearly)"),e.qZA()(),e.TgZ(66,"p"),e._uU(67,"Earn Yearly Value "),e.TgZ(68,"span"),e._uU(69,"(Costs Subtracted)"),e.qZA()()()(),e.TgZ(70,"div",27)(71,"p"),e._uU(72),e.ALo(73,"number"),e.qZA(),e.TgZ(74,"p"),e._uU(75),e.ALo(76,"number"),e.qZA(),e.TgZ(77,"p"),e._uU(78),e.ALo(79,"number"),e.qZA(),e.TgZ(80,"p"),e._uU(81),e.ALo(82,"number"),e.qZA(),e.TgZ(83,"p"),e._uU(84),e.ALo(85,"number"),e.qZA(),e.TgZ(86,"p"),e._uU(87),e.ALo(88,"number"),e.qZA()()()(),e.TgZ(89,"div",0)(90,"div",28)(91,"div",29),e._uU(92,"Subscription Plan"),e.qZA(),e.TgZ(93,"div",30),e._uU(94,"To earn rewards and perks, you must sign up for a monthly subscription plan."),e.qZA(),e.TgZ(95,"div",29),e._uU(96,"Reward Levels"),e.qZA(),e.TgZ(97,"div",30),e._uU(98,"Stack your earned PLU to unlock higher reward rates and additional perks as you progress through Reward Levels."),e.qZA(),e.TgZ(99,"div",29),e._uU(100,"Rewards Cap"),e.qZA(),e.TgZ(101,"div",30),e._uU(102,"Increase your monthly spending eligible for rewards by redeeming earned PLU. Redeemed PLU goes back to the Rewards Pool for sustainability."),e.qZA()()(),e.TgZ(103,"div",31)(104,"div",32)(105,"p",33),e._uU(106,"Important Notes"),e.qZA(),e.TgZ(107,"div",34)(108,"div",35)(109,"span",36),e._uU(110,"\u2713"),e.qZA()(),e.TgZ(111,"div",37),e._uU(112," The redemption cost for boosting rewards cap is determined by customer-set values on third-party platforms. "),e.qZA()(),e.TgZ(113,"div",34)(114,"div",35)(115,"span",36),e._uU(116,"\u2713"),e.qZA()(),e.TgZ(117,"div",37),e._uU(118," The PLU needed for Reward Levels is not considered a cost, as customers keep both their stack and rewards in personal wallets, available for swapping at any time. "),e.qZA()()()()),2&o&&(e.xp6(11),e.Q6J("searchable",!1)("clearable",!1)("ngModel",i.selectedSubscriptionTier),e.xp6(1),e.Q6J("ngForOf",i.subscriptionTiers),e.xp6(4),e.Q6J("searchable",!1)("clearable",!1)("ngModel",i.selectedStackingTier),e.xp6(1),e.Q6J("ngForOf",i.stackingTiers),e.xp6(4),e.Q6J("searchable",!1)("clearable",!1)("ngModel",i.selectedEligibleSpendTier),e.xp6(1),e.Q6J("ngForOf",i.eligibleSpendTiers),e.xp6(2),e.Q6J("ngModel",i.averageMonthlySpend),e.xp6(2),e.Q6J("ngIf",!i.showPromotions),e.xp6(1),e.Q6J("ngIf",i.showPromotions),e.xp6(1),e.Q6J("ngClass",i.showPromotions?"arrow-up":"arrow-down"),e.xp6(1),e.Q6J("ngIf",i.showSubRequiredMessage),e.xp6(1),e.Q6J("ngIf",i.showPromotions),e.xp6(4),e.hij("",i.cashbackRate,"%"),e.xp6(5),e.Oqu(i.perkCount),e.xp6(5),e.AsE("",i.currencySymbol,"",e.xi3(45,34,i.eligibleSpend,"1.0-0"),"/m"),e.xp6(28),e.AsE("",i.currencySymbol,"",e.xi3(73,37,i.monthlyCashbackValue,"1.2-2"),""),e.xp6(3),e.AsE("",i.currencySymbol,"",e.xi3(76,40,i.monthlyPerkValue,"1.2-2"),""),e.xp6(3),e.AsE("",i.currencySymbol,"",e.xi3(79,43,i.totalMonthlyValue,"1.2-2"),""),e.xp6(3),e.AsE("",i.currencySymbol,"",e.xi3(82,46,i.subscriptionCost,"1.2-2"),""),e.xp6(3),e.AsE("",i.currencySymbol,"",e.xi3(85,49,i.redeemCost,"1.2-2"),""),e.xp6(3),e.AsE("",i.currencySymbol,"",e.xi3(88,52,i.actualTotalYearlyValue,"1.2-2"),""))},dependencies:[c.mk,c.sg,c.O5,p.Fj,p.wV,p.JJ,p.qQ,p.Fd,p.On,d.w9,d.jq,c.JJ],styles:[".contentPageOverride[_ngcontent-%COMP%]{width:100%;background-color:#fff;position:relative;z-index:2}.contentpageSecondaryColor[_ngcontent-%COMP%]{background-color:#f5f9ff;z-index:1}.contentpageTertiaryColor[_ngcontent-%COMP%]{background-color:#2649ec;z-index:3}.currencyButton[_ngcontent-%COMP%]{background-color:#2649ec;border:none;color:#fff;padding:5px 8px;text-align:center;font-size:16px;margin:8px 8px 0 0;outline:none;position:absolute;top:0;right:0;cursor:pointer}.title[_ngcontent-%COMP%]{padding-top:70px;padding-bottom:30px;margin:0;text-align:center;font-size:38px;color:#2649ec}.infoTextTop[_ngcontent-%COMP%]{text-align:center;margin:0 auto 20px;padding-right:10px;padding-left:10px;font-size:14px;max-width:400px;color:#848d9c}.inputWrapper[_ngcontent-%COMP%]{width:762px;margin:70px auto 20px;height:100px}.inputLabelWrapper[_ngcontent-%COMP%]{float:left}.inputWrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#2649ec;font-weight:700;font-size:20px;margin-left:12px;margin-bottom:10px}.ng-select[_ngcontent-%COMP%]{border:0px;min-height:0px;border-radius:0;width:230px;height:40px;font-family:monospace;font-size:14px;font-weight:700;margin-left:12px;margin-right:12px}  .ng-select-container{border:1px solid #0921B4!important;border-radius:30px!important;height:40px!important}  .ng-placeholder{color:#172a46!important}  .ng-dropdown-panel{border-radius:10px!important;transform:translateY(1px)!important}  .ng-option:first-child{border-top-left-radius:10px!important;border-top-right-radius:10px!important}  .ng-option:last-child{border-bottom-left-radius:10px!important;border-bottom-right-radius:10px!important}.secondaryInputWrapper[_ngcontent-%COMP%]{width:762px;margin:0 auto;text-align:center}.averageSpendInput[_ngcontent-%COMP%]{width:208px;border:1px solid #0921B4;border-radius:30px;height:36px;padding-left:18px;margin-right:24px}.averageSpendInput[_ngcontent-%COMP%]:focus{outline:none}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}.promoButton[_ngcontent-%COMP%]{width:230px;background-color:transparent;border:1px solid #0921B4;border-radius:30px;height:40px;font-family:monospace;font-size:14px;font-weight:700}.requiredSubInfo[_ngcontent-%COMP%]{position:absolute;left:0;right:0;width:100%;max-width:400px;margin:0 auto;transform:translateY(23px);text-align:center;font-size:14px;color:#848d9c}.promoSelectionScreen[_ngcontent-%COMP%]{margin:30px auto 0;width:762px;padding-bottom:16px;background-color:#fbfbfb;border-radius:8px;color:#000;z-index:1001;text-align:center}.promoRequiredSubOffset[_ngcontent-%COMP%]{margin-top:90px}.promoHeader[_ngcontent-%COMP%]{margin:0;padding:15px 10px 0;font-size:17px;font-weight:700;color:#2649ec}.promoItem[_ngcontent-%COMP%]{position:relative;display:inline-block;vertical-align:top;width:351px;height:180px;margin:20px 10px 0;background-color:#fff;border-radius:8px;box-shadow:-1px 0 25px -18px #0000006b;-webkit-box-shadow:-1px 0px 25px -18px rgba(0,0,0,.42);-moz-box-shadow:-1px 0px 25px -18px rgba(0,0,0,.42)}.promoTitle[_ngcontent-%COMP%]{float:left;width:300px;margin:20px 0 0 20px;text-align:left;font-size:18px}.promoDate[_ngcontent-%COMP%]{float:left;width:250px;margin:2px 0 0 28px;text-align:left;font-size:13px}.promoInfo[_ngcontent-%COMP%]{float:left;width:310px;margin:5px 0 0 20px;text-align:left;color:#848d9c}.promoTerms[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;font-size:11px;margin:0 10px 5px 0;color:#c2c6ce;text-decoration:underline}.selected[_ngcontent-%COMP%]{border:2px solid #0921B4}.notSelected[_ngcontent-%COMP%]{border:2px solid white}.arrow-up[_ngcontent-%COMP%]{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #999999;transform:translateY(-1px)}.arrow-down[_ngcontent-%COMP%]{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #999999;transform:translateY(-1px)}.overview[_ngcontent-%COMP%]{clear:both;display:flex;align-items:center;width:738px;padding-left:12px;padding-right:12px;height:180px;margin:0 auto;justify-content:space-around;text-align:center;transform:translateY(50%)}.overviewItem[_ngcontent-%COMP%]{background-color:#001271;border-radius:20px;width:236px;height:170px}.overviewItem[_ngcontent-%COMP%]:nth-child(-n+2){margin-right:15px}.overviewItem[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:45px 0 0;padding:9px 12px 7px;display:inline-block;background-color:#0923b5;border-radius:6px;font-weight:lighter;min-width:80px}.overviewItem[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:30px 0 0;font-weight:700}.optionSmallText[_ngcontent-%COMP%]{font-size:14px;color:#848d9c}.outputWrapper[_ngcontent-%COMP%]{display:flex;align-items:center;width:762px;margin:0 auto;justify-content:center;text-align:center;padding-top:150px;padding-bottom:100px}.headerBackDrop[_ngcontent-%COMP%]{background:linear-gradient(to right,#F5F9FF 50%,white 50%)}.header[_ngcontent-%COMP%]{background-color:#2649ea;border-radius:20px;width:375px;margin-left:12px;box-shadow:0 7px 26px 4px #2649ea54;z-index:999;padding-top:20px;padding-bottom:20px}.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:19px;margin:0;padding:18px 10px 12px 34px;text-align:left;font-weight:lighter}.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:right;font-size:12px;color:#f3f4f5;transform:translateY(5px);padding:0 20px}.header[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border:1px solid transparent}.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{border-bottom:1px solid transparent}.values[_ngcontent-%COMP%]{background-color:#fff;border-radius:0 20px 20px 0;z-index:-1;width:375px;margin-right:12px;padding-top:20px;padding-bottom:20px}.values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{-webkit-font-smoothing:antialiased;font-size:19px;margin:0;padding:18px 10px 12px 34px;color:#172a46}.values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{border-bottom:1px solid #EEEEEE}hr[_ngcontent-%COMP%]{margin:0}.values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child, .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{border-bottom:none}.explainer[_ngcontent-%COMP%]{padding-top:97px;padding-bottom:120px;width:738px;margin:0 auto;min-height:300px}.explainerTitle[_ngcontent-%COMP%]{color:#2649ec;font-weight:700;width:300px;margin-left:30px;float:left;font-size:19px;height:90px}.explainerText[_ngcontent-%COMP%]{color:#848d9c;width:378px;float:left;margin-right:30px;font-size:14px;height:90px}.importantNotes[_ngcontent-%COMP%]{width:738px;height:200px;background-color:#fff;border-radius:20px;margin:0 auto;padding-top:0;font-size:12px;transform:translateY(-50%);box-shadow:-1px 0 25px -18px #0000006b;-webkit-box-shadow:-1px 0px 25px -18px rgba(0,0,0,.42);-moz-box-shadow:-1px 0px 25px -18px rgba(0,0,0,.42)}.notesTitle[_ngcontent-%COMP%]{color:#2649ec;font-weight:700;font-size:19px;text-align:center;width:100%;margin:0;padding-top:40px;padding-bottom:40px}.noteItem[_ngcontent-%COMP%]{color:#848d9c;float:left;width:50%}.noteCheckmarkWrapper[_ngcontent-%COMP%]{width:18%;float:left;text-align:center}.noteCheckMark[_ngcontent-%COMP%]{display:inline-block;font-weight:700;background-color:#2649ec;color:#fff;font-family:monospace;border-radius:50%;padding:2px 6px;margin-left:15px;transform:translateY(-3px)}.noteText[_ngcontent-%COMP%]{width:75%;float:left;font-size:14px}@media only screen and (max-width: 761px){.inputWrapper[_ngcontent-%COMP%]{margin-top:30px;width:254px;text-align:center;height:250px}.inputLabelWrapper[_ngcontent-%COMP%]{padding-top:10px}.inputWrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:5px}.secondaryInputWrapper[_ngcontent-%COMP%]{width:254px;margin-top:24px;margin-bottom:10px}.averageSpendInput[_ngcontent-%COMP%]{margin:0 0 31px}.requiredSubInfo[_ngcontent-%COMP%]{position:relative;transform:translateY(5px)}.promoButton[_ngcontent-%COMP%]{width:230px}.promoSelectionScreen[_ngcontent-%COMP%]{width:430px;padding-bottom:38px}.overview[_ngcontent-%COMP%]{display:inline-block;width:100%;height:auto;transform:none;padding:5px 0 25px}.overviewItem[_ngcontent-%COMP%]{margin:20px auto 0;height:105px}.overviewItem[_ngcontent-%COMP%]:nth-child(-n+2){margin-right:auto}.overviewItem[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:15px}.overviewItem[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-top:10px}.outputWrapper[_ngcontent-%COMP%]{width:100%;padding-top:25px;padding-bottom:25px}.header[_ngcontent-%COMP%]{width:230px}.values[_ngcontent-%COMP%]{width:200px;padding-top:9px;padding-bottom:9px}.values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:18px 0 12px}.values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{padding-bottom:34px}.explainer[_ngcontent-%COMP%]{min-height:300px;width:300px;padding-top:35px;margin:0 auto}.explainerTitle[_ngcontent-%COMP%]{width:200px;float:none;height:auto;margin-left:0;padding-bottom:5px}.explainerText[_ngcontent-%COMP%]{width:290px;float:none;margin-right:0;padding-left:10px;height:auto;padding-bottom:20px}.importantNotes[_ngcontent-%COMP%]{width:430px;height:225px}.notesTitle[_ngcontent-%COMP%]{padding-top:20px;padding-bottom:20px}.noteCheckmarkWrapper[_ngcontent-%COMP%]{width:30px;margin-right:10px}.noteCheckMark[_ngcontent-%COMP%]{margin-left:0}.noteText[_ngcontent-%COMP%]{width:300px}.noteItem[_ngcontent-%COMP%]{width:340px;margin:0 auto;float:none;height:48px;padding-bottom:25px}}@media only screen and (max-width: 453px){.promoSelectionScreen[_ngcontent-%COMP%]{width:100%}.promoItem[_ngcontent-%COMP%], .promoInfo[_ngcontent-%COMP%], .importantNotes[_ngcontent-%COMP%]{width:calc(100% - 24px)}.noteItem[_ngcontent-%COMP%]{width:calc(100% - 24px);margin:0 auto;float:none;height:48px;padding-bottom:25px}.noteText[_ngcontent-%COMP%]{width:calc(100% - 40px)}}@media only screen and (max-width: 353px){.importantNotes[_ngcontent-%COMP%]{height:240px}}"]})}return n})()}];let I=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[h.Bz.forChild(U),h.Bz]})}return n})();var R=l(21367);let V=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[c.ez,R.m,I,d.A0,p.u5]})}return n})()}}]);