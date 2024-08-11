"use strict";(self.webpackChunkRandomProject=self.webpackChunkRandomProject||[]).push([[915],{40915:(A,d,r)=>{r.r(d),r.d(d,{MiscPlutusCryComparisonModule:()=>M});var u=r(96814),h=r(15251),C=r(77396),y=r(98158),t=r(52425),g=r(6593),f=r(69862),s=r(40285);const w=[{path:"",component:(()=>{class a{constructor(n,i,e){this.titleService=n,this.metaService=i,this.http=e,this.url="https://api.coingecko.com/api/v3/simple/price?ids=pluton&vs_currencies=eur%2Cgbp",this.url2="https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=eur%2Cgbp",this.pluPrice={eur:2.25,gbp:1.93},this.tetherPrice={eur:.9159,gbp:.7843},this.stackingTiersNew=y.F,this.stackingTiersOld=C.F3,this.selectedStackingTierNew=this.stackingTiersNew[0],this.selectedStackingTierOld=this.stackingTiersOld[0],this.currencySymbol="\u20ac",this.cashbackRateNew=0,this.cashbackRateOld=0,this.perkCountNew=0,this.perkCountOld=0,this.cryRateNew=0,this.cryRateOld=0,this.eligibleSpendNew=0,this.eligibleSpendOld=0,this.countAdditionalBenefits=!0,this.additionalBenefitsNew=0,this.additionalBenefitsOld=0,this.monthlyCashbackValueNew=0,this.monthlyCashbackValueOld=0,this.monthlyPerkValueNew=0,this.monthlyPerkValueOld=0,this.monthlyCryValueNew=0,this.monthlyCryValueOld=0,this.totalMonthlyValueNew=0,this.totalMonthlyValueOld=0,this.yearlyStackValuesNew=[0,0,0,0,0],this.yearlyStackValuesOld=[0,0,0,0,0],this.year1TotalValueNew=0,this.year1TotalValueOld=0}ngOnInit(){this.titleService.setTitle("Plutus CRY% vs Perks"),this.metaService.updateTag({name:"description",content:"Community calculator for Plutus Subscriptions & Reward Levels"}),this.metaService.getTag("name='robots'")?this.metaService.updateTag({name:"robots",content:"noindex, follow"}):this.metaService.addTag({name:"robots",content:"noindex, follow"}),this.initialise()}ngOnDestroy(){this.titleService.setTitle("Random Stuff")}initialise(){localStorage.getItem("pluCurrencySymbol")&&(this.currencySymbol=localStorage.getItem("pluCurrencySymbol")),this.calculate()}fetchTetherPrice(){this.http.get(this.url2).subscribe(i=>{this.tetherPrice=i.tether,this.calculate()})}fetchPluPrice(){this.http.get(this.url).subscribe(i=>{this.pluPrice=i.pluton})}getPrices(){return this.http.get(this.url)}stackingTierChange(n){this.calculate()}eligibleSpendTierChange(n){this.calculate()}heldPluChange(n){this.heldPluCount<0&&(this.heldPluCount=void 0),this.calculate()}calculate(){this.selectedStackingTierNew=this.calculateTierNew(this.heldPluCount),this.selectedStackingTierOld=this.calculateTierOld(this.heldPluCount),this.cashbackRateNew=this.calculateCashbackRateNew(this.selectedStackingTierNew,this.heldPluCount),this.cashbackRateOld=this.selectedStackingTierOld.cashbackPercentage,this.perkCountNew=this.selectedStackingTierNew.perkCount,this.perkCountOld=this.selectedStackingTierOld.perkCount,this.cryRateNew=this.calculateCryRate(this.cashbackRateNew,this.selectedStackingTierNew),this.cryRateOld=0,this.eligibleSpendNew=this.calculateEligibleSpendNew(this.heldPluCount),this.eligibleSpendOld=0,this.monthlyCashbackValueNew=this.calculateMonthlyCashback(this.eligibleSpendNew,this.cashbackRateNew),this.monthlyCashbackValueOld=this.calculateMonthlyCashback(this.eligibleSpendOld,this.cashbackRateOld),this.additionalBenefitsNew=this.calculateAdditionalBenefits(this.monthlyCashbackValueNew,this.selectedStackingTierNew),this.additionalBenefitsOld=0,this.monthlyPerkValueNew=10*this.perkCountNew,this.monthlyPerkValueOld=10*this.perkCountOld,this.calculateMonthlyCryValue(),this.totalMonthlyValueNew=this.calculateTotalMonthlyValue(this.monthlyCashbackValueNew,this.monthlyPerkValueNew,this.monthlyCryValueNew,this.additionalBenefitsNew),this.totalMonthlyValueOld=this.calculateTotalMonthlyValue(this.monthlyCashbackValueOld,this.monthlyPerkValueOld,this.monthlyCryValueOld,this.additionalBenefitsOld),this.calculateYear1TotalValue(),this.calculateRewardsOver5YearsWithCry(),this.calculateRewardsOver5YearsWithoutCry()}calculateTierNew(n){if(null==n||null==n)return this.stackingTiersNew[0];if(n>=5e4)return this.stackingTiersNew[this.stackingTiersNew.length-1];for(let i=0;i<this.stackingTiersNew.length;i++)if(this.stackingTiersNew[i].pluRequired>n)return this.stackingTiersNew[i-1]}calculateTierOld(n){if(null==n)return this.stackingTiersOld[0];if(n>=3e3)return this.stackingTiersOld[this.stackingTiersOld.length-1];for(let i=0;i<this.stackingTiersOld.length;i++)if(this.stackingTiersOld[i].pluRequired>n)return this.stackingTiersOld[i-1]}calculateCashbackRateNew(n,i){var e=this.stackingTiersNew.indexOf(n);if("None"!==n.name){if(n.cashbackPercentage===this.stackingTiersNew[this.stackingTiersNew.length-1].cashbackPercentage||this.stackingTiersNew[e+1].cashbackPercentage<4)return n.cashbackPercentage;var p=Math.floor((i-n.pluRequired)/(this.stackingTiersNew[e+1].pluRequired-this.stackingTiersNew[e].pluRequired)*10)/10;return n.cashbackPercentage+p}return n.cashbackPercentage}calculateCryRate(n,i){return 3==n?i.cryRate:n}calculateEligibleSpendNew(n){return null===n||isNaN(n)?0:n}calculateAdditionalBenefits(n,i){return"\u20ac"===this.currencySymbol?20*i.goldenTickets*this.tetherPrice.eur:20*i.goldenTickets*this.tetherPrice.gbp}calculateMonthlyCashback(n,i){return n*(i/100)}calculateMonthlyCryValue(){this.monthlyCryValueNew=null!=this.heldPluCount?this.heldPluCount/12*("\u20ac"===this.currencySymbol?this.pluPrice.eur:this.pluPrice.gbp)*(this.cryRateNew/100)*2:(this.monthlyCashbackValueNew+this.monthlyPerkValueNew)*(this.cryRateNew/100)*2}calculateTotalMonthlyValue(n,i,e,l){var o=n+i+e;return this.countAdditionalBenefits&&(o+=l),o}calculateYear1TotalValue(){this.year1TotalValueNew=12*this.totalMonthlyValueNew,this.year1TotalValueOld=12*this.totalMonthlyValueOld}calculateRewardsOver5YearsWithCry(){if(null!=this.heldPluCount&&null!=this.heldPluCount&&0!=this.heldPluCount){var n;n="\u20ac"===this.currencySymbol?this.pluPrice.eur:this.pluPrice.gbp;var i=this.heldPluCount,e=i,o=0;for(let c=0;c<5;c++){for(let b=0;b<12;b++){var p=this.calculateTierNew(i),x=this.calculateCashbackRateNew(p,i),T=p.perkCount,k=this.calculateEligibleSpendNew(i),m=this.calculateCryRate(x,p);i+=(this.calculateMonthlyCashback(k,x)+10*T)/n,o+=e/12*n*((m+m*(c+1))/100)}this.yearlyStackValuesNew[c]=i+=o/n,o=0,e=i}}}calculateRewardsOver5YearsWithoutCry(){if(null==this.heldPluCount||null==this.heldPluCount)return;let n=0;n="\u20ac"===this.currencySymbol?this.pluPrice.eur:this.pluPrice.gbp;for(let i=0;i<5;i++)this.yearlyStackValuesOld[i]=this.heldPluCount+this.totalMonthlyValueOld/n*12*(i+1)}changeCurrency(){this.currencySymbol="\u20ac"===this.currencySymbol?"\xa3":"\u20ac",localStorage.setItem("pluCurrencySymbol",this.currencySymbol),this.calculate()}static#t=this.\u0275fac=function(i){return new(i||a)(t.Y36(g.Dx),t.Y36(g.h_),t.Y36(f.eN))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-misc-plutus-crycomparison"]],decls:229,vars:114,consts:[[1,"contentPageOverride"],[1,"currencyButton",3,"click"],[1,"title"],[1,"infoTextTop"],[1,"inputWrapper"],[1,"inputLabelWrapper"],["for","stackingTier"],["type","number","min","0","max","1000000","placeholder","Amount of PLU Owned",1,"pluHeldInput",3,"ngModel","ngModelChange","input"],[1,"overview"],[1,"overviewItem"],[1,"contentPageOverride","contentpageSecondaryColor"],[1,"overview","overview2"],[1,"newOutputWrapper"],[1,"newOutput"],[1,"newOutputTitle"],[1,"monthlyValues"],["type","checkbox","id","additionalBenefits","name","additionalBenefits",3,"ngModel","change","ngModelChange"],[1,"yearlyValue"],[1,"yearlyHeader"],[1,"yearlyAmount"],[1,"cryTitle"],[1,"yearlyCry"],["type","checkbox","id","additionalBenefits","name","additionalBenefits",3,"checked"],[1,"explainer"],[1,"explainerTitle"],[1,"explainerText"],[1,"contentPageOverride","contentpageTertiaryColor"],[1,"importantNotes"],[1,"notesTitle"],[1,"noteItem"],[1,"noteCheckmarkWrapper"],[1,"noteCheckMark"],[1,"noteText"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return e.changeCurrency()}),t._uU(2,"Switch \xa3/\u20ac"),t.qZA(),t.TgZ(3,"p",2),t._uU(4,"Pluton Rewards Calculator"),t.qZA(),t.TgZ(5,"p",3),t._uU(6," This is a community-created calculator based on the subscriptions and reward levels of Plutus. "),t.qZA(),t.TgZ(7,"div",4)(8,"div",5)(9,"label",6),t._uU(10,"PLU Stack"),t.qZA(),t.TgZ(11,"input",7),t.NdJ("ngModelChange",function(o){return e.heldPluCount=o})("input",function(o){return e.heldPluChange(o)}),t.qZA()()(),t.TgZ(12,"div",8)(13,"div",9)(14,"h4"),t._uU(15,"Reward Rate"),t.qZA(),t.TgZ(16,"h2"),t._uU(17),t.qZA(),t._UZ(18,"br")(19,"br"),t.TgZ(20,"h2"),t._uU(21),t.qZA()(),t.TgZ(22,"div",9)(23,"h4"),t._uU(24,"CRY %"),t.qZA(),t.TgZ(25,"h2"),t._uU(26),t.qZA(),t._UZ(27,"br")(28,"br"),t.TgZ(29,"h2"),t._uU(30),t.qZA()(),t.TgZ(31,"div",9)(32,"h4"),t._uU(33,"Perks"),t.qZA(),t.TgZ(34,"h2"),t._uU(35),t.qZA(),t._UZ(36,"br")(37,"br"),t.TgZ(38,"h2"),t._uU(39),t.qZA()(),t.TgZ(40,"div",9)(41,"h4"),t._uU(42,"Rewards Cap"),t.qZA(),t.TgZ(43,"h2"),t._uU(44),t.ALo(45,"number"),t.qZA(),t._UZ(46,"br")(47,"br"),t.TgZ(48,"h2"),t._uU(49),t.ALo(50,"number"),t.qZA()()()(),t.TgZ(51,"div",10)(52,"div",11)(53,"div",9)(54,"h4"),t._uU(55,"Double Rewards"),t._UZ(56,"br"),t._uU(57,"Vouchers"),t.qZA(),t.TgZ(58,"h2"),t._uU(59),t.qZA(),t._UZ(60,"br")(61,"br"),t.TgZ(62,"h2"),t._uU(63,"0"),t.qZA()(),t.TgZ(64,"div",9)(65,"h4"),t._uU(66,"Stackable Perks"),t.qZA(),t.TgZ(67,"h2"),t._uU(68),t.qZA(),t._UZ(69,"br")(70,"br"),t.TgZ(71,"h2"),t._uU(72,"0"),t.qZA()(),t.TgZ(73,"div",9)(74,"h4"),t._uU(75,"Free Payouts"),t.qZA(),t.TgZ(76,"h2"),t._uU(77),t.qZA(),t._UZ(78,"br")(79,"br"),t.TgZ(80,"h2"),t._uU(81,"0"),t.qZA()(),t.TgZ(82,"div",9)(83,"h4"),t._uU(84,"Direct Debit"),t._UZ(85,"br"),t._uU(86,"Rewards"),t.qZA(),t.TgZ(87,"h2"),t._uU(88),t.qZA(),t._UZ(89,"br")(90,"br"),t.TgZ(91,"h2"),t._uU(92,"0"),t.qZA()(),t.TgZ(93,"div",9)(94,"h4"),t._uU(95,"Golden Tickets"),t.qZA(),t.TgZ(96,"h2"),t._uU(97),t.qZA(),t._UZ(98,"br")(99,"br"),t.TgZ(100,"h2"),t._uU(101,"0"),t.qZA()()(),t.TgZ(102,"div",12)(103,"div",13)(104,"h2",14),t._uU(105,"New"),t.qZA(),t.TgZ(106,"div",15)(107,"span"),t._uU(108,"Rewards: "),t.qZA(),t._uU(109),t.ALo(110,"number"),t._UZ(111,"br"),t.TgZ(112,"span"),t._uU(113,"CRY: "),t.qZA(),t._uU(114),t.ALo(115,"number"),t._UZ(116,"br"),t.TgZ(117,"span"),t._uU(118,"Perks: "),t.qZA(),t._uU(119),t.ALo(120,"number"),t._UZ(121,"br"),t.TgZ(122,"span"),t._uU(123,"Additional Benefits: "),t.qZA(),t._uU(124),t.ALo(125,"number"),t.TgZ(126,"input",16),t.NdJ("change",function(){return e.calculate()})("ngModelChange",function(o){return e.countAdditionalBenefits=o}),t.qZA()(),t.TgZ(127,"div",17)(128,"p",18),t._uU(129,"Yearly"),t.qZA(),t.TgZ(130,"p",19),t._uU(131),t.ALo(132,"number"),t.qZA()(),t.TgZ(133,"p",20),t._uU(134,"Stack evolution from 1 year to 5 years."),t.qZA(),t.TgZ(135,"div",21)(136,"h4"),t._uU(137),t.ALo(138,"number"),t.qZA(),t.TgZ(139,"h4"),t._uU(140),t.ALo(141,"number"),t.qZA(),t.TgZ(142,"h4"),t._uU(143),t.ALo(144,"number"),t.qZA(),t.TgZ(145,"h4"),t._uU(146),t.ALo(147,"number"),t.qZA(),t.TgZ(148,"h4"),t._uU(149),t.ALo(150,"number"),t.qZA()()(),t.TgZ(151,"div",13)(152,"h2",14),t._uU(153,"Old"),t.qZA(),t.TgZ(154,"div",15)(155,"span"),t._uU(156,"Rewards: "),t.qZA(),t._uU(157),t.ALo(158,"number"),t._UZ(159,"br"),t.TgZ(160,"span"),t._uU(161,"CRY: "),t.qZA(),t._uU(162),t.ALo(163,"number"),t._UZ(164,"br"),t.TgZ(165,"span"),t._uU(166,"Perks: "),t.qZA(),t._uU(167),t.ALo(168,"number"),t._UZ(169,"br"),t.TgZ(170,"span"),t._uU(171,"Additional Benefits: "),t.qZA(),t._uU(172),t.ALo(173,"number"),t._UZ(174,"input",22),t.qZA(),t.TgZ(175,"div",17)(176,"p",18),t._uU(177,"Yearly"),t.qZA(),t.TgZ(178,"p",19),t._uU(179),t.ALo(180,"number"),t.qZA()(),t.TgZ(181,"p",20),t._uU(182,"Stack evolution from 1 year to 5 years."),t.qZA(),t.TgZ(183,"div",21)(184,"h4"),t._uU(185),t.ALo(186,"number"),t.qZA(),t.TgZ(187,"h4"),t._uU(188),t.ALo(189,"number"),t.qZA(),t.TgZ(190,"h4"),t._uU(191),t.ALo(192,"number"),t.qZA(),t.TgZ(193,"h4"),t._uU(194),t.ALo(195,"number"),t.qZA(),t.TgZ(196,"h4"),t._uU(197),t.ALo(198,"number"),t.qZA()()()()(),t.TgZ(199,"div",0)(200,"div",23)(201,"div",24),t._uU(202,"Reward Levels"),t.qZA(),t.TgZ(203,"div",25),t._uU(204,"Stack your earned PLU to unlock higher reward rates and additional perks as you progress through Reward Levels."),t.qZA(),t.TgZ(205,"div",24),t._uU(206,"CRY"),t.qZA(),t.TgZ(207,"div",25),t._uU(208,"Compounding Reward Yield is interest on your PLU and Rewards paid out on a yearly basis."),t.qZA(),t.TgZ(209,"div",24),t._uU(210,"TODO"),t.qZA(),t.TgZ(211,"div",25),t._uU(212,"TODO: add new text here."),t.qZA()()(),t.TgZ(213,"div",26)(214,"div",27)(215,"p",28),t._uU(216,"Important Notes"),t.qZA(),t.TgZ(217,"div",29)(218,"div",30)(219,"span",31),t._uU(220,"\u2713"),t.qZA()(),t.TgZ(221,"div",32),t._uU(222," The PLU needed for Reward Levels is not considered a cost, as customers keep both their stack and rewards in personal wallets, available for swapping at any time. "),t.qZA()(),t.TgZ(223,"div",29)(224,"div",30)(225,"span",31),t._uU(226,"\u2713"),t.qZA()(),t.TgZ(227,"div",32),t._uU(228," TODO: add new text here. "),t.qZA()()()()),2&i&&(t.xp6(11),t.Q6J("ngModel",e.heldPluCount),t.xp6(6),t.hij("",e.cashbackRateNew,"%"),t.xp6(4),t.hij("",e.cashbackRateOld,"%"),t.xp6(5),t.hij("",e.cryRateNew,"%"),t.xp6(4),t.hij("",e.cryRateOld,"%"),t.xp6(5),t.Oqu(e.perkCountNew),t.xp6(4),t.Oqu(e.perkCountOld),t.xp6(5),t.AsE("",e.currencySymbol,"",t.xi3(45,48,e.eligibleSpendNew,"1.0-0"),"/m"),t.xp6(5),t.AsE("",e.currencySymbol,"",t.xi3(50,51,e.eligibleSpendOld,"1.0-0"),"/m"),t.xp6(10),t.Oqu(e.selectedStackingTierNew.doubleRewards),t.xp6(9),t.Oqu(e.selectedStackingTierNew.stackablePerkCount),t.xp6(9),t.Oqu(e.selectedStackingTierNew.freePayouts),t.xp6(11),t.Oqu(e.selectedStackingTierNew.directDebitRewards),t.xp6(9),t.Oqu(e.selectedStackingTierNew.goldenTickets),t.xp6(12),t.AsE("",e.currencySymbol,"",t.xi3(110,54,e.monthlyCashbackValueNew,"1.2-2"),"/m "),t.xp6(5),t.AsE("",e.currencySymbol,"",t.xi3(115,57,e.monthlyCryValueNew,"1.2-2"),"/m "),t.xp6(5),t.AsE("",e.currencySymbol,"",t.xi3(120,60,e.monthlyPerkValueNew,"1.2-2"),"/m "),t.xp6(5),t.AsE("",e.currencySymbol,"",t.xi3(125,63,e.additionalBenefitsNew,"1.2-2"),"/m "),t.xp6(2),t.Q6J("ngModel",e.countAdditionalBenefits),t.xp6(5),t.AsE("",e.currencySymbol,"",t.xi3(132,66,e.year1TotalValueNew,"1.2-2"),""),t.xp6(6),t.hij("",t.xi3(138,69,e.yearlyStackValuesNew[0],"1.0-0")," PLU"),t.xp6(3),t.hij("",t.xi3(141,72,e.yearlyStackValuesNew[1],"1.0-0")," PLU"),t.xp6(3),t.hij("",t.xi3(144,75,e.yearlyStackValuesNew[2],"1.0-0")," PLU"),t.xp6(3),t.hij("",t.xi3(147,78,e.yearlyStackValuesNew[3],"1.0-0")," PLU"),t.xp6(3),t.hij("",t.xi3(150,81,e.yearlyStackValuesNew[4],"1.0-0")," PLU"),t.xp6(8),t.AsE("",e.currencySymbol,"",t.xi3(158,84,e.monthlyCashbackValueOld,"1.2-2"),"/m "),t.xp6(5),t.AsE("",e.currencySymbol,"",t.xi3(163,87,e.monthlyCryValueOld,"1.2-2"),"/m "),t.xp6(5),t.AsE("",e.currencySymbol,"",t.xi3(168,90,e.monthlyPerkValueOld,"1.2-2"),"/m "),t.xp6(5),t.AsE("",e.currencySymbol,"",t.xi3(173,93,e.additionalBenefitsOld,"1.2-2"),"/m "),t.xp6(2),t.Q6J("checked",e.countAdditionalBenefits),t.xp6(5),t.AsE("",e.currencySymbol,"",t.xi3(180,96,e.year1TotalValueOld,"1.2-2"),""),t.xp6(6),t.hij("",t.xi3(186,99,e.yearlyStackValuesOld[0],"1.0-0")," PLU"),t.xp6(3),t.hij("",t.xi3(189,102,e.yearlyStackValuesOld[1],"1.0-0")," PLU"),t.xp6(3),t.hij("",t.xi3(192,105,e.yearlyStackValuesOld[2],"1.0-0")," PLU"),t.xp6(3),t.hij("",t.xi3(195,108,e.yearlyStackValuesOld[3],"1.0-0")," PLU"),t.xp6(3),t.hij("",t.xi3(198,111,e.yearlyStackValuesOld[4],"1.0-0")," PLU"))},dependencies:[s.Fj,s.wV,s.Wl,s.JJ,s.qQ,s.Fd,s.On,u.JJ],styles:[".contentPageOverride[_ngcontent-%COMP%]{width:100%;background-color:#fff;position:relative;z-index:2}.contentpageSecondaryColor[_ngcontent-%COMP%]{background-color:#f5f9ff;z-index:1}.contentpageTertiaryColor[_ngcontent-%COMP%]{background-color:#2649ec;z-index:3}.currencyButton[_ngcontent-%COMP%]{background-color:#2649ec;border:none;color:#fff;padding:5px 8px;text-align:center;font-size:16px;margin:8px 8px 0 0;outline:none;position:absolute;top:0;right:0;cursor:pointer}.title[_ngcontent-%COMP%]{padding-top:70px;padding-bottom:30px;margin:0;text-align:center;font-size:38px;color:#2649ec}.infoTextTop[_ngcontent-%COMP%]{text-align:center;margin:0 auto 20px;padding-right:10px;padding-left:10px;font-size:14px;max-width:400px;color:#848d9c}.inputWrapper[_ngcontent-%COMP%]{width:254px;margin:70px auto 40px;height:80px}.inputLabelWrapper[_ngcontent-%COMP%]{float:left}.inputWrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#2649ec;font-weight:700;font-size:20px;margin-left:12px;margin-bottom:10px}.ng-select[_ngcontent-%COMP%]{border:0px;min-height:0px;border-radius:0;width:230px;height:40px;font-family:monospace;font-size:14px;font-weight:700;margin-left:12px;margin-right:12px}  .ng-select-container{border:1px solid #0921B4!important;border-radius:30px!important;height:40px!important}  .ng-placeholder{color:#172a46!important}  .ng-dropdown-panel{border-radius:10px!important;transform:translateY(1px)!important}  .ng-option:first-child{border-top-left-radius:10px!important;border-top-right-radius:10px!important}  .ng-option:last-child{border-bottom-left-radius:10px!important;border-bottom-right-radius:10px!important}.secondaryInputWrapper[_ngcontent-%COMP%]{width:762px;margin:0 auto;text-align:center}.averageSpendInput[_ngcontent-%COMP%], .pluHeldInput[_ngcontent-%COMP%]{width:208px;border:1px solid #0921B4;border-radius:30px;height:36px;padding-left:18px;margin-left:12px;margin-right:12px}.averageSpendInput[_ngcontent-%COMP%]:focus, .pluHeldInput[_ngcontent-%COMP%]:focus{outline:none}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}.promoButton[_ngcontent-%COMP%]{width:230px;background-color:transparent;border:1px solid #0921B4;border-radius:30px;height:40px;font-family:monospace;font-size:14px;font-weight:700;margin-left:12px;margin-right:12px}.requiredSubInfo[_ngcontent-%COMP%]{position:absolute;left:0;right:0;width:100%;max-width:400px;margin:0 auto;transform:translateY(23px);text-align:center;font-size:14px;color:#848d9c}.promoSelectionScreen[_ngcontent-%COMP%]{margin:30px auto 0;width:762px;padding-bottom:16px;background-color:#fbfbfb;border-radius:8px;color:#000;z-index:1001;text-align:center}.promoRequiredSubOffset[_ngcontent-%COMP%]{margin-top:90px}.promoHeader[_ngcontent-%COMP%]{margin:0;padding:15px 10px 0;font-size:17px;font-weight:700;color:#2649ec}.promoItem[_ngcontent-%COMP%]{position:relative;display:inline-block;vertical-align:top;width:351px;height:180px;margin:20px 10px 0;background-color:#fff;border-radius:8px;box-shadow:-1px 0 25px -18px #0000006b;-webkit-box-shadow:-1px 0px 25px -18px rgba(0,0,0,.42);-moz-box-shadow:-1px 0px 25px -18px rgba(0,0,0,.42)}.promoTitle[_ngcontent-%COMP%]{float:left;width:300px;margin:20px 0 0 20px;text-align:left;font-size:18px}.promoDate[_ngcontent-%COMP%]{float:left;width:250px;margin:2px 0 0 28px;text-align:left;font-size:13px}.promoInfo[_ngcontent-%COMP%]{float:left;width:310px;margin:5px 0 0 20px;text-align:left;color:#848d9c}.promoTerms[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;font-size:11px;margin:0 10px 5px 0;color:#c2c6ce;text-decoration:underline}.selected[_ngcontent-%COMP%]{border:2px solid #0921B4}.notSelected[_ngcontent-%COMP%]{border:2px solid white}.overview[_ngcontent-%COMP%]{clear:both;display:flex;align-items:center;width:750px;padding-left:12px;padding-right:12px;height:194px;margin:0 auto;justify-content:space-around;text-align:center}.stackingTitle[_ngcontent-%COMP%]{width:100%;margin:15px 0;text-align:center;font-size:30px;color:#2649ec}.overviewItem[_ngcontent-%COMP%]{background-color:#001271;border-radius:20px;width:173px;height:180px}.overview2[_ngcontent-%COMP%]   .overviewItem[_ngcontent-%COMP%]{width:135px}.overviewItem[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;padding:9px 12px 7px;display:inline-block;background-color:#0923b5;border-radius:6px;font-weight:lighter;min-width:80px}.overviewItem[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px}.overviewItem[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:10px 0 0;font-weight:700}.overviewItem[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:18px 0 5px;height:36px;font-weight:700}.optionSmallText[_ngcontent-%COMP%]{font-size:14px;color:#848d9c}.newOutputWrapper[_ngcontent-%COMP%]{clear:both;display:flex;align-items:center;width:1250px;height:320px;margin:50px auto 0;padding-bottom:50px;justify-content:space-around;text-align:center}.newOutput[_ngcontent-%COMP%]{position:relative;background-color:#2649ea;border-radius:20px;width:600px;height:300px}.newOutputTitle[_ngcontent-%COMP%]{margin:10px 0 0 20px;text-align:left}.monthlyValues[_ngcontent-%COMP%]{width:250px;height:100px;text-align:left;margin:20px 0 0 20px;float:left}.monthlyValues[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;width:145px}.yearlyValue[_ngcontent-%COMP%]{width:150px;height:100px;float:right;margin:0 20px 0 0;border-radius:6px;background-color:#0923b5}.yearlyValue[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%}.yearlyAmount[_ngcontent-%COMP%]{font-size:20px;font-weight:700}.cryTitle[_ngcontent-%COMP%]{position:absolute;left:50%;bottom:62px;transform:translate(-50%)}.yearlyCry[_ngcontent-%COMP%]{width:550px;position:absolute;display:flex;justify-content:space-around;text-align:center;align-items:center;left:50%;bottom:20px;transform:translate(-50%);margin:0 auto}.yearlyCry[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;padding:16px 12px 7px;display:inline-block;background-color:#0923b5;border-radius:6px;font-weight:lighter;min-width:83px;height:24px}.outputTitle[_ngcontent-%COMP%]{margin-top:50px;margin-bottom:10px;width:100%;text-align:center;color:#2649ec;font-size:25px}.outputWrapper[_ngcontent-%COMP%]{display:flex;align-items:center;width:762px;margin:0 auto;justify-content:center;text-align:center;padding-bottom:20px}.secondOutput[_ngcontent-%COMP%]{padding-bottom:70px}.headerBackDrop[_ngcontent-%COMP%]{background:linear-gradient(to right,#F5F9FF 50%,white 50%)}.header[_ngcontent-%COMP%]{background-color:#2649ea;border-radius:20px;width:275px;margin-left:12px;box-shadow:0 7px 26px 4px #2649ea54;z-index:999;padding-top:20px;padding-bottom:20px}.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:19px;margin:0;padding:18px 10px 12px 34px;text-align:left;font-weight:lighter}.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:right;font-size:12px;color:#f3f4f5;transform:translateY(5px);padding:0 20px}.header[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border:1px solid transparent}.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{border-bottom:1px solid transparent}.values[_ngcontent-%COMP%]{background-color:#fff;border-radius:0 20px 20px 0;z-index:-1;width:275px;margin-right:12px;padding-top:20px;padding-bottom:20px}.values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{-webkit-font-smoothing:antialiased;font-size:19px;margin:0;padding:18px 10px 12px 34px;color:#172a46}.values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{border-bottom:1px solid #EEEEEE}hr[_ngcontent-%COMP%]{margin:0}.values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child, .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{border-bottom:none}.explainer[_ngcontent-%COMP%]{padding-top:97px;padding-bottom:120px;width:738px;margin:0 auto;min-height:300px}.explainerTitle[_ngcontent-%COMP%]{color:#2649ec;font-weight:700;width:300px;margin-left:30px;float:left;font-size:19px;height:90px}.explainerText[_ngcontent-%COMP%]{color:#848d9c;width:378px;float:left;margin-right:30px;font-size:14px;height:90px}.importantNotes[_ngcontent-%COMP%]{width:738px;height:200px;background-color:#fff;border-radius:20px;margin:0 auto;padding-top:0;font-size:12px;transform:translateY(-50%);box-shadow:-1px 0 25px -18px #0000006b;-webkit-box-shadow:-1px 0px 25px -18px rgba(0,0,0,.42);-moz-box-shadow:-1px 0px 25px -18px rgba(0,0,0,.42)}.notesTitle[_ngcontent-%COMP%]{color:#2649ec;font-weight:700;font-size:19px;text-align:center;width:100%;margin:0;padding-top:40px;padding-bottom:40px}.noteItem[_ngcontent-%COMP%]{color:#848d9c;float:left;width:50%}.noteCheckmarkWrapper[_ngcontent-%COMP%]{width:18%;float:left;text-align:center}.noteCheckMark[_ngcontent-%COMP%]{display:inline-block;font-weight:700;background-color:#2649ec;color:#fff;font-family:monospace;border-radius:50%;padding:2px 6px;margin-left:15px;transform:translateY(-3px)}.noteText[_ngcontent-%COMP%]{width:75%;float:left;font-size:14px}@media only screen and (max-width: 761px){.inputWrapper[_ngcontent-%COMP%]{margin-top:30px;width:254px;text-align:center;height:90px}.inputLabelWrapper[_ngcontent-%COMP%]{padding-top:10px}.inputWrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:5px}.secondaryInputWrapper[_ngcontent-%COMP%]{width:254px;margin-top:24px;margin-bottom:10px}.averageSpendInput[_ngcontent-%COMP%]{margin:0 0 31px}.requiredSubInfo[_ngcontent-%COMP%]{position:relative;transform:translateY(5px)}.promoButton[_ngcontent-%COMP%]{width:230px}.promoSelectionScreen[_ngcontent-%COMP%]{width:430px;padding-bottom:38px}.overview[_ngcontent-%COMP%]{width:350px;height:auto;transform:none;padding:0 0 5px;flex-wrap:wrap}.overviewItem[_ngcontent-%COMP%]{margin-top:10px;width:165px}.overview2[_ngcontent-%COMP%]   .overviewItem[_ngcontent-%COMP%]{width:165px}.overviewItem[_ngcontent-%COMP%]:nth-child(-n+2){margin-top:5px}.stackingTitle[_ngcontent-%COMP%]{transform:translateY(-23px);margin-bottom:0}.outputWrapper[_ngcontent-%COMP%]{width:100%;padding-top:25px;padding-bottom:25px}.header[_ngcontent-%COMP%]{width:230px}.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{height:40px}.values[_ngcontent-%COMP%]{width:200px;padding-top:9px;padding-bottom:9px}.values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:18px 0 12px;height:40px;line-height:2}.values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{padding-bottom:34px}.explainer[_ngcontent-%COMP%]{min-height:300px;width:300px;padding-top:35px;margin:0 auto}.explainerTitle[_ngcontent-%COMP%]{width:200px;float:none;height:auto;margin-left:0;padding-bottom:5px}.explainerText[_ngcontent-%COMP%]{width:290px;float:none;margin-right:0;padding-left:10px;height:auto;padding-bottom:20px}.importantNotes[_ngcontent-%COMP%]{width:430px;height:225px}.notesTitle[_ngcontent-%COMP%]{padding-top:20px;padding-bottom:20px}.noteCheckmarkWrapper[_ngcontent-%COMP%]{width:30px;margin-right:10px}.noteCheckMark[_ngcontent-%COMP%]{margin-left:0}.noteText[_ngcontent-%COMP%]{width:300px}.noteItem[_ngcontent-%COMP%]{width:340px;margin:0 auto;float:none;height:48px;padding-bottom:25px}}.visible[_ngcontent-%COMP%]{visibility:visible}.hidden[_ngcontent-%COMP%]{visibility:hidden}@media only screen and (max-width: 453px){.promoSelectionScreen[_ngcontent-%COMP%]{width:100%}.promoItem[_ngcontent-%COMP%], .promoInfo[_ngcontent-%COMP%], .importantNotes[_ngcontent-%COMP%]{width:calc(100% - 24px)}.noteItem[_ngcontent-%COMP%]{width:calc(100% - 24px);margin:0 auto;float:none;height:48px;padding-bottom:25px}.noteText[_ngcontent-%COMP%]{width:calc(100% - 40px)}}@media only screen and (max-width: 353px){.importantNotes[_ngcontent-%COMP%]{height:240px}}"]})}return a})()}];let P=(()=>{class a{static#t=this.\u0275fac=function(i){return new(i||a)};static#e=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({imports:[h.Bz.forChild(w),h.Bz]})}return a})();var O=r(21367),_=r(31501);let M=(()=>{class a{static#t=this.\u0275fac=function(i){return new(i||a)};static#e=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({imports:[u.ez,O.m,P,_.A0,s.u5]})}return a})()}}]);