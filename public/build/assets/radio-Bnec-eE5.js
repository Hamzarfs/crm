import{a as s,V as p}from"./VRadioGroup-gpqN_WPz.js";import{d as v,r as m,o as u,g as b,f as t,c as f,F as G,i as y,b as o,n as c,aG as R,e as l,p as i}from"./main-DoQFmMsa.js";import{V as D}from"./VDivider-CiGpRMeQ.js";import{_ as x}from"./AppCardCode.vue_vue_type_style_index_0_lang-CmwJwIsY.js";import{a as _,V as L}from"./VRow-CBIZXy0V.js";import"./VSelectionControl-CA9osU1B.js";import"./InputIcon-C91L1USK.js";import"./VInput-j0tWo3aL.js";import"./VImg-BvvxBpKO.js";import"./vue3-perfect-scrollbar-Dah25qMm.js";import"./VCard-CvMXks-w.js";import"./VAvatar-A7ztkq2k.js";/* empty css              */const C=v({__name:"DemoRadioValidation",setup(V){const a=m(1),r=[d=>d!==3?!0:"Do not select the third one!"];return(d,e)=>(u(),b(p,{modelValue:c(a),"onUpdate:modelValue":e[0]||(e[0]=n=>R(a)?a.value=n:null),inline:"",rules:r},{default:t(()=>[(u(),f(G,null,y(3,n=>o(s,{key:n,error:c(a)===3,label:`Radio ${n}`,value:n},null,8,["error","label","value"])),64))]),_:1},8,["modelValue"]))}}),U=v({__name:"DemoRadioIcon",setup(V){const a=m(1);return(r,d)=>(u(),b(p,{modelValue:c(a),"onUpdate:modelValue":d[0]||(d[0]=e=>R(a)?a.value=e:null),"false-icon":"ri-notification-off-line","true-icon":"ri-notification-3-line"},{default:t(()=>[(u(),f(G,null,y(2,e=>o(s,{key:e,label:`Radio ${e}`,value:e},null,8,["label","value"])),64))]),_:1},8,["modelValue"]))}}),w=l("div",null,[i("Your favorite "),l("strong",null,"search engine")],-1),S=l("div",null,[i(" Of course it's "),l("span",{class:"text-success"}," Google ")],-1),I=l("div",null,[i(" Definitely "),l("span",{class:"text-primary"}," DuckDuckGo ")],-1),j=v({__name:"DemoRadioLabelSlot",setup(V){const a=m("DuckDuckGo");return(r,d)=>(u(),b(p,{modelValue:c(a),"onUpdate:modelValue":d[0]||(d[0]=e=>R(a)?a.value=e:null)},{label:t(()=>[w]),default:t(()=>[o(s,{value:"Google"},{label:t(()=>[S]),_:1}),o(s,{value:"DuckDuckGo"},{label:t(()=>[I]),_:1})]),_:1},8,["modelValue"]))}}),B=v({__name:"DemoRadioDensity",setup(V){const a=m("radio-1"),r=m("radio-1");return(d,e)=>(u(),f(G,null,[o(p,{modelValue:c(a),"onUpdate:modelValue":e[0]||(e[0]=n=>R(a)?a.value=n:null)},{default:t(()=>[o(s,{label:"Option 1",value:"radio-1",density:"compact"}),o(s,{label:"Option 2",value:"radio-2",density:"compact"})]),_:1},8,["modelValue"]),o(D,{class:"my-3"}),o(p,{modelValue:c(r),"onUpdate:modelValue":e[1]||(e[1]=n=>R(r)?r.value=n:null),inline:""},{default:t(()=>[o(s,{label:"Option 1",value:"radio-1",density:"compact"}),o(s,{label:"Option 2",value:"radio-2",density:"compact"})]),_:1},8,["modelValue"])],64))}}),E=v({__name:"DemoRadioInline",setup(V){const a=m("radio-1"),r=m("radio-1");return(d,e)=>(u(),f(G,null,[o(p,{modelValue:c(a),"onUpdate:modelValue":e[0]||(e[0]=n=>R(a)?a.value=n:null)},{default:t(()=>[o(s,{label:"Option 1",value:"radio-1"}),o(s,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"]),o(D,{class:"my-4"}),o(p,{modelValue:c(r),"onUpdate:modelValue":e[1]||(e[1]=n=>R(r)?r.value=n:null),inline:""},{default:t(()=>[o(s,{label:"Option 1",value:"radio-1"}),o(s,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"])],64))}}),A=v({__name:"DemoRadioColors",setup(V){const a=m("primary"),r=["Primary","Secondary","Success","Info","Warning","Error"];return(d,e)=>(u(),b(p,{modelValue:c(a),"onUpdate:modelValue":e[0]||(e[0]=n=>R(a)?a.value=n:null),inline:""},{default:t(()=>[(u(),f(G,null,y(r,n=>o(s,{key:n,label:n,color:n.toLocaleLowerCase(),value:n.toLocaleLowerCase()},null,8,["label","color","value"])),64))]),_:1},8,["modelValue"]))}}),F={class:""},N=v({__name:"DemoRadioBasic",setup(V){const a=m(1);return(r,d)=>(u(),f("div",F,[o(p,{modelValue:c(a),"onUpdate:modelValue":d[0]||(d[0]=e=>R(a)?a.value=e:null)},{default:t(()=>[(u(),f(G,null,y(2,e=>o(s,{key:e,label:`Radio ${e}`,value:e},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]))}}),P={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
<\/script>

<template>
  <div class="">
    <VRadioGroup v-model="radioGroup">
      <VRadio
        v-for="n in 2"
        :key="n"
        :label="\`Radio \${n}\`"
        :value="n"
      />
    </VRadioGroup>
  </div>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
<\/script>

<template>
  <div class="">
    <VRadioGroup v-model="radioGroup">
      <VRadio
        v-for="n in 2"
        :key="n"
        :label="\`Radio \${n}\`"
        :value="n"
      />
    </VRadioGroup>
  </div>
</template>
`},T={ts:`<script lang="ts" setup>
const selectedRadio = ref('primary')
const colorsRadio = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error']
<\/script>

<template>
  <VRadioGroup
    v-model="selectedRadio"
    inline
  >
    <VRadio
      v-for="radio in colorsRadio"
      :key="radio"
      :label="radio"
      :color="radio.toLocaleLowerCase()"
      :value="radio.toLocaleLowerCase()"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const selectedRadio = ref('primary')

const colorsRadio = [
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
]
<\/script>

<template>
  <VRadioGroup
    v-model="selectedRadio"
    inline
  >
    <VRadio
      v-for="radio in colorsRadio"
      :key="radio"
      :label="radio"
      :color="radio.toLocaleLowerCase()"
      :value="radio.toLocaleLowerCase()"
    />
  </VRadioGroup>
</template>
`},W={ts:`<script lang="ts" setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>

  <VDivider class="my-3" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>

  <VDivider class="my-3" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>
</template>
`},Y={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    false-icon="ri-notification-off-line"
    true-icon="ri-notification-3-line"
  >
    <VRadio
      v-for="n in 2"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    false-icon="ri-notification-off-line"
    true-icon="ri-notification-3-line"
  >
    <VRadio
      v-for="n in 2"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`},H={ts:`<script lang="ts" setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>

  <VDivider class="my-4" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>

  <VDivider class="my-4" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>
</template>
`},M={ts:`<script lang="ts" setup>
const radios = ref('DuckDuckGo')
<\/script>

<template>
  <VRadioGroup v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>

    <VRadio value="Google">
      <template #label>
        <div>
          Of course it's <span class="text-success">
            Google
          </span>
        </div>
      </template>
    </VRadio>

    <VRadio value="DuckDuckGo">
      <template #label>
        <div>
          Definitely <span class="text-primary">
            DuckDuckGo
          </span>
        </div>
      </template>
    </VRadio>
  </VRadioGroup>
</template>
`,js:`<script setup>
const radios = ref('DuckDuckGo')
<\/script>

<template>
  <VRadioGroup v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>

    <VRadio value="Google">
      <template #label>
        <div>
          Of course it's <span class="text-success">
            Google
          </span>
        </div>
      </template>
    </VRadio>

    <VRadio value="DuckDuckGo">
      <template #label>
        <div>
          Definitely <span class="text-primary">
            DuckDuckGo
          </span>
        </div>
      </template>
    </VRadio>
  </VRadioGroup>
</template>
`},q={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
const rules = [(value: number) => (value !== 3 ? true : 'Do not select the third one!')]
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    inline
    :rules="rules"
  >
    <VRadio
      v-for="n in 3"
      :key="n"
      :error="radioGroup === 3 "
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
const rules = [value => value !== 3 ? true : 'Do not select the third one!']
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    inline
    :rules="rules"
  >
    <VRadio
      v-for="n in 3"
      :key="n"
      :error="radioGroup === 3 "
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`},z=l("p",null,[i("The "),l("code",null,"v-radio"),i(" component is a simple radio button.")],-1),J=l("p",null,[i("Radios can be colored by using any of the built-in colors and contextual names using the "),l("code",null,"color"),i(" prop.")],-1),K=l("p",null,[i("Use "),l("code",null,"inline"),i(" prop to displays radio buttons in row.")],-1),Q=l("p",null,[i("Use "),l("code",null,"density"),i(" prop to adjusts the spacing within the component. Available options are: "),l("code",null,"default"),i(", "),l("code",null,"comfortable"),i(", and "),l("code",null,"compact"),i(".")],-1),X=l("p",null,[i("Radio Group labels can be defined in "),l("code",null,"label"),i(" slot - that will allow to use HTML content.")],-1),Z=l("p",null,[i("Use "),l("code",null,"false-icon"),i(" and "),l("code",null,"true-icon"),i(" prop to set icon on inactive and active state.")],-1),oo=l("p",null,[i("Use "),l("code",null,"rules"),i(" prop to validate a radio. Accepts a mixed array of types "),l("code",null,"function"),i(", "),l("code",null,"boolean"),i(" and "),l("code",null,"string"),i(". Functions pass an input value as an argument and must return either "),l("code",null,"true"),i(" / "),l("code",null,"false"),i(" or a string containing an error message.")],-1),vo=v({__name:"radio",setup(V){return(a,r)=>{const d=N,e=x,n=A,g=E,k=B,O=j,h=U,$=C;return u(),b(L,{class:"match-height"},{default:t(()=>[o(_,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Basic",code:P},{default:t(()=>[z,o(d)]),_:1},8,["code"])]),_:1}),o(_,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Colors",code:T},{default:t(()=>[J,o(n)]),_:1},8,["code"])]),_:1}),o(_,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Inline",code:H},{default:t(()=>[K,o(g)]),_:1},8,["code"])]),_:1}),o(_,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Density",code:W},{default:t(()=>[Q,o(k)]),_:1},8,["code"])]),_:1}),o(_,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Label Slot",code:M},{default:t(()=>[X,o(O)]),_:1},8,["code"])]),_:1}),o(_,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Icon",code:Y},{default:t(()=>[Z,o(h)]),_:1},8,["code"])]),_:1}),o(_,{cols:"12",md:"6"},{default:t(()=>[o(e,{title:"Validation",code:q},{default:t(()=>[oo,o($)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{vo as default};
