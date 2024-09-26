import{V as u}from"./VAutocomplete-DeqSS5r6.js";import{d as f,r as _,o as v,g,n as p,aG as C,f as t,b as e,d7 as N,a0 as T,w as G,s as V,e as i,p as s}from"./main-FCzYu4Z5.js";import{a as I}from"./avatar-1-BpD18F9D.js";import{a as D}from"./avatar-2-7Cb1ulCk.js";import{a as F}from"./avatar-3-D1OxVER-.js";import{a as W}from"./avatar-4-DTtpEczF.js";import{a as R}from"./avatar-5-Dlv_vFhH.js";import{a as H}from"./avatar-6-CtsY7J5w.js";import{a as L}from"./avatar-7-mVVn6NIv.js";import{a as O}from"./avatar-8-D64qtsE2.js";import{V as E}from"./VChip-ChL126MO.js";import{a as q}from"./VList-DBeUyEP9.js";import{a as m,V as y}from"./VRow-DcbkzY-u.js";import{_ as U}from"./AppCardCode.vue_vue_type_style_index_0_lang-ChisEB8j.js";import"./VSelect-B3zOJvEu.js";import"./VTextField-JeOZvJkP.js";/* empty css                   */import"./VCounter-fwUCpOxO.js";import"./VImg-CJF-w0vk.js";import"./VField-Dk2Ak1ql.js";import"./InputIcon-wsmb1BjU.js";import"./easing-CjukEv2V.js";import"./VInput-B2EWUdv0.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-CkzesdKy.js";import"./VMenu-B6LO-Wa5.js";import"./VOverlay-CJoYV0aa.js";import"./delay-ghhtiNk_.js";import"./lazy-s9MkjEdz.js";import"./scopeId-C8kA2Rpd.js";import"./VCheckboxBtn-B0Ml4Fv6.js";import"./VSelectionControl-CjMQjtTf.js";import"./VAvatar-CP8SEjMm.js";import"./filter-D7wIZvCz.js";import"./VSlideGroup-CrEC992E.js";import"./ssrBoot-CaII-3XN.js";import"./VDivider-knA9H03k.js";/* empty css              */import"./vue3-perfect-scrollbar-gC16KFl8.js";import"./VCard-Do568HRS.js";const P=f({__name:"DemoAutocompleteValidation",setup(S){const a=["foo","bar","fizz","buzz"],l=_(["foo"]),c=[o=>!!o.length||"Select at least one option."];return(o,r)=>(v(),g(u,{modelValue:p(l),"onUpdate:modelValue":r[0]||(r[0]=n=>C(l)?l.value=n:null),items:a,rules:c,placeholder:"Select Option",multiple:""},null,8,["modelValue"]))}}),z=f({__name:"DemoAutocompleteStateSelector",setup(S){const a=_(!1),l=_(null),c=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];return(o,r)=>(v(),g(u,{modelValue:p(l),"onUpdate:modelValue":r[1]||(r[1]=n=>C(l)?l.value=n:null),hint:p(a)?"Click the icon to save":"Click the icon to edit",placeholder:"Select Your State",items:c,readonly:!p(a),label:`State — ${p(a)?"Editable":"Readonly"}`,"persistent-hint":"","prepend-icon":"ri-building-line","menu-props":{maxHeight:"200px"}},{append:t(()=>[e(N,{mode:"out-in"},{default:t(()=>[(v(),g(T,{key:`icon-${p(a)}`,color:p(a)?"success":"info",icon:p(a)?"ri-check-line":"ri-edit-circle-line",onClick:r[0]||(r[0]=n=>a.value=!p(a))},null,8,["color","icon"]))]),_:1})]),_:1},8,["modelValue","hint","readonly","label"]))}}),$=f({__name:"DemoAutocompleteAsyncItems",setup(S){const a=_(!1),l=_(),c=_(null),o=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],r=_(o),n=h=>{a.value=!0,setTimeout(()=>{r.value=o.filter(d=>(d||"").toLowerCase().includes((h||"").toLowerCase())),a.value=!1},500)};return G(l,h=>{h&&h!==c.value&&n(h)}),(h,d)=>(v(),g(u,{modelValue:p(c),"onUpdate:modelValue":d[0]||(d[0]=b=>C(c)?c.value=b:null),search:p(l),"onUpdate:search":d[1]||(d[1]=b=>C(l)?l.value=b:null),loading:p(a),items:p(r),placeholder:"Search for a state",label:"What state are you from?",variant:"underlined","menu-props":{maxHeight:"200px"}},null,8,["modelValue","search","loading","items"]))}}),Y=f({__name:"DemoAutocompleteSlots",setup(S){const a=_(["Sandra Adams","Britta Holt"]),l=[{name:"Sandra Adams",group:"Group 1",avatar:I},{name:"Ali Connors",group:"Group 1",avatar:D},{name:"Trevor Hansen",group:"Group 1",avatar:F},{name:"Tucker Smith",group:"Group 1",avatar:W},{name:"Britta Holt",group:"Group 2",avatar:R},{name:"Jane Smith ",group:"Group 2",avatar:H},{name:"John Smith",group:"Group 2",avatar:L},{name:"Sandra Williams",group:"Group 2",avatar:O}];return(c,o)=>(v(),g(u,{modelValue:p(a),"onUpdate:modelValue":o[0]||(o[0]=r=>C(a)?a.value=r:null),chips:"","closable-chips":"",multiple:"",items:l,"item-title":"name","item-value":"name",placeholder:"Select User",label:"Select"},{chip:t(({props:r,item:n})=>[e(E,V(r,{"prepend-avatar":n.raw.avatar,text:n.raw.name}),null,16,["prepend-avatar","text"])]),item:t(({props:r,item:n})=>{var h,d,b;return[e(q,V(r,{"prepend-avatar":(h=n==null?void 0:n.raw)==null?void 0:h.avatar,title:(d=n==null?void 0:n.raw)==null?void 0:d.name,subtitle:(b=n==null?void 0:n.raw)==null?void 0:b.group}),null,16,["prepend-avatar","title","subtitle"])]}),_:1},8,["modelValue"]))}}),j=f({__name:"DemoAutocompleteCustomFilter",setup(S){const a=[{name:"Florida",abbr:"FL",id:1},{name:"Georgia",abbr:"GA",id:2},{name:"Nebraska",abbr:"NE",id:3},{name:"California",abbr:"CA",id:4},{name:"New York",abbr:"NY",id:5}];function l(c,o,r){const n=r.raw.name.toLowerCase(),h=r.raw.abbr.toLowerCase(),d=o.toLowerCase();return n.includes(d)||h.includes(d)}return(c,o)=>(v(),g(u,{label:"States",items:a,"custom-filter":l,"item-title":"name","item-value":"abbr",placeholder:"Select State"}))}}),B=f({__name:"DemoAutocompleteChips",setup(S){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(l,c)=>(v(),g(u,{label:"States",items:a,placeholder:"Select State",chips:"",multiple:""}))}}),J=f({__name:"DemoAutocompleteClearable",setup(S){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(l,c)=>(v(),g(u,{label:"States",items:a,multiple:"",placeholder:"Select State",clearable:""}))}}),K=f({__name:"DemoAutocompleteMultiple",setup(S){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(l,c)=>(v(),g(u,{label:"States",items:a,placeholder:"Select State",multiple:""}))}}),X=f({__name:"DemoAutocompleteVariant",setup(S){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(l,c)=>(v(),g(y,null,{default:t(()=>[e(m,{cols:"12",md:"6"},{default:t(()=>[e(u,{variant:"solo",label:"solo",items:a,placeholder:"Select State"})]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(u,{variant:"outlined",label:"outlined",placeholder:"Select State",items:a})]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(u,{variant:"underlined",label:"underlined",placeholder:"Select State",items:a})]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(u,{variant:"filled",label:"filled",placeholder:"Select State",items:a})]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(u,{variant:"plain",label:"plain",placeholder:"Select State",items:a})]),_:1})]),_:1}))}}),Q=f({__name:"DemoAutocompleteDensity",setup(S){const a=_("Florida"),l=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(c,o)=>(v(),g(u,{modelValue:p(a),"onUpdate:modelValue":o[0]||(o[0]=r=>C(a)?a.value=r:null),label:"States",density:"compact",placeholder:"Select State",items:l},null,8,["modelValue"]))}}),Z=f({__name:"DemoAutocompleteBasic",setup(S){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(l,c)=>(v(),g(u,{label:"States",items:a,placeholder:"Select State"}))}}),ee={ts:`<script setup lang="ts">
const loading = ref(false)
const search = ref()
const select = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = (query: string) => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    placeholder="Search for a state"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`,js:`<script setup>
const loading = ref(false)
const search = ref()
const select = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = query => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    placeholder="Search for a state"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`},ae={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
  />
</template>
`},te={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    chips
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    chips
    multiple
  />
</template>
`},oe={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    multiple
    placeholder="Select State"
    clearable
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    multiple
    placeholder="Select State"
    clearable
  />
</template>
`},ie={ts:`<script setup lang="ts">
const states = [
  { name: 'Florida', abbr: 'FL', id: 1 },
  { name: 'Georgia', abbr: 'GA', id: 2 },
  { name: 'Nebraska', abbr: 'NE', id: 3 },
  { name: 'California', abbr: 'CA', id: 4 },
  { name: 'New York', abbr: 'NY', id: 5 },
]

function customFilter(itemTitle: any, queryText: any, item: any) {
  const textOne = item.raw.name.toLowerCase()
  const textTwo = item.raw.abbr.toLowerCase()
  const searchText = queryText.toLowerCase()

  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const states = [
  {
    name: 'Florida',
    abbr: 'FL',
    id: 1,
  },
  {
    name: 'Georgia',
    abbr: 'GA',
    id: 2,
  },
  {
    name: 'Nebraska',
    abbr: 'NE',
    id: 3,
  },
  {
    name: 'California',
    abbr: 'CA',
    id: 4,
  },
  {
    name: 'New York',
    abbr: 'NY',
    id: 5,
  },
]

function customFilter(itemTitle, queryText, item) {
  const textOne = item.raw.name.toLowerCase()
  const textTwo = item.raw.abbr.toLowerCase()
  const searchText = queryText.toLowerCase()
  
  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
    placeholder="Select State"
  />
</template>
`},le={ts:`<script setup lang="ts">
const select = ref('Florida')
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    label="States"
    density="compact"
    placeholder="Select State"
    :items="items"
  />
</template>
`,js:`<script setup>
const select = ref('Florida')

const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    label="States"
    density="compact"
    placeholder="Select State"
    :items="items"
  />
</template>
`},se={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    multiple
  />
</template>
`},re={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const friends = ref(['Sandra Adams', 'Britta Holt'])

const people = [
  { name: 'Sandra Adams', group: 'Group 1', avatar: avatar1 },
  { name: 'Ali Connors', group: 'Group 1', avatar: avatar2 },
  { name: 'Trevor Hansen', group: 'Group 1', avatar: avatar3 },
  { name: 'Tucker Smith', group: 'Group 1', avatar: avatar4 },
  { name: 'Britta Holt', group: 'Group 2', avatar: avatar5 },
  { name: 'Jane Smith ', group: 'Group 2', avatar: avatar6 },
  { name: 'John Smith', group: 'Group 2', avatar: avatar7 },
  { name: 'Sandra Williams', group: 'Group 2', avatar: avatar8 },
]
<\/script>

<template>
  <VAutocomplete
    v-model="friends"
    chips
    closable-chips
    multiple
    :items="people"
    item-title="name"
    item-value="name"
    placeholder="Select User"
    label="Select"
  >
    <template #chip="{ props, item }">
      <VChip
        v-bind="props"
        :prepend-avatar="item.raw.avatar"
        :text="item.raw.name"
      />
    </template>

    <template #item="{ props, item }">
      <VListItem
        v-bind="props"
        :prepend-avatar="item?.raw?.avatar"
        :title="item?.raw?.name"
        :subtitle="item?.raw?.group"
      />
    </template>
  </VAutocomplete>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const friends = ref([
  'Sandra Adams',
  'Britta Holt',
])

const people = [
  {
    name: 'Sandra Adams',
    group: 'Group 1',
    avatar: avatar1,
  },
  {
    name: 'Ali Connors',
    group: 'Group 1',
    avatar: avatar2,
  },
  {
    name: 'Trevor Hansen',
    group: 'Group 1',
    avatar: avatar3,
  },
  {
    name: 'Tucker Smith',
    group: 'Group 1',
    avatar: avatar4,
  },
  {
    name: 'Britta Holt',
    group: 'Group 2',
    avatar: avatar5,
  },
  {
    name: 'Jane Smith ',
    group: 'Group 2',
    avatar: avatar6,
  },
  {
    name: 'John Smith',
    group: 'Group 2',
    avatar: avatar7,
  },
  {
    name: 'Sandra Williams',
    group: 'Group 2',
    avatar: avatar8,
  },
]
<\/script>

<template>
  <VAutocomplete
    v-model="friends"
    chips
    closable-chips
    multiple
    :items="people"
    item-title="name"
    item-value="name"
    placeholder="Select User"
    label="Select"
  >
    <template #chip="{ props, item }">
      <VChip
        v-bind="props"
        :prepend-avatar="item.raw.avatar"
        :text="item.raw.name"
      />
    </template>

    <template #item="{ props, item }">
      <VListItem
        v-bind="props"
        :prepend-avatar="item?.raw?.avatar"
        :title="item?.raw?.name"
        :subtitle="item?.raw?.group"
      />
    </template>
  </VAutocomplete>
</template>
`},ne={ts:`<script setup lang="ts">
const isEditing = ref(false)
const selectedState = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    v-model="selectedState"
    :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
    placeholder="Select Your State"
    :items="states"
    :readonly="!isEditing"
    :label="\`State — \${isEditing ? 'Editable' : 'Readonly'}\`"
    persistent-hint
    prepend-icon="ri-building-line"
    :menu-props="{ maxHeight: '200px' }"
  >
    <template #append>
      <VSlideXReverseTransition mode="out-in">
        <VIcon
          :key="\`icon-\${isEditing}\`"
          :color="isEditing ? 'success' : 'info'"
          :icon="isEditing ? 'ri-check-line' : 'ri-edit-circle-line'"
          @click="isEditing = !isEditing"
        />
      </VSlideXReverseTransition>
    </template>
  </VAutocomplete>
</template>
`,js:`<script setup>
const isEditing = ref(false)
const selectedState = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    v-model="selectedState"
    :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
    placeholder="Select Your State"
    :items="states"
    :readonly="!isEditing"
    :label="\`State — \${isEditing ? 'Editable' : 'Readonly'}\`"
    persistent-hint
    prepend-icon="ri-building-line"
    :menu-props="{ maxHeight: '200px' }"
  >
    <template #append>
      <VSlideXReverseTransition mode="out-in">
        <VIcon
          :key="\`icon-\${isEditing}\`"
          :color="isEditing ? 'success' : 'info'"
          :icon="isEditing ? 'ri-check-line' : 'ri-edit-circle-line'"
          @click="isEditing = !isEditing"
        />
      </VSlideXReverseTransition>
    </template>
  </VAutocomplete>
</template>
`},ce={ts:`<script setup lang="ts">
const items = ['foo', 'bar', 'fizz', 'buzz']
const values = ref(['foo'])
const nameRules = [(v: string) => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <VAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    placeholder="Select Option"
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref(['foo'])
const nameRules = [v => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <VAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    placeholder="Select Option"
    multiple
  />
</template>
`},me={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="solo"
        :items="items"
        placeholder="Select State"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="outlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="underlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="filled"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="plain"
        placeholder="Select State"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="solo"
        :items="items"
        placeholder="Select State"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="outlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="underlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="filled"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="plain"
        placeholder="Select State"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`},pe=i("p",null,[s(" The "),i("code",null," v-autocomplete "),s(" component offers simple and flexible type-ahead functionality. This is useful when searching large sets of data or even dynamically fetching information from an API. ")],-1),ue=i("p",null,[s(" You can use "),i("code",null," density "),s(" prop to adjusts vertical spacing within the component. Available options are: "),i("code",null,"default"),s(", "),i("code",null,"comfortable"),s(", and "),i("code",null,"compact"),s(". ")],-1),de=i("p",null,[s("Use "),i("code",null,"solo"),s(", "),i("code",null,"outlined"),s(", "),i("code",null,"underlined"),s(", "),i("code",null,"filled"),s(" and "),i("code",null,"plain"),s(" options of "),i("code",null,"variant"),s(" prop to change the look of Autocomplete. ")],-1),he=i("p",null,[s("Use "),i("code",null,"multiple"),s(" prop to select multiple. Accepts array for value")],-1),ve=i("p",null,[s("Use "),i("code",null,"clearable"),s(" prop to add input clear functionality.")],-1),ge=i("p",null,[s("Use "),i("code",null," chips "),s(" prop to use chips in select.")],-1),fe=i("p",null,[s("The "),i("code",null," custom-filter "),s(" prop can be used to filter each individual item with custom logic.In example we will filter state based on their name and abbreviations ")],-1),Se=i("p",null,"With the power of slots, you can customize the visual output of the select. In this example we add a profile picture for both the chips and list items using their props. ",-1),_e=i("p",null,"Sometimes you need to load data externally based upon a search query. ",-1),be=i("p",null,"Using a combination of v-autocomplete slots and transitions, you can create a stylish toggle able autocomplete field such as below state selector.",-1),Ce=i("p",null,[s("Use "),i("code",null,"rules"),s(" prop to validate autocomplete. Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message.")],-1),na=f({__name:"autocomplete",setup(S){return(a,l)=>{const c=Z,o=U,r=Q,n=X,h=K,d=J,b=B,A=j,w=Y,x=$,k=z,M=P;return v(),g(y,{class:"match-height"},{default:t(()=>[e(m,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Basic",code:ae},{default:t(()=>[pe,e(c)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Density",code:le},{default:t(()=>[ue,e(r)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"12"},{default:t(()=>[e(o,{title:"Variant",code:me},{default:t(()=>[de,e(n)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Multiple",code:se},{default:t(()=>[he,e(h)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Clearable",code:oe},{default:t(()=>[ve,e(d)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Chips",code:te},{default:t(()=>[ge,e(b)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Custom-Filter",code:ie},{default:t(()=>[fe,e(A)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Slots",code:re},{default:t(()=>[Se,e(w)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Async items",code:ee},{default:t(()=>[_e,e(x)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"State Selector",code:ne},{default:t(()=>[be,e(k)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"validation",code:ce},{default:t(()=>[Ce,e(M)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{na as default};
