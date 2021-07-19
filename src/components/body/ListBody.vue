<template>
  <div class="container">
    <ListSort />
    <ListItem />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ListItem from "@/components/body/ListItem.vue";
import ListSort from "@/components/body/ListSort.vue";
@Component({
  components: {
    ListItem,
    ListSort,
  },
})
export default class ListBody extends Vue {}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
}
</style>
