"use strict";(self.webpackChunkRandomProject=self.webpackChunkRandomProject||[]).push([[3],{84003:(I,g,s)=>{s.r(g),s.d(g,{MiscPlutusNewModule:()=>U});var c=s(96814),h=s(15251),u=s(77396),b=s(98158),x=s(52066),e=s(52425),m=s(6593),f=s(69862),p=s(40285),d=s(31501);function T(i,r){if(1&i&&(e.TgZ(0,"ng-option",40),e._uU(1),e.qZA()),2&i){const t=e.oxw().$implicit;e.Q6J("value",t),e.xp6(1),e.hij("\xa0",t.name.padEnd(14,"\xa0"),"")}}function _(i,r){if(1&i&&(e.TgZ(0,"ng-option",40),e._uU(1),e.TgZ(2,"span",41),e._uU(3),e.ALo(4,"number"),e.qZA()()),2&i){const t=e.oxw().$implicit,o=e.oxw();e.Q6J("value",t),e.xp6(1),e.hij("\xa0",t.name.padEnd(14,"\xa0")," "),e.xp6(2),e.AsE("",o.currencySymbol,"",e.xi3(4,4,t.cost,"1.2-2"),"/m")}}function C(i,r){if(1&i&&(e.ynx(0),e.YNc(1,T,2,2,"ng-option",39)(2,_,5,7,"ng-option",39),e.BQk()),2&i){const t=r.$implicit;e.xp6(1),e.Q6J("ngIf",0==t.cost),e.xp6(1),e.Q6J("ngIf",0!=t.cost)}}function P(i,r){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&i){const t=e.oxw().$implicit;e.xp6(1),e.hij("\xa0",t.name,"")}}function S(i,r){1&i&&(e.TgZ(0,"span"),e._uU(1,"\xa0"),e.qZA())}function M(i,r){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"number"),e.YNc(3,S,2,0,"span",17),e.TgZ(4,"span",41),e._uU(5),e.qZA()()),2&i){const t=e.oxw().$implicit,o=e.oxw();e.xp6(1),e.AsE("\xa0",o.currencySymbol,"",e.xi3(2,4,t.eligibleSpend,"1.0-0"),"/m \xa0\xa0\xa0"),e.xp6(2),e.Q6J("ngIf","10000"!=t.name),e.xp6(2),e.hij("",t.cost," PLU/yr")}}function y(i,r){if(1&i&&(e.TgZ(0,"ng-option",40),e.YNc(1,P,2,1,"span",17)(2,M,6,7,"span",17),e.qZA()),2&i){const t=r.$implicit;e.Q6J("value",t),e.xp6(1),e.Q6J("ngIf","No Higher Cap"==t.name),e.xp6(1),e.Q6J("ngIf","No Higher Cap"!=t.name)}}function w(i,r){1&i&&(e.TgZ(0,"span"),e._uU(1,"Show Promotions "),e.qZA())}function k(i,r){1&i&&(e.TgZ(0,"span"),e._uU(1,"Hide Promotions "),e.qZA())}function v(i,r){1&i&&(e.TgZ(0,"p",42),e._uU(1," With the standard account, you will not earn any rewards. "),e._UZ(2,"br"),e._uU(3," Please select one of the three subscriptions to get rewards on your spending. "),e.qZA())}function O(i,r){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",45),e.NdJ("click",function(){const l=e.CHM(t).index,a=e.oxw(2);return e.KtG(a.togglePromo(l))}),e.TgZ(2,"span",46),e._uU(3),e.qZA(),e.TgZ(4,"span",47),e._uU(5),e.qZA(),e.TgZ(6,"p",48),e._uU(7),e.qZA(),e.TgZ(8,"a",49),e._uU(9,"Full terms"),e.qZA()(),e.BQk()}if(2&i){const t=r.$implicit,o=e.oxw(2);e.xp6(1),e.Q6J("ngClass",t.enabled?"selected":"notSelected"),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.date),e.xp6(2),e.Oqu(t.description.replace("#",o.currencySymbol)),e.xp6(1),e.s9C("href",t.termsLink,e.LSH)}}const Z=i=>({promoRequiredSubOffset:i});function A(i,r){if(1&i&&(e.TgZ(0,"div",43)(1,"p",44),e._uU(2," Click on a promotion to enable the benefits "),e.qZA(),e.YNc(3,O,10,5,"ng-container",10),e.qZA()),2&i){const t=e.oxw();e.Q6J("ngClass",e.VKq(2,Z,t.showSubRequiredMessage)),e.xp6(3),e.Q6J("ngForOf",t.promos)}}const V=[{path:"",component:(()=>{class i{constructor(t,o,n){this.titleService=t,this.metaService=o,this.http=n,this.url="https://api.coingecko.com/api/v3/simple/price?ids=pluton&vs_currencies=eur%2Cgbp",this.url2="https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=eur%2Cgbp",this.pluPrice={eur:0,gbp:0},this.tetherPrice={eur:.921946,gbp:.776655},this.subscriptionTiers=u.bR,this.subscriptionTiersDefault=JSON.parse(JSON.stringify(u.bR)),this.stackingTiers=b.F,this.eligibleSpendTiers=u.Kl,this.eligibleSpendTiersDefault=JSON.parse(JSON.stringify(u.Kl)),this.promos=x.a,this.selectedSubscriptionTier=this.subscriptionTiers[0],this.selectedStackingTier=this.stackingTiers[0],this.selectedEligibleSpendTier=this.eligibleSpendTiers[0],this.selectedStackingTierIndex=0,this.currencySymbol="\u20ac",this.showSubRequiredMessage=!1,this.showPromotions=!1,this.cashbackRate=0,this.perkCount=0,this.eligibleSpend=0,this.monthlyCashbackValue=0,this.monthlyPerkValue=0,this.monthlyCryValue=0,this.totalMonthlyValue=0,this.subscriptionCost=0,this.redeemCost=0,this.totalYearlyValue=0,this.actualTotalYearlyValue=0,this.doubleRewardsVoucherValue=0,this.goldenTicketReferralsValue=0,this.freePayoutValue=0,this.totalValue=[0,0,0],this.totalActualValue=[0,0,0],this.totalValueMinusCost=[0,0,0],this.totalOriginalBenefits=[0,0,0]}ngOnInit(){this.titleService.setTitle("Plutus Subscriptions & Reward Levels"),this.metaService.updateTag({name:"description",content:"Community calculator for Plutus Subscriptions & Reward Levels"}),this.metaService.getTag("name='robots'")?this.metaService.updateTag({name:"robots",content:"noindex, follow"}):this.metaService.addTag({name:"robots",content:"noindex, follow"}),this.initialise()}ngOnDestroy(){this.titleService.setTitle("Random Stuff")}initialise(){localStorage.getItem("pluCurrencySymbol")&&(this.currencySymbol=localStorage.getItem("pluCurrencySymbol")),this.fetchTetherPrice(),this.fetchPluPrice(),this.applyPromos()}fetchTetherPrice(){this.http.get(this.url2).subscribe(o=>{this.tetherPrice=o.tether,this.calculate()})}fetchPluPrice(){this.http.get(this.url).subscribe(o=>{this.pluPrice=o.pluton}),this.calculateRedeemCost()}getPrices(){return this.http.get(this.url)}subscriptionTierChange(t){this.calculate()}stackingTierChange(t){this.calculate()}eligibleSpendTierChange(t){this.calculate()}heldPluChange(t){this.heldPluCount<0&&(this.heldPluCount=void 0),this.calculate()}averageSpendChange(t){this.averageMonthlySpend<0&&(this.averageMonthlySpend=void 0),this.calculate()}togglePromoVisiblity(){this.showPromotions=!this.showPromotions}togglePromo(t){this.promos[t].enabled=!this.promos[t].enabled,this.promos[3].enabled||this.promos[4].enabled?this.selectedEligibleSpendTier=this.eligibleSpendTiers[4]:this.promos[2].enabled?this.selectedEligibleSpendTier=this.eligibleSpendTiers[3]:this.promos[1].enabled?this.selectedEligibleSpendTier=this.eligibleSpendTiers[2]:this.promos[5].enabled&&(this.selectedEligibleSpendTier=this.eligibleSpendTiers[1]),this.applyPromos()}applyPromos(){for(let t=0;t<this.eligibleSpendTiers.length;t++)this.eligibleSpendTiers[t].cost=this.eligibleSpendTiersDefault[t].cost;for(let t=0;t<this.subscriptionTiers.length;t++)this.subscriptionTiers[t].cost=this.subscriptionTiersDefault[t].cost;if(this.promos[0].enabled)for(let t=0;t<this.subscriptionTiers.length;t++)0!=this.subscriptionTiers[t].cost&&(this.subscriptionTiers[t].cost=.83333*this.subscriptionTiers[t].cost);if(this.promos[1].enabled&&this.eligibleSpendTiers.findIndex(t=>"2000"==t.name)>0&&(this.eligibleSpendTiers[this.eligibleSpendTiers.findIndex(t=>"2000"==t.name)].cost=0),this.promos[2].enabled&&this.eligibleSpendTiers.findIndex(t=>"5000"==t.name)>0&&(this.eligibleSpendTiers[this.eligibleSpendTiers.findIndex(t=>"5000"==t.name)].cost=0),this.promos[3].enabled&&this.eligibleSpendTiers.findIndex(t=>"10000"==t.name)>0&&(this.eligibleSpendTiers[this.eligibleSpendTiers.findIndex(t=>"10000"==t.name)].cost=0),this.promos[4].enabled&&this.eligibleSpendTiers.findIndex(t=>"10000"==t.name)>0&&(this.eligibleSpendTiers[this.eligibleSpendTiers.findIndex(t=>"10000"==t.name)].cost=0),this.promos[5].enabled&&this.eligibleSpendTiers.findIndex(t=>"1000"==t.name)>0&&(this.eligibleSpendTiers[this.eligibleSpendTiers.findIndex(t=>"1000"==t.name)].cost=0),this.promos[6].enabled)for(let t=0;t<this.eligibleSpendTiers.length;t++)0!=this.eligibleSpendTiers[t].cost&&(this.eligibleSpendTiers[t].cost=this.eligibleSpendTiers[t].cost/2);this.calculate()}calculate(){this.calculateTier(),this.calculateCashbackRate(),this.calculatePerkCount(),this.calculateEligibleSpend(),this.calculateMonthlyCashback(),this.calculateMonthlyPerkValue(),this.calculateDoubleRewardsVoucher(),this.calculateGoldenTicketValue(),this.calculateMonthlyCryValue(),this.calculateFreePayoutValue(),this.calculateTotalMonthlyValue(),this.calculateTotalYearlyValue(),this.calculateSubscriptionCost(),this.calculateRedeemCost(),this.calculateActualTotalYearlyValue(),this.showSubRequiredMessage=this.selectedSubscriptionTier==this.subscriptionTiers[0]&&(this.selectedStackingTier!=this.stackingTiers[0]||this.selectedEligibleSpendTier!=this.eligibleSpendTiers[0])}calculateTier(){if(null==this.heldPluCount)this.selectedStackingTier=this.stackingTiers[0];else if(this.heldPluCount>=5e4)this.selectedStackingTier=this.stackingTiers[this.stackingTiers.length-1],this.selectedStackingTierIndex=this.stackingTiers.length-1;else for(let t=0;t<this.stackingTiers.length;t++)if(this.stackingTiers[t].pluRequired>this.heldPluCount){this.selectedStackingTier=this.stackingTiers[t-1],this.selectedStackingTierIndex=t-1;break}}calculateCashbackRate(){if("None"===this.selectedStackingTier.name)this.cashbackRate="Standard Account"===this.selectedSubscriptionTier.name?0:this.selectedSubscriptionTier.cashbackPercentage;else if(this.selectedStackingTier.cashbackPercentage===this.stackingTiers[this.stackingTiers.length-1].cashbackPercentage||this.stackingTiers[this.selectedStackingTierIndex+1].cashbackPercentage<4)this.cashbackRate=this.selectedStackingTier.cashbackPercentage;else{var n=Math.floor((this.heldPluCount-this.selectedStackingTier.pluRequired)/(this.stackingTiers[this.selectedStackingTierIndex+1].pluRequired-this.stackingTiers[this.selectedStackingTierIndex].pluRequired)*10)/10;this.cashbackRate=this.selectedStackingTier.cashbackPercentage+n}}calculatePerkCount(){this.perkCount=this.selectedSubscriptionTier.perkCount+this.selectedStackingTier.perkCount}calculateEligibleSpend(){this.eligibleSpend=null===this.heldPluCount||isNaN(this.heldPluCount)?this.selectedSubscriptionTier.eligibleSpend+this.selectedEligibleSpendTier.eligibleSpend:this.selectedSubscriptionTier.eligibleSpend+this.selectedEligibleSpendTier.eligibleSpend+this.heldPluCount}calculateMonthlyCashback(){this.monthlyCashbackValue="Standard Account"!==this.selectedSubscriptionTier.name?this.averageMonthlySpend>this.eligibleSpend||null==this.averageMonthlySpend||0==this.averageMonthlySpend?this.eligibleSpend*(this.cashbackRate/100):this.averageMonthlySpend*(this.cashbackRate/100):0}calculateMonthlyPerkValue(){this.monthlyPerkValue="Standard Account"!==this.selectedSubscriptionTier.name?10*this.perkCount:0}calculateDoubleRewardsVoucher(){this.doubleRewardsVoucherValue="Standard Account"!==this.selectedSubscriptionTier.name?this.monthlyCashbackValue>20*this.selectedStackingTier.doubleRewards?20*this.selectedStackingTier.doubleRewards:this.monthlyCashbackValue:0}calculateGoldenTicketValue(){this.goldenTicketReferralsValue="\u20ac"===this.currencySymbol?20*this.selectedStackingTier.goldenTickets*this.tetherPrice.eur:20*this.selectedStackingTier.goldenTickets*this.tetherPrice.gbp}calculateFreePayoutValue(){this.freePayoutValue=this.selectedStackingTier.freePayouts>=1&&"Standard Account"!==this.selectedSubscriptionTier.name?15:0}calculateMonthlyCryValue(){var o,t=this.monthlyCashbackValue+this.monthlyPerkValue+this.doubleRewardsVoucherValue+this.goldenTicketReferralsValue;o=3==this.cashbackRate?this.selectedStackingTier.cryRate/100:this.cashbackRate/100,this.monthlyCryValue=null!=this.heldPluCount?(this.heldPluCount*("\u20ac"===this.currencySymbol?this.pluPrice.eur:this.pluPrice.gbp)/12+t)*o*2:t*o*2}calculateTotalMonthlyValue(){this.totalMonthlyValue=this.monthlyCashbackValue+this.monthlyPerkValue+this.doubleRewardsVoucherValue+this.goldenTicketReferralsValue+this.freePayoutValue+this.monthlyCryValue}calculateTotalYearlyValue(){this.totalYearlyValue=12*this.totalMonthlyValue}calculateSubscriptionCost(){this.subscriptionCost=12*this.selectedSubscriptionTier.cost}calculateRedeemCost(){this.redeemCost="\u20ac"===this.currencySymbol?this.selectedEligibleSpendTier.cost*this.pluPrice.eur:this.selectedEligibleSpendTier.cost*this.pluPrice.gbp}calculateActualTotalYearlyValue(){this.actualTotalYearlyValue=this.totalYearlyValue-this.subscriptionCost-this.redeemCost}changeCurrency(){this.currencySymbol="\u20ac"===this.currencySymbol?"\xa3":"\u20ac",localStorage.setItem("pluCurrencySymbol",this.currencySymbol),this.calculate()}static#e=this.\u0275fac=function(o){return new(o||i)(e.Y36(m.Dx),e.Y36(m.h_),e.Y36(f.eN))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-misc-plutus-new"]],decls:140,vars:77,consts:[[1,"contentPageOverride"],[1,"currencyButton",3,"click"],[1,"title"],[1,"infoTextTop"],[1,"inputWrapper"],[1,"inputLabelWrapper"],["for","stackingTier"],["type","number","min","0","max","1000000","placeholder","Amount of PLU Owned",1,"pluHeldInput",3,"ngModel","ngModelChange","input"],["for","subscriptionTier"],["name","subscriptionTier",3,"searchable","clearable","ngModel","ngModelChange","change"],[4,"ngFor","ngForOf"],["for","eligibleSpendTier"],["name","eligibleSpendTier",3,"searchable","clearable","ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],[1,"secondaryInputWrapper"],["type","number","min","0","max","20000","placeholder","Enter Average Monthly Spend",1,"averageSpendInput",3,"ngModel","ngModelChange","input"],[1,"promoButton",3,"click"],[4,"ngIf"],[3,"ngClass"],["class","requiredSubInfo",4,"ngIf"],["class","promoSelectionScreen",3,"ngClass",4,"ngIf"],[1,"stackingTitle",3,"ngClass"],[1,"overview"],[1,"overviewItem"],[1,"contentPageOverride","contentpageSecondaryColor"],[1,"outputWrapper"],[1,"headerBackDrop"],[1,"header"],[1,"values"],[1,"explainer"],[1,"explainerTitle"],[1,"explainerText"],[1,"contentPageOverride","contentpageTertiaryColor"],[1,"importantNotes"],[1,"notesTitle"],[1,"noteItem"],[1,"noteCheckmarkWrapper"],[1,"noteCheckMark"],[1,"noteText"],[3,"value",4,"ngIf"],[3,"value"],[1,"optionSmallText"],[1,"requiredSubInfo"],[1,"promoSelectionScreen",3,"ngClass"],[1,"promoHeader"],[1,"promoItem",3,"ngClass","click"],[1,"promoTitle"],[1,"promoDate"],[1,"promoInfo"],["target","_blank",1,"promoTerms",3,"href"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return n.changeCurrency()}),e._uU(2,"Switch \xa3/\u20ac"),e.qZA(),e.TgZ(3,"p",2),e._uU(4,"Pluton Rewards Calculator"),e.qZA(),e.TgZ(5,"p",3),e._uU(6," This is a community-created calculator based on the subscriptions and reward levels of Plutus. "),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"label",6),e._uU(10,"PLU Stack"),e.qZA(),e.TgZ(11,"input",7),e.NdJ("ngModelChange",function(a){return n.heldPluCount=a})("input",function(a){return n.heldPluChange(a)}),e.qZA()(),e.TgZ(12,"div",5)(13,"label",8),e._uU(14,"Subscription Plan"),e.qZA(),e.TgZ(15,"ng-select",9),e.NdJ("ngModelChange",function(a){return n.selectedSubscriptionTier=a})("change",function(a){return n.subscriptionTierChange(a)}),e.YNc(16,C,3,2,"ng-container",10),e.qZA()(),e.TgZ(17,"div",5)(18,"label",11),e._uU(19,"Rewards Cap"),e.qZA(),e.TgZ(20,"ng-select",12),e.NdJ("ngModelChange",function(a){return n.selectedEligibleSpendTier=a})("change",function(a){return n.eligibleSpendTierChange(a)}),e.YNc(21,y,3,3,"ng-option",13),e.qZA()()(),e.TgZ(22,"div",14)(23,"input",15),e.NdJ("ngModelChange",function(a){return n.averageMonthlySpend=a})("input",function(a){return n.averageSpendChange(a)}),e.qZA(),e.TgZ(24,"button",16),e.NdJ("click",function(){return n.togglePromoVisiblity()}),e.YNc(25,w,2,0,"span",17)(26,k,2,0,"span",17),e._UZ(27,"div",18),e.qZA()(),e.YNc(28,v,4,0,"p",19)(29,A,4,4,"div",20),e.TgZ(30,"p",21),e._uU(31),e.qZA(),e.TgZ(32,"div",22)(33,"div",23)(34,"h1"),e._uU(35),e.qZA(),e.TgZ(36,"h5"),e._uU(37,"REWARDS"),e.qZA()(),e.TgZ(38,"div",23)(39,"h1"),e._uU(40),e.qZA(),e.TgZ(41,"h5"),e._uU(42,"PERKS"),e.qZA()(),e.TgZ(43,"div",23)(44,"h1"),e._uU(45),e.ALo(46,"number"),e.qZA(),e.TgZ(47,"h5"),e._uU(48,"REWARDS CAP"),e.qZA()()()(),e.TgZ(49,"div",24)(50,"div",25)(51,"div",26)(52,"div",27)(53,"p"),e._uU(54,"Cashback Rewards"),e.qZA(),e.TgZ(55,"p"),e._uU(56,"Perk Rewards"),e.qZA(),e.TgZ(57,"p"),e._uU(58),e.qZA(),e.TgZ(59,"p"),e._uU(60),e.qZA(),e.TgZ(61,"p"),e._uU(62,"Monthly CRY"),e.qZA(),e.TgZ(63,"p"),e._uU(64),e.qZA(),e.TgZ(65,"p"),e._uU(66,"Monthly Value"),e.qZA(),e.TgZ(67,"p"),e._uU(68,"Subscription Cost "),e.TgZ(69,"span"),e._uU(70,"(Yearly)"),e.qZA()(),e.TgZ(71,"p"),e._uU(72,"Redeem Cost "),e.TgZ(73,"span"),e._uU(74,"(Yearly)"),e.qZA()(),e.TgZ(75,"p"),e._uU(76,"Earn Yearly Value "),e.TgZ(77,"span"),e._uU(78,"(Costs Subtracted)"),e.qZA()()()(),e.TgZ(79,"div",28)(80,"p"),e._uU(81),e.ALo(82,"number"),e.qZA(),e.TgZ(83,"p"),e._uU(84),e.ALo(85,"number"),e.qZA(),e.TgZ(86,"p"),e._uU(87),e.ALo(88,"number"),e.qZA(),e.TgZ(89,"p"),e._uU(90),e.ALo(91,"number"),e.qZA(),e.TgZ(92,"p"),e._uU(93),e.ALo(94,"number"),e.qZA(),e.TgZ(95,"p"),e._uU(96),e.ALo(97,"number"),e.qZA(),e.TgZ(98,"p"),e._uU(99),e.ALo(100,"number"),e.qZA(),e.TgZ(101,"p"),e._uU(102),e.ALo(103,"number"),e.qZA(),e.TgZ(104,"p"),e._uU(105),e.ALo(106,"number"),e.qZA(),e.TgZ(107,"p"),e._uU(108),e.ALo(109,"number"),e.qZA()()()(),e.TgZ(110,"div",0)(111,"div",29)(112,"div",30),e._uU(113,"Double Reward Vouchers"),e.qZA(),e.TgZ(114,"div",31),e._uU(115,"Choose transactions once per month to earn double rewards on, with a potential value of up to \xa3/\u20ac40."),e.qZA(),e.TgZ(116,"div",30),e._uU(117,"Golden Tickets"),e.qZA(),e.TgZ(118,"div",31),e._uU(119,"Invite friends and family via a Golden Ticket, and both of you will enjoy a $20 referral bonus."),e.qZA(),e.TgZ(120,"div",30),e._uU(121,"CRY"),e.qZA(),e.TgZ(122,"div",31),e._uU(123,"Compounding Reward Yield is interest on your PLU and Rewards paid out on a yearly basis."),e.qZA()()(),e.TgZ(124,"div",32)(125,"div",33)(126,"p",34),e._uU(127,"Important Notes"),e.qZA(),e.TgZ(128,"div",35)(129,"div",36)(130,"span",37),e._uU(131,"\u2713"),e.qZA()(),e.TgZ(132,"div",38),e._uU(133," The redemption cost for boosting rewards cap is determined by customer-set values on third-party platforms. "),e.qZA()(),e.TgZ(134,"div",35)(135,"div",36)(136,"span",37),e._uU(137,"\u2713"),e.qZA()(),e.TgZ(138,"div",38),e._uU(139," The PLU needed for Reward Levels is not considered a cost, as customers keep both their stack and rewards in personal wallets, available for swapping at any time. "),e.qZA()()()()),2&o&&(e.xp6(11),e.Q6J("ngModel",n.heldPluCount),e.xp6(4),e.Q6J("searchable",!1)("clearable",!1)("ngModel",n.selectedSubscriptionTier),e.xp6(1),e.Q6J("ngForOf",n.subscriptionTiers),e.xp6(4),e.Q6J("searchable",!1)("clearable",!1)("ngModel",n.selectedEligibleSpendTier),e.xp6(1),e.Q6J("ngForOf",n.eligibleSpendTiers),e.xp6(2),e.Q6J("ngModel",n.averageMonthlySpend),e.xp6(2),e.Q6J("ngIf",!n.showPromotions),e.xp6(1),e.Q6J("ngIf",n.showPromotions),e.xp6(1),e.Q6J("ngClass",n.showPromotions?"arrow-up":"arrow-down"),e.xp6(1),e.Q6J("ngIf",n.showSubRequiredMessage),e.xp6(1),e.Q6J("ngIf",n.showPromotions),e.xp6(1),e.Q6J("ngClass",0!=n.heldPluCount&&null!=n.heldPluCount?"visible":"hidden"),e.xp6(1),e.hij("Reward Level: ",n.selectedStackingTier.name,""),e.xp6(4),e.hij("",n.cashbackRate,"%"),e.xp6(5),e.Oqu(n.perkCount),e.xp6(5),e.AsE("",n.currencySymbol,"",e.xi3(46,44,n.eligibleSpend,"1.0-0"),"/m"),e.xp6(13),e.hij("x2 Rewards Vouchers (",n.selectedStackingTier.doubleRewards,")"),e.xp6(2),e.hij("Golden Tickets (",n.selectedStackingTier.goldenTickets,")"),e.xp6(4),e.hij("Free Payouts (",n.selectedStackingTier.freePayouts,")"),e.xp6(17),e.AsE("",n.currencySymbol,"",e.xi3(82,47,n.monthlyCashbackValue,"1.2-2"),""),e.xp6(3),e.AsE("",n.currencySymbol,"",e.xi3(85,50,n.monthlyPerkValue,"1.2-2"),""),e.xp6(3),e.AsE("",n.currencySymbol,"",e.xi3(88,53,n.doubleRewardsVoucherValue,"1.2-2"),""),e.xp6(3),e.AsE("",n.currencySymbol,"",e.xi3(91,56,n.goldenTicketReferralsValue,"1.2-2"),""),e.xp6(3),e.AsE("",n.currencySymbol,"",e.xi3(94,59,n.monthlyCryValue,"1.2-2"),""),e.xp6(3),e.AsE("",n.currencySymbol,"",e.xi3(97,62,n.freePayoutValue,"1.2-2"),""),e.xp6(3),e.AsE("",n.currencySymbol,"",e.xi3(100,65,n.totalMonthlyValue,"1.2-2"),""),e.xp6(3),e.AsE("",n.currencySymbol,"",e.xi3(103,68,n.subscriptionCost,"1.2-2"),""),e.xp6(3),e.AsE("",n.currencySymbol,"",e.xi3(106,71,n.redeemCost,"1.2-2"),""),e.xp6(3),e.AsE("",n.currencySymbol,"",e.xi3(109,74,n.actualTotalYearlyValue,"1.2-2"),""))},dependencies:[c.mk,c.sg,c.O5,p.Fj,p.wV,p.JJ,p.qQ,p.Fd,p.On,d.w9,d.jq,c.JJ],styles:[".contentPageOverride[_ngcontent-%COMP%]{width:100%;background-color:#fff;position:relative;z-index:2}.contentpageSecondaryColor[_ngcontent-%COMP%]{background-color:#f5f9ff;z-index:1}.contentpageTertiaryColor[_ngcontent-%COMP%]{background-color:#2649ec;z-index:3}.currencyButton[_ngcontent-%COMP%]{background-color:#2649ec;border:none;color:#fff;padding:5px 8px;text-align:center;font-size:16px;margin:8px 8px 0 0;outline:none;position:absolute;top:0;right:0;cursor:pointer}.title[_ngcontent-%COMP%]{padding-top:70px;padding-bottom:30px;margin:0;text-align:center;font-size:38px;color:#2649ec}.infoTextTop[_ngcontent-%COMP%]{text-align:center;margin:0 auto 20px;padding-right:10px;padding-left:10px;font-size:14px;max-width:400px;color:#848d9c}.inputWrapper[_ngcontent-%COMP%]{width:762px;margin:70px auto 20px;height:100px}.inputLabelWrapper[_ngcontent-%COMP%]{float:left}.inputWrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#2649ec;font-weight:700;font-size:20px;margin-left:12px;margin-bottom:10px}.ng-select[_ngcontent-%COMP%]{border:0px;min-height:0px;border-radius:0;width:230px;height:40px;font-family:monospace;font-size:14px;font-weight:700;margin-left:12px;margin-right:12px}  .ng-select-container{border:1px solid #0921B4!important;border-radius:30px!important;height:40px!important}  .ng-placeholder{color:#172a46!important}  .ng-dropdown-panel{border-radius:10px!important;transform:translateY(1px)!important}  .ng-option:first-child{border-top-left-radius:10px!important;border-top-right-radius:10px!important}  .ng-option:last-child{border-bottom-left-radius:10px!important;border-bottom-right-radius:10px!important}.secondaryInputWrapper[_ngcontent-%COMP%]{width:762px;margin:0 auto;text-align:center}.averageSpendInput[_ngcontent-%COMP%], .pluHeldInput[_ngcontent-%COMP%]{width:208px;border:1px solid #0921B4;border-radius:30px;height:36px;padding-left:18px;margin-left:12px;margin-right:12px}.averageSpendInput[_ngcontent-%COMP%]:focus, .pluHeldInput[_ngcontent-%COMP%]:focus{outline:none}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}.promoButton[_ngcontent-%COMP%]{width:230px;background-color:transparent;border:1px solid #0921B4;border-radius:30px;height:40px;font-family:monospace;font-size:14px;font-weight:700;margin-left:12px;margin-right:12px}.requiredSubInfo[_ngcontent-%COMP%]{position:absolute;left:0;right:0;width:100%;max-width:400px;margin:0 auto;transform:translateY(23px);text-align:center;font-size:14px;color:#848d9c}.promoSelectionScreen[_ngcontent-%COMP%]{margin:30px auto 0;width:762px;padding-bottom:16px;background-color:#fbfbfb;border-radius:8px;color:#000;z-index:1001;text-align:center}.promoRequiredSubOffset[_ngcontent-%COMP%]{margin-top:90px}.promoHeader[_ngcontent-%COMP%]{margin:0;padding:15px 10px 0;font-size:17px;font-weight:700;color:#2649ec}.promoItem[_ngcontent-%COMP%]{position:relative;display:inline-block;vertical-align:top;width:351px;height:180px;margin:20px 10px 0;background-color:#fff;border-radius:8px;box-shadow:-1px 0 25px -18px #0000006b;-webkit-box-shadow:-1px 0px 25px -18px rgba(0,0,0,.42);-moz-box-shadow:-1px 0px 25px -18px rgba(0,0,0,.42)}.promoTitle[_ngcontent-%COMP%]{float:left;width:300px;margin:20px 0 0 20px;text-align:left;font-size:18px}.promoDate[_ngcontent-%COMP%]{float:left;width:250px;margin:2px 0 0 28px;text-align:left;font-size:13px}.promoInfo[_ngcontent-%COMP%]{float:left;width:310px;margin:5px 0 0 20px;text-align:left;color:#848d9c}.promoTerms[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;font-size:11px;margin:0 10px 5px 0;color:#c2c6ce;text-decoration:underline}.selected[_ngcontent-%COMP%]{border:2px solid #0921B4}.notSelected[_ngcontent-%COMP%]{border:2px solid white}.arrow-up[_ngcontent-%COMP%]{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #999999;transform:translateY(-1px)}.arrow-down[_ngcontent-%COMP%]{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #999999;transform:translateY(-1px)}.overview[_ngcontent-%COMP%]{clear:both;display:flex;align-items:center;width:738px;padding-left:12px;padding-right:12px;height:180px;margin:0 auto;justify-content:space-around;text-align:center;transform:translateY(50%)}.stackingTitle[_ngcontent-%COMP%]{padding-top:20px;margin:0;text-align:center;font-size:30px;color:#2649ec;transform:translateY(75px)}.overviewItem[_ngcontent-%COMP%]{background-color:#001271;border-radius:20px;width:236px;height:170px}.overviewItem[_ngcontent-%COMP%]:nth-child(-n+2){margin-right:15px}.overviewItem[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:45px 0 0;padding:9px 12px 7px;display:inline-block;background-color:#0923b5;border-radius:6px;font-weight:lighter;min-width:80px}.overviewItem[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:30px 0 0;font-weight:700}.optionSmallText[_ngcontent-%COMP%]{font-size:14px;color:#848d9c}.outputWrapper[_ngcontent-%COMP%]{display:flex;align-items:center;width:762px;margin:0 auto;justify-content:center;text-align:center;padding-top:150px;padding-bottom:100px}.headerBackDrop[_ngcontent-%COMP%]{background:linear-gradient(to right,#F5F9FF 50%,white 50%)}.header[_ngcontent-%COMP%]{background-color:#2649ea;border-radius:20px;width:375px;margin-left:12px;box-shadow:0 7px 26px 4px #2649ea54;z-index:999;padding-top:20px;padding-bottom:20px}.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:19px;margin:0;padding:18px 10px 12px 34px;text-align:left;font-weight:lighter}.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:right;font-size:12px;color:#f3f4f5;transform:translateY(5px);padding:0 20px}.header[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border:1px solid transparent}.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{border-bottom:1px solid transparent}.values[_ngcontent-%COMP%]{background-color:#fff;border-radius:0 20px 20px 0;z-index:-1;width:375px;margin-right:12px;padding-top:20px;padding-bottom:20px}.values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{-webkit-font-smoothing:antialiased;font-size:19px;margin:0;padding:18px 10px 12px 34px;color:#172a46}.values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{border-bottom:1px solid #EEEEEE}hr[_ngcontent-%COMP%]{margin:0}.values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child, .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{border-bottom:none}.explainer[_ngcontent-%COMP%]{padding-top:97px;padding-bottom:120px;width:738px;margin:0 auto;min-height:300px}.explainerTitle[_ngcontent-%COMP%]{color:#2649ec;font-weight:700;width:300px;margin-left:30px;float:left;font-size:19px;height:90px}.explainerText[_ngcontent-%COMP%]{color:#848d9c;width:378px;float:left;margin-right:30px;font-size:14px;height:90px}.importantNotes[_ngcontent-%COMP%]{width:738px;height:200px;background-color:#fff;border-radius:20px;margin:0 auto;padding-top:0;font-size:12px;transform:translateY(-50%);box-shadow:-1px 0 25px -18px #0000006b;-webkit-box-shadow:-1px 0px 25px -18px rgba(0,0,0,.42);-moz-box-shadow:-1px 0px 25px -18px rgba(0,0,0,.42)}.notesTitle[_ngcontent-%COMP%]{color:#2649ec;font-weight:700;font-size:19px;text-align:center;width:100%;margin:0;padding-top:40px;padding-bottom:40px}.noteItem[_ngcontent-%COMP%]{color:#848d9c;float:left;width:50%}.noteCheckmarkWrapper[_ngcontent-%COMP%]{width:18%;float:left;text-align:center}.noteCheckMark[_ngcontent-%COMP%]{display:inline-block;font-weight:700;background-color:#2649ec;color:#fff;font-family:monospace;border-radius:50%;padding:2px 6px;margin-left:15px;transform:translateY(-3px)}.noteText[_ngcontent-%COMP%]{width:75%;float:left;font-size:14px}@media only screen and (max-width: 761px){.inputWrapper[_ngcontent-%COMP%]{margin-top:30px;width:254px;text-align:center;height:250px}.inputLabelWrapper[_ngcontent-%COMP%]{padding-top:10px}.inputWrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:5px}.secondaryInputWrapper[_ngcontent-%COMP%]{width:254px;margin-top:24px;margin-bottom:10px}.averageSpendInput[_ngcontent-%COMP%]{margin:0 0 31px}.requiredSubInfo[_ngcontent-%COMP%]{position:relative;transform:translateY(5px)}.promoButton[_ngcontent-%COMP%]{width:230px}.promoSelectionScreen[_ngcontent-%COMP%]{width:430px;padding-bottom:38px}.overview[_ngcontent-%COMP%]{display:inline-block;width:100%;height:auto;transform:none;padding:5px 0 25px}.overviewItem[_ngcontent-%COMP%]{margin:20px auto 0;height:105px}.overviewItem[_ngcontent-%COMP%]:nth-child(-n+2){margin-right:auto}.overviewItem[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:15px}.overviewItem[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-top:10px}.stackingTitle[_ngcontent-%COMP%]{transform:none}.outputWrapper[_ngcontent-%COMP%]{width:100%;padding-top:25px;padding-bottom:25px}.header[_ngcontent-%COMP%]{width:230px}.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{height:40px}.values[_ngcontent-%COMP%]{width:200px;padding-top:9px;padding-bottom:9px}.values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:18px 0 12px;height:40px;line-height:2}.values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{padding-bottom:34px}.explainer[_ngcontent-%COMP%]{min-height:300px;width:300px;padding-top:35px;margin:0 auto}.explainerTitle[_ngcontent-%COMP%]{width:200px;float:none;height:auto;margin-left:0;padding-bottom:5px}.explainerText[_ngcontent-%COMP%]{width:290px;float:none;margin-right:0;padding-left:10px;height:auto;padding-bottom:20px}.importantNotes[_ngcontent-%COMP%]{width:430px;height:225px}.notesTitle[_ngcontent-%COMP%]{padding-top:20px;padding-bottom:20px}.noteCheckmarkWrapper[_ngcontent-%COMP%]{width:30px;margin-right:10px}.noteCheckMark[_ngcontent-%COMP%]{margin-left:0}.noteText[_ngcontent-%COMP%]{width:300px}.noteItem[_ngcontent-%COMP%]{width:340px;margin:0 auto;float:none;height:48px;padding-bottom:25px}}.visible[_ngcontent-%COMP%]{visibility:visible}.hidden[_ngcontent-%COMP%]{visibility:hidden}@media only screen and (max-width: 453px){.promoSelectionScreen[_ngcontent-%COMP%]{width:100%}.promoItem[_ngcontent-%COMP%], .promoInfo[_ngcontent-%COMP%], .importantNotes[_ngcontent-%COMP%]{width:calc(100% - 24px)}.noteItem[_ngcontent-%COMP%]{width:calc(100% - 24px);margin:0 auto;float:none;height:48px;padding-bottom:25px}.noteText[_ngcontent-%COMP%]{width:calc(100% - 40px)}}@media only screen and (max-width: 353px){.importantNotes[_ngcontent-%COMP%]{height:240px}}"]})}return i})()}];let q=(()=>{class i{static#e=this.\u0275fac=function(o){return new(o||i)};static#t=this.\u0275mod=e.oAB({type:i});static#n=this.\u0275inj=e.cJS({imports:[h.Bz.forChild(V),h.Bz]})}return i})();var R=s(21367);let U=(()=>{class i{static#e=this.\u0275fac=function(o){return new(o||i)};static#t=this.\u0275mod=e.oAB({type:i});static#n=this.\u0275inj=e.cJS({imports:[c.ez,R.m,q,d.A0,p.u5]})}return i})()}}]);