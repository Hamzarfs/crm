import{u as le}from"./useApi-D4hKsd0_.js";import{V as Q,a as x}from"./VRow-DcbkzY-u.js";import{V as $}from"./VTextField-JeOZvJkP.js";import{b as H,V as ee}from"./VCard-Do568HRS.js";import{V as E}from"./VImg-CJF-w0vk.js";import{V as Y}from"./VAvatar-CP8SEjMm.js";import{d as N,aM as oe,r as T,a as te,o as d,c as I,b as a,f as e,n as o,aG as X,e as s,v as l,F as se,i as ne,g as y,a0 as F,p as b,x as me,z as B,E as re,ai as U,s as ce}from"./main-FCzYu4Z5.js";import{V as L}from"./VChip-ChL126MO.js";import{V as w}from"./VDataTable-BGPZE7tW.js";import{a as G}from"./formatters-DvWGt13L.js";import{a as O}from"./avatar-1-BpD18F9D.js";import{a as P}from"./avatar-2-7Cb1ulCk.js";import{a as q}from"./avatar-3-D1OxVER-.js";import{a as _}from"./avatar-4-DTtpEczF.js";import{a as K}from"./avatar-5-Dlv_vFhH.js";import{a as W}from"./avatar-6-CtsY7J5w.js";import{a as f}from"./avatar-7-mVVn6NIv.js";import{a as M}from"./avatar-8-D64qtsE2.js";import{V as ie}from"./VSelect-B3zOJvEu.js";import{V as de}from"./VPagination-ABgY-7nO.js";import{V as ae}from"./VDialog-BbF2kOnV.js";import{_ as ue}from"./AppCardCode.vue_vue_type_style_index_0_lang-ChisEB8j.js";/* empty css              *//* empty css                   */import"./VCounter-fwUCpOxO.js";import"./VField-Dk2Ak1ql.js";import"./InputIcon-wsmb1BjU.js";import"./easing-CjukEv2V.js";import"./VInput-B2EWUdv0.js";import"./forwardRefs-C-GTDzx5.js";import"./VSlideGroup-CrEC992E.js";import"./VCheckboxBtn-B0Ml4Fv6.js";import"./VSelectionControl-CjMQjtTf.js";import"./VTable-DTLm3gSp.js";import"./filter-D7wIZvCz.js";import"./VDivider-knA9H03k.js";import"./helpers-BO_WrFPz.js";import"./VList-DBeUyEP9.js";import"./ssrBoot-CaII-3XN.js";import"./dialog-transition-CkzesdKy.js";import"./VMenu-B6LO-Wa5.js";import"./VOverlay-CJoYV0aa.js";import"./delay-ghhtiNk_.js";import"./lazy-s9MkjEdz.js";import"./scopeId-C8kA2Rpd.js";import"./vue3-perfect-scrollbar-gC16KFl8.js";const pe={class:"d-flex align-center"},ve={class:"d-flex flex-column ms-3"},ge={class:"d-block font-weight-medium text-truncate text-high-emphasis"},ye={class:"text-xs"},fe={class:"d-flex align-center"},xe={class:"ms-1 text-no-wrap"},he={class:"d-flex align-center"},De={key:1,class:"text-sm"},be={class:"text-no-wrap font-weight-medium text-high-emphasis ms-2"},ke={class:"d-flex flex-column"},Ae={class:"d-flex align-center"},Ve={class:"text-high-emphasis font-weight-medium"},Ie={key:0},Ne={class:"text-xs text-no-wrap"},Se=N({__name:"DemoDataTableKitchenSink",async setup(S){let c,n;const{data:r}=([c,n]=oe(()=>le("pages/datatable")),c=await c,n(),c),i=T(""),t=[{title:"PRODUCT",key:"product.name"},{title:"DATE",key:"date"},{title:"CATEGORY",key:"product.category"},{title:"BUYERS",key:"buyer.name"},{title:"PAYMENT",key:"payment",sortable:!1},{title:"STATUS",key:"status",sortable:!1},{title:"DELETE",key:"delete",sortable:!1}],u=D=>{if(!r.value)return;const V=r.value.findIndex(C=>C.product.id===D);r.value.splice(V,1)},p=[{name:"Mouse",icon:"ri-mouse-fill",color:"warning"},{name:"Glass",icon:"ri-glasses-line",color:"primary"},{name:"Smart Watch",icon:"ri-time-line",color:"success"},{name:"Bag",icon:"ri-shopping-bag-line",color:"info"},{name:"Storage Device",icon:"ri-tape-line",color:"warning"},{name:"Bluetooth",icon:"ri-bluetooth-line",color:"error"},{name:"Gaming",icon:"ri-gamepad-line",color:"warning"},{name:"Home",icon:"ri-home-line",color:"error"},{name:"VR",icon:"ri-goggles-line",color:"primary"},{name:"Shoes",icon:"ri-omega",color:"success"},{name:"Electronics",icon:"ri-flashlight-fill",color:"info"},{name:"Projector",icon:"ri-projector-line",color:"warning"},{name:"iPod",icon:"ri-music-line",color:"error"},{name:"Keyboard",icon:"ri-keyboard-box-line",color:"primary"},{name:"Smart Phone",icon:"ri-smartphone-line",color:"success"},{name:"Smart TV",icon:"ri-tv-line",color:"info"},{name:"Google Home",icon:"ri-google-line",color:"warning"},{name:"Mac",icon:"ri-apple-line",color:"error"},{name:"Headphone",icon:"ri-headphone-line",color:"primary"},{name:"iMac",icon:"ri-computer-line",color:"success"},{name:"iPhone",icon:"ri-apple-line",color:"warning"}],v=D=>{if(D==="Confirmed")return"primary";if(D==="Completed")return"success";if(D==="Cancelled")return"error"},R=D=>{const V=p.findIndex(C=>C.name===D);return V!==-1?[{icon:p[V].icon,color:p[V].color}]:[{icon:"ri-question-line",color:"primary"}]};return(D,V)=>{const C=te("IconBtn");return d(),I("div",null,[a(H,null,{default:e(()=>[a(Q,null,{default:e(()=>[a(x,{cols:"12","offset-md":"8",md:"4"},{default:e(()=>[a($,{modelValue:o(i),"onUpdate:modelValue":V[0]||(V[0]=m=>X(i)?i.value=m:null),label:"Search",placeholder:"Search ...","append-inner-icon":"ri-search-line","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),a(w,{headers:t,items:o(r)||[],search:o(i),"items-per-page":5,class:"text-no-wrap"},{"item.product.name":e(({item:m})=>[s("div",pe,[s("div",null,[a(E,{src:m.product.image,height:"40",width:"40"},null,8,["src"])]),s("div",ve,[s("span",ge,l(m.product.name),1),s("span",ye,l(m.product.brand),1)])])]),"item.product.category":e(({item:m})=>[s("div",fe,[(d(!0),I(se,null,ne(R(m.product.category),(j,J)=>(d(),y(Y,{key:J,size:"26",color:j.color,variant:"tonal"},{default:e(()=>[a(F,{size:"18",color:j.color,class:"rounded-0"},{default:e(()=>[b(l(j.icon),1)]),_:2},1032,["color"])]),_:2},1032,["color"]))),128)),s("span",xe,l(m.product.category),1)])]),"item.buyer.name":e(({item:m})=>[s("div",he,[a(Y,{size:"1.875rem",color:m.buyer.avatar?void 0:"primary",variant:m.buyer.avatar?void 0:"tonal"},{default:e(()=>[m.buyer.avatar?(d(),y(E,{key:0,src:m.buyer.avatar},null,8,["src"])):(d(),I("span",De,l(m.buyer.name.slice(0,2).toUpperCase()),1))]),_:2},1032,["color","variant"]),s("span",be,l(m.buyer.name),1)])]),"item.payment":e(({item:m})=>[s("div",ke,[s("div",Ae,[s("span",Ve,"$"+l(m.payment.paidAmount),1),m.payment.paidAmount!==m.payment.total?(d(),I("span",Ie,"/"+l(m.payment.total),1)):me("",!0)]),s("span",Ne,l(m.payment.receivedPaymentStatus),1)])]),"item.status":e(({item:m})=>[a(L,{color:v(m.payment.status),class:B([`text-${v(m.payment.status)}`,"font-weight-medium"]),size:"small"},{default:e(()=>[b(l(m.payment.status),1)]),_:2},1032,["color","class"])]),"item.delete":e(({item:m})=>[a(C,{size:"small",onClick:j=>u(m.product.id)},{default:e(()=>[a(F,{icon:"ri-delete-bin-line"})]),_:2},1032,["onClick"])]),_:1},8,["items","search"])])}}}),z=[{responsiveId:"",id:95,avatar:P,fullName:"Edwina Ebsworth",post:"Human Resources Assistant",email:"eebsworth2m@sbwire.com",city:"Puzi",startDate:"09/27/2018",salary:19586.23,age:"27",experience:"2 Years",status:1},{responsiveId:"",id:1,avatar:M,fullName:"Korrie O'Crevy",post:"Nuclear Power Engineer",email:"kocrevy0@thetimes.co.uk",city:"Krasnosilka",startDate:"09/23/2016",salary:23896.35,age:"61",experience:"1 Year",status:2},{responsiveId:"",id:7,avatar:"",fullName:"Eileen Diehn",post:"Environmental Specialist",email:"ediehn6@163.com",city:"Lampuyang",startDate:"10/15/2017",salary:18991.67,age:"59",experience:"9 Years",status:3},{responsiveId:"",id:11,avatar:"",fullName:"De Falloon",post:"Sales Representative",email:"dfalloona@ifeng.com",city:"Colima",startDate:"06/12/2018",salary:19252.12,age:"30",experience:"0 Year",status:4},{responsiveId:"",id:3,avatar:f,fullName:"Stella Ganderton",post:"Operator",email:"sganderton2@tuttocitta.it",city:"Golcowa",startDate:"03/24/2018",salary:13076.28,age:"66",experience:"6 Years",status:5},{responsiveId:"",id:5,avatar:"",fullName:"Harmonia Nisius",post:"Senior Cost Accountant",email:"hnisius4@gnu.org",city:"Lucan",startDate:"08/25/2017",salary:10909.52,age:"33",experience:"3 Years",status:2},{responsiveId:"",id:6,avatar:"",fullName:"Genevra Honeywood",post:"Geologist",email:"ghoneywood5@narod.ru",city:"Maofan",startDate:"06/01/2017",salary:17803.8,age:"61",experience:"1 Year",status:1},{responsiveId:"",id:4,avatar:M,fullName:"Dorolice Crossman",post:"Cost Accountant",email:"dcrossman3@google.co.jp",city:"Paquera",startDate:"12/03/2017",salary:12336.17,age:"22",experience:"2 Years",status:2},{responsiveId:"",id:8,avatar:f,fullName:"Richardo Aldren",post:"Senior Sales Associate",email:"raldren7@mtv.com",city:"Skoghall",startDate:"11/05/2016",salary:19230.13,age:"55",experience:"5 Years",status:3},{responsiveId:"",id:9,avatar:P,fullName:"Allyson Moakler",post:"Safety Technician",email:"amoakler8@shareasale.com",city:"Mogilany",startDate:"12/29/2018",salary:11677.32,age:"39",experience:"9 Years",status:5},{responsiveId:"",id:10,avatar:f,fullName:"Merline Penhalewick",post:"Junior Executive",email:"mpenhalewick9@php.net",city:"Kanuma",startDate:"04/19/2019",salary:15939.52,age:"23",experience:"3 Years",status:2},{responsiveId:"",id:12,avatar:"",fullName:"Cyrus Gornal",post:"Senior Sales Associate",email:"cgornalb@fda.gov",city:"Boro Utara",startDate:"12/09/2017",salary:16745.47,age:"22",experience:"2 Years",status:4},{responsiveId:"",id:13,avatar:"",fullName:"Tallou Balf",post:"Staff Accountant",email:"tbalfc@sina.com.cn",city:"Siliana",startDate:"01/21/2016",salary:15488.53,age:"36",experience:"6 Years",status:4},{responsiveId:"",id:14,avatar:"",fullName:"Othilia Extill",post:"Associate Professor",email:"oextilld@theatlantic.com",city:"Brzyska",startDate:"02/01/2016",salary:18442.34,age:"43",experience:"3 Years",status:2},{responsiveId:"",id:15,avatar:"",fullName:"Wilmar Bourton",post:"Administrative Assistant",email:"wbourtone@sakura.ne.jp",city:"Bích Động",startDate:"04/25/2018",salary:13304.45,age:"19",experience:"9 Years",status:5},{responsiveId:"",id:16,avatar:_,fullName:"Robinson Brazenor",post:"General Manager",email:"rbrazenorf@symantec.com",city:"Gendiwu",startDate:"12/23/2017",salary:11953.08,age:"66",experience:"6 Years",status:5},{responsiveId:"",id:17,avatar:"",fullName:"Nadia Bettenson",post:"Environmental Tech",email:"nbettensong@joomla.org",city:"Chabařovice",startDate:"07/11/2018",salary:20484.44,age:"64",experience:"4 Years",status:1},{responsiveId:"",id:18,avatar:"",fullName:"Titus Hayne",post:"Web Designer",email:"thayneh@kickstarter.com",city:"Yangon",startDate:"05/25/2019",salary:16871.48,age:"59",experience:"9 Years",status:1},{responsiveId:"",id:19,avatar:_,fullName:"Roxie Huck",post:"Administrative Assistant",email:"rhucki@ed.gov",city:"Polýkastro",startDate:"04/04/2019",salary:19653.56,age:"41",experience:"1 Year",status:4},{responsiveId:"",id:20,avatar:f,fullName:"Latashia Lewtey",post:"Actuary",email:"llewteyj@sun.com",city:"Hougong",startDate:"08/03/2017",salary:18303.87,age:"35",experience:"5 Years",status:1},{responsiveId:"",id:21,avatar:"",fullName:"Natalina Tyne",post:"Software Engineer",email:"ntynek@merriam-webster.com",city:"Yanguan",startDate:"03/16/2019",salary:15256.4,age:"30",experience:"0 Year",status:2},{responsiveId:"",id:22,avatar:"",fullName:"Faun Josefsen",post:"Analog Circuit Design manager",email:"fjosefsenl@samsung.com",city:"Wengyang",startDate:"07/08/2017",salary:11209.16,age:"40",experience:"0 Year",status:3},{responsiveId:"",id:23,avatar:f,fullName:"Rosmunda Steed",post:"Assistant Media Planner",email:"rsteedm@xing.com",city:"Manzanares",startDate:"12/23/2017",salary:13778.34,age:"21",experience:"1 Year",status:5},{responsiveId:"",id:24,avatar:"",fullName:"Scott Jiran",post:"Graphic Designer",email:"sjirann@simplemachines.org",city:"Pinglin",startDate:"05/26/2016",salary:23081.71,age:"23",experience:"3 Years",status:1},{responsiveId:"",id:25,avatar:"",fullName:"Carmita Medling",post:"Accountant",email:"cmedlingo@hp.com",city:"Bourges",startDate:"07/31/2019",salary:13602.24,age:"47",experience:"7 Years",status:3},{responsiveId:"",id:26,avatar:P,fullName:"Morgen Benes",post:"Senior Sales Associate",email:"mbenesp@ted.com",city:"Cà Mau",startDate:"04/10/2016",salary:16969.63,age:"42",experience:"2 Years",status:4},{responsiveId:"",id:27,avatar:"",fullName:"Onfroi Doughton",post:"Civil Engineer",email:"odoughtonq@aboutads.info",city:"Utrecht (stad)",startDate:"09/29/2018",salary:23796.62,age:"28",experience:"8 Years",status:3},{responsiveId:"",id:28,avatar:"",fullName:"Kliment McGinney",post:"Chief Design Engineer",email:"kmcginneyr@paginegialle.it",city:"Xiaocheng",startDate:"07/09/2018",salary:24027.81,age:"28",experience:"8 Years",status:4},{responsiveId:"",id:29,avatar:"",fullName:"Devin Bridgland",post:"Tax Accountant",email:"dbridglands@odnoklassniki.ru",city:"Baoli",startDate:"07/17/2016",salary:13508.15,age:"48",experience:"8 Years",status:3},{responsiveId:"",id:30,avatar:W,fullName:"Gilbert McFade",post:"Biostatistician",email:"gmcfadet@irs.gov",city:"Deje",startDate:"08/28/2018",salary:21632.3,age:"20",experience:"0 Year",status:2},{responsiveId:"",id:31,avatar:"",fullName:"Teressa Bleakman",post:"Senior Editor",email:"tbleakmanu@phpbb.com",city:"Žebrák",startDate:"09/03/2016",salary:24875.41,age:"37",experience:"7 Years",status:5},{responsiveId:"",id:32,avatar:"",fullName:"Marcelia Alleburton",post:"Safety Technician",email:"malleburtonv@amazon.com",city:"Basail",startDate:"06/02/2016",salary:23888.98,age:"53",experience:"3 Years",status:2},{responsiveId:"",id:33,avatar:f,fullName:"Aili De Coursey",post:"Environmental Specialist",email:"adew@etsy.com",city:"Łazy",startDate:"09/30/2016",salary:14082.44,age:"27",experience:"7 Years",status:5},{responsiveId:"",id:34,avatar:W,fullName:"Charlton Chatres",post:"Analyst Programmer",email:"cchatresx@goo.gl",city:"Reguengos de Monsaraz",startDate:"04/07/2016",salary:21386.52,age:"22",experience:"2 Years",status:3},{responsiveId:"",id:35,avatar:O,fullName:"Nat Hugonnet",post:"Financial Advisor",email:"nhugonnety@wufoo.com",city:"Pimentel",startDate:"09/11/2019",salary:13835.97,age:"46",experience:"6 Years",status:4},{responsiveId:"",id:36,avatar:"",fullName:"Lorine Hearsum",post:"Payment Adjustment Coordinator",email:"lhearsumz@google.co.uk",city:"Shuiying",startDate:"03/05/2019",salary:22093.91,age:"47",experience:"7 Years",status:4},{responsiveId:"",id:37,avatar:K,fullName:"Sheila-kathryn Haborn",post:"Environmental Specialist",email:"shaborn10@about.com",city:"Lewolang",startDate:"11/10/2018",salary:24624.23,age:"51",experience:"1 Year",status:3},{responsiveId:"",id:38,avatar:q,fullName:"Alma Harvatt",post:"Administrative Assistant",email:"aharvatt11@addtoany.com",city:"Ulundi",startDate:"11/04/2016",salary:21782.82,age:"41",experience:"1 Year",status:1},{responsiveId:"",id:39,avatar:P,fullName:"Beatrix Longland",post:"VP Quality Control",email:"blongland12@gizmodo.com",city:"Damu",startDate:"07/18/2016",salary:22794.6,age:"62",experience:"2 Years",status:2},{responsiveId:"",id:40,avatar:_,fullName:"Hammad Condell",post:"Project Manager",email:"hcondell13@tiny.cc",city:"Bulung'ur",startDate:"11/04/2018",salary:10872.83,age:"37",experience:"7 Years",status:4},{responsiveId:"",id:41,avatar:"",fullName:"Parker Bice",post:"Technical Writer",email:"pbice14@ameblo.jp",city:"Shanlian",startDate:"03/02/2016",salary:17471.92,age:"65",experience:"5 Years",status:5},{responsiveId:"",id:42,avatar:"",fullName:"Lowrance Orsi",post:"Biostatistician",email:"lorsi15@wp.com",city:"Dengteke",startDate:"12/10/2018",salary:24719.51,age:"64",experience:"4 Years",status:1},{responsiveId:"",id:43,avatar:M,fullName:"Ddene Chaplyn",post:"Environmental Tech",email:"dchaplyn16@nymag.com",city:"Lattes",startDate:"01/23/2019",salary:11958.33,age:"38",experience:"8 Years",status:2},{responsiveId:"",id:44,avatar:"",fullName:"Washington Bygraves",post:"Human Resources Manager",email:"wbygraves17@howstuffworks.com",city:"Zlaté Hory",startDate:"09/07/2016",salary:10552.43,age:"37",experience:"7 Years",status:1},{responsiveId:"",id:45,avatar:f,fullName:"Meghann Bodechon",post:"Operator",email:"mbodechon18@1und1.de",city:"Itō",startDate:"07/23/2018",salary:23024.28,age:"61",experience:"1 Year",status:4},{responsiveId:"",id:46,avatar:O,fullName:"Moshe De Ambrosis",post:"Recruiting Manager",email:"mde19@purevolume.com",city:"San Diego",startDate:"02/10/2018",salary:10409.9,age:"47",experience:"7 Years",status:5},{responsiveId:"",id:47,avatar:_,fullName:"Had Chatelot",post:"Cost Accountant",email:"hchatelot1a@usatoday.com",city:"Mercedes",startDate:"11/23/2016",salary:11446.3,age:"64",experience:"4 Years",status:4},{responsiveId:"",id:48,avatar:"",fullName:"Georgia McCrum",post:"Registered Nurse",email:"gmccrum1b@icio.us",city:"Nggalak",startDate:"04/19/2018",salary:14002.31,age:"63",experience:"3 Years",status:1},{responsiveId:"",id:49,avatar:K,fullName:"Krishnah Stilldale",post:"VP Accounting",email:"kstilldale1c@chronoengine.com",city:"Slavs'ke",startDate:"03/18/2017",salary:10704.29,age:"56",experience:"6 Years",status:1},{responsiveId:"",id:50,avatar:_,fullName:"Mario Umbert",post:"Research Assistant",email:"mumbert1d@digg.com",city:"Chorotis",startDate:"05/13/2019",salary:21813.54,age:"43",experience:"3 Years",status:1},{responsiveId:"",id:51,avatar:"",fullName:"Edvard Dixsee",post:"Graphic Designer",email:"edixsee1e@unblog.fr",city:"Rancharia",startDate:"04/23/2019",salary:18053.11,age:"46",experience:"6 Years",status:3},{responsiveId:"",id:52,avatar:f,fullName:"Tammie Davydoch",post:"VP Quality Control",email:"tdavydoch1f@examiner.com",city:"Mamedkala",startDate:"04/19/2016",salary:17617.08,age:"47",experience:"7 Years",status:3},{responsiveId:"",id:53,avatar:"",fullName:"Benito Rodolico",post:"Safety Technician",email:"brodolico1g@sciencedirect.com",city:"Wonosobo",startDate:"10/06/2018",salary:18866.55,age:"21",experience:"1 Year",status:5},{responsiveId:"",id:54,avatar:"",fullName:"Marco Pennings",post:"Compensation Analyst",email:"mpennings1h@bizjournals.com",city:"Umag",startDate:"06/15/2017",salary:13722.18,age:"30",experience:"0 Year",status:3},{responsiveId:"",id:55,avatar:"",fullName:"Tommie O'Corr",post:"Quality Engineer",email:"tocorr1i@nyu.edu",city:"Olhos de Água",startDate:"09/26/2018",salary:15228.8,age:"51",experience:"1 Year",status:1},{responsiveId:"",id:56,avatar:O,fullName:"Cybill Poyle",post:"Cost Accountant",email:"cpoyle1j@amazon.com",city:"Hamm",startDate:"01/03/2016",salary:13951.96,age:"29",experience:"9 Years",status:1},{responsiveId:"",id:57,avatar:W,fullName:"Norry Stoller",post:"Human Resources Manager",email:"nstoller1k@noaa.gov",city:"Ruukki",startDate:"02/04/2018",salary:15100,age:"27",experience:"7 Years",status:4},{responsiveId:"",id:58,avatar:"",fullName:"Wendi Somerlie",post:"Systems Administrator",email:"wsomerlie1l@accuweather.com",city:"Meicheng",startDate:"04/22/2016",salary:20023.52,age:"28",experience:"9 Years",status:5},{responsiveId:"",id:59,avatar:"",fullName:"Ferdie Georgeon",post:"Geologist",email:"fgeorgeon1m@nhs.uk",city:"Tanahbeureum",startDate:"04/08/2019",salary:12630.26,age:"28",experience:"1 Year",status:2},{responsiveId:"",id:60,avatar:"",fullName:"Jules Auten",post:"Desktop Support Technician",email:"jauten1n@foxnews.com",city:"Mojo",startDate:"08/13/2019",salary:13870.62,age:"48",experience:"5 Years",status:4},{responsiveId:"",id:61,avatar:q,fullName:"Nichole Dacres",post:"Mechanical Systems Engineer",email:"ndacres1o@apache.org",city:"Kimanuit",startDate:"11/06/2017",salary:18220.51,age:"20",experience:"0 Year",status:3},{responsiveId:"",id:62,avatar:O,fullName:"Holly Edgworth",post:"Junior Executive",email:"hedgworth1p@craigslist.org",city:"Pedreira",startDate:"08/05/2017",salary:13999.88,age:"37",experience:"0 Year",status:5},{responsiveId:"",id:63,avatar:f,fullName:"Henriette Croft",post:"Food Chemist",email:"hcroft1q@desdev.cn",city:"Taizhou",startDate:"09/12/2019",salary:11049.79,age:"53",experience:"1 Year",status:5},{responsiveId:"",id:64,avatar:"",fullName:"Annetta Glozman",post:"Staff Accountant",email:"aglozman1r@storify.com",city:"Pendawanbaru",startDate:"08/25/2017",salary:10745.32,age:"27",experience:"3 Years",status:5},{responsiveId:"",id:65,avatar:"",fullName:"Cletis Cervantes",post:"Health Coach",email:"ccervantes1s@de.vu",city:"Solnechnyy",startDate:"05/24/2018",salary:24769.08,age:"22",experience:"7 Years",status:1},{responsiveId:"",id:66,avatar:f,fullName:"Christos Kiley",post:"Geologist",email:"ckiley1t@buzzfeed.com",city:"El Bolsón",startDate:"02/27/2019",salary:16053.15,age:"46",experience:"2 Years",status:1},{responsiveId:"",id:67,avatar:f,fullName:"Silvain Siebert",post:"VP Sales",email:"ssiebert1u@domainmarket.com",city:"Cadiz",startDate:"09/23/2017",salary:23347.17,age:"47",experience:"8 Years",status:5},{responsiveId:"",id:68,avatar:"",fullName:"Sharla Ibberson",post:"Payment Adjustment Coordinator",email:"sibberson1v@virginia.edu",city:"Lamam",startDate:"11/01/2016",salary:15658.4,age:"51",experience:"8 Years",status:1},{responsiveId:"",id:69,avatar:f,fullName:"Ripley Rentcome",post:"Physical Therapy Assistant",email:"rrentcome1w@youtu.be",city:"Dashkawka",startDate:"07/15/2018",salary:15396.66,age:"41",experience:"8 Years",status:2},{responsiveId:"",id:70,avatar:"",fullName:"Chrisse Birrane",post:"Chemical Engineer",email:"cbirrane1x@google.com.br",city:"Las Toscas",startDate:"05/22/2016",salary:15823.4,age:"62",experience:"0 Year",status:5},{responsiveId:"",id:71,avatar:"",fullName:"Georges Tesyro",post:"Human Resources Manager",email:"gtesyro1y@last.fm",city:"Gabao",startDate:"01/27/2019",salary:19051.25,age:"37",experience:"7 Years",status:1},{responsiveId:"",id:72,avatar:"",fullName:"Bondon Hazard",post:"Geological Engineer",email:"bhazard1z@over-blog.com",city:"Llano de Piedra",startDate:"01/17/2019",salary:11632.84,age:"65",experience:"3 Years",status:4},{responsiveId:"",id:73,avatar:_,fullName:"Aliza MacElholm",post:"VP Sales",email:"amacelholm20@printfriendly.com",city:"Sosnovyy Bor",startDate:"11/17/2017",salary:16741.31,age:"64",experience:"7 Years",status:2},{responsiveId:"",id:74,avatar:P,fullName:"Lucas Witherdon",post:"Senior Quality Engineer",email:"lwitherdon21@storify.com",city:"Staré Křečany",startDate:"09/26/2016",salary:19387.76,age:"38",experience:"2 Years",status:3},{responsiveId:"",id:75,avatar:"",fullName:"Pegeen Peasegod",post:"Web Designer",email:"ppeasegod22@slideshare.net",city:"Keda",startDate:"05/21/2016",salary:24014.04,age:"59",experience:"6 Years",status:3},{responsiveId:"",id:76,avatar:"",fullName:"Elyn Watkinson",post:"Structural Analysis Engineer",email:"ewatkinson23@blogspot.com",city:"Osan",startDate:"09/30/2016",salary:14493.51,age:"55",experience:"7 Years",status:1},{responsiveId:"",id:77,avatar:M,fullName:"Babb Skirving",post:"Analyst Programmer",email:"bskirving24@cbsnews.com",city:"Balky",startDate:"09/27/2016",salary:24733.28,age:"39",experience:"1 Year",status:4},{responsiveId:"",id:78,avatar:"",fullName:"Shelli Ondracek",post:"Financial Advisor",email:"sondracek25@plala.or.jp",city:"Aoluguya Ewenke Minzu",startDate:"03/28/2016",salary:21922.17,age:"23",experience:"1 Year",status:3},{responsiveId:"",id:79,avatar:f,fullName:"Stanislaw Melloy",post:"Sales Associate",email:"smelloy26@fastcompany.com",city:"Funafuti",startDate:"04/13/2017",salary:16944.42,age:"30",experience:"2 Years",status:2},{responsiveId:"",id:80,avatar:"",fullName:"Seamus Eisikovitsh",post:"Legal Assistant",email:"seisikovitsh27@usgs.gov",city:"Cangkringan",startDate:"05/28/2018",salary:21963.69,age:"22",experience:"7 Years",status:1},{responsiveId:"",id:81,avatar:P,fullName:"Tammie Wattins",post:"Web Designer",email:"twattins28@statcounter.com",city:"Xilin",startDate:"08/07/2018",salary:16049.93,age:"36",experience:"5 Years",status:2},{responsiveId:"",id:82,avatar:K,fullName:"Aila Quailadis",post:"Technical Writer",email:"aquail29@prlog.org",city:"Shuangchahe",startDate:"02/11/2018",salary:24137.29,age:"43",experience:"4 Years",status:4},{responsiveId:"",id:83,avatar:"",fullName:"Myrvyn Gilogly",post:"Research Associate",email:"mgilogly2a@elpais.com",city:"Prince Rupert",startDate:"05/13/2018",salary:10089.96,age:"19",experience:"8 Years",status:4},{responsiveId:"",id:84,avatar:_,fullName:"Hanna Langthorne",post:"Analyst Programmer",email:"hlangthorne2b@stumbleupon.com",city:"Guaynabo",startDate:"11/11/2018",salary:14227.1,age:"21",experience:"7 Years",status:3},{responsiveId:"",id:85,avatar:"",fullName:"Ruby Gimblet",post:"Registered Nurse",email:"rgimblet2c@1688.com",city:"Nanyulinxi",startDate:"03/28/2016",salary:19562.59,age:"30",experience:"1 Year",status:2},{responsiveId:"",id:86,avatar:_,fullName:"Louis Paszak",post:"Programmer",email:"lpaszak2d@behance.net",city:"Chiscas",startDate:"04/25/2016",salary:17178.86,age:"51",experience:"7 Years",status:5},{responsiveId:"",id:87,avatar:"",fullName:"Glennie Riolfi",post:"Computer Systems Analyst",email:"griolfi2e@drupal.org",city:"Taung",startDate:"06/18/2018",salary:15089.83,age:"29",experience:"4 Years",status:3},{responsiveId:"",id:88,avatar:"",fullName:"Jemimah Morgan",post:"Staff Accountant",email:"jmorgan2f@nifty.com",city:"La Esperanza",startDate:"01/17/2016",salary:18330.72,age:"27",experience:"3 Years",status:1},{responsiveId:"",id:89,avatar:M,fullName:"Talya Brandon",post:"Food Chemist",email:"tbrandon2g@ucoz.com",city:"Zaječar",startDate:"10/08/2018",salary:16284.64,age:"28",experience:"6 Years",status:1},{responsiveId:"",id:90,avatar:W,fullName:"Renate Shay",post:"Recruiter",email:"rshay2h@tumblr.com",city:"Pueblo Viejo",startDate:"03/15/2017",salary:18523.75,age:"28",experience:"3 Years",status:1},{responsiveId:"",id:91,avatar:"",fullName:"Julianne Bartosik",post:"Senior Cost Accountant",email:"jbartosik2i@state.gov",city:"Botlhapatlou",startDate:"02/06/2017",salary:17607.66,age:"48",experience:"6 Years",status:3},{responsiveId:"",id:92,avatar:q,fullName:"Yvonne Emberton",post:"Recruiter",email:"yemberton2j@blog.com",city:"Nagcarlan",startDate:"02/13/2017",salary:17550.18,age:"20",experience:"1 Year",status:4},{responsiveId:"",id:93,avatar:K,fullName:"Danya Faichnie",post:"Social Worker",email:"dfaichnie2k@weather.com",city:"Taling",startDate:"07/29/2019",salary:18469.35,age:"37",experience:"3 Years",status:4},{responsiveId:"",id:94,avatar:"",fullName:"Ronica Hasted",post:"Software Consultant",email:"rhasted2l@hexun.com",city:"Gangkou",startDate:"07/04/2019",salary:24866.66,age:"53",experience:"7 Years",status:4},{responsiveId:"",id:96,avatar:"",fullName:"Alaric Beslier",post:"Tax Accountant",email:"abeslier2n@zimbio.com",city:"Ocucaje",startDate:"04/16/2017",salary:19366.53,age:"22",experience:"8 Years",status:4},{responsiveId:"",id:2,avatar:O,fullName:"Bailie Coulman",post:"VP Quality Control",email:"bcoulman1@yolasite.com",city:"Hinigaran",startDate:"05/20/2018",salary:13633.69,age:"63",experience:"3 Years",status:2},{responsiveId:"",id:97,avatar:"",fullName:"Reina Peckett",post:"Quality Control Specialist",email:"rpeckett2o@timesonline.co.uk",city:"Anyang",startDate:"05/20/2018",salary:16619.4,age:"46",experience:"8 Years",status:4},{responsiveId:"",id:98,avatar:f,fullName:"Olivette Gudgin",post:"Paralegal",email:"ogudgin2p@gizmodo.com",city:"Fujinomiya",startDate:"04/09/2019",salary:15211.6,age:"47",experience:"8 Years",status:2},{responsiveId:"",id:99,avatar:M,fullName:"Evangelina Carnock",post:"Cost Accountant",email:"ecarnock2q@washington.edu",city:"Doushaguan",startDate:"01/26/2017",salary:23704.82,age:"51",experience:"0 Year",status:4},{responsiveId:"",id:100,avatar:"",fullName:"Glyn Giacoppo",post:"Software Test Engineer",email:"ggiacoppo2r@apache.org",city:"Butha-Buthe",startDate:"04/15/2017",salary:24973.48,age:"41",experience:"7 Years",status:2}],Ce={class:"d-flex align-center"},_e={key:1,class:"text-sm"},we={class:"d-flex flex-column ms-3"},Te={class:"d-block font-weight-medium text-high-emphasis text-truncate"},Ee={class:"d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2"},Ye=N({__name:"DemoDataTableExternalPagination",setup(S){const c=T([]),n=T({page:1,itemsPerPage:5,sortBy:[""],sortDesc:[!1]}),r=[{title:"NAME",key:"fullName"},{title:"EMAIL",key:"email"},{title:"DATE",key:"startDate"},{title:"SALARY",key:"salary"},{title:"AGE",key:"age"},{title:"STATUS",key:"status"}],i=t=>t===1?{color:"primary",text:"Current"}:t===2?{color:"success",text:"Professional"}:t===3?{color:"error",text:"Rejected"}:t===4?{color:"warning",text:"Resigned"}:{color:"info",text:"Applied"};return re(()=>{c.value=JSON.parse(JSON.stringify(z))}),(t,u)=>(d(),y(w,{headers:r,items:o(c),"items-per-page":o(n).itemsPerPage,page:o(n).page,options:o(n),class:"text-no-wrap"},{"item.fullName":e(({item:p})=>[s("div",Ce,[a(Y,{size:"32",color:p.avatar?"":"primary",class:B(p.avatar?"":"v-avatar-light-bg primary--text"),variant:p.avatar?void 0:"tonal"},{default:e(()=>[p.avatar?(d(),y(E,{key:0,src:p.avatar},null,8,["src"])):(d(),I("span",_e,l(("avatarText"in t?t.avatarText:o(G))(p.fullName)),1))]),_:2},1032,["color","class","variant"]),s("div",we,[s("span",Te,l(p.fullName),1),s("small",null,l(p.post),1)])])]),"item.status":e(({item:p})=>[a(L,{color:i(p.status).color,class:"font-weight-medium",size:"small"},{default:e(()=>[b(l(i(p.status).text),1)]),_:2},1032,["color"])]),bottom:e(()=>[a(H,{class:"pt-2"},{default:e(()=>[s("div",Ee,[a(ie,{modelValue:o(n).itemsPerPage,"onUpdate:modelValue":u[0]||(u[0]=p=>o(n).itemsPerPage=p),items:[5,10,25,50,100],label:"Rows per page:",variant:"underlined",style:{"max-inline-size":"8rem","min-inline-size":"5rem"}},null,8,["modelValue"]),a(de,{modelValue:o(n).page,"onUpdate:modelValue":u[1]||(u[1]=p=>o(n).page=p),"total-visible":t.$vuetify.display.smAndDown?2:3,length:Math.ceil(o(c).length/o(n).itemsPerPage)},null,8,["modelValue","total-visible","length"])])]),_:1})]),_:1},8,["items","items-per-page","page","options"]))}}),Re={class:"d-flex align-center"},Pe={key:1,class:"text-sm"},Me={class:"d-flex flex-column ms-3"},Be={class:"d-block font-weight-medium text-high-emphasis text-truncate"},Le={class:"d-flex gap-1"},ze={class:"text-body-1 mb-6"},Ge={class:"text-h6"},je={class:"self-align-end d-flex gap-4 justify-end"},$e={class:"d-flex justify-center gap-4"},Oe=N({__name:"DemoDataTableRowEditingViaDialog",setup(S){const c=T(!1),n=T(!1),r=T({responsiveId:"",id:-1,avatar:"",fullName:"",post:"",email:"",city:"",startDate:"",salary:-1,age:"",experience:"",status:-1}),i=T(r.value),t=T(-1),u=T([]),p=[{text:"Current",value:1},{text:"Professional",value:2},{text:"Rejected",value:3},{text:"Resigned",value:4},{text:"Applied",value:5}],v=[{title:"NAME",key:"fullName"},{title:"EMAIL",key:"email"},{title:"DATE",key:"startDate"},{title:"SALARY",key:"salary"},{title:"AGE",key:"age"},{title:"STATUS",key:"status"},{title:"ACTIONS",key:"actions"}],R=k=>k===1?{color:"primary",text:"Current"}:k===2?{color:"success",text:"Professional"}:k===3?{color:"error",text:"Rejected"}:k===4?{color:"warning",text:"Resigned"}:{color:"info",text:"Applied"},D=k=>{t.value=u.value.indexOf(k),i.value={...k},c.value=!0},V=k=>{t.value=u.value.indexOf(k),i.value={...k},n.value=!0},C=()=>{c.value=!1,t.value=-1,i.value={...r.value}},m=()=>{n.value=!1,t.value=-1,i.value={...r.value}},j=()=>{t.value>-1?Object.assign(u.value[t.value],i.value):u.value.push(i.value),C()},J=()=>{u.value.splice(t.value,1),m()};return re(()=>{u.value=JSON.parse(JSON.stringify(z))}),(k,h)=>{const Z=te("IconBtn");return d(),I(se,null,[a(w,{headers:v,items:o(u),"items-per-page":5,class:"text-no-wrap"},{"item.fullName":e(({item:g})=>[s("div",Re,[a(Y,{size:"32",color:g.avatar?"":"primary",class:B(g.avatar?"":"v-avatar-light-bg primary--text"),variant:g.avatar?void 0:"tonal"},{default:e(()=>[g.avatar?(d(),y(E,{key:0,src:g.avatar},null,8,["src"])):(d(),I("span",Pe,l(("avatarText"in k?k.avatarText:o(G))(g.fullName)),1))]),_:2},1032,["color","class","variant"]),s("div",Me,[s("span",Be,l(g.fullName),1),s("small",null,l(g.post),1)])])]),"item.status":e(({item:g})=>[a(L,{color:R(g.status).color,density:"comfortable"},{default:e(()=>[b(l(R(g.status).text),1)]),_:2},1032,["color"])]),"item.actions":e(({item:g})=>[s("div",Le,[a(Z,{size:"small",onClick:A=>D(g)},{default:e(()=>[a(F,{icon:"ri-pencil-line"})]),_:2},1032,["onClick"]),a(Z,{size:"small",onClick:A=>V(g)},{default:e(()=>[a(F,{icon:"ri-delete-bin-line"})]),_:2},1032,["onClick"])])]),_:1},8,["items"]),a(ae,{modelValue:o(c),"onUpdate:modelValue":h[6]||(h[6]=g=>X(c)?c.value=g:null),"max-width":"600px"},{default:e(()=>[a(ee,{title:"Edit Item"},{default:e(()=>[a(H,null,{default:e(()=>{var g;return[s("div",ze,[b(" Name: "),s("span",Ge,l((g=o(i))==null?void 0:g.fullName),1)]),a(Q,null,{default:e(()=>[a(x,{cols:"12",sm:"6"},{default:e(()=>[a($,{modelValue:o(i).fullName,"onUpdate:modelValue":h[0]||(h[0]=A=>o(i).fullName=A),label:"User name"},null,8,["modelValue"])]),_:1}),a(x,{cols:"12",sm:"6"},{default:e(()=>[a($,{modelValue:o(i).email,"onUpdate:modelValue":h[1]||(h[1]=A=>o(i).email=A),label:"Email"},null,8,["modelValue"])]),_:1}),a(x,{cols:"12",sm:"6"},{default:e(()=>[a($,{modelValue:o(i).salary,"onUpdate:modelValue":h[2]||(h[2]=A=>o(i).salary=A),label:"Salary",prefix:"$",type:"number"},null,8,["modelValue"])]),_:1}),a(x,{cols:"12",sm:"6"},{default:e(()=>[a($,{modelValue:o(i).age,"onUpdate:modelValue":h[3]||(h[3]=A=>o(i).age=A),label:"Age",type:"number"},null,8,["modelValue"])]),_:1}),a(x,{cols:"12",sm:"6"},{default:e(()=>[a($,{modelValue:o(i).startDate,"onUpdate:modelValue":h[4]||(h[4]=A=>o(i).startDate=A),label:"Date"},null,8,["modelValue"])]),_:1}),a(x,{cols:"12",sm:"6"},{default:e(()=>[a(ie,{modelValue:o(i).status,"onUpdate:modelValue":h[5]||(h[5]=A=>o(i).status=A),items:p,"item-title":"text","item-value":"value",label:"Standard"},null,8,["modelValue"])]),_:1})]),_:1})]}),_:1}),a(H,null,{default:e(()=>[s("div",je,[a(U,{color:"error",variant:"outlined",onClick:C},{default:e(()=>[b(" Cancel ")]),_:1}),a(U,{color:"success",variant:"elevated",onClick:j},{default:e(()=>[b(" Save ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(ae,{modelValue:o(n),"onUpdate:modelValue":h[7]||(h[7]=g=>X(n)?n.value=g:null),"max-width":"500px"},{default:e(()=>[a(ee,{title:"Are you sure you want to delete this item?"},{default:e(()=>[a(H,null,{default:e(()=>[s("div",$e,[a(U,{color:"error",variant:"outlined",onClick:m},{default:e(()=>[b(" Cancel ")]),_:1}),a(U,{color:"success",variant:"elevated",onClick:J},{default:e(()=>[b(" OK ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),Ue={class:"d-flex align-center"},He={key:1,class:"text-sm"},Fe={class:"d-flex flex-column ms-3"},Ke={class:"d-block font-weight-medium text-high-emphasis text-truncate"},We=N({__name:"DemoDataTableGroupingRows",setup(S){const c=[{responsiveId:"",id:1,avatar:M,fullName:"Korrie O'Crevy",post:"Nuclear Power Engineer",email:"kocrevy0@thetimes.co.uk",city:"Krasnosilka",startDate:"09/23/2016",salary:23896.35,age:"61",experience:"1 Year",status:"Professional"},{responsiveId:"",id:2,avatar:O,fullName:"Bailie Coulman",post:"VP Quality Control",email:"bcoulman1@yolasite.com",city:"Hinigaran",startDate:"05/20/2018",salary:13633.69,age:"63",experience:"3 Years",status:"Professional"},{responsiveId:"",id:3,avatar:f,fullName:"Stella Ganderton",post:"Operator",email:"sganderton2@tuttocitta.it",city:"Golcowa",startDate:"03/24/2018",salary:13076.28,age:"66",experience:"6 Years",status:"Applied"},{responsiveId:"",id:4,avatar:M,fullName:"Dorolice Crossman",post:"Cost Accountant",email:"dcrossman3@google.co.jp",city:"Paquera",startDate:"12/03/2017",salary:12336.17,age:"22",experience:"2 Years",status:"Professional"},{responsiveId:"",id:6,avatar:"",fullName:"Genevra Honeywood",post:"Geologist",email:"ghoneywood5@narod.ru",city:"Maofan",startDate:"06/01/2017",salary:17803.8,age:"61",experience:"1 Year",status:"Current"},{responsiveId:"",id:7,avatar:"",fullName:"Eileen Diehn",post:"Environmental Specialist",email:"ediehn6@163.com",city:"Lampuyang",startDate:"10/15/2017",salary:18991.67,age:"59",experience:"9 Years",status:"Rejected"},{responsiveId:"",id:8,avatar:f,fullName:"Richardo Aldren",post:"Senior Sales Associate",email:"raldren7@mtv.com",city:"Skoghall",startDate:"11/05/2016",salary:19230.13,age:"55",experience:"5 Years",status:"Rejected"},{responsiveId:"",id:9,avatar:P,fullName:"Allyson Moakler",post:"Safety Technician",email:"amoakler8@shareasale.com",city:"Mogilany",startDate:"12/29/2018",salary:11677.32,age:"39",experience:"9 Years",status:"Applied"},{responsiveId:"",id:11,avatar:"",fullName:"De Falloon",post:"Sales Representative",email:"dfalloona@ifeng.com",city:"Colima",startDate:"06/12/2018",salary:19252.12,age:"30",experience:"0 Year",status:"Resigned"},{responsiveId:"",id:12,avatar:"",fullName:"Cyrus Gornal",post:"Senior Sales Associate",email:"cgornalb@fda.gov",city:"Boro Utara",startDate:"12/09/2017",salary:16745.47,age:"22",experience:"2 Years",status:"Resigned"},{responsiveId:"",id:13,avatar:"",fullName:"Tallou Balf",post:"Staff Accountant",email:"tbalfc@sina.com.cn",city:"Siliana",startDate:"01/21/2016",salary:15488.53,age:"36",experience:"6 Years",status:"Resigned"},{responsiveId:"",id:15,avatar:"",fullName:"Wilmar Bourton",post:"Administrative Assistant",email:"wbourtone@sakura.ne.jp",city:"Bích Động",startDate:"04/25/2018",salary:13304.45,age:"19",experience:"9 Years",status:"Applied"},{responsiveId:"",id:16,avatar:_,fullName:"Robinson Brazenor",post:"General Manager",email:"rbrazenorf@symantec.com",city:"Gendiwu",startDate:"12/23/2017",salary:11953.08,age:"66",experience:"6 Years",status:"Applied"},{responsiveId:"",id:17,avatar:"",fullName:"Nadia Bettenson",post:"Environmental Tech",email:"nbettensong@joomla.org",city:"Chabařovice",startDate:"07/11/2018",salary:20484.44,age:"64",experience:"4 Years",status:"Current"},{responsiveId:"",id:18,avatar:"",fullName:"Titus Hayne",post:"Web Designer",email:"thayneh@kickstarter.com",city:"Yangon",startDate:"05/25/2019",salary:16871.48,age:"59",experience:"9 Years",status:"Current"},{responsiveId:"",id:19,avatar:_,fullName:"Roxie Huck",post:"Administrative Assistant",email:"rhucki@ed.gov",city:"Polýkastro",startDate:"04/04/2019",salary:19653.56,age:"41",experience:"1 Year",status:"Resigned"},{responsiveId:"",id:23,avatar:f,fullName:"Rosmunda Steed",post:"Assistant Media Planner",email:"rsteedm@xing.com",city:"Manzanares",startDate:"12/23/2017",salary:13778.34,age:"21",experience:"1 Year",status:"Applied"},{responsiveId:"",id:26,avatar:P,fullName:"Morgen Benes",post:"Senior Sales Associate",email:"mbenesp@ted.com",city:"Cà Mau",startDate:"04/10/2016",salary:16969.63,age:"42",experience:"2 Years",status:"Resigned"},{responsiveId:"",id:28,avatar:"",fullName:"Kliment McGinney",post:"Chief Design Engineer",email:"kmcginneyr@paginegialle.it",city:"Xiaocheng",startDate:"07/09/2018",salary:24027.81,age:"28",experience:"8 Years",status:"Resigned"},{responsiveId:"",id:31,avatar:"",fullName:"Teressa Bleakman",post:"Senior Editor",email:"tbleakmanu@phpbb.com",city:"Žebrák",startDate:"09/03/2016",salary:24875.41,age:"37",experience:"7 Years",status:"Applied"}],n=[{title:"NAME",key:"fullName"},{title:"EMAIL",key:"email"},{title:"DATE",key:"startDate"},{title:"SALARY",key:"salary"},{title:"AGE",key:"age"},{title:"STATUS",key:"status"}],r=[{key:"status"}],i=u=>u==="Current"?{color:"primary"}:u==="Professional"?{color:"success"}:u==="Rejected"?{color:"error"}:u==="Resigned"?{color:"warning"}:{color:"info"},t=u=>u.icon;return(u,p)=>(d(),y(w,{headers:n,items:c,"items-per-page":10,"group-by":r,class:"text-no-wrap"},{"item.fullName":e(({item:v})=>[s("div",Ue,[a(Y,{size:"32",color:v.avatar?"":"primary",class:B(v.avatar?"":"v-avatar-light-bg primary--text"),variant:v.avatar?void 0:"tonal"},{default:e(()=>[v.avatar?(d(),y(E,{key:0,src:v.avatar},null,8,["src"])):(d(),I("span",He,l(("avatarText"in u?u.avatarText:o(G))(v.fullName)),1))]),_:2},1032,["color","class","variant"]),s("div",Fe,[s("span",Ke,l(v.fullName),1),s("small",null,l(v.post),1)])])]),"item.status":e(({item:v})=>[a(L,{color:i(v.status).color,size:"small",class:"font-weight-medium"},{default:e(()=>[b(l(v.status),1)]),_:2},1032,["color"])]),"data-table-group":e(({props:v,item:R,count:D})=>[s("td",null,[a(U,ce(v,{variant:"text",density:"comfortable"}),{default:e(()=>[a(F,{class:"flip-in-rtl",icon:t(v)},null,8,["icon"])]),_:2},1040),s("span",null,l(R.value),1),s("span",null,"("+l(D)+")",1)])]),_:1}))}}),Je={class:"v-data-table__tr"},qe=["colspan"],Xe={class:"my-1"},Qe={class:"my-1"},Ze={class:"d-flex align-center"},ea={key:1,class:"text-sm"},aa={class:"d-flex flex-column ms-3"},ta={class:"d-block font-weight-medium text-high-emphasis text-truncate"},sa=N({__name:"DemoDataTableExpandableRows",setup(S){const c=[{title:"",key:"data-table-expand"},{title:"NAME",key:"fullName"},{title:"EMAIL",key:"email"},{title:"DATE",key:"startDate"},{title:"SALARY",key:"salary"},{title:"AGE",key:"age"},{title:"STATUS",key:"status"}],n=r=>r===1?{color:"primary",text:"Current"}:r===2?{color:"success",text:"Professional"}:r===3?{color:"error",text:"Rejected"}:r===4?{color:"warning",text:"Resigned"}:{color:"info",text:"Applied"};return(r,i)=>(d(),y(w,{headers:c,items:o(z),"items-per-page":5,class:"text-no-wrap","expand-on-click":""},{"expanded-row":e(t=>[s("tr",Je,[s("td",{colspan:c.length},[s("p",Xe," City: "+l(t.item.city),1),s("p",Qe," Experience: "+l(t.item.experience),1),s("p",null,"Post: "+l(t.item.post),1)],8,qe)])]),"item.fullName":e(({item:t})=>[s("div",Ze,[a(Y,{size:"32",color:t.avatar?"":"primary",class:B(t.avatar?"":"v-avatar-light-bg primary--text"),variant:t.avatar?void 0:"tonal"},{default:e(()=>[t.avatar?(d(),y(E,{key:0,src:t.avatar},null,8,["src"])):(d(),I("span",ea,l(("avatarText"in r?r.avatarText:o(G))(t.fullName)),1))]),_:2},1032,["color","class","variant"]),s("div",aa,[s("span",ta,l(t.fullName),1),s("small",null,l(t.post),1)])])]),"item.status":e(({item:t})=>[a(L,{color:n(t.status).color,class:"font-weight-medium",size:"small"},{default:e(()=>[b(l(n(t.status).text),1)]),_:2},1032,["color"])]),_:1},8,["items"]))}}),ra={class:"d-flex align-center"},ia={key:1,class:"text-sm"},la={class:"d-flex flex-column ms-3"},oa={class:"d-block font-weight-medium text-high-emphasis text-truncate"},na=N({__name:"DemoDataTableFixedHeader",setup(S){const c=[{title:"NAME",key:"fullName"},{title:"EMAIL",key:"email"},{title:"DATE",key:"startDate"},{title:"SALARY",key:"salary"},{title:"AGE",key:"age"},{title:"STATUS",key:"status"}],n=r=>r===1?{color:"primary",text:"Current"}:r===2?{color:"success",text:"Professional"}:r===3?{color:"error",text:"Rejected"}:r===4?{color:"warning",text:"Resigned"}:{color:"info",text:"Applied"};return(r,i)=>(d(),y(w,{headers:c,items:o(z),"items-per-page":10,height:"300",class:"text-no-wrap","fixed-header":""},{"item.fullName":e(({item:t})=>[s("div",ra,[a(Y,{size:"32",color:t.avatar?"":"primary",class:B(t.avatar?"":"v-avatar-light-bg primary--text"),variant:t.avatar?void 0:"tonal"},{default:e(()=>[t.avatar?(d(),y(E,{key:0,src:t.avatar},null,8,["src"])):(d(),I("span",ia,l(("avatarText"in r?r.avatarText:o(G))(t.fullName)),1))]),_:2},1032,["color","class","variant"]),s("div",la,[s("span",oa,l(t.fullName),1),s("small",null,l(t.post),1)])])]),"item.status":e(({item:t})=>[a(L,{color:n(t.status).color,class:"font-weight-medium",size:"small"},{default:e(()=>[b(l(n(t.status).text),1)]),_:2},1032,["color"])]),_:1},8,["items"]))}}),ma={class:"d-flex align-center"},ca={key:1,class:"text-sm"},da={class:"d-flex flex-column ms-3"},ua={class:"d-block font-weight-medium text-high-emphasis text-truncate"},pa=N({__name:"DemoDataTableRowSelection",setup(S){const c=[{title:"NAME",key:"fullName"},{title:"EMAIL",key:"email"},{title:"DATE",key:"startDate"},{title:"SALARY",key:"salary"},{title:"AGE",key:"age"},{title:"STATUS",key:"status"}],n=r=>r===1?{color:"primary",text:"Current"}:r===2?{color:"success",text:"Professional"}:r===3?{color:"error",text:"Rejected"}:r===4?{color:"warning",text:"Resigned"}:{color:"info",text:"Applied"};return(r,i)=>(d(),y(w,{headers:c,items:o(z),"items-per-page":5,"show-select":"",class:"text-no-wrap"},{"item.fullName":e(({item:t})=>[s("div",ma,[a(Y,{size:"32",color:t.avatar?"":"primary",class:B(t.avatar?"":"v-avatar-light-bg primary--text"),variant:t.avatar?void 0:"tonal"},{default:e(()=>[t.avatar?(d(),y(E,{key:0,src:t.avatar},null,8,["src"])):(d(),I("span",ca,l(("avatarText"in r?r.avatarText:o(G))(t.fullName)),1))]),_:2},1032,["color","class","variant"]),s("div",da,[s("span",ua,l(t.fullName),1),s("small",null,l(t.post),1)])])]),"item.status":e(({item:t})=>[a(L,{color:n(t.status).color,class:"font-weight-medium",size:"small"},{default:e(()=>[b(l(n(t.status).text),1)]),_:2},1032,["color"])]),_:1},8,["items"]))}}),va={class:"d-flex align-center"},ga={key:1,class:"text-sm"},ya={class:"d-flex flex-column ms-3"},fa={class:"d-block font-weight-medium text-high-emphasis text-truncate"},xa=N({__name:"DemoDataTableCellSlot",setup(S){const c=[{title:"NAME",key:"fullName"},{title:"EMAIL",key:"email"},{title:"DATE",key:"startDate"},{title:"SALARY",key:"salary"},{title:"AGE",key:"age"},{title:"STATUS",key:"status"}],n=r=>r===1?{color:"primary",text:"Current"}:r===2?{color:"success",text:"Professional"}:r===3?{color:"error",text:"Rejected"}:r===4?{color:"warning",text:"Resigned"}:{color:"info",text:"Applied"};return(r,i)=>(d(),y(w,{headers:c,items:o(z),"items-per-page":5,class:"text-no-wrap"},{"item.fullName":e(({item:t})=>[s("div",va,[a(Y,{size:"32",color:t.avatar?"":"primary",class:B(t.avatar?"":"v-avatar-light-bg primary--text"),variant:t.avatar?void 0:"tonal"},{default:e(()=>[t.avatar?(d(),y(E,{key:0,src:t.avatar},null,8,["src"])):(d(),I("span",ga,l(("avatarText"in r?r.avatarText:o(G))(t.fullName)),1))]),_:2},1032,["color","class","variant"]),s("div",ya,[s("span",fa,l(t.fullName),1),s("small",null,l(t.post),1)])])]),"item.status":e(({item:t})=>[a(L,{color:n(t.status).color,class:"font-weight-medium",size:"small"},{default:e(()=>[b(l(n(t.status).text),1)]),_:2},1032,["color"])]),_:1},8,["items"]))}}),ha=N({__name:"DemoDataTableDense",setup(S){const c=[{title:"ID",key:"id"},{title:"NAME",key:"fullName"},{title:"EMAIL",key:"email"},{title:"DATE",key:"startDate"},{title:"EXPERIENCE",key:"experience"},{title:"AGE",key:"age"}];return(n,r)=>(d(),y(w,{headers:c,items:o(z),density:"compact","items-per-page":5,class:"text-no-wrap"},null,8,["items"]))}}),Da={class:"text-h6"},ba=N({__name:"DemoDataTableBasic",setup(S){const c=[{title:"ID",key:"id"},{title:"NAME",key:"fullName"},{title:"EMAIL",key:"email"},{title:"DATE",key:"startDate"},{title:"EXPERIENCE",key:"experience"},{title:"AGE",key:"age"}];return(n,r)=>(d(),y(w,{headers:c,items:o(z),"items-per-page":5,class:"text-no-wrap"},{"item.id":e(({item:i})=>[s("span",Da,l(i.id),1)]),_:1},8,["items"]))}}),ka={ts:`<script setup lang="ts">
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  { title: 'ID', key: 'id' },
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'EXPERIENCE', key: 'experience' },
  { title: 'AGE', key: 'age' },
]
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
    class="text-no-wrap"
  >
    <template #item.id="{ item }">
      <span class="text-h6">{{ item.id }}</span>
    </template>
  </VDataTable>
</template>
`,js:`<script setup>
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'EXPERIENCE',
    key: 'experience',
  },
  {
    title: 'AGE',
    key: 'age',
  },
]
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
    class="text-no-wrap"
  >
    <template #item.id="{ item }">
      <span class="text-h6">{{ item.id }}</span>
    </template>
  </VDataTable>
</template>
`},Aa={ts:`<script setup lang="ts">
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
]

const resolveStatusVariant = (status: number) => {
  if (status === 1)
    return { color: 'primary', text: 'Current' }
  else if (status === 2)
    return { color: 'success', text: 'Professional' }
  else if (status === 3)
    return { color: 'error', text: 'Rejected' }
  else if (status === 4)
    return { color: 'warning', text: 'Resigned' }
  else
    return { color: 'info', text: 'Applied' }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
    class="text-no-wrap"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`,js:`<script setup>
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
]

const resolveStatusVariant = status => {
  if (status === 1)
    return {
      color: 'primary',
      text: 'Current',
    }
  else if (status === 2)
    return {
      color: 'success',
      text: 'Professional',
    }
  else if (status === 3)
    return {
      color: 'error',
      text: 'Rejected',
    }
  else if (status === 4)
    return {
      color: 'warning',
      text: 'Resigned',
    }
  else
    return {
      color: 'info',
      text: 'Applied',
    }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
    class="text-no-wrap"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`},Va={ts:`<script setup lang="ts">
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  { title: 'ID', key: 'id' },
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'EXPERIENCE', key: 'experience' },
  { title: 'AGE', key: 'age' },
]
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    density="compact"
    :items-per-page="5"
    class="text-no-wrap"
  />
</template>
`,js:`<script setup>
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'EXPERIENCE',
    key: 'experience',
  },
  {
    title: 'AGE',
    key: 'age',
  },
]
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    density="compact"
    :items-per-page="5"
    class="text-no-wrap"
  />
</template>
`},Ia={ts:`<script setup lang="ts">
import data from '@/views/demos/forms/tables/data-table/datatable'

// Headers
const headers = [
  { title: '', key: 'data-table-expand' },
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
]

const resolveStatusVariant = (status: number) => {
  if (status === 1)
    return { color: 'primary', text: 'Current' }
  else if (status === 2)
    return { color: 'success', text: 'Professional' }
  else if (status === 3)
    return { color: 'error', text: 'Rejected' }
  else if (status === 4)
    return { color: 'warning', text: 'Resigned' }
  else
    return { color: 'info', text: 'Applied' }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
    class="text-no-wrap"
    expand-on-click
  >
    <!-- Expanded Row Data -->
    <template #expanded-row="slotProps">
      <tr class="v-data-table__tr">
        <td :colspan="headers.length">
          <p class="my-1">
            City: {{ slotProps.item.city }}
          </p>
          <p class="my-1">
            Experience: {{ slotProps.item.experience }}
          </p>
          <p>Post: {{ slotProps.item.post }}</p>
        </td>
      </tr>
    </template>

    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`,js:`<script setup>
import data from '@/views/demos/forms/tables/data-table/datatable'

// Headers
const headers = [
  {
    title: '',
    key: 'data-table-expand',
  },
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
]

const resolveStatusVariant = status => {
  if (status === 1)
    return {
      color: 'primary',
      text: 'Current',
    }
  else if (status === 2)
    return {
      color: 'success',
      text: 'Professional',
    }
  else if (status === 3)
    return {
      color: 'error',
      text: 'Rejected',
    }
  else if (status === 4)
    return {
      color: 'warning',
      text: 'Resigned',
    }
  else
    return {
      color: 'info',
      text: 'Applied',
    }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
    class="text-no-wrap"
    expand-on-click
  >
    <!-- Expanded Row Data -->
    <template #expanded-row="slotProps">
      <tr class="v-data-table__tr">
        <td :colspan="headers.length">
          <p class="my-1">
            City: {{ slotProps.item.city }}
          </p>
          <p class="my-1">
            Experience: {{ slotProps.item.experience }}
          </p>
          <p>Post: {{ slotProps.item.post }}</p>
        </td>
      </tr>
    </template>

    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`},Na={ts:`<script setup lang="ts">
import data from '@/views/demos/forms/tables/data-table/datatable'
import type { Data } from '@db/pages/datatable/types'

const userList = ref<Data[]>([])
const options = ref({ page: 1, itemsPerPage: 5, sortBy: [''], sortDesc: [false] })

// headers
const headers = [
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
]

const resolveStatusVariant = (status: number) => {
  if (status === 1)
    return { color: 'primary', text: 'Current' }
  else if (status === 2)
    return { color: 'success', text: 'Professional' }
  else if (status === 3)
    return { color: 'error', text: 'Rejected' }
  else if (status === 4)
    return { color: 'warning', text: 'Resigned' }
  else
    return { color: 'info', text: 'Applied' }
}

onMounted(() => {
  userList.value = JSON.parse(JSON.stringify(data))
})
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="userList"
    :items-per-page="options.itemsPerPage"
    :page="options.page"
    :options="options"
    class="text-no-wrap"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>

    <template #bottom>
      <VCardText class="pt-2">
        <div class="d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2">
          <VSelect
            v-model="options.itemsPerPage"
            :items="[5, 10, 25, 50, 100]"
            label="Rows per page:"
            variant="underlined"
            style="max-inline-size: 8rem;min-inline-size: 5rem;"
          />

          <VPagination
            v-model="options.page"
            :total-visible="$vuetify.display.smAndDown ? 2 : 3"
            :length="Math.ceil(userList.length / options.itemsPerPage)"
          />
        </div>
      </VCardText>
    </template>
  </VDataTable>
</template>
`,js:`<script setup>
import data from '@/views/demos/forms/tables/data-table/datatable'

const userList = ref([])

const options = ref({
  page: 1,
  itemsPerPage: 5,
  sortBy: [''],
  sortDesc: [false],
})

// headers
const headers = [
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
]

const resolveStatusVariant = status => {
  if (status === 1)
    return {
      color: 'primary',
      text: 'Current',
    }
  else if (status === 2)
    return {
      color: 'success',
      text: 'Professional',
    }
  else if (status === 3)
    return {
      color: 'error',
      text: 'Rejected',
    }
  else if (status === 4)
    return {
      color: 'warning',
      text: 'Resigned',
    }
  else
    return {
      color: 'info',
      text: 'Applied',
    }
}

onMounted(() => {
  userList.value = JSON.parse(JSON.stringify(data))
})
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="userList"
    :items-per-page="options.itemsPerPage"
    :page="options.page"
    :options="options"
    class="text-no-wrap"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>

    <template #bottom>
      <VCardText class="pt-2">
        <div class="d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2">
          <VSelect
            v-model="options.itemsPerPage"
            :items="[5, 10, 25, 50, 100]"
            label="Rows per page:"
            variant="underlined"
            style="max-inline-size: 8rem;min-inline-size: 5rem;"
          />

          <VPagination
            v-model="options.page"
            :total-visible="$vuetify.display.smAndDown ? 2 : 3"
            :length="Math.ceil(userList.length / options.itemsPerPage)"
          />
        </div>
      </VCardText>
    </template>
  </VDataTable>
</template>
`},Sa={ts:`<script setup lang="ts">
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
]

const resolveStatusVariant = (status: number) => {
  if (status === 1)
    return { color: 'primary', text: 'Current' }
  else if (status === 2)
    return { color: 'success', text: 'Professional' }
  else if (status === 3)
    return { color: 'error', text: 'Rejected' }
  else if (status === 4)
    return { color: 'warning', text: 'Resigned' }
  else
    return { color: 'info', text: 'Applied' }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="10"
    height="300"
    class="text-no-wrap"
    fixed-header
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`,js:`<script setup>
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
]

const resolveStatusVariant = status => {
  if (status === 1)
    return {
      color: 'primary',
      text: 'Current',
    }
  else if (status === 2)
    return {
      color: 'success',
      text: 'Professional',
    }
  else if (status === 3)
    return {
      color: 'error',
      text: 'Rejected',
    }
  else if (status === 4)
    return {
      color: 'warning',
      text: 'Resigned',
    }
  else
    return {
      color: 'info',
      text: 'Applied',
    }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="10"
    height="300"
    class="text-no-wrap"
    fixed-header
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`},Ca={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const userList = [
  {
    responsiveId: '',
    id: 1,
    avatar: avatar8,
    fullName: 'Korrie O'Crevy',
    post: 'Nuclear Power Engineer',
    email: 'kocrevy0@thetimes.co.uk',
    city: 'Krasnosilka',
    startDate: '09/23/2016',
    salary: 23896.35,
    age: '61',
    experience: '1 Year',
    status: 'Professional',
  },
  {
    responsiveId: '',
    id: 2,
    avatar: avatar1,
    fullName: 'Bailie Coulman',
    post: 'VP Quality Control',
    email: 'bcoulman1@yolasite.com',
    city: 'Hinigaran',
    startDate: '05/20/2018',
    salary: 13633.69,
    age: '63',
    experience: '3 Years',
    status: 'Professional',
  },
  {
    responsiveId: '',
    id: 3,
    avatar: avatar7,
    fullName: 'Stella Ganderton',
    post: 'Operator',
    email: 'sganderton2@tuttocitta.it',
    city: 'Golcowa',
    startDate: '03/24/2018',
    salary: 13076.28,
    age: '66',
    experience: '6 Years',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 4,
    avatar: avatar8,
    fullName: 'Dorolice Crossman',
    post: 'Cost Accountant',
    email: 'dcrossman3@google.co.jp',
    city: 'Paquera',
    startDate: '12/03/2017',
    salary: 12336.17,
    age: '22',
    experience: '2 Years',
    status: 'Professional',
  },
  {
    responsiveId: '',
    id: 6,
    avatar: '',
    fullName: 'Genevra Honeywood',
    post: 'Geologist',
    email: 'ghoneywood5@narod.ru',
    city: 'Maofan',
    startDate: '06/01/2017',
    salary: 17803.8,
    age: '61',
    experience: '1 Year',
    status: 'Current',
  },
  {
    responsiveId: '',
    id: 7,
    avatar: '',
    fullName: 'Eileen Diehn',
    post: 'Environmental Specialist',
    email: 'ediehn6@163.com',
    city: 'Lampuyang',
    startDate: '10/15/2017',
    salary: 18991.67,
    age: '59',
    experience: '9 Years',
    status: 'Rejected',
  },
  {
    responsiveId: '',
    id: 8,
    avatar: avatar7,
    fullName: 'Richardo Aldren',
    post: 'Senior Sales Associate',
    email: 'raldren7@mtv.com',
    city: 'Skoghall',
    startDate: '11/05/2016',
    salary: 19230.13,
    age: '55',
    experience: '5 Years',
    status: 'Rejected',
  },
  {
    responsiveId: '',
    id: 9,
    avatar: avatar2,
    fullName: 'Allyson Moakler',
    post: 'Safety Technician',
    email: 'amoakler8@shareasale.com',
    city: 'Mogilany',
    startDate: '12/29/2018',
    salary: 11677.32,
    age: '39',
    experience: '9 Years',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 11,
    avatar: '',
    fullName: 'De Falloon',
    post: 'Sales Representative',
    email: 'dfalloona@ifeng.com',
    city: 'Colima',
    startDate: '06/12/2018',
    salary: 19252.12,
    age: '30',
    experience: '0 Year',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 12,
    avatar: '',
    fullName: 'Cyrus Gornal',
    post: 'Senior Sales Associate',
    email: 'cgornalb@fda.gov',
    city: 'Boro Utara',
    startDate: '12/09/2017',
    salary: 16745.47,
    age: '22',
    experience: '2 Years',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 13,
    avatar: '',
    fullName: 'Tallou Balf',
    post: 'Staff Accountant',
    email: 'tbalfc@sina.com.cn',
    city: 'Siliana',
    startDate: '01/21/2016',
    salary: 15488.53,
    age: '36',
    experience: '6 Years',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 15,
    avatar: '',
    fullName: 'Wilmar Bourton',
    post: 'Administrative Assistant',
    email: 'wbourtone@sakura.ne.jp',
    city: 'Bích Động',
    startDate: '04/25/2018',
    salary: 13304.45,
    age: '19',
    experience: '9 Years',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 16,
    avatar: avatar4,
    fullName: 'Robinson Brazenor',
    post: 'General Manager',
    email: 'rbrazenorf@symantec.com',
    city: 'Gendiwu',
    startDate: '12/23/2017',
    salary: 11953.08,
    age: '66',
    experience: '6 Years',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 17,
    avatar: '',
    fullName: 'Nadia Bettenson',
    post: 'Environmental Tech',
    email: 'nbettensong@joomla.org',
    city: 'Chabařovice',
    startDate: '07/11/2018',
    salary: 20484.44,
    age: '64',
    experience: '4 Years',
    status: 'Current',
  },
  {
    responsiveId: '',
    id: 18,
    avatar: '',
    fullName: 'Titus Hayne',
    post: 'Web Designer',
    email: 'thayneh@kickstarter.com',
    city: 'Yangon',
    startDate: '05/25/2019',
    salary: 16871.48,
    age: '59',
    experience: '9 Years',
    status: 'Current',
  },
  {
    responsiveId: '',
    id: 19,
    avatar: avatar4,
    fullName: 'Roxie Huck',
    post: 'Administrative Assistant',
    email: 'rhucki@ed.gov',
    city: 'Polýkastro',
    startDate: '04/04/2019',
    salary: 19653.56,
    age: '41',
    experience: '1 Year',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 23,
    avatar: avatar7,
    fullName: 'Rosmunda Steed',
    post: 'Assistant Media Planner',
    email: 'rsteedm@xing.com',
    city: 'Manzanares',
    startDate: '12/23/2017',
    salary: 13778.34,
    age: '21',
    experience: '1 Year',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 26,
    avatar: avatar2,
    fullName: 'Morgen Benes',
    post: 'Senior Sales Associate',
    email: 'mbenesp@ted.com',
    city: 'Cà Mau',
    startDate: '04/10/2016',
    salary: 16969.63,
    age: '42',
    experience: '2 Years',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 28,
    avatar: '',
    fullName: 'Kliment McGinney',
    post: 'Chief Design Engineer',
    email: 'kmcginneyr@paginegialle.it',
    city: 'Xiaocheng',
    startDate: '07/09/2018',
    salary: 24027.81,
    age: '28',
    experience: '8 Years',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 31,
    avatar: '',
    fullName: 'Teressa Bleakman',
    post: 'Senior Editor',
    email: 'tbleakmanu@phpbb.com',
    city: 'Žebrák',
    startDate: '09/03/2016',
    salary: 24875.41,
    age: '37',
    experience: '7 Years',
    status: 'Applied',
  },
]

const headers = [
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
]

const groupBy = [{ key: 'status' }]

const resolveStatusVariant = (status: string) => {
  if (status === 'Current')
    return { color: 'primary' }
  else if (status === 'Professional')
    return { color: 'success' }
  else if (status === 'Rejected')
    return { color: 'error' }
  else if (status === 'Resigned')
    return { color: 'warning' }
  else
    return { color: 'info' }
}

const getIcon = (props: Record<string, unknown>) => props.icon as any
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="userList"
    :items-per-page="10"
    :group-by="groupBy"
    class="text-no-wrap"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        size="small"
        class="font-weight-medium"
      >
        {{ item.status }}
      </VChip>
    </template>

    <template #data-table-group="{ props, item, count }">
      <td>
        <VBtn
          v-bind="props"
          variant="text"
          density="comfortable"
        >
          <VIcon
            class="flip-in-rtl"
            :icon="getIcon(props)"
          />
        </VBtn>

        <span>{{ item.value }}</span>
        <span>({{ count }})</span>
      </td>
    </template>
  </VDataTable>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const userList = [
  {
    responsiveId: '',
    id: 1,
    avatar: avatar8,
    fullName: 'Korrie O'Crevy',
    post: 'Nuclear Power Engineer',
    email: 'kocrevy0@thetimes.co.uk',
    city: 'Krasnosilka',
    startDate: '09/23/2016',
    salary: 23896.35,
    age: '61',
    experience: '1 Year',
    status: 'Professional',
  },
  {
    responsiveId: '',
    id: 2,
    avatar: avatar1,
    fullName: 'Bailie Coulman',
    post: 'VP Quality Control',
    email: 'bcoulman1@yolasite.com',
    city: 'Hinigaran',
    startDate: '05/20/2018',
    salary: 13633.69,
    age: '63',
    experience: '3 Years',
    status: 'Professional',
  },
  {
    responsiveId: '',
    id: 3,
    avatar: avatar7,
    fullName: 'Stella Ganderton',
    post: 'Operator',
    email: 'sganderton2@tuttocitta.it',
    city: 'Golcowa',
    startDate: '03/24/2018',
    salary: 13076.28,
    age: '66',
    experience: '6 Years',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 4,
    avatar: avatar8,
    fullName: 'Dorolice Crossman',
    post: 'Cost Accountant',
    email: 'dcrossman3@google.co.jp',
    city: 'Paquera',
    startDate: '12/03/2017',
    salary: 12336.17,
    age: '22',
    experience: '2 Years',
    status: 'Professional',
  },
  {
    responsiveId: '',
    id: 6,
    avatar: '',
    fullName: 'Genevra Honeywood',
    post: 'Geologist',
    email: 'ghoneywood5@narod.ru',
    city: 'Maofan',
    startDate: '06/01/2017',
    salary: 17803.8,
    age: '61',
    experience: '1 Year',
    status: 'Current',
  },
  {
    responsiveId: '',
    id: 7,
    avatar: '',
    fullName: 'Eileen Diehn',
    post: 'Environmental Specialist',
    email: 'ediehn6@163.com',
    city: 'Lampuyang',
    startDate: '10/15/2017',
    salary: 18991.67,
    age: '59',
    experience: '9 Years',
    status: 'Rejected',
  },
  {
    responsiveId: '',
    id: 8,
    avatar: avatar7,
    fullName: 'Richardo Aldren',
    post: 'Senior Sales Associate',
    email: 'raldren7@mtv.com',
    city: 'Skoghall',
    startDate: '11/05/2016',
    salary: 19230.13,
    age: '55',
    experience: '5 Years',
    status: 'Rejected',
  },
  {
    responsiveId: '',
    id: 9,
    avatar: avatar2,
    fullName: 'Allyson Moakler',
    post: 'Safety Technician',
    email: 'amoakler8@shareasale.com',
    city: 'Mogilany',
    startDate: '12/29/2018',
    salary: 11677.32,
    age: '39',
    experience: '9 Years',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 11,
    avatar: '',
    fullName: 'De Falloon',
    post: 'Sales Representative',
    email: 'dfalloona@ifeng.com',
    city: 'Colima',
    startDate: '06/12/2018',
    salary: 19252.12,
    age: '30',
    experience: '0 Year',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 12,
    avatar: '',
    fullName: 'Cyrus Gornal',
    post: 'Senior Sales Associate',
    email: 'cgornalb@fda.gov',
    city: 'Boro Utara',
    startDate: '12/09/2017',
    salary: 16745.47,
    age: '22',
    experience: '2 Years',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 13,
    avatar: '',
    fullName: 'Tallou Balf',
    post: 'Staff Accountant',
    email: 'tbalfc@sina.com.cn',
    city: 'Siliana',
    startDate: '01/21/2016',
    salary: 15488.53,
    age: '36',
    experience: '6 Years',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 15,
    avatar: '',
    fullName: 'Wilmar Bourton',
    post: 'Administrative Assistant',
    email: 'wbourtone@sakura.ne.jp',
    city: 'Bích Động',
    startDate: '04/25/2018',
    salary: 13304.45,
    age: '19',
    experience: '9 Years',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 16,
    avatar: avatar4,
    fullName: 'Robinson Brazenor',
    post: 'General Manager',
    email: 'rbrazenorf@symantec.com',
    city: 'Gendiwu',
    startDate: '12/23/2017',
    salary: 11953.08,
    age: '66',
    experience: '6 Years',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 17,
    avatar: '',
    fullName: 'Nadia Bettenson',
    post: 'Environmental Tech',
    email: 'nbettensong@joomla.org',
    city: 'Chabařovice',
    startDate: '07/11/2018',
    salary: 20484.44,
    age: '64',
    experience: '4 Years',
    status: 'Current',
  },
  {
    responsiveId: '',
    id: 18,
    avatar: '',
    fullName: 'Titus Hayne',
    post: 'Web Designer',
    email: 'thayneh@kickstarter.com',
    city: 'Yangon',
    startDate: '05/25/2019',
    salary: 16871.48,
    age: '59',
    experience: '9 Years',
    status: 'Current',
  },
  {
    responsiveId: '',
    id: 19,
    avatar: avatar4,
    fullName: 'Roxie Huck',
    post: 'Administrative Assistant',
    email: 'rhucki@ed.gov',
    city: 'Polýkastro',
    startDate: '04/04/2019',
    salary: 19653.56,
    age: '41',
    experience: '1 Year',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 23,
    avatar: avatar7,
    fullName: 'Rosmunda Steed',
    post: 'Assistant Media Planner',
    email: 'rsteedm@xing.com',
    city: 'Manzanares',
    startDate: '12/23/2017',
    salary: 13778.34,
    age: '21',
    experience: '1 Year',
    status: 'Applied',
  },
  {
    responsiveId: '',
    id: 26,
    avatar: avatar2,
    fullName: 'Morgen Benes',
    post: 'Senior Sales Associate',
    email: 'mbenesp@ted.com',
    city: 'Cà Mau',
    startDate: '04/10/2016',
    salary: 16969.63,
    age: '42',
    experience: '2 Years',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 28,
    avatar: '',
    fullName: 'Kliment McGinney',
    post: 'Chief Design Engineer',
    email: 'kmcginneyr@paginegialle.it',
    city: 'Xiaocheng',
    startDate: '07/09/2018',
    salary: 24027.81,
    age: '28',
    experience: '8 Years',
    status: 'Resigned',
  },
  {
    responsiveId: '',
    id: 31,
    avatar: '',
    fullName: 'Teressa Bleakman',
    post: 'Senior Editor',
    email: 'tbleakmanu@phpbb.com',
    city: 'Žebrák',
    startDate: '09/03/2016',
    salary: 24875.41,
    age: '37',
    experience: '7 Years',
    status: 'Applied',
  },
]

const headers = [
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
]

const groupBy = [{ key: 'status' }]

const resolveStatusVariant = status => {
  if (status === 'Current')
    return { color: 'primary' }
  else if (status === 'Professional')
    return { color: 'success' }
  else if (status === 'Rejected')
    return { color: 'error' }
  else if (status === 'Resigned')
    return { color: 'warning' }
  else
    return { color: 'info' }
}

const getIcon = props => props.icon
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="userList"
    :items-per-page="10"
    :group-by="groupBy"
    class="text-no-wrap"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        size="small"
        class="font-weight-medium"
      >
        {{ item.status }}
      </VChip>
    </template>

    <template #data-table-group="{ props, item, count }">
      <td>
        <VBtn
          v-bind="props"
          variant="text"
          density="comfortable"
        >
          <VIcon
            class="flip-in-rtl"
            :icon="getIcon(props)"
          />
        </VBtn>

        <span>{{ item.value }}</span>
        <span>({{ count }})</span>
      </td>
    </template>
  </VDataTable>
</template>
`},_a={ts:`<script setup lang="ts">
import type { SalesDetails } from '@db/pages/datatable/types'

const { data: productList } = await useApi<SalesDetails[]>('pages/datatable')

const search = ref('')

// headers
const headers = [
  { title: 'PRODUCT', key: 'product.name' },
  { title: 'DATE', key: 'date' },
  { title: 'CATEGORY', key: 'product.category' },
  { title: 'BUYERS', key: 'buyer.name' },
  { title: 'PAYMENT', key: 'payment', sortable: false },
  { title: 'STATUS', key: 'status', sortable: false },
  { title: 'DELETE', key: 'delete', sortable: false },
]

// 👉 methods
const deleteItem = (itemId: number) => {
  if (!productList.value)
    return

  const index = productList.value.findIndex(item => item.product.id === itemId)

  productList.value.splice(index, 1)
}

const categoryIcons = [
  { name: 'Mouse', icon: 'ri-mouse-fill', color: 'warning' },
  { name: 'Glass', icon: 'ri-glasses-line', color: 'primary' },
  { name: 'Smart Watch', icon: 'ri-time-line', color: 'success' },
  { name: 'Bag', icon: 'ri-shopping-bag-line', color: 'info' },
  { name: 'Storage Device', icon: 'ri-tape-line', color: 'warning' },
  { name: 'Bluetooth', icon: 'ri-bluetooth-line', color: 'error' },
  { name: 'Gaming', icon: 'ri-gamepad-line', color: 'warning' },
  { name: 'Home', icon: 'ri-home-line', color: 'error' },
  { name: 'VR', icon: 'ri-goggles-line', color: 'primary' },
  { name: 'Shoes', icon: 'ri-omega', color: 'success' },
  { name: 'Electronics', icon: 'ri-flashlight-fill', color: 'info' },
  { name: 'Projector', icon: 'ri-projector-line', color: 'warning' },
  { name: 'iPod', icon: 'ri-music-line', color: 'error' },
  { name: 'Keyboard', icon: 'ri-keyboard-box-line', color: 'primary' },
  { name: 'Smart Phone', icon: 'ri-smartphone-line', color: 'success' },
  { name: 'Smart TV', icon: 'ri-tv-line', color: 'info' },
  { name: 'Google Home', icon: 'ri-google-line', color: 'warning' },
  { name: 'Mac', icon: 'ri-apple-line', color: 'error' },
  { name: 'Headphone', icon: 'ri-headphone-line', color: 'primary' },
  { name: 'iMac', icon: 'ri-computer-line', color: 'success' },
  { name: 'iPhone', icon: 'ri-apple-line', color: 'warning' },
]

const resolveStatusColor = (status: string) => {
  if (status === 'Confirmed')
    return 'primary'
  if (status === 'Completed')
    return 'success'
  if (status === 'Cancelled')
    return 'error'
}

const categoryIconFilter = (categoryName: string): {
  icon: string
  color: string }[] => {
  const index = categoryIcons.findIndex(category => category.name === categoryName)

  if (index !== -1)
    return [{ icon: categoryIcons[index].icon, color: categoryIcons[index].color }]

  return [{ icon: 'ri-question-line', color: 'primary' }]
}
<\/script>

<template>
  <div>
    <VCardText>
      <VRow>
        <VCol
          cols="12"
          offset-md="8"
          md="4"
        >
          <VTextField
            v-model="search"
            label="Search"
            placeholder="Search ..."
            append-inner-icon="ri-search-line"
            single-line
            hide-details
            dense
            outlined
          />
        </VCol>
      </VRow>
    </VCardText>

    <!-- 👉 Data Table  -->
    <VDataTable
      :headers="headers"
      :items="productList || []"
      :search="search"
      :items-per-page="5"
      class="text-no-wrap"
    >
      <!-- product -->
      <template #item.product.name="{ item }">
        <div class="d-flex align-center">
          <div>
            <VImg
              :src="item.product.image"
              height="40"
              width="40"
            />
          </div>
          <div class="d-flex flex-column ms-3">
            <span class="d-block font-weight-medium text-truncate text-high-emphasis">{{ item.product.name }}</span>
            <span class="text-xs">{{ item.product.brand }}</span>
          </div>
        </div>
      </template>

      <!-- category -->
      <template #item.product.category="{ item }">
        <div class="d-flex align-center">
          <VAvatar
            v-for="(category, index) in categoryIconFilter(item.product.category)"
            :key="index"
            size="26"
            :color="category.color"
            variant="tonal"
          >
            <VIcon
              size="18"
              :color="category.color"
              class="rounded-0"
            >
              {{ category.icon }}
            </VIcon>
          </VAvatar>
          <span class="ms-1 text-no-wrap">{{ item.product.category }}</span>
        </div>
      </template>

      <!-- buyer -->
      <template #item.buyer.name="{ item }">
        <div class="d-flex align-center">
          <VAvatar
            size="1.875rem"
            :color="!item.buyer.avatar ? 'primary' : undefined"
            :variant="!item.buyer.avatar ? 'tonal' : undefined"
          >
            <VImg
              v-if="item.buyer.avatar"
              :src="item.buyer.avatar"
            />
            <span
              v-else
              class="text-sm"
            >{{ item.buyer.name.slice(0, 2).toUpperCase() }}</span>
          </VAvatar>
          <span class="text-no-wrap font-weight-medium text-high-emphasis ms-2">{{ item.buyer.name }}</span>
        </div>
      </template>

      <!-- Payment -->
      <template #item.payment="{ item }">
        <div class="d-flex flex-column">
          <div class="d-flex align-center">
            <span class="text-high-emphasis font-weight-medium">\${{ item.payment.paidAmount }}</span>
            <span v-if="item.payment.paidAmount !== item.payment.total">/{{ item.payment.total }}</span>
          </div>
          <span class="text-xs text-no-wrap">{{ item.payment.receivedPaymentStatus }}</span>
        </div>
      </template>

      <!-- Status -->
      <template #item.status="{ item }">
        <VChip
          :color="resolveStatusColor(item.payment.status)"
          :class="\`text-\${resolveStatusColor(item.payment.status)}\`"
          size="small"
          class="font-weight-medium"
        >
          {{ item.payment.status }}
        </VChip>
      </template>

      <!-- Delete -->
      <template #item.delete="{ item }">
        <IconBtn
          size="small"
          @click="deleteItem(item.product.id)"
        >
          <VIcon icon="ri-delete-bin-line" />
        </IconBtn>
      </template>
    </VDataTable>
  </div>
</template>
`,js:`<script setup>
const { data: productList } = await useApi('pages/datatable')
const search = ref('')

// headers
const headers = [
  {
    title: 'PRODUCT',
    key: 'product.name',
  },
  {
    title: 'DATE',
    key: 'date',
  },
  {
    title: 'CATEGORY',
    key: 'product.category',
  },
  {
    title: 'BUYERS',
    key: 'buyer.name',
  },
  {
    title: 'PAYMENT',
    key: 'payment',
    sortable: false,
  },
  {
    title: 'STATUS',
    key: 'status',
    sortable: false,
  },
  {
    title: 'DELETE',
    key: 'delete',
    sortable: false,
  },
]

const deleteItem = itemId => {
  if (!productList.value)
    return
  const index = productList.value.findIndex(item => item.product.id === itemId)

  productList.value.splice(index, 1)
}

const categoryIcons = [
  {
    name: 'Mouse',
    icon: 'ri-mouse-fill',
    color: 'warning',
  },
  {
    name: 'Glass',
    icon: 'ri-glasses-line',
    color: 'primary',
  },
  {
    name: 'Smart Watch',
    icon: 'ri-time-line',
    color: 'success',
  },
  {
    name: 'Bag',
    icon: 'ri-shopping-bag-line',
    color: 'info',
  },
  {
    name: 'Storage Device',
    icon: 'ri-tape-line',
    color: 'warning',
  },
  {
    name: 'Bluetooth',
    icon: 'ri-bluetooth-line',
    color: 'error',
  },
  {
    name: 'Gaming',
    icon: 'ri-gamepad-line',
    color: 'warning',
  },
  {
    name: 'Home',
    icon: 'ri-home-line',
    color: 'error',
  },
  {
    name: 'VR',
    icon: 'ri-goggles-line',
    color: 'primary',
  },
  {
    name: 'Shoes',
    icon: 'ri-omega',
    color: 'success',
  },
  {
    name: 'Electronics',
    icon: 'ri-flashlight-fill',
    color: 'info',
  },
  {
    name: 'Projector',
    icon: 'ri-projector-line',
    color: 'warning',
  },
  {
    name: 'iPod',
    icon: 'ri-music-line',
    color: 'error',
  },
  {
    name: 'Keyboard',
    icon: 'ri-keyboard-box-line',
    color: 'primary',
  },
  {
    name: 'Smart Phone',
    icon: 'ri-smartphone-line',
    color: 'success',
  },
  {
    name: 'Smart TV',
    icon: 'ri-tv-line',
    color: 'info',
  },
  {
    name: 'Google Home',
    icon: 'ri-google-line',
    color: 'warning',
  },
  {
    name: 'Mac',
    icon: 'ri-apple-line',
    color: 'error',
  },
  {
    name: 'Headphone',
    icon: 'ri-headphone-line',
    color: 'primary',
  },
  {
    name: 'iMac',
    icon: 'ri-computer-line',
    color: 'success',
  },
  {
    name: 'iPhone',
    icon: 'ri-apple-line',
    color: 'warning',
  },
]

const resolveStatusColor = status => {
  if (status === 'Confirmed')
    return 'primary'
  if (status === 'Completed')
    return 'success'
  if (status === 'Cancelled')
    return 'error'
}

const categoryIconFilter = categoryName => {
  const index = categoryIcons.findIndex(category => category.name === categoryName)
  if (index !== -1)
    return [{
      icon: categoryIcons[index].icon,
      color: categoryIcons[index].color,
    }]
  
  return [{
    icon: 'ri-question-line',
    color: 'primary',
  }]
}
<\/script>

<template>
  <div>
    <VCardText>
      <VRow>
        <VCol
          cols="12"
          offset-md="8"
          md="4"
        >
          <VTextField
            v-model="search"
            label="Search"
            placeholder="Search ..."
            append-inner-icon="ri-search-line"
            single-line
            hide-details
            dense
            outlined
          />
        </VCol>
      </VRow>
    </VCardText>

    <!-- 👉 Data Table  -->
    <VDataTable
      :headers="headers"
      :items="productList || []"
      :search="search"
      :items-per-page="5"
      class="text-no-wrap"
    >
      <!-- product -->
      <template #item.product.name="{ item }">
        <div class="d-flex align-center">
          <div>
            <VImg
              :src="item.product.image"
              height="40"
              width="40"
            />
          </div>
          <div class="d-flex flex-column ms-3">
            <span class="d-block font-weight-medium text-truncate text-high-emphasis">{{ item.product.name }}</span>
            <span class="text-xs">{{ item.product.brand }}</span>
          </div>
        </div>
      </template>

      <!-- category -->
      <template #item.product.category="{ item }">
        <div class="d-flex align-center">
          <VAvatar
            v-for="(category, index) in categoryIconFilter(item.product.category)"
            :key="index"
            size="26"
            :color="category.color"
            variant="tonal"
          >
            <VIcon
              size="18"
              :color="category.color"
              class="rounded-0"
            >
              {{ category.icon }}
            </VIcon>
          </VAvatar>
          <span class="ms-1 text-no-wrap">{{ item.product.category }}</span>
        </div>
      </template>

      <!-- buyer -->
      <template #item.buyer.name="{ item }">
        <div class="d-flex align-center">
          <VAvatar
            size="1.875rem"
            :color="!item.buyer.avatar ? 'primary' : undefined"
            :variant="!item.buyer.avatar ? 'tonal' : undefined"
          >
            <VImg
              v-if="item.buyer.avatar"
              :src="item.buyer.avatar"
            />
            <span
              v-else
              class="text-sm"
            >{{ item.buyer.name.slice(0, 2).toUpperCase() }}</span>
          </VAvatar>
          <span class="text-no-wrap font-weight-medium text-high-emphasis ms-2">{{ item.buyer.name }}</span>
        </div>
      </template>

      <!-- Payment -->
      <template #item.payment="{ item }">
        <div class="d-flex flex-column">
          <div class="d-flex align-center">
            <span class="text-high-emphasis font-weight-medium">\${{ item.payment.paidAmount }}</span>
            <span v-if="item.payment.paidAmount !== item.payment.total">/{{ item.payment.total }}</span>
          </div>
          <span class="text-xs text-no-wrap">{{ item.payment.receivedPaymentStatus }}</span>
        </div>
      </template>

      <!-- Status -->
      <template #item.status="{ item }">
        <VChip
          :color="resolveStatusColor(item.payment.status)"
          :class="\`text-\${resolveStatusColor(item.payment.status)}\`"
          size="small"
          class="font-weight-medium"
        >
          {{ item.payment.status }}
        </VChip>
      </template>

      <!-- Delete -->
      <template #item.delete="{ item }">
        <IconBtn
          size="small"
          @click="deleteItem(item.product.id)"
        >
          <VIcon icon="ri-delete-bin-line" />
        </IconBtn>
      </template>
    </VDataTable>
  </div>
</template>
`},wa={ts:`<script setup lang="ts">
import data from '@/views/demos/forms/tables/data-table/datatable'
import type { Data } from '@db/pages/datatable/types'

const editDialog = ref(false)
const deleteDialog = ref(false)

const defaultItem = ref<Data>({
  responsiveId: '',
  id: -1,
  avatar: '',
  fullName: '',
  post: '',
  email: '',
  city: '',
  startDate: '',
  salary: -1,
  age: '',
  experience: '',
  status: -1,
})

const editedItem = ref<Data>(defaultItem.value)
const editedIndex = ref(-1)
const userList = ref<Data[]>([])

// status options
const selectedOptions = [
  { text: 'Current', value: 1 },
  { text: 'Professional', value: 2 },
  { text: 'Rejected', value: 3 },
  { text: 'Resigned', value: 4 },
  { text: 'Applied', value: 5 },
]

// headers
const headers = [
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
  { title: 'ACTIONS', key: 'actions' },
]

const resolveStatusVariant = (status: number) => {
  if (status === 1)
    return { color: 'primary', text: 'Current' }
  else if (status === 2)
    return { color: 'success', text: 'Professional' }
  else if (status === 3)
    return { color: 'error', text: 'Rejected' }
  else if (status === 4)
    return { color: 'warning', text: 'Resigned' }
  else
    return { color: 'info', text: 'Applied' }
}

// 👉 methods
const editItem = (item: Data) => {
  editedIndex.value = userList.value.indexOf(item)
  editedItem.value = { ...item }
  editDialog.value = true
}

const deleteItem = (item: Data) => {
  editedIndex.value = userList.value.indexOf(item)
  editedItem.value = { ...item }
  deleteDialog.value = true
}

const close = () => {
  editDialog.value = false
  editedIndex.value = -1
  editedItem.value = { ...defaultItem.value }
}

const closeDelete = () => {
  deleteDialog.value = false
  editedIndex.value = -1
  editedItem.value = { ...defaultItem.value }
}

const save = () => {
  if (editedIndex.value > -1)
    Object.assign(userList.value[editedIndex.value], editedItem.value)

  else
    userList.value.push(editedItem.value)

  close()
}

const deleteItemConfirm = () => {
  userList.value.splice(editedIndex.value, 1)
  closeDelete()
}

onMounted(() => {
  userList.value = JSON.parse(JSON.stringify(data))
})
<\/script>

<template>
  <!-- 👉 Datatable  -->
  <VDataTable
    :headers="headers"
    :items="userList"
    :items-per-page="5"
    class="text-no-wrap"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <!-- avatar -->
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>

        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        density="comfortable"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>

    <!-- Actions -->
    <template #item.actions="{ item }">
      <div class="d-flex gap-1">
        <IconBtn
          size="small"
          @click="editItem(item)"
        >
          <VIcon icon="ri-pencil-line" />
        </IconBtn>
        <IconBtn
          size="small"
          @click="deleteItem(item)"
        >
          <VIcon icon="ri-delete-bin-line" />
        </IconBtn>
      </div>
    </template>
  </VDataTable>

  <!-- 👉 Edit Dialog  -->
  <VDialog
    v-model="editDialog"
    max-width="600px"
  >
    <VCard title="Edit Item">
      <VCardText>
        <div class="text-body-1 mb-6">
          Name: <span class="text-h6">{{ editedItem?.fullName }}</span>
        </div>
        <VRow>
          <!-- fullName -->
          <VCol
            cols="12"
            sm="6"
          >
            <VTextField
              v-model="editedItem.fullName"
              label="User name"
            />
          </VCol>

          <!-- email -->
          <VCol
            cols="12"
            sm="6"
          >
            <VTextField
              v-model="editedItem.email"
              label="Email"
            />
          </VCol>

          <!-- salary -->
          <VCol
            cols="12"
            sm="6"
          >
            <VTextField
              v-model="editedItem.salary"
              label="Salary"
              prefix="$"
              type="number"
            />
          </VCol>

          <!-- age -->
          <VCol
            cols="12"
            sm="6"
          >
            <VTextField
              v-model="editedItem.age"
              label="Age"
              type="number"
            />
          </VCol>

          <!-- start date -->
          <VCol
            cols="12"
            sm="6"
          >
            <VTextField
              v-model="editedItem.startDate"
              label="Date"
            />
          </VCol>

          <!-- status -->
          <VCol
            cols="12"
            sm="6"
          >
            <VSelect
              v-model="editedItem.status"
              :items="selectedOptions"
              item-title="text"
              item-value="value"
              label="Standard"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText>
        <div class="self-align-end d-flex gap-4 justify-end">
          <VBtn
            color="error"
            variant="outlined"
            @click="close"
          >
            Cancel
          </VBtn>
          <VBtn
            color="success"
            variant="elevated"
            @click="save"
          >
            Save
          </VBtn>
        </div>
      </VCardText>
    </VCard>
  </VDialog>

  <!-- 👉 Delete Dialog  -->
  <VDialog
    v-model="deleteDialog"
    max-width="500px"
  >
    <VCard title="Are you sure you want to delete this item?">
      <VCardText>
        <div class="d-flex justify-center gap-4">
          <VBtn
            color="error"
            variant="outlined"
            @click="closeDelete"
          >
            Cancel
          </VBtn>
          <VBtn
            color="success"
            variant="elevated"
            @click="deleteItemConfirm"
          >
            OK
          </VBtn>
        </div>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
import data from '@/views/demos/forms/tables/data-table/datatable'

const editDialog = ref(false)
const deleteDialog = ref(false)

const defaultItem = ref({
  responsiveId: '',
  id: -1,
  avatar: '',
  fullName: '',
  post: '',
  email: '',
  city: '',
  startDate: '',
  salary: -1,
  age: '',
  experience: '',
  status: -1,
})

const editedItem = ref(defaultItem.value)
const editedIndex = ref(-1)
const userList = ref([])

// status options
const selectedOptions = [
  {
    text: 'Current',
    value: 1,
  },
  {
    text: 'Professional',
    value: 2,
  },
  {
    text: 'Rejected',
    value: 3,
  },
  {
    text: 'Resigned',
    value: 4,
  },
  {
    text: 'Applied',
    value: 5,
  },
]

// headers
const headers = [
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
  {
    title: 'ACTIONS',
    key: 'actions',
  },
]

const resolveStatusVariant = status => {
  if (status === 1)
    return {
      color: 'primary',
      text: 'Current',
    }
  else if (status === 2)
    return {
      color: 'success',
      text: 'Professional',
    }
  else if (status === 3)
    return {
      color: 'error',
      text: 'Rejected',
    }
  else if (status === 4)
    return {
      color: 'warning',
      text: 'Resigned',
    }
  else
    return {
      color: 'info',
      text: 'Applied',
    }
}

const editItem = item => {
  editedIndex.value = userList.value.indexOf(item)
  editedItem.value = { ...item }
  editDialog.value = true
}

const deleteItem = item => {
  editedIndex.value = userList.value.indexOf(item)
  editedItem.value = { ...item }
  deleteDialog.value = true
}

const close = () => {
  editDialog.value = false
  editedIndex.value = -1
  editedItem.value = { ...defaultItem.value }
}

const closeDelete = () => {
  deleteDialog.value = false
  editedIndex.value = -1
  editedItem.value = { ...defaultItem.value }
}

const save = () => {
  if (editedIndex.value > -1)
    Object.assign(userList.value[editedIndex.value], editedItem.value)
  else
    userList.value.push(editedItem.value)
  close()
}

const deleteItemConfirm = () => {
  userList.value.splice(editedIndex.value, 1)
  closeDelete()
}

onMounted(() => {
  userList.value = JSON.parse(JSON.stringify(data))
})
<\/script>

<template>
  <!-- 👉 Datatable  -->
  <VDataTable
    :headers="headers"
    :items="userList"
    :items-per-page="5"
    class="text-no-wrap"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <!-- avatar -->
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>

        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        density="comfortable"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>

    <!-- Actions -->
    <template #item.actions="{ item }">
      <div class="d-flex gap-1">
        <IconBtn
          size="small"
          @click="editItem(item)"
        >
          <VIcon icon="ri-pencil-line" />
        </IconBtn>
        <IconBtn
          size="small"
          @click="deleteItem(item)"
        >
          <VIcon icon="ri-delete-bin-line" />
        </IconBtn>
      </div>
    </template>
  </VDataTable>

  <!-- 👉 Edit Dialog  -->
  <VDialog
    v-model="editDialog"
    max-width="600px"
  >
    <VCard title="Edit Item">
      <VCardText>
        <div class="text-body-1 mb-6">
          Name: <span class="text-h6">{{ editedItem?.fullName }}</span>
        </div>
        <VRow>
          <!-- fullName -->
          <VCol
            cols="12"
            sm="6"
          >
            <VTextField
              v-model="editedItem.fullName"
              label="User name"
            />
          </VCol>

          <!-- email -->
          <VCol
            cols="12"
            sm="6"
          >
            <VTextField
              v-model="editedItem.email"
              label="Email"
            />
          </VCol>

          <!-- salary -->
          <VCol
            cols="12"
            sm="6"
          >
            <VTextField
              v-model="editedItem.salary"
              label="Salary"
              prefix="$"
              type="number"
            />
          </VCol>

          <!-- age -->
          <VCol
            cols="12"
            sm="6"
          >
            <VTextField
              v-model="editedItem.age"
              label="Age"
              type="number"
            />
          </VCol>

          <!-- start date -->
          <VCol
            cols="12"
            sm="6"
          >
            <VTextField
              v-model="editedItem.startDate"
              label="Date"
            />
          </VCol>

          <!-- status -->
          <VCol
            cols="12"
            sm="6"
          >
            <VSelect
              v-model="editedItem.status"
              :items="selectedOptions"
              item-title="text"
              item-value="value"
              label="Standard"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText>
        <div class="self-align-end d-flex gap-4 justify-end">
          <VBtn
            color="error"
            variant="outlined"
            @click="close"
          >
            Cancel
          </VBtn>
          <VBtn
            color="success"
            variant="elevated"
            @click="save"
          >
            Save
          </VBtn>
        </div>
      </VCardText>
    </VCard>
  </VDialog>

  <!-- 👉 Delete Dialog  -->
  <VDialog
    v-model="deleteDialog"
    max-width="500px"
  >
    <VCard title="Are you sure you want to delete this item?">
      <VCardText>
        <div class="d-flex justify-center gap-4">
          <VBtn
            color="error"
            variant="outlined"
            @click="closeDelete"
          >
            Cancel
          </VBtn>
          <VBtn
            color="success"
            variant="elevated"
            @click="deleteItemConfirm"
          >
            OK
          </VBtn>
        </div>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Ta={ts:`<script setup lang="ts">
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  { title: 'NAME', key: 'fullName' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'startDate' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
]

const resolveStatusVariant = (status: number) => {
  if (status === 1)
    return { color: 'primary', text: 'Current' }
  else if (status === 2)
    return { color: 'success', text: 'Professional' }
  else if (status === 3)
    return { color: 'error', text: 'Rejected' }
  else if (status === 4)
    return { color: 'warning', text: 'Resigned' }
  else
    return { color: 'info', text: 'Applied' }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
    show-select
    class="text-no-wrap"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`,js:`<script setup>
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'startDate',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
]

const resolveStatusVariant = status => {
  if (status === 1)
    return {
      color: 'primary',
      text: 'Current',
    }
  else if (status === 2)
    return {
      color: 'success',
      text: 'Professional',
    }
  else if (status === 3)
    return {
      color: 'error',
      text: 'Rejected',
    }
  else if (status === 4)
    return {
      color: 'warning',
      text: 'Resigned',
    }
  else
    return {
      color: 'info',
      text: 'Applied',
    }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
    show-select
    class="text-no-wrap"
  >
    <!-- full name -->
    <template #item.fullName="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.avatar"
            :src="item.avatar"
          />
          <span
            v-else
            class="text-sm"
          >{{ avatarText(item.fullName) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`},Vt=N({__name:"data-table",setup(S){return(c,n)=>{const r=ba,i=ue,t=ha,u=xa,p=pa,v=na,R=sa,D=We,V=Oe,C=Ye,m=Se;return d(),y(Q,null,{default:e(()=>[a(x,{cols:"12"},{default:e(()=>[a(i,{title:"Basic",code:ka,"no-padding":""},{default:e(()=>[a(r)]),_:1},8,["code"])]),_:1}),a(x,null,{default:e(()=>[a(i,{title:"Dense",code:Va,"no-padding":""},{default:e(()=>[a(t)]),_:1},8,["code"])]),_:1}),a(x,{cols:"12"},{default:e(()=>[a(i,{title:"Cell Slot",code:Aa,"no-padding":""},{default:e(()=>[a(u)]),_:1},8,["code"])]),_:1}),a(x,{cols:"12"},{default:e(()=>[a(i,{title:"Row Selection",code:Ta,"no-padding":""},{default:e(()=>[a(p)]),_:1},8,["code"])]),_:1}),a(x,{cols:"12"},{default:e(()=>[a(i,{title:"Fixed Header",code:Sa,"no-padding":""},{default:e(()=>[a(v)]),_:1},8,["code"])]),_:1}),a(x,{cols:"12"},{default:e(()=>[a(i,{title:"Expandable Rows",code:Ia,"no-padding":""},{default:e(()=>[a(R)]),_:1},8,["code"])]),_:1}),a(x,{cols:"12"},{default:e(()=>[a(i,{title:"Grouping Rows",code:Ca,"no-padding":""},{default:e(()=>[a(D)]),_:1},8,["code"])]),_:1}),a(x,{cols:"12"},{default:e(()=>[a(i,{title:"Row Editing via Dialog",code:wa,"no-padding":""},{default:e(()=>[a(V)]),_:1},8,["code"])]),_:1}),a(x,{cols:"12"},{default:e(()=>[a(i,{title:"External Pagination",code:Na,"no-padding":""},{default:e(()=>[a(C)]),_:1},8,["code"])]),_:1}),a(x,{cols:"12"},{default:e(()=>[a(i,{title:"Kitchen Sink",code:_a,"no-padding":""},{default:e(()=>[a(m)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Vt as default};
