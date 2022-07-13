<script setup lang="ts">
import WorksItem from './WorksItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WorksItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Cube</template>
    一款幻灯片软件，固定风格主题，markdown语法书写。

  </WorksItem>
  <WorksItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Xiu</template>

    静态博客生成器

  </WorksItem>
  <WorksItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>项目三</template>

  </WorksItem>

</template>
