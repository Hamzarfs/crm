import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as u,c as g,b as e,aR as t,d as y,r as _,n as v,aG as h,f as l,e as r,v as P,g as L,E as B,aT as $,w as M,p as a}from"./main-DoQFmMsa.js";import{_ as x}from"./AppCardCode.vue_vue_type_style_index_0_lang-CmwJwIsY.js";import{a as p,V as I}from"./VRow-CBIZXy0V.js";import"./vue3-perfect-scrollbar-Dah25qMm.js";import"./VCard-CvMXks-w.js";import"./VAvatar-A7ztkq2k.js";import"./VImg-BvvxBpKO.js";import"./VDivider-CiGpRMeQ.js";/* empty css              */const D={},U={class:"demo-space-y"};function R(m,o){return u(),g("div",U,[e(t,{color:"rgb(var(--v-theme-primary))","model-value":"75",striped:""}),e(t,{color:"rgb(var(--v-theme-success))","model-value":"55",striped:""}),e(t,{color:"rgb(var(--v-theme-warning))","model-value":"35",striped:""})])}const T=f(D,[["render",R]]),j={class:"demo-space-y"},C=y({__name:"DemoProgressLinearSlots",setup(m){const o=_(20),c=_(33),d=_(78);return(n,i)=>(u(),g("div",j,[e(t,{modelValue:v(d),"onUpdate:modelValue":i[0]||(i[0]=s=>h(d)?d.value=s:null),color:"primary",height:"8"},null,8,["modelValue"]),e(t,{modelValue:v(o),"onUpdate:modelValue":i[1]||(i[1]=s=>h(o)?o.value=s:null),color:"primary",height:"20"},{default:l(({value:s})=>[r("span",null,P(Math.ceil(s))+"%",1)]),_:1},8,["modelValue"]),e(t,{modelValue:v(c),"onUpdate:modelValue":i[2]||(i[2]=s=>h(c)?c.value=s:null),height:"20",color:"primary"},{default:l(()=>[r("span",null,P(Math.ceil(v(c)))+"%",1)]),_:1},8,["modelValue"])]))}}),S={},N={class:"demo-space-y"};function E(m,o){return u(),g("div",N,[e(t,{"model-value":"78",height:"8",color:"primary",rounded:""}),e(t,{"model-value":"20",color:"primary",height:"20",rounded:""}),e(t,{"model-value":"33",height:"20",color:"primary",rounded:""})])}const A=f(S,[["render",E]]),G={};function Y(m,o){return u(),L(t,{color:"primary",indeterminate:"",reverse:""})}const q=f(G,[["render",Y]]),z={};function F(m,o){return u(),L(t,{indeterminate:"",color:"primary"})}const H=f(z,[["render",F]]),J={class:"demo-space-y"},K=y({__name:"DemoProgressLinearBuffering",setup(m){const o=_(10),c=_(20),d=_(),n=()=>{clearInterval(d.value),d.value=setInterval(()=>{o.value+=Math.random()*10+5,c.value+=Math.random()*10+6},2e3)};return B(n),$(()=>{clearInterval(d.value)}),M(o,()=>{if(o.value<100)return!1;o.value=0,c.value=10,n()}),(i,s)=>(u(),g("div",J,[e(t,{modelValue:v(o),"onUpdate:modelValue":s[0]||(s[0]=V=>h(o)?o.value=V:null),color:"primary",height:"8","buffer-value":v(c)},null,8,["modelValue","buffer-value"])]))}}),O={},Q={class:"demo-space-y"};function W(m,o){return u(),g("div",Q,[e(t,{"model-value":"15","bg-color":"primary",color:"primary"}),e(t,{"model-value":"30","bg-color":"secondary",color:"secondary"}),e(t,{"model-value":"45","bg-color":"success",color:"success"})])}const X=f(O,[["render",W]]),Z={ts:`<script setup lang="ts">
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)

  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)

onBeforeUnmount(() => {
  clearInterval(interval.value)
})

watch(modelValue, () => {
  if (modelValue.value < 100)
    return false

  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      height="8"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`,js:`<script setup>
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)
  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
watch(modelValue, () => {
  if (modelValue.value < 100)
    return false
  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      height="8"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`},ee={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      bg-color="primary"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      bg-color="secondary"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      bg-color="success"
      color="success"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      bg-color="primary"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      bg-color="secondary"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      bg-color="success"
      color="success"
    />
  </div>
</template>
`},re={ts:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`,js:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`},oe={ts:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`,js:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`},le={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      rounded
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      rounded
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      rounded
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      rounded
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      rounded
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      rounded
    />
  </div>
</template>
`},ae={ts:`<script setup lang="ts">
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <span>{{ Math.ceil(value) }}%</span>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <span>{{ Math.ceil(knowledge) }}%</span>
    </VProgressLinear>
  </div>
</template>
`,js:`<script setup>
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <span>{{ Math.ceil(value) }}%</span>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <span>{{ Math.ceil(knowledge) }}%</span>
    </VProgressLinear>
  </div>
</template>
`},te={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      color="rgb(var(--v-theme-primary))"
      model-value="75"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-success))"
      model-value="55"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-warning))"
      model-value="35"
      striped
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      color="rgb(var(--v-theme-primary))"
      model-value="75"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-success))"
      model-value="55"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-warning))"
      model-value="35"
      striped
    />
  </div>
</template>
`},se=r("p",null,[a("Use the props "),r("code",null,"color"),a(" and "),r("code",null,"background-color"),a(" to set colors.")],-1),ne=r("p",null,[a("The primary value is controlled by "),r("code",null,"v-model"),a(", whereas the buffer is controlled by the "),r("code",null,"buffer-value"),a(" prop.")],-1),ce=r("p",null,[a("for continuously animating progress bar,use prop "),r("code",null,"indeterminate"),a(". This indicates continuous process. ")],-1),de=r("p",null,[a("Use prop "),r("code",null,"reverse"),a(" to animate continuously in reverse direction. The component also has RTL support.")],-1),ie=r("p",null,[a("The "),r("code",null," rounded "),a(" prop is used to apply a border radius to the v-progress-linear component.")],-1),ue=r("p",null,[a("we can bind user input using "),r("code",null,"v-model"),a(".You can also use the default slot for the same.")],-1),me=r("p",null,[a(" The "),r("code",null,"striped"),a(" prop is used to apply striped background.")],-1),be=y({__name:"progress-linear",setup(m){return(o,c)=>{const d=X,n=x,i=K,s=H,V=q,b=A,w=C,k=T;return u(),L(I,{class:"match-height"},{default:l(()=>[e(p,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Color",code:ee},{default:l(()=>[se,e(d)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Buffering",code:Z},{default:l(()=>[ne,e(i)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Indeterminate",code:re},{default:l(()=>[ce,e(s)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Reversed",code:oe},{default:l(()=>[de,e(V)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Rounded",code:le},{default:l(()=>[ie,e(b)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Slots",code:ae},{default:l(()=>[ue,e(w)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Striped",code:te},{default:l(()=>[me,e(k)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{be as default};
