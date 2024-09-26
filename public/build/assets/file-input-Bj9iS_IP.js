import{V as s}from"./VFileInput-CIoW3ZeP.js";import{d as f,r as h,w as j,o as c,g as p,n as F,aG as V,f as n,c as S,F as N,i as L,p as l,v as U,b as e,e as t}from"./main-FCzYu4Z5.js";import{V as k}from"./VChip-ChL126MO.js";import{_ as m}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a,V as b}from"./VRow-DcbkzY-u.js";import{_ as A}from"./AppCardCode.vue_vue_type_style_index_0_lang-ChisEB8j.js";import"./VField-Dk2Ak1ql.js";import"./InputIcon-wsmb1BjU.js";import"./easing-CjukEv2V.js";import"./VInput-B2EWUdv0.js";import"./VImg-CJF-w0vk.js";import"./forwardRefs-C-GTDzx5.js";import"./VCounter-fwUCpOxO.js";import"./VSlideGroup-CrEC992E.js";import"./VAvatar-CP8SEjMm.js";/* empty css              */import"./vue3-perfect-scrollbar-gC16KFl8.js";import"./VCard-Do568HRS.js";import"./VDivider-knA9H03k.js";const B=f({__name:"DemoFileInputLoading",setup(u){const i=h(),r=h(!0);return j(i,()=>{r.value=!i.value[0]}),(d,o)=>(c(),p(s,{modelValue:F(i),"onUpdate:modelValue":o[0]||(o[0]=_=>V(i)?i.value=_:null),loading:F(r),color:"primary",label:"File input"},null,8,["modelValue","loading"]))}}),P=f({__name:"DemoFileInputSelectionSlot",setup(u){const i=h([]);return(r,d)=>(c(),p(s,{modelValue:F(i),"onUpdate:modelValue":d[0]||(d[0]=o=>V(i)?i.value=o:null),multiple:"",placeholder:"Upload your documents",label:"File input","prepend-icon":"ri-attachment-line"},{selection:n(({fileNames:o})=>[(c(!0),S(N,null,L(o,_=>(c(),p(k,{key:_,label:"",size:"small",variant:"outlined",color:"primary",class:"me-2"},{default:n(()=>[l(U(_),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]))}}),R=f({__name:"DemoFileInputValidation",setup(u){const i=[r=>!r||!r.length||r[0].size<1e6||"Avatar size should be less than 1 MB!"];return(r,d)=>(c(),p(s,{rules:i,label:"Avatar",accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"ri-camera-2-line"}))}}),M={};function T(u,i){return c(),p(s,{"show-size":"",label:"File input"})}const O=m(M,[["render",T]]),Y={};function E(u,i){return c(),p(s,{label:"File input","prepend-icon":"ri-camera-line"})}const G=m(Y,[["render",E]]),W={};function q(u,i){return c(),p(s,{multiple:"",label:"File input"})}const H=m(W,[["render",q]]),J={};function K(u,i){return c(),p(s,{"show-size":"",counter:"",multiple:"",label:"File input"})}const Q=m(J,[["render",K]]),X={};function Z(u,i){return c(),p(s,{chips:"",label:"File input w/ chips"})}const ee=m(X,[["render",Z]]),le={};function te(u,i){return c(),p(s,{accept:"image/*",label:"File input"})}const ne=m(le,[["render",te]]),ie={};function oe(u,i){return c(),p(b,null,{default:n(()=>[e(a,{cols:"12",sm:"6"},{default:n(()=>[e(s,{label:"Outlined"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:n(()=>[e(s,{label:"Filled",variant:"filled"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:n(()=>[e(s,{label:"Solo",variant:"solo"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:n(()=>[e(s,{label:"Plain",variant:"plain"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:n(()=>[e(s,{label:"Underlined",variant:"underlined"})]),_:1})]),_:1})}const ae=m(ie,[["render",oe]]),se={};function ce(u,i){return c(),p(s,{label:"File input",density:"compact"})}const pe=m(se,[["render",ce]]),ue={};function re(u,i){return c(),p(s,{label:"File input"})}const me=m(ue,[["render",re]]),de={ts:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`},_e={ts:`<template>
  <VFileInput label="File input" />
</template>
`,js:`<template>
  <VFileInput label="File input" />
</template>
`},fe={ts:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`,js:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`},he={ts:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`},Fe={ts:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`},Ve={ts:`<script setup lang="ts">
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`,js:`<script setup>
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`},be={ts:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`},ge={ts:`<template>
  <VFileInput
    label="File input"
    prepend-icon="ri-camera-line"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    prepend-icon="ri-camera-line"
  />
</template>
`},Ie={ts:`<script lang="ts" setup>
const files = ref<File[]>([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="ri-attachment-line"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`,js:`<script setup>
const files = ref([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="ri-attachment-line"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`},ve={ts:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`},Ce={ts:`<script lang="ts" setup>
const rules = [
  (fileList: FileList) => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!',
]
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="ri-camera-2-line"
  />
</template>
`,js:`<script setup>
const rules = [fileList => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!']
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="ri-camera-2-line"
  />
</template>
`},ye={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`},we=t("p",null,[l("The "),t("code",null,"v-file-input"),l(" component is used to selecting files.")],-1),ze=t("p",null,[l("You can reduces the file input height with "),t("code",null,"density"),l(" prop. Available options are: "),t("code",null,"default"),l(", "),t("code",null,"comfortable"),l(", and "),t("code",null,"compact"),l(".")],-1),$e=t("p",null,[l("use "),t("code",null,"solo"),l(", "),t("code",null,"filled"),l(", "),t("code",null,"outlined"),l(", "),t("code",null,"plain"),l(" and "),t("code",null,"underlined"),l(" option of "),t("code",null,"variant"),l(" prop to change the look of file input.")],-1),De=t("p",null,[t("code",null,"v-file-input"),l(" component can accept only specific media formats/file types if you want.")],-1),xe=t("p",null,[l("Use "),t("code",null,"chip"),l(" prop to display the selected file as a chip.")],-1),je=t("p",null,[l("When using the "),t("code",null,"show-size"),l(" property along with "),t("code",null,"counter"),l(", the total number of files and size will be displayed under the input.")],-1),Se=t("p",null,[l(" The "),t("code",null,"v-file-input"),l(" can contain multiple files at the same time when using the "),t("code",null,"multiple"),l(" prop. ")],-1),Ne=t("p",null,[l(" The "),t("code",null,"v-file-input"),l(" has a default "),t("code",null,"prepend-icon"),l(" that can be set on the component or adjusted globally. ")],-1),Le=t("p",null,[l("The displayed size of the selected file(s) can be configured with the "),t("code",null,"show-size"),l(" property.")],-1),Ue=t("p",null,[l("You can use the "),t("code",null,"rules"),l(" prop to create your own custom validation parameters.")],-1),ke=t("p",null,[l("Using the "),t("code",null,"selection"),l(" slot, you can customize the appearance of your input selections.")],-1),Ae=t("p",null,[l("Use "),t("code",null,"loading"),l(" prop to displays linear progress bar.")],-1),tl=f({__name:"file-input",setup(u){return(i,r)=>{const d=me,o=A,_=pe,g=ae,I=ne,v=ee,C=Q,y=H,w=G,z=O,$=R,D=P,x=B;return c(),p(b,{class:"match-height"},{default:n(()=>[e(a,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Basic",code:_e},{default:n(()=>[we,e(d)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Density",code:Fe},{default:n(()=>[ze,e(_)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12"},{default:n(()=>[e(o,{title:"Variant",code:ye},{default:n(()=>[$e,e(g)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Accept",code:de},{default:n(()=>[De,e(I)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Chips",code:fe},{default:n(()=>[xe,e(v)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Counter",code:he},{default:n(()=>[je,e(C)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Multiple",code:be},{default:n(()=>[Se,e(y)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Prepend icon",code:ge},{default:n(()=>[Ne,e(w)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Show size",code:ve},{default:n(()=>[Le,e(z)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Validation",code:Ce},{default:n(()=>[Ue,e($)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Selection slot",code:Ie},{default:n(()=>[ke,e(D)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Loading",code:Ve},{default:n(()=>[Ae,e(x)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{tl as default};
