import{V as D}from"./VNodeRenderer-Ckj7pKWN.js";import{d as g,r as V,o as u,g as h,f as l,b as e,a0 as y,s as U,p as t,ct as q,n as d,aQ as S,G as j,ai as H,c as N,x as L,aG as x,e as o}from"./main-FCzYu4Z5.js";import{V as B}from"./VTooltip-SL5-U2jd.js";import{V as r}from"./VTextField-JeOZvJkP.js";import{a as i,V as v}from"./VRow-DcbkzY-u.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as E,e as W}from"./validators-Z6BjoYpS.js";import{V as z}from"./VForm-DAROEqCA.js";import{_ as Y}from"./AppCardCode.vue_vue_type_style_index_0_lang-ChisEB8j.js";import"./VOverlay-CJoYV0aa.js";import"./easing-CjukEv2V.js";import"./delay-ghhtiNk_.js";import"./lazy-s9MkjEdz.js";import"./scopeId-C8kA2Rpd.js";import"./VImg-CJF-w0vk.js";import"./forwardRefs-C-GTDzx5.js";/* empty css                   */import"./VCounter-fwUCpOxO.js";import"./VField-Dk2Ak1ql.js";import"./InputIcon-wsmb1BjU.js";import"./VInput-B2EWUdv0.js";/* empty css              */import"./helpers-BO_WrFPz.js";import"./vue3-perfect-scrollbar-gC16KFl8.js";import"./VCard-Do568HRS.js";import"./VAvatar-CP8SEjMm.js";import"./VDivider-knA9H03k.js";const O={key:0,class:"ms-3"},G=g({__name:"DemoTextfieldIconSlots",setup(_){const n=V("Hey!"),s=V(!1),m=()=>{s.value=!0,n.value="Wait for it...",setTimeout(()=>{s.value=!1,n.value="You've clicked me!"},2e3)};return(a,f)=>(u(),h(r,{modelValue:d(n),"onUpdate:modelValue":f[0]||(f[0]=c=>x(n)?n.value=c:null),clearable:"","clear-icon":"ri-close-line",label:"Message",placeholder:"Hey!!",type:"text"},{prepend:l(()=>[e(B,{location:"bottom"},{activator:l(({props:c})=>[e(y,U(c,{icon:"ri-question-line"}),null,16)]),default:l(()=>[t(" I'm a tooltip ")]),_:1})]),"append-inner":l(()=>[e(q,{"leave-absolute":""},{default:l(()=>[d(s)?(u(),h(S,{key:0,size:"24",color:"info",indeterminate:""})):(u(),h(d(D),{key:1,nodes:d(j).app.logo},null,8,["nodes"]))]),_:1})]),append:l(()=>[e(H,{size:a.$vuetify.display.smAndDown?"small":"large",class:"mt-n2",icon:a.$vuetify.display.smAndDown,onClick:m},{default:l(()=>[e(y,{icon:"ri-focus-3-line"}),a.$vuetify.display.mdAndUp?(u(),N("span",O,"Click me")):L("",!0)]),_:1},8,["size","icon"])]),_:1},8,["modelValue"]))}}),Q=g({__name:"DemoTextfieldPasswordInput",setup(_){const n=V(!1),s=V(!0),m=V("Password"),a=V("wqfasds"),f={required:c=>!!c||"Required.",min:c=>c.length>=8||"Min 8 characters"};return(c,p)=>(u(),h(v,null,{default:l(()=>[e(i,{cols:"12",sm:"6"},{default:l(()=>[e(r,{modelValue:d(m),"onUpdate:modelValue":p[0]||(p[0]=b=>x(m)?m.value=b:null),"append-inner-icon":d(n)?"ri-eye-off-line":"ri-eye-line",rules:[f.required,f.min],type:d(n)?"text":"password",name:"input-10-1",label:"Normal with hint text",hint:"At least 8 characters",placeholder:"············",counter:"","onClick:appendInner":p[1]||(p[1]=b=>n.value=!d(n))},null,8,["modelValue","append-inner-icon","rules","type"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:l(()=>[e(r,{modelValue:d(a),"onUpdate:modelValue":p[2]||(p[2]=b=>x(a)?a.value=b:null),rules:[f.required,f.min],"append-inner-icon":d(s)?"ri-eye-off-line":"ri-eye-line",type:d(s)?"text":"password",name:"input-10-2",placeholder:"············",label:"Visible",hint:"At least 8 characters","onClick:appendInner":p[3]||(p[3]=b=>s.value=!d(s))},null,8,["modelValue","rules","append-inner-icon","type"])]),_:1})]),_:1}))}}),J={},K=o("strong",null,"icon",-1);function X(_,n){return u(),h(r,{placeholder:"Placeholder Text"},{label:l(()=>[t(" What about  "),K,t(" here? "),e(y,{icon:"ri-file-search-line"})]),_:1})}const Z=T(J,[["render",X]]),ee=g({__name:"DemoTextfieldIconEvents",setup(_){const n=V("Hey!"),s=V(!0),m=V(0),a=()=>{s.value=!s.value},f=()=>{n.value=""},c=()=>{m.value=0},p=()=>{c(),f()};return(b,C)=>(u(),h(r,{modelValue:d(n),"onUpdate:modelValue":C[0]||(C[0]=w=>x(n)?n.value=w:null),clearable:"",type:"text",label:"Message",color:"primary",placeholder:"Hey!!","clear-icon":"ri-close-line","append-icon":d(n)?"ri-send-plane-2-line":"ri-mic-line","append-inner-icon":d(s)?"ri-pushpin-line":"ri-unpin-line","onClick:appendInner":a,"onClick:append":p,"onClick:clear":f},null,8,["modelValue","append-icon","append-inner-icon"]))}}),le=g({__name:"DemoTextfieldValidation",setup(_){const n=V("");return(s,m)=>(u(),h(z,null,{default:l(()=>[e(r,{modelValue:d(n),"onUpdate:modelValue":m[0]||(m[0]=a=>x(n)?n.value=a:null),rules:["requiredValidator"in s?s.requiredValidator:d(E),"emailValidator"in s?s.emailValidator:d(W)],placeholder:"johnedoe@email.com",label:"E-mail"},null,8,["modelValue","rules"])]),_:1}))}}),oe={};function te(_,n){return u(),h(r,{label:"Regular",placeholder:"Placeholder Text","single-line":""})}const ne=T(oe,[["render",te]]),ae=g({__name:"DemoTextfieldPrefixesAndSuffixes",setup(_){const n=V(10.05),s=V(28.02),m=V("example"),a=V("04:56");return(f,c)=>(u(),h(v,null,{default:l(()=>[e(i,{cols:"12"},{default:l(()=>[e(r,{modelValue:d(n),"onUpdate:modelValue":c[0]||(c[0]=p=>x(n)?n.value=p:null),label:"Amount",prefix:"$",type:"number",placeholder:"10.05"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(r,{modelValue:d(s),"onUpdate:modelValue":c[1]||(c[1]=p=>x(s)?s.value=p:null),label:"Weight",suffix:"lbs",type:"number",placeholder:"28.02"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(r,{modelValue:d(m),"onUpdate:modelValue":c[2]||(c[2]=p=>x(m)?m.value=p:null),label:"Email address",suffix:"@gmail.com",placeholder:"example"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(r,{modelValue:d(a),"onUpdate:modelValue":c[3]||(c[3]=p=>x(a)?a.value=p:null),label:"Label Text",type:"time",suffix:"PST",placeholder:"04:56"},null,8,["modelValue"])]),_:1})]),_:1}))}}),ie={};function re(_,n){return u(),h(v,null,{default:l(()=>[e(i,{cols:"12"},{default:l(()=>[e(r,{label:"Prepend","prepend-icon":"ri-map-pin-line",placeholder:"Placeholder Text"})]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(r,{label:"Prepend Inner","prepend-inner-icon":"ri-map-pin-line",placeholder:"Placeholder Text"})]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(r,{label:"Append","append-icon":"ri-map-pin-line",placeholder:"Placeholder Text"})]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(r,{label:"Append Inner","append-inner-icon":"ri-map-pin-line",placeholder:"Placeholder Text"})]),_:1})]),_:1})}const se=T(ie,[["render",re]]),ce={};function de(_,n){return u(),h(r,{color:"success",label:"First name",placeholder:"Placeholder Text"})}const pe=T(ce,[["render",de]]),me={};function ue(_,n){return u(),h(r,{placeholder:"Placeholder Text",label:"Regular",clearable:""})}const fe=T(me,[["render",ue]]),he=g({__name:"DemoTextfieldCounter",setup(_){const n=V("Preliminary report"),s=V("California is a state in the western United States"),m=[a=>a.length<=25||"Max 25 characters"];return(a,f)=>(u(),h(v,null,{default:l(()=>[e(i,{cols:"12"},{default:l(()=>[e(r,{modelValue:d(n),"onUpdate:modelValue":f[0]||(f[0]=c=>x(n)?n.value=c:null),rules:m,counter:"25",placeholder:"Placeholder Text",hint:"This field uses counter prop",label:"Regular"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(r,{modelValue:d(s),"onUpdate:modelValue":f[1]||(f[1]=c=>x(s)?s.value=c:null),rules:m,counter:"",maxlength:"25",placeholder:"Placeholder Text",hint:"This field uses maxlength attribute",label:"Limit exceeded"},null,8,["modelValue"])]),_:1})]),_:1}))}}),Ve={};function _e(_,n){return u(),h(v,null,{default:l(()=>[e(i,null,{default:l(()=>[e(r,{label:"Disabled",placeholder:"Placeholder Text",disabled:""})]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(r,{placeholder:"Placeholder Text",label:"Readonly",readonly:""})]),_:1})]),_:1})}const xe=T(Ve,[["render",_e]]),Te={};function be(_,n){return u(),h(v,null,{default:l(()=>[e(i,{cols:"12",md:"6"},{default:l(()=>[e(r,{label:"Outlined",placeholder:"Placeholder Text"})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(r,{label:"Filled",variant:"filled",placeholder:"Placeholder Text"})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(r,{label:"Solo",variant:"solo",placeholder:"Placeholder Text"})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(r,{label:"Plain",variant:"plain",placeholder:"Placeholder Text"})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(r,{label:"Underlined",variant:"underlined",placeholder:"Placeholder Text"})]),_:1})]),_:1})}const ge=T(Te,[["render",be]]),ve={};function Ce(_,n){return u(),h(r,{label:"Compact",density:"compact",placeholder:"Placeholder Text"})}const we=T(ve,[["render",Ce]]),ye={};function Pe(_,n){return u(),h(r,{label:"Regular",placeholder:"Placeholder Text"})}const Fe=T(ye,[["render",Pe]]),ke={ts:`<template>
  <VTextField
    label="Regular"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <VTextField
    label="Regular"
    placeholder="Placeholder Text"
  />
</template>
`},Re={ts:`<template>
  <VTextField
    placeholder="Placeholder Text"
    label="Regular"
    clearable
  />
</template>
`,js:`<template>
  <VTextField
    placeholder="Placeholder Text"
    label="Regular"
    clearable
  />
</template>
`},Ie={ts:`<script lang="ts" setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="title"
        :rules="rules"
        counter="25"
        placeholder="Placeholder Text"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        placeholder="Placeholder Text"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="title"
        :rules="rules"
        counter="25"
        placeholder="Placeholder Text"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        placeholder="Placeholder Text"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`},$e={ts:`<template>
  <VTextField
    color="success"
    label="First name"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <VTextField
    color="success"
    label="First name"
    placeholder="Placeholder Text"
  />
</template>
`},Me={ts:`<template>
  <VTextField
    label="Compact"
    density="compact"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <VTextField
    label="Compact"
    density="compact"
    placeholder="Placeholder Text"
  />
</template>
`},Ae={ts:`<script lang="ts" setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    placeholder="Hey!!"
    clear-icon="ri-close-line"
    :append-icon="message ? 'ri-send-plane-2-line' : 'ri-mic-line'"
    :append-inner-icon="marker ? 'ri-pushpin-line' : 'ri-unpin-line'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`,js:`<script setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    placeholder="Hey!!"
    clear-icon="ri-close-line"
    :append-icon="message ? 'ri-send-plane-2-line' : 'ri-mic-line'"
    :append-inner-icon="marker ? 'ri-pushpin-line' : 'ri-unpin-line'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`},De={ts:`<script lang="ts" setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'

  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    clear-icon="ri-close-line"
    label="Message"
    placeholder="Hey!!"
    type="text"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="ri-question-line"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          size="24"
          color="info"
          indeterminate
        />

        <VNodeRenderer
          v-else
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :size="$vuetify.display.smAndDown ? 'small' : 'large'"
        class="mt-n2"
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon icon="ri-focus-3-line" />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </VTextField>
</template>
`,js:`<script setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'
  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    clear-icon="ri-close-line"
    label="Message"
    placeholder="Hey!!"
    type="text"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="ri-question-line"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          size="24"
          color="info"
          indeterminate
        />

        <VNodeRenderer
          v-else
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :size="$vuetify.display.smAndDown ? 'small' : 'large'"
        class="mt-n2"
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon icon="ri-focus-3-line" />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </VTextField>
</template>
`},Ue={ts:`<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        label="Prepend"
        prepend-icon="ri-map-pin-line"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Prepend Inner"
        prepend-inner-icon="ri-map-pin-line"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append"
        append-icon="ri-map-pin-line"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append Inner"
        append-inner-icon="ri-map-pin-line"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        label="Prepend"
        prepend-icon="ri-map-pin-line"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Prepend Inner"
        prepend-inner-icon="ri-map-pin-line"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append"
        append-icon="ri-map-pin-line"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append Inner"
        append-inner-icon="ri-map-pin-line"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`},qe={ts:`<template>
  <VTextField placeholder="Placeholder Text">
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="ri-file-search-line" />
    </template>
  </VTextField>
</template>
`,js:`<template>
  <VTextField placeholder="Placeholder Text">
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="ri-file-search-line" />
    </template>
  </VTextField>
</template>
`},Se={ts:`<script lang="ts" setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: (value: string) => !!value || 'Required.',
  min: (v: string) => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="password"
        :append-inner-icon="show1 ? 'ri-eye-off-line' : 'ri-eye-line'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        placeholder="············"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="confirmPassword"
        :rules="[rules.required, rules.min]"
        :append-inner-icon="show2 ? 'ri-eye-off-line' : 'ri-eye-line'"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        placeholder="············"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: value => !!value || 'Required.',
  min: v => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="password"
        :append-inner-icon="show1 ? 'ri-eye-off-line' : 'ri-eye-line'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        placeholder="············"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="confirmPassword"
        :rules="[rules.required, rules.min]"
        :append-inner-icon="show2 ? 'ri-eye-off-line' : 'ri-eye-line'"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        placeholder="············"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`},je={ts:`<script setup lang="ts">
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
        placeholder="10.05"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
        placeholder="28.02"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
        placeholder="example"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
        placeholder="04:56"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
        placeholder="10.05"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
        placeholder="28.02"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
        placeholder="example"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
        placeholder="04:56"
      />
    </VCol>
  </VRow>
</template>
`},He={ts:`<template>
  <VTextField
    label="Regular"
    placeholder="Placeholder Text"
    single-line
  />
</template>
`,js:`<template>
  <VTextField
    label="Regular"
    placeholder="Placeholder Text"
    single-line
  />
</template>
`},Ne={ts:`<template>
  <VRow>
    <VCol>
      <VTextField
        label="Disabled"
        placeholder="Placeholder Text"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        placeholder="Placeholder Text"
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol>
      <VTextField
        label="Disabled"
        placeholder="Placeholder Text"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        placeholder="Placeholder Text"
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`},Le={ts:`<script lang="ts" setup>
const email = ref('')
<\/script>

<template>
  <VForm>
    <VTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      placeholder="johnedoe@email.com"
      label="E-mail"
    />
  </VForm>
</template>
`,js:`<script setup>
const email = ref('')
<\/script>

<template>
  <VForm>
    <VTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      placeholder="johnedoe@email.com"
      label="E-mail"
    />
  </VForm>
</template>
`},Be={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Outlined"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Outlined"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`},Ee=o("p",null,"Text fields components are used for collecting user provided information.",-1),We=o("p",null,[t("The "),o("code",null,"density"),t(" prop decreases the height of the text field based upon 1 of 3 levels of density; "),o("code",null,"default"),t(", "),o("code",null,"comfortable"),t(", and "),o("code",null,"compact"),t(".")],-1),ze=o("p",null,[t("Use "),o("code",null,"solo"),t(", "),o("code",null,"filled"),t(", "),o("code",null,"outlined"),t(", "),o("code",null,"plain"),t(" and "),o("code",null,"underlined"),t(" option of "),o("code",null,"variant"),t(" prop to change the look of the textfield. ")],-1),Ye=o("p",null,"Text fields can be disabled or readonly.",-1),Oe=o("p",null,[t("Use a "),o("code",null,"counter"),t(" prop to inform a user of the character limit.")],-1),Ge=o("p",null,"When clearable, you can customize the clear icon with clear-icon.",-1),Qe=o("p",null,[t("Use "),o("code",null,"color"),t(" prop to change the input border color.")],-1),Je=o("p",null,[t("You can add icons to the text field with "),o("code",null,"prepend-icon"),t(", "),o("code",null,"append-icon"),t(" and "),o("code",null,"append-inner-icon"),t(" and "),o("code",null,"prepend-inner-icon"),t(" props.")],-1),Ke=o("p",null,[t("The "),o("code",null,"prefix"),t(" and "),o("code",null,"suffix"),t(" properties allows you to prepend and append inline non-modifiable text next to the text field.")],-1),Xe=o("p",null,[o("code",null,"single-line"),t(" text fields do not float their label on focus or with data.")],-1),Ze=o("p",null,[t("Vuetify includes simple validation through the "),o("code",null,"rules"),t(" prop.")],-1),el=o("p",null,[o("code",null,"click:prepend"),t(", "),o("code",null,"click:append"),t(", "),o("code",null,"click:append-inner"),t(", and "),o("code",null,"click:clear"),t(" will be emitted when you click on the respective icon")],-1),ll=o("p",null,[t("Text field label can be defined in "),o("code",null,"label"),t(" slot - that will allow to use HTML content.")],-1),ol=o("p",null,[t("Using the HTML input "),o("code",null,"type"),t(" password can be used with an appended icon and callback to control the visibility.")],-1),tl=o("p",null,[t("Instead of using "),o("code",null,"prepend"),t("/"),o("code",null,"append"),t("/"),o("code",null,"append-inner"),t(" icons you can use slots to extend input's functionality.")],-1),$l=g({__name:"textfield",setup(_){return(n,s)=>{const m=Fe,a=Y,f=we,c=ge,p=xe,b=he,C=fe,w=pe,P=se,F=ae,k=ne,R=le,I=ee,$=Z,M=Q,A=G;return u(),h(v,{class:"match-height"},{default:l(()=>[e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Basic",code:ke},{default:l(()=>[Ee,e(m)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Density",code:Me},{default:l(()=>[We,e(f)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(a,{title:"Variant",code:Be},{default:l(()=>[ze,e(c)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"State",code:Ne},{default:l(()=>[Ye,e(p)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Counter",code:Ie},{default:l(()=>[Oe,e(b)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Clearable",code:Re},{default:l(()=>[Ge,e(C)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Custom Colors",code:$e},{default:l(()=>[Qe,e(w)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Icons",code:Ue},{default:l(()=>[Je,e(P)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Prefixes and suffixes",code:je},{default:l(()=>[Ke,e(F)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Single line",code:He},{default:l(()=>[Xe,e(k)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Validation",code:Le},{default:l(()=>[Ze,e(R)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Icon events",code:Ae},{default:l(()=>[el,e(I)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Label Slot",code:qe},{default:l(()=>[ll,e($)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Password input",code:Se},{default:l(()=>[ol,e(M)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Icon slots",code:De},{default:l(()=>[tl,e(A)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{$l as default};
