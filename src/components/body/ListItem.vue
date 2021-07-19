<template>
  <div class="container"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ListItem extends Vue {}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
}
</style>
