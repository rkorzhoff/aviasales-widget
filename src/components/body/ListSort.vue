<template>
  <div class="container">
    <div
      class="option-wrapper"
      v-for="option in sortTypes"
      :key="option"
      :class="{ active: active === option }"
      @click="active = option"
    >
      <span>{{ option }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ListSort extends Vue {
  sortTypes: Array<string> = ['Самый дешевый', 'Самый быстрый', 'Оптимальный']
  active = ''
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  height: 50px;
  border: 1px solid #dfe5ec;
  background-color: #fff;
  border-radius: 5px;
  .option-wrapper {
    padding: 10px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .option-wrapper:nth-child(2) {
    border-left: 1px solid #dfe5ec;
    border-right: 1px solid #dfe5ec;
  }
  .option-wrapper.active {
    background-color: #2196f3;
    color: #fff;
  }
}
</style>
