<template>
  <div class="container">
    <h2 class="filter-header">Количество пересадок</h2>
    <div
      class="choice-item"
      v-for="filter in transferFilters"
      :key="filter.choiceId"
    >
      <label :for="filter.choiceId">{{ filter.choiceLabel }}</label>
      <input type="checkbox" :name="filter.choiceId" :id="filter.choiceId" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import filters from "@/components/filters/filters";
@Component
export default class TheTransferFilter extends Vue {
  transferFilters: Array<{ choiceId: string; choiceLabel: string }> = filters;
}
</script>

<style lang="scss" scoped>
.container,
.choice-item {
  display: flex;
}
.container {
  flex-wrap: wrap;
  width: 200px;
}
.choice-item {
  width: 100%;
  justify-content: space-between;
}
</style>
