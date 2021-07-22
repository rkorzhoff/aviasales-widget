<template>
  <div class="main-container">
    <TheTransferFilter class="filter" v-model="numberOfTransfers" />
    <ListBody class="list" />
  </div>
</template>

<script lang="ts">
import { Component, ProvideReactive, Vue, Watch } from 'vue-property-decorator'
import TheTransferFilter from '@/components/filters/TheTransferFilter.vue'
import ListBody from '@/components/body/ListBody.vue'
import Flight from '@/mock/types'
import flights from '@/mock/fligths'

@Component({
  components: {
    TheTransferFilter,
    ListBody,
  },
})
export default class Main extends Vue {
  @ProvideReactive() listOfFlights!: Array<Flight> = flights
  numberOfTransfers = 'none'

  @Watch('numberOfTransfers')
  onFilterChange() {
    if (this.numberOfTransfers === 'one') {
      let tempArr: Array<Flight> = []
      flights.forEach((flight: Flight) => {
        if (
          flight.firstTicket.transferPoints.length === 1 &&
          flight.secondTicket.transferPoints.length === 1
        ) {
          tempArr.push(flight)
        }
      })
      this.listOfFlights = tempArr
    } else if (this.numberOfTransfers === 'two') {
      let tempArr: Array<Flight> = []
      flights.forEach((flight: Flight) => {
        if (
          flight.firstTicket.transferPoints.length === 2 &&
          flight.secondTicket.transferPoints.length === 2
        ) {
          tempArr.push(flight)
        }
      })
      this.listOfFlights = tempArr
    } else if (this.numberOfTransfers === 'three') {
      let tempArr: Array<Flight> = []
      flights.forEach((flight: Flight) => {
        if (
          flight.firstTicket.transferPoints.length === 3 &&
          flight.secondTicket.transferPoints.length === 3
        ) {
          tempArr.push(flight)
        }
      })
      this.listOfFlights = tempArr
    }
  }
}
</script>
<style lang="scss" scoped>
.main-container {
  display: flex;
}
.filter {
  margin-right: 20px;
}
.list {
  width: 650px;
}
</style>
