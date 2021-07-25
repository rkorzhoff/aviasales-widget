<template>
  <div class="sort-container">
    <div
      v-for="option in sortTypes"
      :key="option"
      :class="{ active: active === option }"
      class="option-wrapper"
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
.sort-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  border: 1px solid #dfe5ec;
  background-color: #fff;
  border-radius: 5px;

  .option-wrapper {
    padding: 10px 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 14px;
    text-transform: uppercase;

    &:nth-child(2) {
      border-left: 1px solid #dfe5ec;
      border-right: 1px solid #dfe5ec;
    }

    &.active {
      background-color: #2196f3;
      color: #fff;
    }
  }
}
</style>
