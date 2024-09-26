import{V as d}from"./VCombobox-BiZZ5GS4.js";import{d as V,r as u,o as b,g,n as r,aG as p,w as I,aK as P,f as m,b as l,p as a,e as i,v as C}from"./main-DoQFmMsa.js";import{a as D,b as w}from"./VList-jAkofN4n.js";import{a as n,V as y}from"./VRow-CBIZXy0V.js";import{V as U}from"./VChip-D3GIz1VX.js";import{V as L}from"./VAvatar-A7ztkq2k.js";import{_ as k}from"./AppCardCode.vue_vue_type_style_index_0_lang-CmwJwIsY.js";import"./VSelect-DD45070D.js";import"./VTextField-C5K-JLC3.js";/* empty css                   */import"./VCounter-OXl0Qa9T.js";import"./VImg-BvvxBpKO.js";import"./VField-BD5A6g5X.js";import"./InputIcon-C91L1USK.js";import"./easing-CjukEv2V.js";import"./VInput-j0tWo3aL.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-Cr9rcsZj.js";import"./VMenu-Dwo0kCga.js";import"./VOverlay-BtLUM5vY.js";import"./delay-Dhu81iSy.js";import"./lazy-CojwJwNx.js";import"./scopeId-C1Mw3z0g.js";import"./VCheckboxBtn-ybuIpKJx.js";import"./VSelectionControl-CA9osU1B.js";import"./filter--_JGeJ5X.js";import"./ssrBoot-CpQaGIBj.js";import"./VDivider-CiGpRMeQ.js";/* empty css              */import"./VSlideGroup-DZ8i23BH.js";import"./vue3-perfect-scrollbar-Dah25qMm.js";import"./VCard-CvMXks-w.js";const A=V({__name:"DemoComboboxClearable",setup(f){const e=u(["Vuetify","Programming"]),s=["Programming","Design","Vue","Vuetify"];return(c,t)=>(b(),g(d,{modelValue:r(e),"onUpdate:modelValue":t[0]||(t[0]=o=>p(e)?e.value=o:null),items:s,label:"Combobox",multiple:"",placeholder:"deployment",clearable:""},null,8,["modelValue"]))}}),R=i("kbd",null,"enter",-1),N=V({__name:"DemoComboboxNoDataWithChips",setup(f){const e=["Gaming","Programming","Vue","Vuetify"],s=u(["Vuetify"]),c=u(null);return I(s,t=>{t.length>5&&P(()=>s.value.pop())}),(t,o)=>(b(),g(d,{modelValue:r(s),"onUpdate:modelValue":o[0]||(o[0]=h=>p(s)?s.value=h:null),"search-input":r(c),"onUpdate:searchInput":o[1]||(o[1]=h=>p(c)?c.value=h:null),items:e,"hide-selected":"","hide-no-data":!1,placeholder:"deployment",hint:"Maximum of 5 tags",label:"Add some tags",multiple:"","persistent-hint":""},{"no-data":m(()=>[l(D,null,{default:m(()=>[l(w,null,{default:m(()=>[a(' No results matching "'),i("strong",null,C(r(c)),1),a('". Press '),R,a(" to create a new one ")]),_:1})]),_:1})]),_:1},8,["modelValue","search-input"]))}}),T=V({__name:"DemoComboboxMultiple",setup(f){const e=u(["Vuetify","Programming"]),s=["Programming","Design","Vue","Vuetify"];return(c,t)=>(b(),g(y,null,{default:m(()=>[l(n,{cols:"12"},{default:m(()=>[l(d,{modelValue:r(e),"onUpdate:modelValue":t[0]||(t[0]=o=>p(e)?e.value=o:null),items:s,placeholder:"deployment",label:"Select a favorite activity or create a new one",multiple:""},null,8,["modelValue"])]),_:1}),l(n,{cols:"12"},{default:m(()=>[l(d,{modelValue:r(e),"onUpdate:modelValue":t[1]||(t[1]=o=>p(e)?e.value=o:null),items:s,placeholder:"deployment",label:"I use chips",multiple:"",chips:""},null,8,["modelValue"])]),_:1}),l(n,{cols:"12"},{default:m(()=>[l(d,{modelValue:r(e),"onUpdate:modelValue":t[2]||(t[2]=o=>p(e)?e.value=o:null),placeholder:"deployment",label:"I'm readonly",chips:"",multiple:"",readonly:""},null,8,["modelValue"])]),_:1}),l(n,{cols:"12"},{default:m(()=>[l(d,{modelValue:r(e),"onUpdate:modelValue":t[3]||(t[3]=o=>p(e)?e.value=o:null),items:s,placeholder:"deployment",label:"I use selection slot",multiple:""},{selection:m(({item:o})=>[l(U,{size:"small"},{prepend:m(()=>[l(L,{start:"",color:"primary"},{default:m(()=>[a(C(String(o.title).charAt(0).toUpperCase()),1)]),_:2},1024)]),default:m(()=>[a(" "+C(o.title),1)]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),$=V({__name:"DemoComboboxVariant",setup(f){const e=u(["Programming"]),s=["Programming","Design","Vue","Vuetify"];return(c,t)=>(b(),g(y,null,{default:m(()=>[l(n,{cols:"12"},{default:m(()=>[l(d,{modelValue:r(e),"onUpdate:modelValue":t[0]||(t[0]=o=>p(e)?e.value=o:null),items:s,multiple:"",chips:"",placeholder:"deployment",variant:"solo",label:"solo"},null,8,["modelValue"])]),_:1}),l(n,{cols:"12"},{default:m(()=>[l(d,{modelValue:r(e),"onUpdate:modelValue":t[1]||(t[1]=o=>p(e)?e.value=o:null),multiple:"",chips:"",items:s,placeholder:"deployment",variant:"outlined",label:"Outlined"},null,8,["modelValue"])]),_:1}),l(n,{cols:"12"},{default:m(()=>[l(d,{modelValue:r(e),"onUpdate:modelValue":t[2]||(t[2]=o=>p(e)?e.value=o:null),multiple:"",chips:"",items:s,placeholder:"deployment",variant:"underlined",label:"Underlined"},null,8,["modelValue"])]),_:1}),l(n,{cols:"12"},{default:m(()=>[l(d,{modelValue:r(e),"onUpdate:modelValue":t[3]||(t[3]=o=>p(e)?e.value=o:null),multiple:"",chips:"",items:s,placeholder:"deployment",variant:"filled",label:"Filled"},null,8,["modelValue"])]),_:1}),l(n,{cols:"12"},{default:m(()=>[l(d,{modelValue:r(e),"onUpdate:modelValue":t[4]||(t[4]=o=>p(e)?e.value=o:null),multiple:"",chips:"",items:s,variant:"plain",placeholder:"deployment",label:"Plain"},null,8,["modelValue"])]),_:1})]),_:1}))}}),S=V({__name:"DemoComboboxDensity",setup(f){const e=u(["Vuetify","Programming"]),s=["Programming","Design","Vue","Vuetify"];return(c,t)=>(b(),g(d,{modelValue:r(e),"onUpdate:modelValue":t[0]||(t[0]=o=>p(e)?e.value=o:null),items:s,label:"Combobox",density:"compact",placeholder:"deployment",multiple:""},null,8,["modelValue"]))}}),j=V({__name:"DemoComboboxBasic",setup(f){const e=u("Programming"),s=["Programming","Design","Vue","Vuetify"];return(c,t)=>(b(),g(d,{modelValue:r(e),"onUpdate:modelValue":t[0]||(t[0]=o=>p(e)?e.value=o:null),items:s,placeholder:"deployment"},null,8,["modelValue"]))}}),B={ts:`<script lang="ts" setup>
const selectedItem = ref('Programming')
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VCombobox
    v-model="selectedItem"
    :items="items"
    placeholder="deployment"
  />
</template>
`,js:`<script setup>
const selectedItem = ref('Programming')

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VCombobox
    v-model="selectedItem"
    :items="items"
    placeholder="deployment"
  />
</template>
`},M={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    placeholder="deployment"
    clearable
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    placeholder="deployment"
    clearable
  />
</template>
`},G={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    placeholder="deployment"
    multiple
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    placeholder="deployment"
    multiple
  />
</template>
`},W={ts:`<script lang="ts" setup>
const selectedItem = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        placeholder="deployment"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip size="small">
            <template #prepend>
              <VAvatar
                start
                color="primary"
              >
                {{ String(item.title).charAt(0).toUpperCase() }}
              </VAvatar>
            </template>

            {{ item.title }}
          </VChip>
        </template>
      </VCombobox>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        placeholder="deployment"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip size="small">
            <template #prepend>
              <VAvatar
                start
                color="primary"
              >
                {{ String(item.title).charAt(0).toUpperCase() }}
              </VAvatar>
            </template>

            {{ item.title }}
          </VChip>
        </template>
      </VCombobox>
    </VCol>
  </VRow>
</template>
`},z={ts:`<script lang="ts" setup>
const items = ['Gaming', 'Programming', 'Vue', 'Vuetify']
const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <VCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    placeholder="deployment"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </VCombobox>
</template>
`,js:`<script setup>
const items = [
  'Gaming',
  'Programming',
  'Vue',
  'Vuetify',
]

const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <VCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    placeholder="deployment"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </VCombobox>
</template>
`},F={ts:`<script lang="ts" setup>
const selectedItem = ref(['Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        chips
        placeholder="deployment"
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        placeholder="deployment"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        placeholder="deployment"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        placeholder="deployment"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="plain"
        placeholder="deployment"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref(['Programming'])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        chips
        placeholder="deployment"
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        placeholder="deployment"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        placeholder="deployment"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        placeholder="deployment"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="plain"
        placeholder="deployment"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`},O=i("p",null,"With Combobox, you can allow a user to create new values that may not be present in a provided items list.",-1),K=i("p",null,[a(" You can use "),i("code",null,"Density"),a(" prop to reduce combobox height and lower max height of list items. Available options are: "),i("code",null,"default"),a(", "),i("code",null,"comfortable"),a(", and "),i("code",null,"compact"),a(". ")],-1),Y=i("p",null,[a("Use "),i("code",null,"solo"),a(", "),i("code",null,"outlined"),a(", "),i("code",null,"underlined"),a(", "),i("code",null,"filled"),a(" and "),i("code",null,"plain"),a(" options of "),i("code",null,"variant"),a(" prop to change the look of combobox. ")],-1),q=i("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1),E=i("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1),H=i("p",null,[a("Use "),i("code",null,"clearable"),a(" prop to clear combobox.")],-1),Ue=V({__name:"combobox",setup(f){return(e,s)=>{const c=j,t=k,o=S,h=$,_=T,v=N,x=A;return b(),g(y,{class:"match-height"},{default:m(()=>[l(n,{cols:"12",md:"6"},{default:m(()=>[l(t,{title:"Basic",code:B},{default:m(()=>[O,l(c)]),_:1},8,["code"])]),_:1}),l(n,{cols:"12",md:"6"},{default:m(()=>[l(t,{title:"Density",code:G},{default:m(()=>[K,l(o)]),_:1},8,["code"])]),_:1}),l(n,{cols:"12",md:"6"},{default:m(()=>[l(t,{title:"Variant",code:F},{default:m(()=>[Y,l(h)]),_:1},8,["code"])]),_:1}),l(n,{cols:"12",md:"6"},{default:m(()=>[l(t,{title:"Multiple",code:W},{default:m(()=>[q,l(_)]),_:1},8,["code"])]),_:1}),l(n,{cols:"12",md:"6"},{default:m(()=>[l(t,{title:"No data with chips",code:z},{default:m(()=>[E,l(v)]),_:1},8,["code"])]),_:1}),l(n,{cols:"12",md:"6"},{default:m(()=>[l(t,{title:"Clearable",code:M},{default:m(()=>[H,l(x)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Ue as default};
