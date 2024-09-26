import{a as c,b as L,V as f,c as x,d as T,e as k}from"./VList-DBeUyEP9.js";import{d as h,o as l,g as m,f as t,c as V,F as b,i as _,b as e,a0 as w,v as y,p as a,aR as W,x as P,ai as D,e as u,r as K,s as C,n as Q,aG as E}from"./main-FCzYu4Z5.js";import{V as S}from"./VAvatar-CP8SEjMm.js";import{V as J}from"./VDivider-knA9H03k.js";import{a as U}from"./avatar-1-BpD18F9D.js";import{a as G}from"./avatar-2-7Cb1ulCk.js";import{a as M}from"./avatar-3-D1OxVER-.js";import{a as R}from"./avatar-4-DTtpEczF.js";import{V as Y}from"./VBadge-wnDARzOv.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as j}from"./VListItemAction-Cwu2NJQ9.js";import{V as B}from"./VCheckbox-C2xYsN31.js";import{_ as X}from"./AppCardCode.vue_vue_type_style_index_0_lang-ChisEB8j.js";import{b as o}from"./VCard-Do568HRS.js";import{a as g,V as Z}from"./VRow-DcbkzY-u.js";import"./ssrBoot-CaII-3XN.js";import"./VImg-CJF-w0vk.js";import"./VCheckboxBtn-B0Ml4Fv6.js";import"./VSelectionControl-CjMQjtTf.js";import"./InputIcon-wsmb1BjU.js";import"./VInput-B2EWUdv0.js";import"./vue3-perfect-scrollbar-gC16KFl8.js";/* empty css              */const ee=h({__name:"DemoListShaped",setup(v){const n=[{text:"Cupcake sesame snaps dessert marzipan.",icon:"ri-instagram-line"},{text:"Jelly beans jelly-o gummi bears chupa chups marshmallow.",icon:"ri-facebook-circle-line"},{text:"Bonbon macaroon gummies pie jelly",icon:"ri-twitter-line"}];return(r,d)=>(l(),m(f,null,{default:t(()=>[(l(),V(b,null,_(n,(s,i)=>e(c,{key:i,value:s.text,rounded:"shaped"},{prepend:t(()=>[e(w,{icon:s.icon},null,8,["icon"])]),default:t(()=>[e(L,{textContent:y(s.text)},null,8,["textContent"])]),_:2},1032,["value"])),64))]),_:1}))}}),te=h({__name:"DemoListProgressList",setup(v){const n=[{avatar:"ri-reactjs-line",title:"React is a JavaScript library for building user interfaces",language:"react",amount:90},{avatar:"ri-bootstrap-line",title:"Bootstrap is an open source toolkit",language:"bootstrap",amount:80},{avatar:"ri-vuejs-line",title:"Vue.js is the Progressive JavaScript Framework",language:"vue",amount:65},{avatar:"ri-angularjs-line",title:"Angular implements Functional Programming concepts",language:"angular",amount:75},{avatar:"ri-javascript-line",title:"JavaScript is the programming language of the Web",language:"javascript",amount:70}],r={react:"info",bootstrap:"primary",vue:"success",angular:"error",javascript:"warning"};return(d,s)=>(l(),m(f,{lines:"two",border:"",rounded:""},{default:t(()=>[(l(),V(b,null,_(n,(i,p)=>(l(),V(b,{key:i.language},[e(c,null,{prepend:t(()=>[e(S,{size:"36",rounded:"",variant:"tonal",icon:i.avatar,color:r[i.language]},null,8,["icon","color"])]),default:t(()=>[e(L,null,{default:t(()=>[a(y(i.title),1)]),_:2},1024),e(x,{class:"mt-2"},{default:t(()=>[e(W,{height:"6",rounded:"","model-value":i.amount,"bg-color":"secondary",color:r[i.language]},null,8,["model-value","color"])]),_:2},1024)]),_:2},1024),p!==n.length-1?(l(),m(J,{key:0})):P("",!0)],64))),64))]),_:1}))}}),ae={class:"ms-4"},ie={class:"text-xs text-disabled"},se=h({__name:"DemoListUserList",setup(v){const n=[{avatar:U,name:"Caroline Black",status:"Online",lastVisited:"13 minutes ago"},{avatar:G,name:"Alfred Copeland",status:"Away",lastVisited:"11 minutes ago"},{avatar:M,name:"Celia Schneider",status:"Offline",lastVisited:"9 minutes ago"},{avatar:R,name:"Max Rogan",status:"In Meeting",lastVisited:"28 minutes ago"}],r={Online:"success",Away:"warning",Offline:"secondary","In Meeting":"error"};return(d,s)=>(l(),m(f,{lines:"two",border:"",rounded:""},{default:t(()=>[(l(),V(b,null,_(n,(i,p)=>(l(),V(b,{key:i.name},[e(c,null,{prepend:t(()=>[e(S,{image:i.avatar},null,8,["image"])]),append:t(()=>[e(D,{size:"small"},{default:t(()=>[a(" Add ")]),_:1})]),default:t(()=>[e(L,null,{default:t(()=>[a(y(i.name),1)]),_:2},1024),e(x,{class:"mt-1"},{default:t(()=>[e(Y,{dot:"",location:"start center","offset-x":"2",color:r[i.status],class:"me-3"},{default:t(()=>[u("span",ae,y(i.status),1)]),_:2},1032,["color"]),u("span",ie,y(i.lastVisited),1)]),_:2},1024)]),_:2},1024),p!==n.length-1?(l(),m(J,{key:0})):P("",!0)],64))),64))]),_:1}))}}),ne=["innerHTML"],le=h({__name:"DemoListThreeLine",setup(v){const n=[{type:"subheader",title:"Today"},{prependAvatar:U,title:"Brunch this weekend?",subtitle:`<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`},{type:"divider",inset:!0},{prependAvatar:G,title:"Summer BBQ",subtitle:`<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`},{type:"divider",inset:!0},{prependAvatar:M,title:"Oui oui",subtitle:'<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?'},{type:"divider",inset:!0},{prependAvatar:R,title:"Birthday gift",subtitle:'<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?'}];return(r,d)=>(l(),m(f,{lines:"three",items:n,"item-props":""},{subtitle:t(({subtitle:s})=>[u("div",{innerHTML:s},null,8,ne)]),_:1}))}}),re=h({__name:"DemoListTwoLinesAndSubheader",setup(v){const n=[{color:"blue",icon:"ri-clipboard-line",subtitle:"Jan 20, 2014",title:"Vacation itinerary"},{color:"amber",icon:"ri-hard-drive-2-line",subtitle:"Jan 10, 2014",title:"Kitchen remodel"}],r=[{subtitle:"Jan 9, 2014",title:"Photos"},{subtitle:"Jan 17, 2014",title:"Recipes"},{subtitle:"Jan 28, 2014",title:"Work"}];return(d,s)=>(l(),m(f,{lines:"two"},{default:t(()=>[e(T,{inset:""},{default:t(()=>[a(" Folders ")]),_:1}),(l(),V(b,null,_(r,i=>e(c,{key:i.title,title:i.title,subtitle:i.subtitle},{prepend:t(()=>[e(S,{color:"secondary",variant:"tonal"},{default:t(()=>[e(w,{size:26,icon:"ri-folder-line"})]),_:1})]),append:t(()=>[e(D,{variant:"text",color:"default",icon:"ri-information-line"})]),_:2},1032,["title","subtitle"])),64)),e(J,{inset:""}),e(T,{inset:""},{default:t(()=>[a(" Files ")]),_:1}),(l(),V(b,null,_(n,i=>e(c,{key:i.title,title:i.title,subtitle:i.subtitle},{prepend:t(()=>[e(S,{color:"secondary",variant:"tonal"},{default:t(()=>[e(w,{size:26,icon:i.icon},null,8,["icon"])]),_:2},1024)]),append:t(()=>[e(D,{variant:"text",color:"default",icon:"ri-information-line"})]),_:2},1032,["title","subtitle"])),64))]),_:1}))}}),oe=h({__name:"DemoListSubGroup",setup(v){const n=K(["Users","Admin"]),r=[["Management","ri-group-line"],["Settings","ri-settings-5-line"]],d=[["Create","ri-add-line"],["Read","ri-file-line"],["Update","ri-refresh-line"],["Delete","ri-delete-bin-line"]];return(s,i)=>(l(),m(f,{opened:Q(n),"onUpdate:opened":i[0]||(i[0]=p=>E(n)?n.value=p:null)},{default:t(()=>[e(c,{"prepend-icon":"ri-home-line",title:"Home",value:"Home"}),e(k,{value:"Users"},{activator:t(({props:p})=>[e(c,C(p,{"prepend-icon":"ri-user-line",title:"Users"}),null,16)]),default:t(()=>[e(k,{value:"Admin"},{activator:t(({props:p})=>[e(c,C(p,{title:"Admin"}),null,16)]),default:t(()=>[(l(),V(b,null,_(r,([p,I],A)=>e(c,{key:A,value:p,title:p,"prepend-icon":I},null,8,["value","title","prepend-icon"])),64))]),_:1}),e(k,{value:"Actions"},{activator:t(({props:p})=>[e(c,C(p,{title:"Actions"}),null,16)]),default:t(()=>[(l(),V(b,null,_(d,([p,I],A)=>e(c,{key:A,value:p,title:p,"prepend-icon":I},null,8,["value","title","prepend-icon"])),64))]),_:1})]),_:1})]),_:1},8,["opened"]))}}),pe={};function ue(v,n){return l(),m(f,{lines:"three",density:"compact","select-strategy":"classic"},{default:t(()=>[e(T,null,{default:t(()=>[a("General")]),_:1}),e(c,{value:"notifications"},{prepend:t(({isActive:r})=>[e(j,null,{default:t(()=>[e(B,{"model-value":r,color:"primary",class:"mt-2"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(L,null,{default:t(()=>[a("Notifications")]),_:1}),e(x,null,{default:t(()=>[a("Notify me about updates to apps or games that I downloaded")]),_:1})]),_:1}),e(c,{value:"sound"},{prepend:t(({isActive:r})=>[e(j,null,{default:t(()=>[e(B,{"model-value":r,color:"primary",class:"mt-2"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(L,null,{default:t(()=>[a("Sound")]),_:1}),e(x,null,{default:t(()=>[a("Auto-update apps at any time. Data charges may apply")]),_:1})]),_:1}),e(c,{value:"widgets"},{prepend:t(({isActive:r})=>[e(j,null,{default:t(()=>[e(B,{"model-value":r,color:"primary",class:"mt-2"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(L,null,{default:t(()=>[a("Auto-add widgets")]),_:1}),e(x,null,{default:t(()=>[a("Automatically add home screen widgets when downloads complete")]),_:1})]),_:1})]),_:1})}const ce=q(pe,[["render",ue]]),me=h({__name:"DemoListNav",setup(v){const n=[{title:"My Files",value:1,prependIcon:"ri-folder-line"},{title:"Shared with me",value:2,prependIcon:"ri-group-line"},{title:"Starred",value:3,prependIcon:"ri-star-line"},{title:"Recent",value:4,prependIcon:"ri-history-line"},{title:"Offline",value:5,prependIcon:"ri-checkbox-circle-line"},{title:"Uploads",value:6,prependIcon:"ri-upload-line"},{title:"Backups",value:7,prependIcon:"ri-upload-cloud-line"}];return(r,d)=>(l(),m(f,{nav:"",lines:!1},{default:t(()=>[(l(),V(b,null,_(n,s=>e(c,{key:s.value,value:s.value},{prepend:t(()=>[e(w,{icon:s.prependIcon,class:"me-3"},null,8,["icon"])]),default:t(()=>[e(L,null,{default:t(()=>[a(y(s.title),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1}))}}),de=h({__name:"DemoListDensity",setup(v){const n=[{title:"halvah icing marshmallow",value:1},{title:"Cake caramels donut danish muffin biscuit",value:2},{title:"Chocolate cake pie lollipop",value:3},{title:"Apple pie toffee pudding gummi bears",value:4},{title:"Jujubes chupa chups cheesecake tart",value:5},{title:"Candy fruitcake bonbon sesame snaps dessert",value:6},{title:"Candy wafer tiramisu sugar plum sweet.",value:7},{title:"Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.",value:8}];return(r,d)=>(l(),m(f,{density:"compact",items:n}))}}),ve=h({__name:"DemoListRounded",setup(v){const n=[{title:"Cupcake sesame snaps dessert marzipan.",value:1,props:{prependIcon:"ri-dribbble-line",rounded:"xl"}},{title:"Jelly beans jelly-o gummi bears chupa chups marshmallow.",value:2,props:{prependIcon:"ri-facebook-circle-line",rounded:"xl"}},{title:"Bonbon macaroon gummies pie jelly",value:3,props:{prependIcon:"ri-twitter-line",rounded:"xl"}},{title:"halvah icing marshmallow",value:4,props:{prependIcon:"ri-instagram-line",rounded:"xl"}}];return(r,d)=>(l(),m(f,{items:n}))}}),ge=h({__name:"DemoListBasic",setup(v){const n=["Cras justo odio","Dapibus ac facilisis in","Morbi leo risus","Porta ac consectetur ac"];return(r,d)=>(l(),m(f,{items:n}))}}),fe={ts:`<template>
  <VList
    lines="three"
    density="compact"
    select-strategy="classic"
  >
    <VListSubheader>General</VListSubheader>

    <VListItem value="notifications">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Notifications</VListItemTitle>
      <VListItemSubtitle>Notify me about updates to apps or games that I downloaded</VListItemSubtitle>
    </VListItem>

    <VListItem value="sound">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Sound</VListItemTitle>
      <VListItemSubtitle>Auto-update apps at any time. Data charges may apply</VListItemSubtitle>
    </VListItem>

    <VListItem value="widgets">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Auto-add widgets</VListItemTitle>
      <VListItemSubtitle>Automatically add home screen widgets when downloads complete</VListItemSubtitle>
    </VListItem>
  </VList>
</template>
`,js:`<template>
  <VList
    lines="three"
    density="compact"
    select-strategy="classic"
  >
    <VListSubheader>General</VListSubheader>

    <VListItem value="notifications">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Notifications</VListItemTitle>
      <VListItemSubtitle>Notify me about updates to apps or games that I downloaded</VListItemSubtitle>
    </VListItem>

    <VListItem value="sound">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Sound</VListItemTitle>
      <VListItemSubtitle>Auto-update apps at any time. Data charges may apply</VListItemSubtitle>
    </VListItem>

    <VListItem value="widgets">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Auto-add widgets</VListItemTitle>
      <VListItemSubtitle>Automatically add home screen widgets when downloads complete</VListItemSubtitle>
    </VListItem>
  </VList>
</template>
`},he={ts:`<script setup lang="ts">
const items = ['Cras justo odio', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac']
<\/script>

<template>
  <VList :items="items" />
</template>
`,js:`<script setup>
const items = [
  'Cras justo odio',
  'Dapibus ac facilisis in',
  'Morbi leo risus',
  'Porta ac consectetur ac',
]
<\/script>

<template>
  <VList :items="items" />
</template>
`},Ve={ts:`<script lang="ts" setup>
const items = [
  { title: 'halvah icing marshmallow', value: 1 },
  { title: 'Cake caramels donut danish muffin biscuit', value: 2 },
  { title: 'Chocolate cake pie lollipop', value: 3 },
  { title: 'Apple pie toffee pudding gummi bears', value: 4 },
  { title: 'Jujubes chupa chups cheesecake tart', value: 5 },
  { title: 'Candy fruitcake bonbon sesame snaps dessert', value: 6 },
  { title: 'Candy wafer tiramisu sugar plum sweet.', value: 7 },
  { title: 'Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.', value: 8 },
]
<\/script>

<template>
  <VList
    density="compact"
    :items="items"
  />
</template>
`,js:`<script setup>
const items = [
  {
    title: 'halvah icing marshmallow',
    value: 1,
  },
  {
    title: 'Cake caramels donut danish muffin biscuit',
    value: 2,
  },
  {
    title: 'Chocolate cake pie lollipop',
    value: 3,
  },
  {
    title: 'Apple pie toffee pudding gummi bears',
    value: 4,
  },
  {
    title: 'Jujubes chupa chups cheesecake tart',
    value: 5,
  },
  {
    title: 'Candy fruitcake bonbon sesame snaps dessert',
    value: 6,
  },
  {
    title: 'Candy wafer tiramisu sugar plum sweet.',
    value: 7,
  },
  {
    title: 'Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.',
    value: 8,
  },
]
<\/script>

<template>
  <VList
    density="compact"
    :items="items"
  />
</template>
`},be={ts:`<script lang="ts" setup>
const items = [
  { title: 'My Files', value: 1, prependIcon: 'ri-folder-line' },
  { title: 'Shared with me', value: 2, prependIcon: 'ri-group-line' },
  { title: 'Starred', value: 3, prependIcon: 'ri-star-line' },
  { title: 'Recent', value: 4, prependIcon: 'ri-history-line' },
  { title: 'Offline', value: 5, prependIcon: 'ri-checkbox-circle-line' },
  { title: 'Uploads', value: 6, prependIcon: 'ri-upload-line' },
  { title: 'Backups', value: 7, prependIcon: 'ri-upload-cloud-line' },
]
<\/script>

<template>
  <VList
    nav
    :lines="false"
  >
    <VListItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
    >
      <template #prepend>
        <VIcon
          :icon="item.prependIcon"
          class="me-3"
        />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'My Files',
    value: 1,
    prependIcon: 'ri-folder-line',
  },
  {
    title: 'Shared with me',
    value: 2,
    prependIcon: 'ri-group-line',
  },
  {
    title: 'Starred',
    value: 3,
    prependIcon: 'ri-star-line',
  },
  {
    title: 'Recent',
    value: 4,
    prependIcon: 'ri-history-line',
  },
  {
    title: 'Offline',
    value: 5,
    prependIcon: 'ri-checkbox-circle-line',
  },
  {
    title: 'Uploads',
    value: 6,
    prependIcon: 'ri-upload-line',
  },
  {
    title: 'Backups',
    value: 7,
    prependIcon: 'ri-upload-cloud-line',
  },
]
<\/script>

<template>
  <VList
    nav
    :lines="false"
  >
    <VListItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
    >
      <template #prepend>
        <VIcon
          :icon="item.prependIcon"
          class="me-3"
        />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`},_e={ts:`<script setup lang="ts">
interface Language {
  'react': string
  'bootstrap': string
  'vue': string
  'angular': string
  'javascript': string
}

interface Progress {
  avatar: string
  title: string
  language: keyof Language
  amount: number
}

const languageProgress: Progress[] = [
  {
    avatar: 'ri-reactjs-line',
    title: 'React is a JavaScript library for building user interfaces',
    language: 'react',
    amount: 90,
  },
  {
    avatar: 'ri-bootstrap-line',
    title: 'Bootstrap is an open source toolkit',
    language: 'bootstrap',
    amount: 80,
  },
  {
    avatar: 'ri-vuejs-line',
    title: 'Vue.js is the Progressive JavaScript Framework',
    language: 'vue',
    amount: 65,
  },
  {
    avatar: 'ri-angularjs-line',
    title: 'Angular implements Functional Programming concepts',
    language: 'angular',
    amount: 75,
  },
  {
    avatar: 'ri-javascript-line',
    title: 'JavaScript is the programming language of the Web',
    language: 'javascript',
    amount: 70,
  },
]

const resolveStatusColor: Language = {
  react: 'info',
  bootstrap: 'primary',
  vue: 'success',
  angular: 'error',
  javascript: 'warning',
}
<\/script>

<template>
  <VList
    lines="two"
    border
    rounded
  >
    <template
      v-for="(progress, index) of languageProgress"
      :key="progress.language"
    >
      <VListItem>
        <template #prepend>
          <VAvatar
            size="36"
            rounded
            variant="tonal"
            :icon="progress.avatar"
            :color="resolveStatusColor[progress.language]"
          />
        </template>

        <VListItemTitle>
          {{ progress.title }}
        </VListItemTitle>

        <VListItemSubtitle class="mt-2">
          <VProgressLinear
            height="6"
            rounded
            :model-value="progress.amount"
            bg-color="secondary"
            :color="resolveStatusColor[progress.language]"
          />
        </VListItemSubtitle>
      </VListItem>

      <VDivider v-if="index !== languageProgress.length - 1" />
    </template>
  </VList>
</template>
`,js:`<script setup>
const languageProgress = [
  {
    avatar: 'ri-reactjs-line',
    title: 'React is a JavaScript library for building user interfaces',
    language: 'react',
    amount: 90,
  },
  {
    avatar: 'ri-bootstrap-line',
    title: 'Bootstrap is an open source toolkit',
    language: 'bootstrap',
    amount: 80,
  },
  {
    avatar: 'ri-vuejs-line',
    title: 'Vue.js is the Progressive JavaScript Framework',
    language: 'vue',
    amount: 65,
  },
  {
    avatar: 'ri-angularjs-line',
    title: 'Angular implements Functional Programming concepts',
    language: 'angular',
    amount: 75,
  },
  {
    avatar: 'ri-javascript-line',
    title: 'JavaScript is the programming language of the Web',
    language: 'javascript',
    amount: 70,
  },
]

const resolveStatusColor = {
  react: 'info',
  bootstrap: 'primary',
  vue: 'success',
  angular: 'error',
  javascript: 'warning',
}
<\/script>

<template>
  <VList
    lines="two"
    border
    rounded
  >
    <template
      v-for="(progress, index) of languageProgress"
      :key="progress.language"
    >
      <VListItem>
        <template #prepend>
          <VAvatar
            size="36"
            rounded
            variant="tonal"
            :icon="progress.avatar"
            :color="resolveStatusColor[progress.language]"
          />
        </template>

        <VListItemTitle>
          {{ progress.title }}
        </VListItemTitle>

        <VListItemSubtitle class="mt-2">
          <VProgressLinear
            height="6"
            rounded
            :model-value="progress.amount"
            bg-color="secondary"
            :color="resolveStatusColor[progress.language]"
          />
        </VListItemSubtitle>
      </VListItem>

      <VDivider v-if="index !== languageProgress.length - 1" />
    </template>
  </VList>
</template>
`},Le={ts:`<script lang="ts" setup>
const items = [
  {
    title: 'Cupcake sesame snaps dessert marzipan.',
    value: 1,
    props: {
      prependIcon: 'ri-dribbble-line',
      rounded: 'xl',
    },
  },
  {
    title: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    value: 2,
    props: {
      prependIcon: 'ri-facebook-circle-line',
      rounded: 'xl',
    },
  },
  {
    title: 'Bonbon macaroon gummies pie jelly',
    value: 3,
    props: {
      prependIcon: 'ri-twitter-line',
      rounded: 'xl',
    },
  },
  {
    title: 'halvah icing marshmallow',
    value: 4,
    props: {
      prependIcon: 'ri-instagram-line',
      rounded: 'xl',
    },
  },
]
<\/script>

<template>
  <VList :items="items" />
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Cupcake sesame snaps dessert marzipan.',
    value: 1,
    props: {
      prependIcon: 'ri-dribbble-line',
      rounded: 'xl',
    },
  },
  {
    title: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    value: 2,
    props: {
      prependIcon: 'ri-facebook-circle-line',
      rounded: 'xl',
    },
  },
  {
    title: 'Bonbon macaroon gummies pie jelly',
    value: 3,
    props: {
      prependIcon: 'ri-twitter-line',
      rounded: 'xl',
    },
  },
  {
    title: 'halvah icing marshmallow',
    value: 4,
    props: {
      prependIcon: 'ri-instagram-line',
      rounded: 'xl',
    },
  },
]
<\/script>

<template>
  <VList :items="items" />
</template>
`},ye={ts:`<script lang="ts" setup>
const items = [
  { text: 'Cupcake sesame snaps dessert marzipan.', icon: 'ri-instagram-line' },
  { text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.', icon: 'ri-facebook-circle-line' },
  { text: 'Bonbon macaroon gummies pie jelly', icon: 'ri-twitter-line' },
]
<\/script>

<template>
  <VList>
    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item.text"
      rounded="shaped"
    >
      <template #prepend>
        <VIcon :icon="item.icon" />
      </template>
      <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
      <VListItemTitle v-text="item.text" />
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const items = [
  {
    text: 'Cupcake sesame snaps dessert marzipan.',
    icon: 'ri-instagram-line',
  },
  {
    text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    icon: 'ri-facebook-circle-line',
  },
  {
    text: 'Bonbon macaroon gummies pie jelly',
    icon: 'ri-twitter-line',
  },
]
<\/script>

<template>
  <VList>
    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item.text"
      rounded="shaped"
    >
      <template #prepend>
        <VIcon :icon="item.icon" />
      </template>
      <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
      <VListItemTitle v-text="item.text" />
    </VListItem>
  </VList>
</template>
`},Ie={ts:`<script lang="ts" setup>
const open = ref(['Users', 'Admin'])

const admins = [
  ['Management', 'ri-group-line'],
  ['Settings', 'ri-settings-5-line'],
]

const cruds = [
  ['Create', 'ri-add-line'],
  ['Read', 'ri-file-line'],
  ['Update', 'ri-refresh-line'],
  ['Delete', 'ri-delete-bin-line'],
]
<\/script>

<template>
  <VList v-model:opened="open">
    <VListItem
      prepend-icon="ri-home-line"
      title="Home"
      value="Home"
    />

    <VListGroup value="Users">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          prepend-icon="ri-user-line"
          title="Users"
        />
      </template>

      <VListGroup value="Admin">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Admin"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in admins"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>

      <VListGroup value="Actions">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Actions"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in cruds"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>
    </VListGroup>
  </VList>
</template>
`,js:`<script setup>
const open = ref([
  'Users',
  'Admin',
])

const admins = [
  [
    'Management',
    'ri-group-line',
  ],
  [
    'Settings',
    'ri-settings-5-line',
  ],
]

const cruds = [
  [
    'Create',
    'ri-add-line',
  ],
  [
    'Read',
    'ri-file-line',
  ],
  [
    'Update',
    'ri-refresh-line',
  ],
  [
    'Delete',
    'ri-delete-bin-line',
  ],
]
<\/script>

<template>
  <VList v-model:opened="open">
    <VListItem
      prepend-icon="ri-home-line"
      title="Home"
      value="Home"
    />

    <VListGroup value="Users">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          prepend-icon="ri-user-line"
          title="Users"
        />
      </template>

      <VListGroup value="Admin">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Admin"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in admins"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>

      <VListGroup value="Actions">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Actions"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in cruds"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>
    </VListGroup>
  </VList>
</template>
`},Ae={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

const items = [
  { type: 'subheader', title: 'Today' },
  {
    prependAvatar: avatar1,
    title: 'Brunch this weekend?',
    subtitle: '<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar2,
    title: 'Summer BBQ',
    subtitle: '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar3,
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar4,
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
]
<\/script>

<template>
  <VList
    lines="three"
    :items="items"
    item-props
  >
    <template #subtitle="{ subtitle }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="subtitle" />
    </template>
  </VList>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

const items = [
  {
    type: 'subheader',
    title: 'Today',
  },
  {
    prependAvatar: avatar1,
    title: 'Brunch this weekend?',
    subtitle: '<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar2,
    title: 'Summer BBQ',
    subtitle: '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar3,
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar4,
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
]
<\/script>

<template>
  <VList
    lines="three"
    :items="items"
    item-props
  >
    <template #subtitle="{ subtitle }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="subtitle" />
    </template>
  </VList>
</template>
`},xe={ts:`<script lang="ts" setup>
const files = [
  {
    color: 'blue',
    icon: 'ri-clipboard-line',
    subtitle: 'Jan 20, 2014',
    title: 'Vacation itinerary',
  },
  {
    color: 'amber',
    icon: 'ri-hard-drive-2-line',
    subtitle: 'Jan 10, 2014',
    title: 'Kitchen remodel',
  },
]

const folders = [
  {
    subtitle: 'Jan 9, 2014',
    title: 'Photos',
  },
  {
    subtitle: 'Jan 17, 2014',
    title: 'Recipes',
  },
  {
    subtitle: 'Jan 28, 2014',
    title: 'Work',
  },
]
<\/script>

<template>
  <VList lines="two">
    <VListSubheader inset>
      Folders
    </VListSubheader>

    <VListItem
      v-for="folder in folders"
      :key="folder.title"
      :title="folder.title"
      :subtitle="folder.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="26"
            icon="ri-folder-line"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="ri-information-line"
        />
      </template>
    </VListItem>

    <VDivider inset />

    <VListSubheader inset>
      Files
    </VListSubheader>

    <VListItem
      v-for="file in files"
      :key="file.title"
      :title="file.title"
      :subtitle="file.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="26"
            :icon="file.icon"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="ri-information-line"
        />
      </template>
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const files = [
  {
    color: 'blue',
    icon: 'ri-clipboard-line',
    subtitle: 'Jan 20, 2014',
    title: 'Vacation itinerary',
  },
  {
    color: 'amber',
    icon: 'ri-hard-drive-2-line',
    subtitle: 'Jan 10, 2014',
    title: 'Kitchen remodel',
  },
]

const folders = [
  {
    subtitle: 'Jan 9, 2014',
    title: 'Photos',
  },
  {
    subtitle: 'Jan 17, 2014',
    title: 'Recipes',
  },
  {
    subtitle: 'Jan 28, 2014',
    title: 'Work',
  },
]
<\/script>

<template>
  <VList lines="two">
    <VListSubheader inset>
      Folders
    </VListSubheader>

    <VListItem
      v-for="folder in folders"
      :key="folder.title"
      :title="folder.title"
      :subtitle="folder.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="26"
            icon="ri-folder-line"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="ri-information-line"
        />
      </template>
    </VListItem>

    <VDivider inset />

    <VListSubheader inset>
      Files
    </VListSubheader>

    <VListItem
      v-for="file in files"
      :key="file.title"
      :title="file.title"
      :subtitle="file.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="26"
            :icon="file.icon"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="ri-information-line"
        />
      </template>
    </VListItem>
  </VList>
</template>
`},we={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

interface Status {
  'Online': string
  'Away': string
  'Offline': string
  'In Meeting': string
}

interface Users {
  avatar: string
  name: string
  status: keyof Status
  lastVisited: string
}

const users: Users[] = [
  {
    avatar: avatar1,
    name: 'Caroline Black',
    status: 'Online',
    lastVisited: '13 minutes ago',
  },
  {
    avatar: avatar2,
    name: 'Alfred Copeland',
    status: 'Away',
    lastVisited: '11 minutes ago',
  },
  {
    avatar: avatar3,
    name: 'Celia Schneider',
    status: 'Offline',
    lastVisited: '9 minutes ago',
  },
  {
    avatar: avatar4,
    name: 'Max Rogan',
    status: 'In Meeting',
    lastVisited: '28 minutes ago',
  },
]

const resolveStatusColor: Status = {
  'Online': 'success',
  'Away': 'warning',
  'Offline': 'secondary',
  'In Meeting': 'error',
}
<\/script>

<template>
  <VList
    lines="two"
    border
    rounded
  >
    <template
      v-for="(user, index) of users"
      :key="user.name"
    >
      <VListItem>
        <template #prepend>
          <VAvatar :image="user.avatar" />
        </template>
        <VListItemTitle>
          {{ user.name }}
        </VListItemTitle>
        <VListItemSubtitle class="mt-1">
          <VBadge
            dot
            location="start center"
            offset-x="2"
            :color="resolveStatusColor[user.status]"
            class="me-3"
          >
            <span class="ms-4">{{ user.status }}</span>
          </VBadge>

          <span class="text-xs text-disabled">{{ user.lastVisited }}</span>
        </VListItemSubtitle>

        <template #append>
          <VBtn size="small">
            Add
          </VBtn>
        </template>
      </VListItem>
      <VDivider v-if="index !== users.length - 1" />
    </template>
  </VList>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

const users = [
  {
    avatar: avatar1,
    name: 'Caroline Black',
    status: 'Online',
    lastVisited: '13 minutes ago',
  },
  {
    avatar: avatar2,
    name: 'Alfred Copeland',
    status: 'Away',
    lastVisited: '11 minutes ago',
  },
  {
    avatar: avatar3,
    name: 'Celia Schneider',
    status: 'Offline',
    lastVisited: '9 minutes ago',
  },
  {
    avatar: avatar4,
    name: 'Max Rogan',
    status: 'In Meeting',
    lastVisited: '28 minutes ago',
  },
]

const resolveStatusColor = {
  'Online': 'success',
  'Away': 'warning',
  'Offline': 'secondary',
  'In Meeting': 'error',
}
<\/script>

<template>
  <VList
    lines="two"
    border
    rounded
  >
    <template
      v-for="(user, index) of users"
      :key="user.name"
    >
      <VListItem>
        <template #prepend>
          <VAvatar :image="user.avatar" />
        </template>
        <VListItemTitle>
          {{ user.name }}
        </VListItemTitle>
        <VListItemSubtitle class="mt-1">
          <VBadge
            dot
            location="start center"
            offset-x="2"
            :color="resolveStatusColor[user.status]"
            class="me-3"
          >
            <span class="ms-4">{{ user.status }}</span>
          </VBadge>

          <span class="text-xs text-disabled">{{ user.lastVisited }}</span>
        </VListItemSubtitle>

        <template #append>
          <VBtn size="small">
            Add
          </VBtn>
        </template>
      </VListItem>
      <VDivider v-if="index !== users.length - 1" />
    </template>
  </VList>
</template>
`},Se=u("code",null,"v-list",-1),ke=u("code",null,"v-list-item",-1),Ce=u("code",null,"rounded",-1),je=u("code",null,"density",-1),Be=u("code",null,"default",-1),Te=u("code",null,"comfortable",-1),De=u("code",null,"compact",-1),Je=u("code",null,"nav",-1),Pe=u("code",null,"v-list-item",-1),Ue=u("code",null,"three-line",-1),Ge=u("code",null,"v-list-group",-1),Me=u("code",null,"v-list-group",-1),Re=u("code",null,"v-list-item",-1),pt=h({__name:"list",setup(v){return(n,r)=>{const d=ge,s=X,i=ve,p=de,I=me,A=ce,H=oe,O=re,z=le,F=se,$=te,N=ee;return l(),m(Z,{class:"match-height"},{default:t(()=>[e(g,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Basic","no-padding":"",code:he},{default:t(()=>[e(o,null,{default:t(()=>[Se,a(" component can contain an avatar, content, actions and much more.")]),_:1}),e(o,null,{default:t(()=>[e(d)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Rounded","no-padding":"",code:Le},{default:t(()=>[e(o,null,{default:t(()=>[a("You can make "),ke,a(" rounded using "),Ce,a(" prop.")]),_:1}),e(o,null,{default:t(()=>[e(i)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Density",code:Ve,"no-padding":""},{default:t(()=>[e(o,null,{default:t(()=>[a("Use "),je,a(" prop to adjusts the spacing within the component. Available options are: "),Be,a(", "),Te,a(", and "),De,a(".")]),_:1}),e(o,null,{default:t(()=>[e(p)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Nav","no-padding":"",code:be},{default:t(()=>[e(o,null,{default:t(()=>[a("Lists can receive an alternative "),Je,a(" styling that reduces the width "),Pe,a(" takes up as well as adding a border radius.")]),_:1}),e(o,null,{default:t(()=>[e(I)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Action and item group","no-padding":"",code:fe},{default:t(()=>[e(o,null,{default:t(()=>[a("A "),Ue,a(" list with actions. Utilizing "),Ge,a(", easily connect actions to your tiles.")]),_:1}),e(o,null,{default:t(()=>[e(A)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Sub Group","no-padding":"",code:Ie},{default:t(()=>[e(o,null,{default:t(()=>[a(" Using the "),Me,a(" component you can create up to 2 levels in depth using the sub-group prop. ")]),_:1}),e(o,null,{default:t(()=>[e(H)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Two lines and subheader","no-padding":"",code:xe},{default:t(()=>[e(o,null,{default:t(()=>[a("Lists can contain subheaders, dividers, and can contain 1 or more lines. The subtitle will overflow with ellipsis if it extends past one line.")]),_:1}),e(o,null,{default:t(()=>[e(O)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Three Line","no-padding":"",code:Ae},{default:t(()=>[e(o,null,{default:t(()=>[a("For three line lists, the subtitle will clamp vertically at 2 lines and then ellipsis. This feature uses line-clamp and is not supported in all browsers.")]),_:1}),e(o,null,{default:t(()=>[e(z)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"User List","no-padding":"",code:we},{default:t(()=>[e(o,null,{default:t(()=>[e(F)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Progress List","no-padding":"",code:_e},{default:t(()=>[e(o,null,{default:t(()=>[e($)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Shaped","no-padding":"",code:ye},{default:t(()=>[e(o,null,{default:t(()=>[a(" Shaped lists have rounded borders on one side of the "),Re,a(". ")]),_:1}),e(o,null,{default:t(()=>[e(N)]),_:1})]),_:1},8,["code"])]),_:1})]),_:1})}}});export{pt as default};
