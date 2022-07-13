<script setup lang="ts">
import WorksItem from './WorksItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
</script>

<template>
  <WorksItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>专辑一</template>
      第一张专辑
    
  </WorksItem>

  <WorksItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>专辑二</template>

    第二张专辑

  </WorksItem>

  <WorksItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>专辑三</template>

    第三张专辑

  </WorksItem>
</template>
