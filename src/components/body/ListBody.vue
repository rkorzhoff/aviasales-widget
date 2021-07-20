<template>
  <div class="list-container">
    <ListSort class="sortMenu" />
    <ListItem
      class="item"
      v-for="(flight, index) of listOfFlights"
      :flight="flight"
      :key="index"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ListItem from '@/components/body/ListItem.vue'
import ListSort from '@/components/body/ListSort.vue'
import flights from '@/mock/fligths'
import Flight from '@/mock/types'

@Component({
  components: {
    ListItem,
    ListSort,
  },
})
export default class ListBody extends Vue {
  listOfFlights: Array<Flight> = flights
}
</script>
<style lang="scss" scoped>
.list-container {
  display: flex;
  flex-direction: column;
}
.item {
  background-color: #fff;
  margin: 20px 0;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
</style>
