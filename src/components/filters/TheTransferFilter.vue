<template>
  <div class="container">
    <h2 class="filter-header">Количество пересадок</h2>
    <div
      class="choice-item"
      v-for="filter in transferFilters"
      :key="filter.choiceId"
    >
      <label :for="filter.choiceId" class="item-label"
        >{{ filter.choiceLabel }}
        <input
          type="checkbox"
          :name="filter.choiceId"
          :id="filter.choiceId"
          class="item-input"
        />
        <span class="checkmark"></span>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import filters from '@/components/filters/filters'

@Component
export default class TheTransferFilter extends Vue {
  transferFilters: Array<{ choiceId: string; choiceLabel: string }> = filters
}
</script>

<style lang="scss" scoped>
.container,
.choice-item {
  display: flex;
}

.container {
  flex-wrap: wrap;
  width: 232px;
  height: 252px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.choice-item {
  width: 100%;
  position: relative;
}
.item-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: 1px solid #9abbce;
  border-radius: 2px;
}
.item-input:hover ~ .checkmark {
  border: 1px solid #2196f3;
}
.item-input:checked ~ .checkmark {
  border: 1px solid #2196f3;
}
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}
.item-input:checked ~ .checkmark:after {
  display: block;
}
.container .checkmark:after {
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid #2196f3;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.filter-header {
  font-style: normal;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.5px;
}
.item-label {
  cursor: pointer;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
  margin-left: 30px;
}
</style>
