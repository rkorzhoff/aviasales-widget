<template>
  <div class="main-container">
    <TheTransferFilter v-model="computedFilters" class="filter" />
    <ListBody class="list" />
  </div>
</template>

<script lang="ts">
import { Component, ProvideReactive, Vue, Watch } from 'vue-property-decorator'
import TheTransferFilter from '@/components/filters/TheTransferFilter.vue'
import ListBody from '@/components/body/ListBody.vue'
import Flight from '@/mock/types'
import flights from '@/mock/fligths'
import filters from '@/components/filters/filters'

@Component({
  components: {
    TheTransferFilter,
    ListBody,
  },
})
export default class Main extends Vue {
  mockedFlights: Array<Flight> = []
  @ProvideReactive() listOfFlights: Array<Flight> = []
  transfersFilters: Array<string> = []
  conditions: Array<{ name: string; transfers: number }> = [
    { name: 'choice-one', transfers: 1 },
    { name: 'choice-two', transfers: 2 },
    { name: 'choice-three', transfers: 3 },
  ]

  @ProvideReactive() get computedFilters(): Array<string> {
    return this.transfersFilters
  }

  set computedFilters(values: Array<string>) {
    this.transfersFilters = values.filter((filter) =>
      filters.forEach((el) => el.choiceId === filter)
    )
  }

  checkFilter(flight: Flight, transfers: number): void {
    if (
      flight.firstTicket.transferPoints.length === transfers &&
      flight.secondTicket.transferPoints.length === transfers
    ) {
      this.listOfFlights.push(flight)
    }
  }

  @Watch('computedFilters')
  setFlights(): void {
    this.listOfFlights.length = 0
    if (this.transfersFilters.includes('choice-one')) {
      this.mockedFlights.forEach((flight: Flight) => {
        this.checkFilter(flight, 1)
      })
    }
    if (this.transfersFilters.includes('choice-two')) {
      this.mockedFlights.forEach((flight: Flight) => {
        this.checkFilter(flight, 2)
      })
    }
    if (this.transfersFilters.includes('choice-three')) {
      this.mockedFlights.forEach((flight: Flight) => {
        this.checkFilter(flight, 3)
      })
    }
    if (this.transfersFilters.includes('choice-none')) {
      this.mockedFlights.forEach((flight: Flight) => {
        if (
          flight.firstTicket.transferPoints.length === 0 &&
          flight.secondTicket.transferPoints.length === 0
        ) {
          this.listOfFlights.push(flight)
        }
      })
    }
    if (this.transfersFilters.length === 4) {
      this.listOfFlights.length = 0
      this.listOfFlights.push(...this.mockedFlights)
    }
  }

  created(): void {
    this.mockedFlights.push(...flights)
    this.listOfFlights.push(...flights)
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
