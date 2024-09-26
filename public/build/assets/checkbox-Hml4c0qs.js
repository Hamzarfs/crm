import{a as x,V as C}from"./VRow-DcbkzY-u.js";import{V as u}from"./VCheckbox-C2xYsN31.js";import{V as _}from"./VTextField-JeOZvJkP.js";import{d as k,r as m,o as h,c as v,b as e,f as d,n as a,aG as b,F as V,g,e as s,p as i,s as O,aL as I,v as U,i as $}from"./main-FCzYu4Z5.js";import{V as z}from"./VTooltip-SL5-U2jd.js";import{_ as D}from"./AppCardCode.vue_vue_type_style_index_0_lang-ChisEB8j.js";/* empty css              */import"./VCheckboxBtn-B0Ml4Fv6.js";import"./VSelectionControl-CjMQjtTf.js";import"./InputIcon-wsmb1BjU.js";import"./VInput-B2EWUdv0.js";import"./VImg-CJF-w0vk.js";/* empty css                   */import"./VCounter-fwUCpOxO.js";import"./VField-Dk2Ak1ql.js";import"./easing-CjukEv2V.js";import"./forwardRefs-C-GTDzx5.js";import"./VOverlay-CJoYV0aa.js";import"./delay-ghhtiNk_.js";import"./lazy-s9MkjEdz.js";import"./scopeId-C8kA2Rpd.js";import"./vue3-perfect-scrollbar-gC16KFl8.js";import"./VCard-Do568HRS.js";import"./VAvatar-CP8SEjMm.js";import"./VDivider-knA9H03k.js";const J=k({__name:"DemoCheckboxInlineTextField",setup(f){const o=m(!0),t=m(!1);return(r,l)=>(h(),v(V,null,[e(C,null,{default:d(()=>[e(x,{sm:"1",cols:"2"},{default:d(()=>[e(u,{modelValue:a(o),"onUpdate:modelValue":l[0]||(l[0]=c=>b(o)?o.value=c:null)},null,8,["modelValue"])]),_:1}),e(x,{sm:"11",cols:"10"},{default:d(()=>[e(_,{label:"Include files",placeholder:"Placeholder Text"})]),_:1})]),_:1}),e(C,null,{default:d(()=>[e(x,{cols:"2",sm:"1"},{default:d(()=>[e(u,{modelValue:a(t),"onUpdate:modelValue":l[1]||(l[1]=c=>b(t)?t.value=c:null)},null,8,["modelValue"])]),_:1}),e(x,{cols:"10",sm:"11"},{default:d(()=>[e(_,{disabled:!a(t),label:"I only work if you check the box",placeholder:"Placeholder Text"},null,8,["disabled"])]),_:1})]),_:1})],64))}}),A=k({__name:"DemoCheckboxLabelSlot",setup(f){const o=m(!1);return(t,r)=>(h(),g(u,{modelValue:a(o),"onUpdate:modelValue":r[1]||(r[1]=l=>b(o)?o.value=l:null)},{label:d(()=>[s("div",null,[i(" I agree that "),e(z,{location:"bottom"},{activator:d(({props:l})=>[s("a",O({href:"https://vuetifyjs.com/",target:"_blank",rel:"noopener noreferrer"},l,{onClick:r[0]||(r[0]=I(()=>{},["stop"]))})," Vuetify ",16)]),default:d(()=>[i(" Opens in new window ")]),_:1}),i(" is awesome ")])]),_:1},8,["modelValue"]))}}),F={class:"demo-space-x"},E=k({__name:"DemoCheckboxStates",setup(f){const o=m(!0),t=m(!0),r=m(!0),l=m(!1);return(c,n)=>(h(),v("div",F,[e(u,{modelValue:a(o),"onUpdate:modelValue":n[0]||(n[0]=p=>b(o)?o.value=p:null),label:"On"},null,8,["modelValue"]),e(u,{modelValue:a(l),"onUpdate:modelValue":n[1]||(n[1]=p=>b(l)?l.value=p:null),label:"Off"},null,8,["modelValue"]),e(u,{indeterminate:a(t),"onUpdate:indeterminate":n[2]||(n[2]=p=>b(t)?t.value=p:null),modelValue:a(t),"onUpdate:modelValue":n[3]||(n[3]=p=>b(t)?t.value=p:null),label:"Indeterminate"},null,8,["indeterminate","modelValue"]),e(u,{"model-value":a(r),disabled:"",label:"On disabled"},null,8,["model-value"]),e(u,{disabled:"",label:"Off disabled"})]))}}),P={class:"demo-space-x"},j=k({__name:"DemoCheckboxCheckboxValue",setup(f){const o=m(1),t=m("Show");return(r,l)=>(h(),v("div",P,[e(u,{modelValue:a(o),"onUpdate:modelValue":l[0]||(l[0]=c=>b(o)?o.value=c:null),"true-value":1,"false-value":0,label:`${a(o).toString()}`},null,8,["modelValue","label"]),e(u,{modelValue:a(t),"onUpdate:modelValue":l[1]||(l[1]=c=>b(t)?t.value=c:null),"true-value":"Show","false-value":"Hide",color:"success",label:`${a(t).toString()}`},null,8,["modelValue","label"])]))}}),R={class:"demo-space-x"},B=k({__name:"DemoCheckboxIcon",setup(f){const o=m(!0),t=m(!0),r=m(!0),l=c=>{const n=c.toString();return n.charAt(0).toUpperCase()+n.slice(1)};return(c,n)=>(h(),v("div",R,[e(u,{modelValue:a(o),"onUpdate:modelValue":n[0]||(n[0]=p=>b(o)?o.value=p:null),label:l(a(o)),"true-icon":"ri-check-line","false-icon":"ri-close-line"},null,8,["modelValue","label"]),e(u,{modelValue:a(t),"onUpdate:modelValue":n[1]||(n[1]=p=>b(t)?t.value=p:null),label:l(a(t)),"true-icon":"ri-alarm-line","false-icon":"ri-alarm-line",color:"success"},null,8,["modelValue","label"]),e(u,{modelValue:a(r),"onUpdate:modelValue":n[2]||(n[2]=p=>b(r)?r.value=p:null),label:l(a(r)),"true-icon":"ri-checkbox-circle-fill","false-icon":"ri-close-circle-fill",color:"error"},null,8,["modelValue","label"])]))}}),M={class:"demo-space-x"},W={class:"mt-1"},H=k({__name:"DemoCheckboxModelAsArray",setup(f){const o=m(["John"]);return(t,r)=>(h(),v(V,null,[s("div",M,[e(u,{modelValue:a(o),"onUpdate:modelValue":r[0]||(r[0]=l=>b(o)?o.value=l:null),label:"John",value:"John"},null,8,["modelValue"]),e(u,{modelValue:a(o),"onUpdate:modelValue":r[1]||(r[1]=l=>b(o)?o.value=l:null),label:"Jacob",color:"success",value:"Jacob"},null,8,["modelValue"]),e(u,{modelValue:a(o),"onUpdate:modelValue":r[2]||(r[2]=l=>b(o)?o.value=l:null),label:"Johnson",color:"info",value:"Johnson"},null,8,["modelValue"])]),s("p",W,U(a(o)),1)],64))}}),N={class:"demo-space-x"},G=k({__name:"DemoCheckboxColors",setup(f){const o=m(["Primary","Secondary","Success","Info","Warning","Error"]),t=m(["Primary","Secondary","Success","Info","Warning","Error"]);return(r,l)=>(h(),v("div",N,[(h(!0),v(V,null,$(a(o),c=>(h(),g(u,{key:c,modelValue:a(t),"onUpdate:modelValue":l[0]||(l[0]=n=>b(t)?t.value=n:null),label:c,color:c.toLowerCase(),value:c},null,8,["modelValue","label","color","value"]))),128))]))}}),Y={class:"demo-space-x"},q=k({__name:"DemoCheckboxDensity",setup(f){const o=m(!0),t=m(!1),r=l=>{const c=l.toString();return c.charAt(0).toUpperCase()+c.slice(1)};return(l,c)=>(h(),v("div",Y,[e(u,{modelValue:a(o),"onUpdate:modelValue":c[0]||(c[0]=n=>b(o)?o.value=n:null),density:"compact",label:r(a(o))},null,8,["modelValue","label"]),e(u,{modelValue:a(t),"onUpdate:modelValue":c[1]||(c[1]=n=>b(t)?t.value=n:null),density:"compact",label:r(a(t))},null,8,["modelValue","label"])]))}}),K={class:"demo-space-x"},Q=k({__name:"DemoCheckboxBasic",setup(f){const o=m(!0),t=m(!1),r=l=>{const c=l.toString();return c.charAt(0).toUpperCase()+c.slice(1)};return(l,c)=>(h(),v("div",K,[e(u,{modelValue:a(o),"onUpdate:modelValue":c[0]||(c[0]=n=>b(o)?o.value=n:null),label:r(a(o))},null,8,["modelValue","label"]),e(u,{modelValue:a(t),"onUpdate:modelValue":c[1]||(c[1]=n=>b(t)?t.value=n:null),label:r(a(t))},null,8,["modelValue","label"])]))}}),X={ts:`<script lang="ts" setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`,js:`<script setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`},Z={ts:`<script lang="ts" setup>
const checkbox = ref(1)
const checkboxString = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkbox"
      :true-value="1"
      :false-value="0"
      :label="\`\${checkbox.toString()}\`"
    />

    <VCheckbox
      v-model="checkboxString"
      true-value="Show"
      false-value="Hide"
      color="success"
      :label="\`\${checkboxString.toString()}\`"
    />
  </div>
</template>
`,js:`<script setup>
const checkbox = ref(1)
const checkboxString = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkbox"
      :true-value="1"
      :false-value="0"
      :label="\`\${checkbox.toString()}\`"
    />

    <VCheckbox
      v-model="checkboxString"
      true-value="Show"
      false-value="Hide"
      color="success"
      :label="\`\${checkboxString.toString()}\`"
    />
  </div>
</template>
`},ee={ts:`<script lang="ts" setup>
const colorCheckbox = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
const selectedCheckbox = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-for="color in colorCheckbox"
      :key="color"
      v-model="selectedCheckbox"
      :label="color"
      :color="color.toLowerCase()"
      :value="color"
    />
  </div>
</template>
`,js:`<script setup>
const colorCheckbox = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])

const selectedCheckbox = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-for="color in colorCheckbox"
      :key="color"
      v-model="selectedCheckbox"
      :label="color"
      :color="color.toLowerCase()"
      :value="color"
    />
  </div>
</template>
`},le={ts:`<script lang="ts" setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      density="compact"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      density="compact"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`,js:`<script setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      density="compact"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      density="compact"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`},oe={ts:`<script lang="ts" setup>
const toggleCheckboxOne = ref(true)
const toggleCheckboxTwo = ref(true)
const toggleCheckboxThree = ref(true)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckboxOne"
      :label="capitalizedLabel(toggleCheckboxOne)"
      true-icon="ri-check-line"
      false-icon="ri-close-line"
    />

    <VCheckbox
      v-model="toggleCheckboxTwo"
      :label="capitalizedLabel(toggleCheckboxTwo)"
      true-icon="ri-alarm-line"
      false-icon="ri-alarm-line"
      color="success"
    />

    <VCheckbox
      v-model="toggleCheckboxThree"
      :label="capitalizedLabel(toggleCheckboxThree)"
      true-icon="ri-checkbox-circle-fill"
      false-icon="ri-close-circle-fill"
      color="error"
    />
  </div>
</template>
`,js:`<script setup>
const toggleCheckboxOne = ref(true)
const toggleCheckboxTwo = ref(true)
const toggleCheckboxThree = ref(true)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckboxOne"
      :label="capitalizedLabel(toggleCheckboxOne)"
      true-icon="ri-check-line"
      false-icon="ri-close-line"
    />

    <VCheckbox
      v-model="toggleCheckboxTwo"
      :label="capitalizedLabel(toggleCheckboxTwo)"
      true-icon="ri-alarm-line"
      false-icon="ri-alarm-line"
      color="success"
    />

    <VCheckbox
      v-model="toggleCheckboxThree"
      :label="capitalizedLabel(toggleCheckboxThree)"
      true-icon="ri-checkbox-circle-fill"
      false-icon="ri-close-circle-fill"
      color="error"
    />
  </div>
</template>
`},te={ts:`<script lang="ts" setup>
const includeFiles = ref(true)
const isInputEnabled = ref(false)
<\/script>

<template>
  <VRow>
    <VCol
      sm="1"
      cols="2"
    >
      <VCheckbox v-model="includeFiles" />
    </VCol>

    <VCol
      sm="11"
      cols="10"
    >
      <VTextField
        label="Include files"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>

  <VRow>
    <VCol
      cols="2"
      sm="1"
    >
      <VCheckbox v-model="isInputEnabled" />
    </VCol>

    <VCol
      cols="10"
      sm="11"
    >
      <VTextField
        :disabled="!isInputEnabled"
        label="I only work if you check the box"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const includeFiles = ref(true)
const isInputEnabled = ref(false)
<\/script>

<template>
  <VRow>
    <VCol
      sm="1"
      cols="2"
    >
      <VCheckbox v-model="includeFiles" />
    </VCol>

    <VCol
      sm="11"
      cols="10"
    >
      <VTextField
        label="Include files"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>

  <VRow>
    <VCol
      cols="2"
      sm="1"
    >
      <VCheckbox v-model="isInputEnabled" />
    </VCol>

    <VCol
      cols="10"
      sm="11"
    >
      <VTextField
        :disabled="!isInputEnabled"
        label="I only work if you check the box"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`},ce={ts:`<script lang="ts" setup>
const checkbox = ref(false)
<\/script>

<template>
  <VCheckbox v-model="checkbox">
    <template #label>
      <div>
        I agree that
        <VTooltip location="bottom">
          <template #activator="{ props }">
            <a
              href="https://vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              v-bind="props"
              @click.stop
            >
              Vuetify
            </a>
          </template>
          Opens in new window
        </VTooltip>
        is awesome
      </div>
    </template>
  </VCheckbox>
</template>
`,js:`<script setup>
const checkbox = ref(false)
<\/script>

<template>
  <VCheckbox v-model="checkbox">
    <template #label>
      <div>
        I agree that
        <VTooltip location="bottom">
          <template #activator="{ props }">
            <a
              href="https://vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              v-bind="props"
              @click.stop
            >
              Vuetify
            </a>
          </template>
          Opens in new window
        </VTooltip>
        is awesome
      </div>
    </template>
  </VCheckbox>
</template>
`},ae={ts:`<script lang="ts" setup>
const selected = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="selected"
      label="John"
      value="John"
    />

    <VCheckbox
      v-model="selected"
      label="Jacob"
      color="success"
      value="Jacob"
    />

    <VCheckbox
      v-model="selected"
      label="Johnson"
      color="info"
      value="Johnson"
    />
  </div>

  <p class="mt-1">
    {{ selected }}
  </p>
</template>
`,js:`<script setup>
const selected = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="selected"
      label="John"
      value="John"
    />

    <VCheckbox
      v-model="selected"
      label="Jacob"
      color="success"
      value="Jacob"
    />

    <VCheckbox
      v-model="selected"
      label="Johnson"
      color="info"
      value="Johnson"
    />
  </div>

  <p class="mt-1">
    {{ selected }}
  </p>
</template>
`},se={ts:`<script setup lang="ts">
const toggleCheckbox = ref(true)
const toggleIndeterminateCheckbox = ref(true)
const disabledCheckbox = ref(true)
const toggleOffCheckbox = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckbox"
      label="On"
    />

    <VCheckbox
      v-model="toggleOffCheckbox"
      label="Off"
    />

    <VCheckbox
      v-model:indeterminate="toggleIndeterminateCheckbox"
      v-model="toggleIndeterminateCheckbox"
      label="Indeterminate"
    />

    <VCheckbox
      :model-value="disabledCheckbox"
      disabled
      label="On disabled"
    />

    <VCheckbox
      disabled
      label="Off disabled"
    />
  </div>
</template>
`,js:`<script setup>
const toggleCheckbox = ref(true)
const toggleIndeterminateCheckbox = ref(true)
const disabledCheckbox = ref(true)
const toggleOffCheckbox = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckbox"
      label="On"
    />

    <VCheckbox
      v-model="toggleOffCheckbox"
      label="Off"
    />

    <VCheckbox
      v-model:indeterminate="toggleIndeterminateCheckbox"
      v-model="toggleIndeterminateCheckbox"
      label="Indeterminate"
    />

    <VCheckbox
      :model-value="disabledCheckbox"
      disabled
      label="On disabled"
    />

    <VCheckbox
      disabled
      label="Off disabled"
    />
  </div>
</template>
`},ne=s("p",null,[s("code",null,"v-checkbox"),i(" in its simplest form provides a toggle between 2 values.")],-1),re=s("p",null,[i("Use "),s("code",null,"density"),i(" prop to reduces the input height. Available options are: "),s("code",null,"default"),i(", "),s("code",null,"comfortable"),i(", and "),s("code",null,"compact"),i(".")],-1),ie=s("p",null,[i("Checkboxes can be colored by using any of the builtin colors and contextual names using the "),s("code",null,"color"),i(" prop.")],-1),de=s("p",null,[i("Multiple "),s("code",null,"v-checkbox"),i("'s can share the same "),s("code",null,"v-model"),i(" by using an array.")],-1),ue=s("p",null,[i("Use "),s("code",null,"false-icon"),i(" and "),s("code",null,"true-icon"),i(" prop to change the icon on the checkbox.")],-1),be=s("p",null,[i("Use "),s("code",null,"false-value"),i(" and "),s("code",null,"true-value"),i(" prop to sets value for truthy and falsy state")],-1),me=s("p",null,[s("code",null,"v-checkbox"),i(" can have different states such as "),s("code",null,"default"),i(", "),s("code",null,"disabled"),i(", and "),s("code",null,"indeterminate"),i(".")],-1),pe=s("p",null,[i("Checkbox labels can be defined in "),s("code",null,"label"),i(" slot - that will allow to use HTML content.")],-1),xe=s("p",null,[i("You can place "),s("code",null,"v-checkbox"),i(" in line with other components such as "),s("code",null,"v-text-field"),i(".")],-1),Re=k({__name:"checkbox",setup(f){return(o,t)=>{const r=Q,l=D,c=q,n=G,p=H,T=B,w=j,L=E,y=A,S=J;return h(),g(C,{class:"match-height"},{default:d(()=>[e(x,{cols:"12",md:"6"},{default:d(()=>[e(l,{title:"Basic",code:X},{default:d(()=>[ne,e(r)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:d(()=>[e(l,{title:"Density",code:le},{default:d(()=>[re,e(c)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:d(()=>[e(l,{title:"Colors",code:ee},{default:d(()=>[ie,e(n)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:d(()=>[e(l,{title:"Model as array",code:ae},{default:d(()=>[de,e(p)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:d(()=>[e(l,{title:"Icon",code:oe},{default:d(()=>[ue,e(T)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:d(()=>[e(l,{title:"Checkbox Value",code:Z},{default:d(()=>[be,e(w)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:d(()=>[e(l,{title:"States",code:se},{default:d(()=>[me,e(L)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:d(()=>[e(l,{title:"Label Slot",code:ce},{default:d(()=>[pe,e(y)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:d(()=>[e(l,{title:"Inline text-field",code:te},{default:d(()=>[xe,e(S)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Re as default};
