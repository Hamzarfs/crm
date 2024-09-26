import{a as l,V}from"./VTabs-CdfSjKKr.js";import{d as I,r as h,w as z,o as u,c as d,b as e,f as t,F as p,i as g,n as m,g as k,p as s,v as w,aG as T,e as o,ai as x,a0 as W}from"./main-FCzYu4Z5.js";import{a as f,V as y}from"./VWindowItem-Dprw39Uf.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as b,V as P}from"./VRow-DcbkzY-u.js";import{_ as O}from"./AppCardCode.vue_vue_type_style_index_0_lang-ChisEB8j.js";import"./forwardRefs-C-GTDzx5.js";import"./easing-CjukEv2V.js";import"./VSlideGroup-CrEC992E.js";import"./scopeId-C8kA2Rpd.js";import"./lazy-s9MkjEdz.js";import"./ssrBoot-CaII-3XN.js";import"./VImg-CJF-w0vk.js";/* empty css              */import"./vue3-perfect-scrollbar-gC16KFl8.js";import"./VCard-Do568HRS.js";import"./VAvatar-CP8SEjMm.js";import"./VDivider-knA9H03k.js";const U={class:"text-center mt-9"},R=I({__name:"DemoTabsDynamic",setup(v){const a=h(3),r=h(0);return z(a,i=>{r.value=i-1}),(i,n)=>(u(),d(p,null,[e(V,{modelValue:m(r),"onUpdate:modelValue":n[0]||(n[0]=c=>T(r)?r.value=c:null)},{default:t(()=>[(u(!0),d(p,null,g(m(a),c=>(u(),k(l,{key:c,value:c},{default:t(()=>[s(" Tab "+w(c),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),o("div",U,[e(x,{disabled:!m(a),variant:"text",onClick:n[1]||(n[1]=c=>a.value--)},{default:t(()=>[s(" Remove Tab ")]),_:1},8,["disabled"]),e(x,{variant:"text",onClick:n[2]||(n[2]=c=>a.value++)},{default:t(()=>[s(" Add Tab ")]),_:1})])],64))}}),E={class:"text-center"},M="Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.",H=I({__name:"DemoTabsProgrammaticNavigation",setup(v){const a=h(1),r=["Appetizers","Entrees","Deserts","Cocktails"],i=r.length,n=()=>{a.value!==1&&(a.value-=1)},c=()=>{a.value!==i&&(a.value+=1)};return(D,q)=>(u(),d(p,null,[e(V,{modelValue:m(a),"onUpdate:modelValue":q[0]||(q[0]=_=>T(a)?a.value=_:null),grow:""},{default:t(()=>[(u(!0),d(p,null,g(r.length,_=>(u(),k(l,{key:_,value:_},{default:t(()=>[s(w(r[_-1]),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(y,{modelValue:m(a),"onUpdate:modelValue":q[1]||(q[1]=_=>T(a)?a.value=_:null),class:"mt-5"},{default:t(()=>[(u(!0),d(p,null,g(r.length,_=>(u(),k(f,{key:_,value:_},{default:t(()=>[s(w(M))]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),o("div",E,[e(x,{variant:"text",disabled:m(a)===1,onClick:n},{default:t(()=>[s(" Previous ")]),_:1},8,["disabled"]),e(x,{variant:"text",disabled:m(a)===m(i),onClick:c},{default:t(()=>[s(" Next ")]),_:1},8,["disabled"])])],64))}}),G="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.",L=I({__name:"DemoTabsGrow",setup(v){const a=h("Appetizers"),r=["Appetizers","Entrees","Deserts","Cocktails"];return(i,n)=>(u(),d(p,null,[e(V,{modelValue:m(a),"onUpdate:modelValue":n[0]||(n[0]=c=>T(a)?a.value=c:null),grow:""},{default:t(()=>[(u(),d(p,null,g(r,c=>e(l,{key:c,value:c},{default:t(()=>[s(w(c),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(y,{modelValue:m(a),"onUpdate:modelValue":n[1]||(n[1]=c=>T(a)?a.value=c:null),class:"mt-6"},{default:t(()=>[(u(),d(p,null,g(r,c=>e(f,{key:c,value:c},{default:t(()=>[s(w(G))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])],64))}}),J={};function K(v,a){return u(),k(V,{"fixed-tabs":""},{default:t(()=>[e(l,null,{default:t(()=>[s(" Fixed Tab 1 ")]),_:1}),e(l,null,{default:t(()=>[s(" Fixed Tab 2 ")]),_:1}),e(l,null,{default:t(()=>[s(" Fixed Tab 3 ")]),_:1}),e(l,null,{default:t(()=>[s(" Fixed Tab 4 ")]),_:1})]),_:1})}const Q=C(J,[["render",K]]),X={};function Y(v,a){return u(),k(V,{"next-icon":"ri-arrow-right-line","prev-icon":"ri-arrow-left-line","show-arrows":""},{default:t(()=>[(u(),d(p,null,g(10,r=>e(l,{key:r},{default:t(()=>[s(" Item "+w(r),1)]),_:2},1024)),64))]),_:1})}const Z=C(X,[["render",Y]]),ee={};function te(v,a){return u(),k(V,{"show-arrows":""},{default:t(()=>[(u(),d(p,null,g(10,r=>e(l,{key:r,value:r},{default:t(()=>[s(" Item "+w(r),1)]),_:2},1032,["value"])),64))]),_:1})}const ae=C(ee,[["render",te]]),se={};function ne(v,a){return u(),d(p,null,[e(V,null,{default:t(()=>[e(l,null,{default:t(()=>[s("Home")]),_:1}),e(l,null,{default:t(()=>[s("Service")]),_:1}),e(l,null,{default:t(()=>[s("Account")]),_:1})]),_:1}),e(V,{"align-tabs":"center"},{default:t(()=>[e(l,null,{default:t(()=>[s("Home")]),_:1}),e(l,null,{default:t(()=>[s("Service")]),_:1}),e(l,null,{default:t(()=>[s("Account")]),_:1})]),_:1}),e(V,{"align-tabs":"end"},{default:t(()=>[e(l,null,{default:t(()=>[s("Home")]),_:1}),e(l,null,{default:t(()=>[s("Service")]),_:1}),e(l,null,{default:t(()=>[s("Account")]),_:1})]),_:1})],64)}const oe=C(se,[["render",ne]]),ie=o("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),le=o("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio. ",-1),ue=o("p",null," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. ",-1),re=o("p",{class:"mb-0"}," Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ",-1),ce=o("p",null," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ",-1),me=o("p",{class:"mb-0"}," Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis. ",-1),de=I({__name:"DemoTabsVerticalPill",setup(v){const a=h(0);return(r,i)=>(u(),k(P,null,{default:t(()=>[e(b,{cols:"12",sm:"4"},{default:t(()=>[e(V,{modelValue:m(a),"onUpdate:modelValue":i[0]||(i[0]=n=>T(a)?a.value=n:null),direction:"vertical",class:"v-tabs-pill"},{default:t(()=>[e(l,{"prepend-icon":"ri-user-line"},{default:t(()=>[s(" Option 1 ")]),_:1}),e(l,{"prepend-icon":"ri-lock-line"},{default:t(()=>[s(" Option 2 ")]),_:1}),e(l,{"prepend-icon":"ri-rfid-line"},{default:t(()=>[s(" Option 3 ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(b,{cols:"12",sm:"8"},{default:t(()=>[e(y,{modelValue:m(a),"onUpdate:modelValue":i[1]||(i[1]=n=>T(a)?a.value=n:null)},{default:t(()=>[e(f,null,{default:t(()=>[ie,le]),_:1}),e(f,null,{default:t(()=>[ue,re]),_:1}),e(f,null,{default:t(()=>[ce,me]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),pe=o("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),be=o("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio. ",-1),Te=o("p",null," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. ",-1),Ve=o("p",{class:"mb-0"}," Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ",-1),ve=o("p",null," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ",-1),_e=o("p",{class:"mb-0"}," Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis. ",-1),fe=I({__name:"DemoTabsVertical",setup(v){const a=h(0);return(r,i)=>(u(),k(P,null,{default:t(()=>[e(b,{cols:"12",sm:"4"},{default:t(()=>[e(V,{modelValue:m(a),"onUpdate:modelValue":i[0]||(i[0]=n=>T(a)?a.value=n:null),direction:"vertical"},{default:t(()=>[e(l,{"prepend-icon":"ri-user-line"},{default:t(()=>[s(" Option 1 ")]),_:1}),e(l,{"prepend-icon":"ri-lock-line"},{default:t(()=>[s(" Option 2 ")]),_:1}),e(l,{"prepend-icon":"ri-rfid-line"},{default:t(()=>[s(" Option 3 ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(b,{cols:"12",sm:"8"},{default:t(()=>[e(y,{modelValue:m(a),"onUpdate:modelValue":i[1]||(i[1]=n=>T(a)?a.value=n:null)},{default:t(()=>[e(f,null,{default:t(()=>[pe,be]),_:1}),e(f,null,{default:t(()=>[Te,Ve]),_:1}),e(f,null,{default:t(()=>[ve,_e]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),ge=o("span",null,"Recent",-1),we=o("span",null,"Favorites",-1),he=o("span",null,"Nearby",-1),ke="Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.",Ie=I({__name:"DemoTabsStacked",setup(v){const a=h("tab-1");return(r,i)=>(u(),d(p,null,[e(V,{modelValue:m(a),"onUpdate:modelValue":i[0]||(i[0]=n=>T(a)?a.value=n:null),grow:"",stacked:""},{default:t(()=>[e(l,{value:"tab-1"},{default:t(()=>[e(W,{icon:"ri-phone-line",class:"mb-2"}),ge]),_:1}),e(l,{value:"tab-2"},{default:t(()=>[e(W,{icon:"ri-heart-line",class:"mb-2"}),we]),_:1}),e(l,{value:"tab-3"},{default:t(()=>[e(W,{icon:"ri-account-box-line",class:"mb-2"}),he]),_:1})]),_:1},8,["modelValue"]),e(y,{modelValue:m(a),"onUpdate:modelValue":i[1]||(i[1]=n=>T(a)?a.value=n:null),class:"mt-5"},{default:t(()=>[(u(),d(p,null,g(3,n=>e(f,{key:n,value:`tab-${n}`},{default:t(()=>[s(w(ke))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])],64))}}),ye="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.",qe=I({__name:"DemoTabsBasicPill",setup(v){const a=h(0);return(r,i)=>(u(),d(p,null,[e(V,{modelValue:m(a),"onUpdate:modelValue":i[0]||(i[0]=n=>T(a)?a.value=n:null),class:"v-tabs-pill"},{default:t(()=>[e(l,null,{default:t(()=>[s("Tab One")]),_:1}),e(l,null,{default:t(()=>[s("Tab Two")]),_:1}),e(l,null,{default:t(()=>[s("Tab Three")]),_:1})]),_:1},8,["modelValue"]),e(y,{modelValue:m(a),"onUpdate:modelValue":i[1]||(i[1]=n=>T(a)?a.value=n:null),class:"mt-5"},{default:t(()=>[(u(),d(p,null,g(3,n=>e(f,{key:n},{default:t(()=>[s(w(ye))]),_:2},1024)),64))]),_:1},8,["modelValue"])],64))}}),xe="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.",Ce=I({__name:"DemoTabsBasic",setup(v){const a=h(0);return(r,i)=>(u(),d(p,null,[e(V,{modelValue:m(a),"onUpdate:modelValue":i[0]||(i[0]=n=>T(a)?a.value=n:null)},{default:t(()=>[e(l,null,{default:t(()=>[s("Tab One")]),_:1}),e(l,null,{default:t(()=>[s("Tab Two")]),_:1}),e(l,null,{default:t(()=>[s("Tab Three")]),_:1})]),_:1},8,["modelValue"]),e(y,{modelValue:m(a),"onUpdate:modelValue":i[1]||(i[1]=n=>T(a)?a.value=n:null),class:"mt-5"},{default:t(()=>[(u(),d(p,null,g(3,n=>e(f,{key:n},{default:t(()=>[s(w(xe))]),_:2},1024)),64))]),_:1},8,["modelValue"])],64))}}),We={ts:`<template>
  <!-- Default -->
  <VTabs>
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- Center -->
  <VTabs align-tabs="center">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- End -->
  <VTabs align-tabs="end">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>
</template>
`,js:`<template>
  <!-- Default -->
  <VTabs>
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- Center -->
  <VTabs align-tabs="center">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- End -->
  <VTabs align-tabs="end">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>
</template>
`},Pe={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`},De={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`},Se={ts:`<template>
  <VTabs
    next-icon="ri-arrow-right-line"
    prev-icon="ri-arrow-left-line"
    show-arrows
  >
    <VTab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`,js:`<template>
  <VTabs
    next-icon="ri-arrow-right-line"
    prev-icon="ri-arrow-left-line"
    show-arrows
  >
    <VTab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`},je={ts:`<script lang="ts" setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab
      v-for="n in totalTabs"
      :key="n"
      :value="n"
    >
      Tab {{ n }}
    </VTab>
  </VTabs>

  <!-- buttons -->
  <div class="text-center mt-9">
    <VBtn
      :disabled="!totalTabs"
      variant="text"
      @click="totalTabs--"
    >
      Remove Tab
    </VBtn>

    <VBtn
      variant="text"
      @click="totalTabs++"
    >
      Add Tab
    </VBtn>
  </div>
</template>
`,js:`<script setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab
      v-for="n in totalTabs"
      :key="n"
      :value="n"
    >
      Tab {{ n }}
    </VTab>
  </VTabs>

  <!-- buttons -->
  <div class="text-center mt-9">
    <VBtn
      :disabled="!totalTabs"
      variant="text"
      @click="totalTabs--"
    >
      Remove Tab
    </VBtn>

    <VBtn
      variant="text"
      @click="totalTabs++"
    >
      Add Tab
    </VBtn>
  </div>
</template>
`},Fe={ts:`<template>
  <VTabs fixed-tabs>
    <VTab>
      Fixed Tab 1
    </VTab>
    <VTab>
      Fixed Tab 2
    </VTab>
    <VTab>
      Fixed Tab 3
    </VTab>
    <VTab>
      Fixed Tab 4
    </VTab>
  </VTabs>
</template>
`,js:`<template>
  <VTabs fixed-tabs>
    <VTab>
      Fixed Tab 1
    </VTab>
    <VTab>
      Fixed Tab 2
    </VTab>
    <VTab>
      Fixed Tab 3
    </VTab>
    <VTab>
      Fixed Tab 4
    </VTab>
  </VTabs>
</template>
`},$e={ts:`<script lang="ts" setup>
const currentTab = ref('Appetizers')
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-6"
  >
    <VWindowItem
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref('Appetizers')

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-6"
  >
    <VWindowItem
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`},Be={ts:`<template>
  <VTabs show-arrows>
    <VTab
      v-for="i in 10"
      :key="i"
      :value="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`,js:`<template>
  <VTabs show-arrows>
    <VTab
      v-for="i in 10"
      :key="i"
      :value="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`},Ne={ts:`<script lang="ts" setup>
const currentTab = ref(1)
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ items[item - 1] }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>

  <div class="text-center">
    <VBtn
      variant="text"
      :disabled="currentTab === 1"
      @click="preTab"
    >
      Previous
    </VBtn>

    <VBtn
      variant="text"
      :disabled="currentTab === totalTabs"
      @click="nextTab"
    >
      Next
    </VBtn>
  </div>
</template>
`,js:`<script setup>
const currentTab = ref(1)

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ items[item - 1] }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>

  <div class="text-center">
    <VBtn
      variant="text"
      :disabled="currentTab === 1"
      @click="preTab"
    >
      Previous
    </VBtn>

    <VBtn
      variant="text"
      :disabled="currentTab === totalTabs"
      @click="nextTab"
    >
      Next
    </VBtn>
  </div>
</template>
`},Ae={ts:`<script lang="ts" setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
    stacked
  >
    <VTab value="tab-1">
      <VIcon
        icon="ri-phone-line"
        class="mb-2"
      />
      <span>Recent</span>
    </VTab>

    <VTab value="tab-2">
      <VIcon
        icon="ri-heart-line"
        class="mb-2"
      />
      <span>Favorites</span>
    </VTab>

    <VTab value="tab-3">
      <VIcon
        icon="ri-account-box-line"
        class="mb-2"
      />
      <span>Nearby</span>
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="i in 3"
      :key="i"
      :value="\`tab-\${i}\`"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
    stacked
  >
    <VTab value="tab-1">
      <VIcon
        icon="ri-phone-line"
        class="mb-2"
      />
      <span>Recent</span>
    </VTab>

    <VTab value="tab-2">
      <VIcon
        icon="ri-heart-line"
        class="mb-2"
      />
      <span>Favorites</span>
    </VTab>

    <VTab value="tab-3">
      <VIcon
        icon="ri-account-box-line"
        class="mb-2"
      />
      <span>Nearby</span>
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="i in 3"
      :key="i"
      :value="\`tab-\${i}\`"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`},ze={ts:`<script setup lang="ts">
const currentTab = ref(0)
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="4"
    >
      <VTabs
        v-model="currentTab"
        direction="vertical"
      >
        <VTab prepend-icon="ri-user-line">
          Option 1
        </VTab>

        <VTab prepend-icon="ri-lock-line">
          Option 2
        </VTab>

        <VTab prepend-icon="ri-rfid-line">
          Option 3
        </VTab>
      </VTabs>
    </VCol>

    <VCol
      cols="12"
      sm="8"
    >
      <VWindow v-model="currentTab">
        <VWindowItem>
          <p>
            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
          </p>

          <p class="mb-0">
            Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
          </p>

          <p class="mb-0">
            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
          </p>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="4"
    >
      <VTabs
        v-model="currentTab"
        direction="vertical"
      >
        <VTab prepend-icon="ri-user-line">
          Option 1
        </VTab>

        <VTab prepend-icon="ri-lock-line">
          Option 2
        </VTab>

        <VTab prepend-icon="ri-rfid-line">
          Option 3
        </VTab>
      </VTabs>
    </VCol>

    <VCol
      cols="12"
      sm="8"
    >
      <VWindow v-model="currentTab">
        <VWindowItem>
          <p>
            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
          </p>

          <p class="mb-0">
            Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
          </p>

          <p class="mb-0">
            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
          </p>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
`},Oe={ts:`<script setup lang="ts">
const currentTab = ref(0)
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="4"
    >
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab prepend-icon="ri-user-line">
          Option 1
        </VTab>

        <VTab prepend-icon="ri-lock-line">
          Option 2
        </VTab>

        <VTab prepend-icon="ri-rfid-line">
          Option 3
        </VTab>
      </VTabs>
    </VCol>

    <VCol
      cols="12"
      sm="8"
    >
      <VWindow v-model="currentTab">
        <VWindowItem>
          <p>
            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
          </p>

          <p class="mb-0">
            Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
          </p>

          <p class="mb-0">
            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
          </p>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="4"
    >
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab prepend-icon="ri-user-line">
          Option 1
        </VTab>

        <VTab prepend-icon="ri-lock-line">
          Option 2
        </VTab>

        <VTab prepend-icon="ri-rfid-line">
          Option 3
        </VTab>
      </VTabs>
    </VCol>

    <VCol
      cols="12"
      sm="8"
    >
      <VWindow v-model="currentTab">
        <VWindowItem>
          <p>
            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
          </p>

          <p class="mb-0">
            Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
          </p>

          <p class="mb-0">
            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
          </p>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
`},Ue=o("p",null,[s("The "),o("code",null,"v-tabs"),s(" component is used for hiding content behind a selectable item.")],-1),Re=o("p",null,[s("Use our custom class "),o("code",null,".v-tabs-pill"),s(" along with "),o("code",null,"v-tabs"),s(" component to style pill tabs.")],-1),Ee=o("p",null,[s("Using "),o("code",null,"stacked"),s(" prop you can have buttons that use both icons and text.")],-1),Me=o("p",null,[s("The "),o("code",null,"vertical"),s(" prop allows for "),o("code",null,"v-tab"),s(" components to stack vertically.")],-1),He=o("p",null,"Use our custom class .v-tabs-pill along with v-tabs component to style pill tabs.",-1),Ge=o("p",null,[s("Use "),o("code",null,"align-tabs"),s(" prop to change the tabs alignment.")],-1),Le=o("p",null,"If the tab items overflow their container, pagination controls will appear on desktop.",-1),Je=o("p",null,[o("code",null,"prev-icon"),s(" and "),o("code",null,"next-icon"),s(" props can be used for applying custom pagination icons.")],-1),Ke=o("p",null,[s("The "),o("code",null,"fixed-tabs"),s(" prop forces "),o("code",null,"v-tab"),s(" to take up all available space up to the maximum width (300px).")],-1),Qe=o("p",null,[s("The "),o("code",null,"grow"),s(" prop will make the tab items take up all available space with no limit.")],-1),Xe=o("p",null,[s("Tabs can be dynamically added and removed. This allows you to update to any number and the "),o("code",null,"v-tabs"),s(" component will react.")],-1),Vt=I({__name:"tabs",setup(v){return(a,r)=>{const i=Ce,n=O,c=qe,D=Ie,q=fe,_=de,S=oe,j=ae,F=Z,$=Q,B=L,N=H,A=R;return u(),k(P,{class:"match-height"},{default:t(()=>[e(b,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Basic",code:Pe},{default:t(()=>[Ue,e(i)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Basic Pill",code:De},{default:t(()=>[Re,e(c)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Stacked",code:Ae},{default:t(()=>[Ee,e(D)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Vertical",code:ze},{default:t(()=>[Me,e(q)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Vertical Pill",code:Oe},{default:t(()=>[He,e(_)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Alignment",code:We},{default:t(()=>[Ge,e(S)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Pagination",code:Be},{default:t(()=>[Le,e(j)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Custom Icons",code:Se},{default:t(()=>[Je,e(F)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12"},{default:t(()=>[e(n,{title:"Fixed",code:Fe},{default:t(()=>[Ke,e($)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12"},{default:t(()=>[e(n,{title:"Grow",code:$e},{default:t(()=>[Qe,e(B)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Programmatic Navigation",code:Ne},{default:t(()=>[e(N)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Dynamic",code:je},{default:t(()=>[Xe,e(A)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Vt as default};
