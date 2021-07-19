<template>
  <div class="container">
    <TheTransferFilter class="filter" />
    <ListBody />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TheTransferFilter from '@/components/filters/TheTransferFilter.vue'
import ListBody from '@/components/body/ListBody.vue'

@Component({
  components: {
    TheTransferFilter,
    ListBody,
  },
})
export default class Main extends Vue {}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
}
.filter {
  margin-right: 20px;
}
</style>
