import{d as f,r as V,Z as z,o as _,c as S,e as o,v as T,n,b as e,f as t,g as b,H as D,x as L,ct as O,a0 as E,ai as y,aG as m,F as j,P as G,Q as Y,p as c}from"./main-FCzYu4Z5.js";import{V as N}from"./VAvatar-CP8SEjMm.js";import{V as p}from"./VSlider-CWbzQZDv.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as H}from"./VImg-CJF-w0vk.js";import{a as u,V as h}from"./VRow-DcbkzY-u.js";import{V as w}from"./VTextField-JeOZvJkP.js";import{_ as Q}from"./AppCardCode.vue_vue_type_style_index_0_lang-ChisEB8j.js";import"./VSliderTrack-sh8quomD.js";import"./VInput-B2EWUdv0.js";import"./InputIcon-wsmb1BjU.js";/* empty css              *//* empty css                   */import"./VCounter-fwUCpOxO.js";import"./VField-Dk2Ak1ql.js";import"./easing-CjukEv2V.js";import"./forwardRefs-C-GTDzx5.js";import"./vue3-perfect-scrollbar-gC16KFl8.js";import"./VCard-Do568HRS.js";import"./VDivider-knA9H03k.js";const Z=v=>(G("data-v-a1e5eb84"),v=v(),Y(),v),q={class:"d-flex justify-space-between ma-4"},J=["textContent"],K=Z(()=>o("span",{class:"subheading font-weight-light me-1"},"BPM",-1)),$=40,R=218,W=f({__name:"DemoSliderAppendAndPrepend",setup(v){const l=V(40),a=V(!1),i=z(()=>l.value<100?"primary":l.value<125?"success":l.value<140?"info":l.value<175?"warning":"error"),d=z(()=>`${60/l.value}s`),s=()=>{l.value>$&&(l.value-=1)},r=()=>{l.value<R&&(l.value+=1)};return(g,x)=>(_(),S(j,null,[o("div",q,[o("div",null,[o("span",{class:"text-6xl font-weight-light",textContent:T(n(l))},null,8,J),K,e(O,null,{default:t(()=>[n(a)?(_(),b(N,{key:0,color:n(i),style:D({animationDuration:n(d)}),class:"mb-1 v-avatar--metronome",size:"12"},null,8,["color","style"])):L("",!0)]),_:1})]),o("div",null,[e(y,{color:n(i),icon:"",elevation:"0",onClick:x[0]||(x[0]=C=>a.value=!n(a))},{default:t(()=>[e(E,{size:"large",icon:n(a)?"ri-pause-line":"ri-play-line"},null,8,["icon"])]),_:1},8,["color"])])]),e(p,{modelValue:n(l),"onUpdate:modelValue":x[1]||(x[1]=C=>m(l)?l.value=C:null),color:n(i),step:1,min:$,max:R,"track-color":"secondary"},{prepend:t(()=>[e(y,{size:"small",variant:"text",icon:"ri-subtract-line",color:n(i),onClick:s},null,8,["color"])]),append:t(()=>[e(y,{size:"small",variant:"text",icon:"ri-add-line",color:n(i),onClick:r},null,8,["color"])]),_:1},8,["modelValue","color"])],64))}}),X=k(W,[["__scopeId","data-v-a1e5eb84"]]),ee={class:"d-flex align-center justify-space-between"},le=o("span",{class:"me-1"},"R",-1),te={class:"d-flex align-center justify-space-between"},oe=o("span",{class:"me-1"},"G",-1),se={class:"d-flex align-center justify-space-between"},ae=o("span",{class:"me-1"},"B",-1),ie=f({__name:"DemoSliderAppendTextField",setup(v){const l=V(161),a=V(105),i=V(225);return(d,s)=>(_(),S(j,null,[e(H,{style:D({background:`rgb(${n(l)}, ${n(a)}, ${n(i)})`}),height:"150px"},null,8,["style"]),e(h,{class:"mt-5"},{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[o("div",ee,[le,e(p,{modelValue:n(l),"onUpdate:modelValue":s[0]||(s[0]=r=>m(l)?l.value=r:null),max:255,step:1},null,8,["modelValue"]),e(w,{modelValue:n(l),"onUpdate:modelValue":s[1]||(s[1]=r=>m(l)?l.value=r:null),type:"number",placeholder:"10",max:255,style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])]),_:1}),e(u,{cols:"12"},{default:t(()=>[o("div",te,[oe,e(p,{modelValue:n(a),"onUpdate:modelValue":s[2]||(s[2]=r=>m(a)?a.value=r:null),max:255,step:1},null,8,["modelValue"]),e(w,{modelValue:n(a),"onUpdate:modelValue":s[3]||(s[3]=r=>m(a)?a.value=r:null),type:"number",placeholder:"20",max:255,style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])]),_:1}),e(u,{cols:"12"},{default:t(()=>[o("div",se,[ae,e(p,{modelValue:n(i),"onUpdate:modelValue":s[4]||(s[4]=r=>m(i)?i.value=r:null),max:255,step:1},null,8,["modelValue"]),e(w,{modelValue:n(i),"onUpdate:modelValue":s[5]||(s[5]=r=>m(i)?i.value=r:null),type:"number",placeholder:"30",max:255,style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])]),_:1})]),_:1})],64))}}),ne=f({__name:"DemoSliderVertical",setup(v){const l=V(10);return(a,i)=>(_(),b(p,{modelValue:n(l),"onUpdate:modelValue":i[0]||(i[0]=d=>m(l)?l.value=d:null),direction:"vertical"},null,8,["modelValue"]))}}),re=o("div",{class:"text-caption"}," Show ticks when using slider ",-1),de=o("div",{class:"text-caption"}," Always show ticks ",-1),ce=o("div",{class:"text-caption"}," Tick size ",-1),ue=o("div",{class:"text-caption"}," Tick labels ",-1),me=f({__name:"DemoSliderTicks",setup(v){const l=V(0),a=V(1),i={0:"Figs",1:"Lemon",2:"Pear",3:"Apple"};return(d,s)=>(_(),b(h,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[re,e(p,{modelValue:n(l),"onUpdate:modelValue":s[0]||(s[0]=r=>m(l)?l.value=r:null),step:10,"show-ticks":""},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[de,e(p,{modelValue:n(l),"onUpdate:modelValue":s[1]||(s[1]=r=>m(l)?l.value=r:null),step:10,"show-ticks":"always"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[ce,e(p,{modelValue:n(l),"onUpdate:modelValue":s[2]||(s[2]=r=>m(l)?l.value=r:null),step:10,"show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[ue,e(p,{modelValue:n(a),"onUpdate:modelValue":s[3]||(s[3]=r=>m(a)?a.value=r:null),ticks:i,max:3,step:"1","show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1})]),_:1}))}}),pe=o("div",{class:"text-caption"}," Show thumb when using slider ",-1),Ve=o("div",{class:"text-caption"}," Always show thumb label ",-1),ve=o("div",{class:"text-caption"}," Custom thumb size ",-1),_e=o("div",{class:"text-caption"}," Custom thumb label ",-1),fe=f({__name:"DemoSliderThumb",setup(v){const l=["😭","😢","☹️","🙁","😐","🙂","😊","😁","😄","😍"],a=V(45);return(i,d)=>(_(),b(h,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[pe,e(p,{modelValue:n(a),"onUpdate:modelValue":d[0]||(d[0]=s=>m(a)?a.value=s:null),"thumb-label":""},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[Ve,e(p,{modelValue:n(a),"onUpdate:modelValue":d[1]||(d[1]=s=>m(a)?a.value=s:null),"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[ve,e(p,{modelValue:n(a),"onUpdate:modelValue":d[2]||(d[2]=s=>m(a)?a.value=s:null),"thumb-size":30,"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[_e,e(p,{modelValue:n(a),"onUpdate:modelValue":d[3]||(d[3]=s=>m(a)?a.value=s:null),"thumb-label":"always"},{"thumb-label":t(({modelValue:s})=>[c(T(l[Math.min(Math.floor(s/10),9)]),1)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),be={};function he(v,l){return _(),b(p,{step:10,"show-ticks":"","thumb-size":18,"tick-size":4,"track-size":4})}const xe=k(be,[["render",he]]),Ce={class:"d-flex justify-space-between"},we=f({__name:"DemoSliderMinAndMax",setup(v){const l=V(-50),a=V(90),i=V(40);return(d,s)=>(_(),S("div",Ce,[e(p,{modelValue:n(i),"onUpdate:modelValue":s[0]||(s[0]=r=>m(i)?i.value=r:null),max:n(a),min:n(l),step:1},null,8,["modelValue","max","min"]),e(w,{modelValue:n(i),"onUpdate:modelValue":s[1]||(s[1]=r=>m(i)?i.value=r:null),type:"number",placeholder:"10",style:{"max-inline-size":"5rem"}},null,8,["modelValue"])]))}}),ye=f({__name:"DemoSliderValidation",setup(v){const l=V(30),a=[i=>i<=40||"Only 40 in stock"];return(i,d)=>(_(),b(p,{modelValue:n(l),"onUpdate:modelValue":d[0]||(d[0]=s=>m(l)?l.value=s:null),error:n(l)>40,rules:a,step:10,"thumb-label":"always","show-ticks":""},null,8,["modelValue","error"]))}}),Se=f({__name:"DemoSliderStep",setup(v){const l=V(0);return(a,i)=>(_(),b(p,{modelValue:n(l),"onUpdate:modelValue":i[0]||(i[0]=d=>m(l)?l.value=d:null),min:0,max:1,step:.2,"thumb-label":""},null,8,["modelValue"]))}}),ke=f({__name:"DemoSliderIcons",setup(v){const l=V(0),a=V(0),i=V(10);return(d,s)=>(_(),b(h,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[e(p,{modelValue:n(l),"onUpdate:modelValue":s[0]||(s[0]=r=>m(l)?l.value=r:null),"prepend-icon":"ri-volume-up-line"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[e(p,{modelValue:n(a),"onUpdate:modelValue":s[1]||(s[1]=r=>m(a)?a.value=r:null),"append-icon":"ri-alarm-line"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[e(p,{modelValue:n(i),"onUpdate:modelValue":s[2]||(s[2]=r=>m(i)?i.value=r:null),"append-icon":"ri-search-line-plus-outline","prepend-icon":"ri-search-line-minus-outline"},null,8,["modelValue"])]),_:1})]),_:1}))}}),ge=o("div",{class:"text-caption"}," color ",-1),ze=o("div",{class:"text-caption"}," track-color ",-1),$e=o("div",{class:"text-caption"}," thumb-color ",-1),Re=f({__name:"DemoSliderColors",setup(v){const l=V(25),a=V(75),i=V(50);return(d,s)=>(_(),b(h,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[ge,e(p,{modelValue:n(l),"onUpdate:modelValue":s[0]||(s[0]=r=>m(l)?l.value=r:null),color:"error"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[ze,e(p,{modelValue:n(a),"onUpdate:modelValue":s[1]||(s[1]=r=>m(a)?a.value=r:null),"track-color":"error"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[$e,e(p,{modelValue:n(i),"onUpdate:modelValue":s[2]||(s[2]=r=>m(i)?i.value=r:null),"thumb-color":"error","thumb-label":"always"},null,8,["modelValue"])]),_:1})]),_:1}))}}),Te={},De=o("div",{class:"text-caption"}," Disabled ",-1),je=o("div",{class:"text-caption"}," Readonly ",-1);function Ue(v,l){return _(),b(h,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[De,e(p,{disabled:"",label:"Disabled","model-value":30})]),_:1}),e(u,{cols:"12"},{default:t(()=>[je,e(p,{readonly:"",label:"Readonly","model-value":30})]),_:1})]),_:1})}const Ae=k(Te,[["render",Ue]]),Be=f({__name:"DemoSliderBasic",setup(v){const l=V(30);return(a,i)=>(_(),b(h,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[e(p)]),_:1}),e(u,{cols:"12"},{default:t(()=>[e(p,{modelValue:n(l),"onUpdate:modelValue":i[0]||(i[0]=d=>m(l)?l.value=d:null)},null,8,["modelValue"])]),_:1})]),_:1}))}}),Fe={ts:`<script lang="ts" setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'

  return 'error'
})

const animationDuration = computed(() => {
  return \`\${60 / bpm.value}s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'ri-pause-line' : 'ri-play-line'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="ri-subtract-line"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="ri-add-line"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`,js:`<script setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'
  
  return 'error'
})

const animationDuration = computed(() => {
  return \`\${ 60 / bpm.value }s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'ri-pause-line' : 'ri-play-line'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="ri-subtract-line"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="ri-add-line"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`},Pe={ts:`<script lang="ts" setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(225)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">R</span>
        <VSlider
          v-model="redColorValue"
          :max="255"
          :step="1"
        />

        <VTextField
          v-model="redColorValue"
          type="number"
          placeholder="10"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">G</span>
        <VSlider
          v-model="greenColorValue"
          :max="255"
          :step="1"
        />

        <VTextField
          v-model="greenColorValue"
          type="number"
          placeholder="20"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">B</span>
        <VSlider
          v-model="blueColorValue"
          :max="255"
          :step="1"
        />
        <VTextField
          v-model="blueColorValue"
          type="number"
          placeholder="30"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(225)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">R</span>
        <VSlider
          v-model="redColorValue"
          :max="255"
          :step="1"
        />

        <VTextField
          v-model="redColorValue"
          type="number"
          placeholder="10"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">G</span>
        <VSlider
          v-model="greenColorValue"
          :max="255"
          :step="1"
        />

        <VTextField
          v-model="greenColorValue"
          type="number"
          placeholder="20"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">B</span>
        <VSlider
          v-model="blueColorValue"
          :max="255"
          :step="1"
        />
        <VTextField
          v-model="blueColorValue"
          type="number"
          placeholder="30"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>
  </VRow>
</template>
`},Me={ts:`<script setup lang="ts">
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider v-model="sliderValue" />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider v-model="sliderValue" />
    </VCol>
  </VRow>
</template>
`},Ie={ts:`<script lang="ts" setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`},Le={ts:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`},Oe={ts:`<script lang="ts" setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="ri-volume-up-line"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="ri-alarm-line"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="ri-search-line-plus-outline"
        prepend-icon="ri-search-line-minus-outline"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="ri-volume-up-line"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="ri-alarm-line"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="ri-search-line-plus-outline"
        prepend-icon="ri-search-line-minus-outline"
      />
    </VCol>
  </VRow>
</template>
`},Ee={ts:`<script lang="ts" setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <div class="d-flex justify-space-between">
    <VSlider
      v-model="slider"
      :max="max"
      :min="min"
      :step="1"
    />

    <VTextField
      v-model="slider"
      type="number"
      placeholder="10"
      style="max-inline-size: 5rem;"
    />
  </div>
</template>
`,js:`<script setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <div class="d-flex justify-space-between">
    <VSlider
      v-model="slider"
      :max="max"
      :min="min"
      :step="1"
    />

    <VTextField
      v-model="slider"
      type="number"
      placeholder="10"
      style="max-inline-size: 5rem;"
    />
  </div>
</template>
`},Ge={ts:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="18"
    :tick-size="4"
    :track-size="4"
  />
</template>
`,js:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="18"
    :tick-size="4"
    :track-size="4"
  />
</template>
`},Ye={ts:`<script lang="ts" setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`,js:`<script setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`},Ne={ts:`<script lang="ts" setup>
const satisfactionEmojis = ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍']
const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const satisfactionEmojis = [
  '😭',
  '😢',
  '☹️',
  '🙁',
  '😐',
  '🙂',
  '😊',
  '😁',
  '😄',
  '😍',
]

const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`},He={ts:`<script lang="ts" setup>
const value = ref(0)
const fruits = ref(1)
const ticksLabels = { 0: 'Figs', 1: 'Lemon', 2: 'Pear', 3: 'Apple' }
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const value = ref(0)
const fruits = ref(1)

const ticksLabels = {
  0: 'Figs',
  1: 'Lemon',
  2: 'Pear',
  3: 'Apple',
}
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`},Qe={ts:`<script lang="ts" setup>
const value = ref(30)
const rules = [(v: number) => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`,js:`<script setup>
const value = ref(30)
const rules = [v => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`},Ze={ts:`<script lang="ts" setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`},qe=o("p",null,[c("The "),o("code",null,"v-slider"),c(" component is a better visualization of the number input.")],-1),Je=o("p",null,[c("You cannot interact with "),o("code",null,"disabled"),c(" and "),o("code",null,"readonly"),c(" sliders.")],-1),Ke=o("p",null,[c("You can set the colors of the slider using the props "),o("code",null,"color"),c(", "),o("code",null,"track-color"),c(" and "),o("code",null,"thumb-color"),c(".")],-1),We=o("p",null,[c("You can add icons to the slider with the "),o("code",null,"append-icon"),c(" and "),o("code",null,"prepend-icon"),c(" props.")],-1),Xe=o("p",null,[c("Using the "),o("code",null,"step"),c(" prop you can control the precision of the slider, and how much it should move each step.")],-1),el=o("p",null,[c("Vuetify includes simple validation through the "),o("code",null,"rules"),c(" prop.")],-1),ll=o("p",null,[c("You can set "),o("code",null,"min"),c(" and "),o("code",null,"max"),c(" values of sliders.")],-1),tl=o("p",null,[c("Use "),o("code",null,"thumb-size"),c(", "),o("code",null,"tick-size"),c(", and "),o("code",null,"track-size"),c(" prop to increase and decrease the size of thumb, tick and track. ")],-1),ol=o("p",null,[c("You can display a thumb label while sliding or always with the "),o("code",null,"thumb-label"),c(" prop.")],-1),sl=o("p",null,"Tick marks represent predetermined values to which the user can move the slider.",-1),al=o("p",null,[c(" You can use the "),o("code",null,"vertical"),c(" prop to switch sliders to a vertical orientation. ")],-1),il=o("p",null,[c("Sliders can be combined with other components in its "),o("code",null,"append"),c(" slot, such as "),o("code",null,"v-text-field"),c(", to add additional functionality to the component.")],-1),nl=o("p",null,[c("Use slots such as "),o("code",null,"append"),c(" and "),o("code",null,"prepend"),c(" to easily customize the "),o("code",null,"v-slider"),c(" to fit any situation.")],-1),$l=f({__name:"slider",setup(v){return(l,a)=>{const i=Be,d=Q,s=Ae,r=Re,g=ke,x=Se,C=ye,U=we,A=xe,B=fe,F=me,P=ne,M=ie,I=X;return _(),b(h,{class:"match-height"},{default:t(()=>[e(u,{cols:"12",md:"6"},{default:t(()=>[e(d,{title:"Basic",code:Me},{default:t(()=>[qe,e(i)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(d,{title:"Disabled and Readonly",code:Le},{default:t(()=>[Je,e(s)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(d,{title:"Colors",code:Ie},{default:t(()=>[Ke,e(r)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(d,{title:"Icons",code:Oe},{default:t(()=>[We,e(g)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(d,{title:"Step",code:Ye},{default:t(()=>[Xe,e(x)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(d,{title:"Validation",code:Qe},{default:t(()=>[el,e(C)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(d,{title:"Min and Max",code:Ee},{default:t(()=>[ll,e(U)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(d,{title:"Size",code:Ge},{default:t(()=>[tl,e(A)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(d,{title:"Thumb",code:Ne},{default:t(()=>[ol,e(B)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(d,{title:"Ticks",code:He},{default:t(()=>[sl,e(F)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(d,{title:"Vertical",code:Ze},{default:t(()=>[al,e(P)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(d,{title:"Append text field",code:Pe},{default:t(()=>[il,e(M)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(d,{title:"Append and prepend",code:Fe},{default:t(()=>[nl,e(I)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{$l as default};
