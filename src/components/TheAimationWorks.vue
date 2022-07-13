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
    <template #heading>动画一</template>

  </WorksItem>

  <WorksItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>动画二</template>

  </WorksItem>

  <WorksItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>动画三</template>

  </WorksItem>
</template>
