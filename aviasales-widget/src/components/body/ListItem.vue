<template>
  <div class="container"></div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class ListItem extends Vue {}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
}
</style>
