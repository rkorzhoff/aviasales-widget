<template>
  <div class="container">
    <TheTransferFilter />
    <ListBody />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TheTransferFilter from "@/components/filters/TheTransferFilter.vue";
import ListBody from "@/components/body/ListBody.vue";
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
</style>
