import{V as o}from"./VChip-D3GIz1VX.js";import{V as E,a as $,b as w,c as W}from"./VList-jAkofN4n.js";import{V as L}from"./VListItemAction-DSMFxh46.js";import{d as S,r as u,a as M,o as n,g as V,f as i,b as e,aO as z,aP as A,p as a,a0 as T,n as l,aG as I,c as _,e as r,x as v}from"./main-DoQFmMsa.js";import{V as j}from"./VMenu-Dwo0kCga.js";import{V as B}from"./VCombobox-BiZZ5GS4.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as N}from"./avatar-1-BpD18F9D.js";import{a as J}from"./avatar-2-7Cb1ulCk.js";import{a as U}from"./avatar-3-D1OxVER-.js";import{a as F}from"./avatar-4-DTtpEczF.js";import{_ as R}from"./AppCardCode.vue_vue_type_style_index_0_lang-CmwJwIsY.js";import{a as m,V as Y}from"./VRow-CBIZXy0V.js";import"./VSlideGroup-DZ8i23BH.js";import"./VAvatar-A7ztkq2k.js";import"./VImg-BvvxBpKO.js";import"./ssrBoot-CpQaGIBj.js";import"./VDivider-CiGpRMeQ.js";import"./VOverlay-BtLUM5vY.js";import"./easing-CjukEv2V.js";import"./delay-Dhu81iSy.js";import"./lazy-CojwJwNx.js";import"./scopeId-C1Mw3z0g.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-Cr9rcsZj.js";import"./VSelect-DD45070D.js";import"./VTextField-C5K-JLC3.js";/* empty css                   */import"./VCounter-OXl0Qa9T.js";import"./VField-BD5A6g5X.js";import"./InputIcon-C91L1USK.js";import"./VInput-j0tWo3aL.js";import"./VCheckboxBtn-ybuIpKJx.js";import"./VSelectionControl-CA9osU1B.js";import"./filter--_JGeJ5X.js";import"./vue3-perfect-scrollbar-Dah25qMm.js";import"./VCard-CvMXks-w.js";/* empty css              */const O=S({__name:"DemoChipExpandable",setup(h){const t=u(!1);return(C,d)=>{const s=M("IconBtn");return n(),V(j,{modelValue:l(t),"onUpdate:modelValue":d[1]||(d[1]=p=>I(t)?t.value=p:null),transition:"scale-transition"},{activator:i(({props:p})=>[e(o,z(A(p)),{default:i(()=>[a(" VueJS ")]),_:2},1040)]),default:i(()=>[e(E,null,{default:i(()=>[e($,null,{append:i(()=>[e(L,{class:"ms-1"},{default:i(()=>[e(s,{onClick:d[0]||(d[0]=p=>t.value=!1)},{default:i(()=>[e(T,{size:"20",icon:"ri-close-line"})]),_:1})]),_:1})]),default:i(()=>[e(w,null,{default:i(()=>[a("VueJS")]),_:1}),e(W,null,{default:i(()=>[a("The Progressive JavaScript Framework")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),G=S({__name:"DemoChipInSelects",setup(h){const t=u(["Programming","Playing games","Sleeping"]),C=u(["Streaming","Eating","Programming","Playing games","Sleeping"]);return(d,s)=>(n(),V(B,{modelValue:l(t),"onUpdate:modelValue":s[0]||(s[0]=p=>I(t)?t.value=p:null),chips:"",clearable:"",multiple:"","closable-chips":"","clear-icon":"ri-close-circle-line",items:l(C),label:"Your favorite hobbies","prepend-icon":"ri-filter-3-line"},null,8,["modelValue","items"]))}}),q={},H={class:"demo-space-x"};function K(h,t){return n(),_("div",H,[e(o,{size:"x-small"},{default:i(()=>[a(" x-small chip ")]),_:1}),e(o,{size:"small"},{default:i(()=>[a(" small chip ")]),_:1}),e(o,null,{default:i(()=>[a("Default")]),_:1}),e(o,{size:"large"},{default:i(()=>[a(" large chip ")]),_:1}),e(o,{size:"x-large"},{default:i(()=>[a(" x-large chip ")]),_:1})])}const Q=b(q,[["render",K]]),X={class:"demo-space-x"},Z=r("span",null,"Chip",-1),ee=r("span",null,"Darcy Nooser",-1),ie=r("span",null,"Felicia Risker",-1),ae=r("span",null,"Minnie Mostly",-1),oe=S({__name:"DemoChipWithAvatar",setup(h){return(t,C)=>(n(),_("div",X,[e(o,{"prepend-avatar":l(N)},{default:i(()=>[Z]),_:1},8,["prepend-avatar"]),e(o,{"prepend-avatar":l(J)},{default:i(()=>[ee]),_:1},8,["prepend-avatar"]),e(o,{"prepend-avatar":l(U),pill:""},{default:i(()=>[ie]),_:1},8,["prepend-avatar"]),e(o,{"prepend-avatar":l(F),pill:!1},{default:i(()=>[ae]),_:1},8,["prepend-avatar"])]))}}),re={},le={class:"demo-space-x"};function te(h,t){return n(),_("div",le,[e(o,{"prepend-icon":"ri-user-line"},{default:i(()=>[a(" Account ")]),_:1}),e(o,{color:"primary","prepend-icon":"ri-star-line"},{default:i(()=>[a(" Premium ")]),_:1}),e(o,{color:"secondary","prepend-icon":"ri-cake-line"},{default:i(()=>[a(" 1 Year ")]),_:1}),e(o,{color:"success","prepend-icon":"ri-notification-line"},{default:i(()=>[a(" Notification ")]),_:1}),e(o,{color:"info","prepend-icon":"ri-message-line"},{default:i(()=>[a(" Message ")]),_:1}),e(o,{color:"warning","prepend-icon":"ri-error-warning-line"},{default:i(()=>[a(" Warning ")]),_:1}),e(o,{color:"error","prepend-icon":"ri-error-warning-line"},{default:i(()=>[a(" Error ")]),_:1})])}const se=b(re,[["render",te]]),ne={class:"demo-space-x"},ce=S({__name:"DemoChipClosable",setup(h){const t=u(!0),C=u(!0),d=u(!0),s=u(!0),p=u(!0),g=u(!0),y=u(!0);return(x,c)=>(n(),_("div",ne,[l(t)?(n(),V(o,{key:0,closable:"","onClick:close":c[0]||(c[0]=f=>t.value=!l(t))},{default:i(()=>[a(" Default ")]),_:1})):v("",!0),l(C)?(n(),V(o,{key:1,closable:"",color:"primary","onClick:close":c[1]||(c[1]=f=>C.value=!l(C))},{default:i(()=>[a(" Primary ")]),_:1})):v("",!0),l(d)?(n(),V(o,{key:2,closable:"",color:"secondary","onClick:close":c[2]||(c[2]=f=>d.value=!l(d))},{default:i(()=>[a(" Secondary ")]),_:1})):v("",!0),l(s)?(n(),V(o,{key:3,closable:"",color:"success","onClick:close":c[3]||(c[3]=f=>s.value=!l(s))},{default:i(()=>[a(" Success ")]),_:1})):v("",!0),l(p)?(n(),V(o,{key:4,closable:"",color:"info","onClick:close":c[4]||(c[4]=f=>p.value=!l(p))},{default:i(()=>[a(" Info ")]),_:1})):v("",!0),l(g)?(n(),V(o,{key:5,closable:"",color:"warning","onClick:close":c[5]||(c[5]=f=>g.value=!l(g))},{default:i(()=>[a(" Warning ")]),_:1})):v("",!0),l(y)?(n(),V(o,{key:6,closable:"",color:"error","onClick:close":c[6]||(c[6]=f=>y.value=!l(y))},{default:i(()=>[a(" Error ")]),_:1})):v("",!0)]))}}),pe={},de={class:"demo-space-x"};function he(h,t){return n(),_("div",de,[e(o,{label:""},{default:i(()=>[a(" Default ")]),_:1}),e(o,{label:"",color:"primary"},{default:i(()=>[a(" Primary ")]),_:1}),e(o,{label:"",color:"secondary"},{default:i(()=>[a(" Secondary ")]),_:1}),e(o,{label:"",color:"success"},{default:i(()=>[a(" Success ")]),_:1}),e(o,{label:"",color:"info"},{default:i(()=>[a(" Info ")]),_:1}),e(o,{label:"",color:"warning"},{default:i(()=>[a(" Warning ")]),_:1}),e(o,{label:"",color:"error"},{default:i(()=>[a(" Error ")]),_:1})])}const me=b(pe,[["render",he]]),ue={},Ve={class:"demo-space-x"};function Ce(h,t){return n(),_("div",Ve,[e(o,{variant:"outlined"},{default:i(()=>[a(" Default ")]),_:1}),e(o,{color:"primary",variant:"outlined"},{default:i(()=>[a(" Primary ")]),_:1}),e(o,{color:"secondary",variant:"outlined"},{default:i(()=>[a(" Secondary ")]),_:1}),e(o,{color:"success",variant:"outlined"},{default:i(()=>[a(" Success ")]),_:1}),e(o,{color:"info",variant:"outlined"},{default:i(()=>[a(" Info ")]),_:1}),e(o,{color:"warning",variant:"outlined"},{default:i(()=>[a(" Warning ")]),_:1}),e(o,{color:"error",variant:"outlined"},{default:i(()=>[a(" Error ")]),_:1})])}const fe=b(ue,[["render",Ce]]),_e={},ve={class:"demo-space-x"};function be(h,t){return n(),_("div",ve,[e(o,{variant:"elevated"},{default:i(()=>[a(" Default ")]),_:1}),e(o,{color:"primary",variant:"elevated"},{default:i(()=>[a(" Primary ")]),_:1}),e(o,{color:"secondary",variant:"elevated"},{default:i(()=>[a(" Secondary ")]),_:1}),e(o,{color:"success",variant:"elevated"},{default:i(()=>[a(" Success ")]),_:1}),e(o,{color:"info",variant:"elevated"},{default:i(()=>[a(" Info ")]),_:1}),e(o,{color:"warning",variant:"elevated"},{default:i(()=>[a(" Warning ")]),_:1}),e(o,{color:"error",variant:"elevated"},{default:i(()=>[a(" Error ")]),_:1})])}const ge=b(_e,[["render",be]]),ye={},Se={class:"demo-space-x"};function xe(h,t){return n(),_("div",Se,[e(o,null,{default:i(()=>[a(" Default ")]),_:1}),e(o,{color:"primary"},{default:i(()=>[a(" Primary ")]),_:1}),e(o,{color:"secondary"},{default:i(()=>[a(" Secondary ")]),_:1}),e(o,{color:"success"},{default:i(()=>[a(" Success ")]),_:1}),e(o,{color:"info"},{default:i(()=>[a(" Info ")]),_:1}),e(o,{color:"warning"},{default:i(()=>[a(" Warning ")]),_:1}),e(o,{color:"error"},{default:i(()=>[a(" Error ")]),_:1})])}const Ie=b(ye,[["render",xe]]),Pe={ts:`<script lang="ts" setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<script setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`},ke={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`},De={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`},Ee={ts:`<script lang="ts" setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle>VueJS</VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-1">
            <IconBtn @click="isMenuVisible = false">
              <VIcon
                size="20"
                icon="ri-close-line"
              />
            </IconBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`,js:`<script setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle>VueJS</VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-1">
            <IconBtn @click="isMenuVisible = false">
              <VIcon
                size="20"
                icon="ri-close-line"
              />
            </IconBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`},$e={ts:`<script lang="ts" setup>
const chips = ref(['Programming', 'Playing games', 'Sleeping'])
const items = ref(['Streaming', 'Eating', 'Programming', 'Playing games', 'Sleeping'])
<\/script>

<template>
  <VCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="ri-close-circle-line"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="ri-filter-3-line"
  />
</template>
`,js:`<script setup>
const chips = ref([
  'Programming',
  'Playing games',
  'Sleeping',
])

const items = ref([
  'Streaming',
  'Eating',
  'Programming',
  'Playing games',
  'Sleeping',
])
<\/script>

<template>
  <VCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="ri-close-circle-line"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="ri-filter-3-line"
  />
</template>
`},we={ts:`<template>
  <div class="demo-space-x">
    <VChip label>
      Default
    </VChip>

    <VChip
      label
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      label
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      label
      color="success"
    >
      Success
    </VChip>

    <VChip
      label
      color="info"
    >
      Info
    </VChip>

    <VChip
      label
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      label
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip label>
      Default
    </VChip>

    <VChip
      label
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      label
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      label
      color="success"
    >
      Success
    </VChip>

    <VChip
      label
      color="info"
    >
      Info
    </VChip>

    <VChip
      label
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      label
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`},We={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`},Le={ts:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip>Default</VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip>Default</VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`},Me={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip :prepend-avatar="avatar1">
      <span>Chip</span>
    </VChip>

    <VChip :prepend-avatar="avatar2">
      <span>Darcy Nooser</span>
    </VChip>

    <VChip
      :prepend-avatar="avatar3"
      pill
    >
      <span>Felicia Risker</span>
    </VChip>

    <VChip
      :prepend-avatar="avatar4"
      :pill="false"
    >
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip :prepend-avatar="avatar1">
      <span>Chip</span>
    </VChip>

    <VChip :prepend-avatar="avatar2">
      <span>Darcy Nooser</span>
    </VChip>

    <VChip
      :prepend-avatar="avatar3"
      pill
    >
      <span>Felicia Risker</span>
    </VChip>

    <VChip
      :prepend-avatar="avatar4"
      :pill="false"
    >
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`},ze={ts:`<template>
  <div class="demo-space-x">
    <VChip prepend-icon="ri-user-line">
      Account
    </VChip>

    <VChip
      color="primary"
      prepend-icon="ri-star-line"
    >
      Premium
    </VChip>

    <VChip
      color="secondary"
      prepend-icon="ri-cake-line"
    >
      1 Year
    </VChip>

    <VChip
      color="success"
      prepend-icon="ri-notification-line"
    >
      Notification
    </VChip>

    <VChip
      color="info"
      prepend-icon="ri-message-line"
    >
      Message
    </VChip>

    <VChip
      color="warning"
      prepend-icon="ri-error-warning-line"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      prepend-icon="ri-error-warning-line"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip prepend-icon="ri-user-line">
      Account
    </VChip>

    <VChip
      color="primary"
      prepend-icon="ri-star-line"
    >
      Premium
    </VChip>

    <VChip
      color="secondary"
      prepend-icon="ri-cake-line"
    >
      1 Year
    </VChip>

    <VChip
      color="success"
      prepend-icon="ri-notification-line"
    >
      Notification
    </VChip>

    <VChip
      color="info"
      prepend-icon="ri-message-line"
    >
      Message
    </VChip>

    <VChip
      color="warning"
      prepend-icon="ri-error-warning-line"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      prepend-icon="ri-error-warning-line"
    >
      Error
    </VChip>
  </div>
</template>
`},Ae=r("p",null,[a("Use "),r("code",null,"color"),a(" prop to change the background color of chips.")],-1),Te=r("p",null,[a("Use "),r("code",null,"elevated"),a(" variant option to create filled chips.")],-1),je=r("p",null,[a("Use "),r("code",null,"outlined"),a(" variant option to create outline border chips.")],-1),Be=r("p",null,[a("Label chips use the "),r("code",null,"v-card"),a(" border-radius. Use "),r("code",null,"label"),a(" prop to create label chips.")],-1),Ne=r("p",null,[a("Closable chips can be controlled with a "),r("code",null,"v-model"),a(".")],-1),Je=r("p",null,"Chips can use text or any icon available in the Material Icons font library.",-1),Ue=r("p",null,[a("Use "),r("code",null,"pill"),a(" prop to remove the "),r("code",null,"v-avatar"),a(" padding.")],-1),Fe=r("p",null,[a("The "),r("code",null,"v-chip"),a(" component can have various sizes from "),r("code",null,"x-small"),a(" to "),r("code",null,"x-large"),a(".")],-1),Re=r("p",null,[a("Selects can use "),r("code",null,"chips"),a(" to display the selected data. Try adding your own tags below.")],-1),Ye=r("p",null,[a("Chips can be combined with "),r("code",null,"v-menu"),a(" to enable a specific set of actions for a chip.")],-1),$i=S({__name:"chip",setup(h){return(t,C)=>{const d=Ie,s=R,p=ge,g=fe,y=me,x=ce,c=se,f=oe,P=Q,k=G,D=O;return n(),V(Y,{class:"match-height"},{default:i(()=>[e(m,{cols:"12",md:"6"},{default:i(()=>[e(s,{title:"Color",code:ke},{default:i(()=>[Ae,e(d)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(s,{title:"Elevated",code:De},{default:i(()=>[Te,e(p)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(s,{title:"Outlined",code:We},{default:i(()=>[je,e(g)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(s,{title:"Label",code:we},{default:i(()=>[Be,e(y)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(s,{title:"Closable",code:Pe},{default:i(()=>[Ne,e(x)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(s,{title:"With Icon",code:ze},{default:i(()=>[Je,e(c)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(s,{title:"With Avatar",code:Me},{default:i(()=>[Ue,e(f)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(s,{title:"Sizes",code:Le},{default:i(()=>[Fe,e(P)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(s,{title:"In Selects",code:$e},{default:i(()=>[Re,e(k)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(s,{title:"Expandable",code:Ee},{default:i(()=>[Ye,e(D)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{$i as default};
