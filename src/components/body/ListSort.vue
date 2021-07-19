<template>
  <div class="container">
    <div class="option-wrapper" v-for="option in sortTypes" :key="option">
      <span>{{ option }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class ListSort extends Vue {
  sortTypes: Array<string> = ["Самый дешевый", "Самый быстрый", "Оптимальный"];
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  height: 50px;
  .option-wrapper {
    padding: 10px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #000;
  }
}
</style>
