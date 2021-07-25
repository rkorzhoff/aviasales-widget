<template>
  <div class="filter-container">
    <h2 class="filter-header">Количество пересадок</h2>
    <div
      v-for="filter in transfersFilters"
      :key="filter.choiceId"
      class="choice-item"
    >
      <label :for="filter.choiceId" class="item-label"
        >{{ filter.choiceLabel }}
        <input
          :id="filter.choiceId"
          :checked="checkVal(filter.choiceId)"
          :name="filter.choiceId"
          :value="filter.choiceId"
          class="item-input"
          type="checkbox"
          @change="onFilterSet"
        />
        <span class="checkmark"></span>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, VModel, Vue } from 'vue-property-decorator'

import filters from '@/components/filters/filters'

@Component
export default class TheTransferFilter extends Vue {
  @VModel() computedFilters!: Array<string>
  transfersFilters: Array<{ choiceId: string; choiceLabel: string }> = filters

  checkVal(val: string): boolean {
    if (val === 'choice-all') {
      return this.computedFilters.length === 4
    }
    return this.computedFilters.includes(val)
  }

  onFilterSet(e: any): void {
    if (e.target.id === 'choice-all') {
      this.computedFilters.length = 0
      this.transfersFilters.forEach(
        (filter: { choiceId: string; choiceLabel: string }) => {
          if (filter.choiceId !== 'choice-all') {
            this.computedFilters.push(filter.choiceId)
          }
        }
      )
    } else {
      this.computedFilters.includes(e.target.id)
        ? this.computedFilters.splice(
            this.computedFilters.indexOf(e.target.id),
            1
          )
        : this.computedFilters.push(e.target.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-container,
.choice-item {
  display: flex;
}

.filter-container {
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

.filter-container .checkmark:after {
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
