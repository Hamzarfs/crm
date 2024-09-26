import{_ as u}from"./AppDateTimePicker.vue_vue_type_style_index_0_lang-DQLFN7AC.js";import{d as r,r as _,o as i,g as p,n as c,aG as D,f as o,b as l}from"./main-FCzYu4Z5.js";import{_ as F}from"./AppCardCode.vue_vue_type_style_index_0_lang-ChisEB8j.js";import{a as s,V as h}from"./VRow-DcbkzY-u.js";import"./VField-Dk2Ak1ql.js";import"./InputIcon-wsmb1BjU.js";import"./easing-CjukEv2V.js";import"./VInput-B2EWUdv0.js";import"./VImg-CJF-w0vk.js";import"./vue3-perfect-scrollbar-gC16KFl8.js";import"./VCard-Do568HRS.js";import"./VAvatar-CP8SEjMm.js";import"./VDivider-knA9H03k.js";/* empty css              */const A=r({__name:"DemoDateTimePickerInline",setup(d){const e=_("");return(m,a)=>{const t=u;return i(),p(t,{modelValue:c(e),"onUpdate:modelValue":a[0]||(a[0]=n=>D(e)?e.value=n:null),label:"Inline",placeholder:"Select Date",config:{inline:!0}},null,8,["modelValue"])}}}),V=r({__name:"DemoDateTimePickerDisabledRange",setup(d){const e=new Date,m=e.toLocaleString("default",{month:"2-digit"}),a=e.getFullYear(),t=_("");return(n,f)=>{const g=u;return i(),p(g,{modelValue:c(t),"onUpdate:modelValue":f[0]||(f[0]=T=>D(t)?t.value=T:null),label:"Disabled Range",placeholder:"Select date",config:{dateFormat:"Y-m-d",disable:[{from:`${c(a)}-${c(m)}-20`,to:`${c(a)}-${c(m)}-25`}]}},null,8,["modelValue","config"])}}}),S=r({__name:"DemoDateTimePickerHumanFriendly",setup(d){const e=_("");return(m,a)=>{const t=u;return i(),p(t,{modelValue:c(e),"onUpdate:modelValue":a[0]||(a[0]=n=>D(e)?e.value=n:null),label:"Human Friendly",placeholder:"Select date",config:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}},null,8,["modelValue"])}}}),Y=r({__name:"DemoDateTimePickerRange",setup(d){const e=_("");return(m,a)=>{const t=u;return i(),p(t,{modelValue:c(e),"onUpdate:modelValue":a[0]||(a[0]=n=>D(e)?e.value=n:null),label:"Range",placeholder:"Select date",config:{mode:"range"}},null,8,["modelValue"])}}}),v=r({__name:"DemoDateTimePickerMultipleDates",setup(d){const e=_("");return(m,a)=>{const t=u;return i(),p(t,{modelValue:c(e),"onUpdate:modelValue":a[0]||(a[0]=n=>D(e)?e.value=n:null),label:"Multiple Dates",placeholder:"Select date",config:{mode:"multiple",dateFormat:"Y-m-d"}},null,8,["modelValue"])}}}),$=r({__name:"DemoDateTimePickerDateAndTime",setup(d){const e=_("");return(m,a)=>{const t=u;return i(),p(t,{modelValue:c(e),"onUpdate:modelValue":a[0]||(a[0]=n=>D(e)?e.value=n:null),label:"Date & TIme",placeholder:"Select date and time",config:{enableTime:!0,dateFormat:"Y-m-d H:i"}},null,8,["modelValue"])}}}),R=r({__name:"DemoDateTimePickerTimePicker",setup(d){const e=_("");return(m,a)=>{const t=u;return i(),p(t,{modelValue:c(e),"onUpdate:modelValue":a[0]||(a[0]=n=>D(e)?e.value=n:null),label:"Time picker",placeholder:"Select time",config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"}},null,8,["modelValue"])}}}),M=r({__name:"DemoDateTimePickerBasic",setup(d){const e=_("");return(m,a)=>{const t=u;return i(),p(t,{modelValue:c(e),"onUpdate:modelValue":a[0]||(a[0]=n=>D(e)?e.value=n:null),label:"Default",placeholder:"Select date"},null,8,["modelValue"])}}}),w={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
    placeholder="Select date"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
    placeholder="Select date"
  />
</template>
`},H={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    placeholder="Select date and time"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    placeholder="Select date and time"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`},I={ts:`<script setup lang="ts">
const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    placeholder="Select date"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`,js:`<script setup>
const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    placeholder="Select date"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`},j={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    placeholder="Select date"
    :config="{ altInput: true, altFormat: 'F j, Y', dateFormat: 'Y-m-d' }"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    placeholder="Select date"
    :config="{ altInput: true, altFormat: 'F j, Y', dateFormat: 'Y-m-d' }"
  />
</template>
`},x={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    placeholder="Select Date"
    :config="{ inline: true }"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    placeholder="Select Date"
    :config="{ inline: true }"
  />
</template>
`},C={ts:`<script setup lang="ts">
const multipleDate = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    placeholder="Select date"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
`,js:`<script setup>
const multipleDate = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    placeholder="Select date"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
`},U={ts:`<script setup lang="ts">
const dateRange = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    placeholder="Select date"
    :config="{ mode: 'range' }"
  />
</template>
`,js:`<script setup>
const dateRange = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    placeholder="Select date"
    :config="{ mode: 'range' }"
  />
</template>
`},y={ts:`<script setup lang="ts">
const time = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    placeholder="Select time"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`,js:`<script setup>
const time = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    placeholder="Select time"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`},ee=r({__name:"date-time-picker",setup(d){return(e,m)=>{const a=M,t=F,n=R,f=$,g=v,T=Y,k=S,P=V,b=A;return i(),p(h,null,{default:o(()=>[l(s,{cols:"12",md:"6"},{default:o(()=>[l(t,{title:"Basic",code:w},{default:o(()=>[l(a)]),_:1},8,["code"])]),_:1}),l(s,{cols:"12",md:"6"},{default:o(()=>[l(t,{title:"Time Picker",code:y},{default:o(()=>[l(n)]),_:1},8,["code"])]),_:1}),l(s,{cols:"12",md:"6"},{default:o(()=>[l(t,{title:"Date and Time",code:H},{default:o(()=>[l(f)]),_:1},8,["code"])]),_:1}),l(s,{cols:"12",md:"6"},{default:o(()=>[l(t,{title:"Multiple Dates",code:C},{default:o(()=>[l(g)]),_:1},8,["code"])]),_:1}),l(s,{cols:"12",md:"6"},{default:o(()=>[l(t,{title:"Range",code:U},{default:o(()=>[l(T)]),_:1},8,["code"])]),_:1}),l(s,{cols:"12",md:"6"},{default:o(()=>[l(t,{title:"Human Friendly",code:j},{default:o(()=>[l(k)]),_:1},8,["code"])]),_:1}),l(s,{cols:"12",md:"6"},{default:o(()=>[l(t,{title:"Disabled Range",code:I},{default:o(()=>[l(P)]),_:1},8,["code"])]),_:1}),l(s,{cols:"12",md:"6"},{default:o(()=>[l(t,{title:"Inline",code:x},{default:o(()=>[l(b)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{ee as default};
