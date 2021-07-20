<template>
  <div class="item-container">
    <div class="item-container-header">
      <span class="price">{{ flight.price }}</span>
      <img src="~@/assets/img/company-logo.svg" alt="company-logo" />
    </div>
    <div class="item-container-body">
      <div class="body-item">
        <span class="item-top"
          >{{ flight.firstTicket.departureCity }} -
          {{ flight.firstTicket.arrivalCity }}</span
        >
        <span class="item-bottom"
          >{{ flight.firstTicket.departureTime }} -
          {{ flight.firstTicket.arrivalTime }}</span
        >
      </div>
      <div class="body-item">
        <span class="item-top">В ПУТИ</span>
        <span class="item-bottom">{{ firstFlightTime }}</span>
      </div>
      <div class="body-item">
        <span class="item-top">{{ firstTransfer }}</span>
        <span class="item-bottom"
          >{{ flight.firstTicket.transferPoints.toString() }}
        </span>
      </div>

      <div class="body-item">
        <span class="item-top"
          >{{ flight.secondTicket.departureCity }} -
          {{ flight.secondTicket.arrivalCity }}</span
        >
        <span class="item-bottom"
          >{{ flight.secondTicket.departureTime }} -
          {{ flight.secondTicket.arrivalTime }}</span
        >
      </div>
      <div class="body-item">
        <span class="item-top">В ПУТИ</span>
        <span class="item-bottom">{{ secondFlightTime }}</span>
      </div>
      <div class="body-item">
        <span class="item-top">{{ secondTransfer }}</span>
        <span class="item-bottom"
          >{{ flight.secondTicket.transferPoints.toString() }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Flight from '@/mock/types'
import CalculateFlightTime from '@/usecases/CalculateFlightTime'
@Component
export default class ListItem extends Vue {
  @Prop() readonly flight: Flight
  firstFlightTime = ''
  secondFlightTime = ''
  firstNumberOfTransfers = 0
  secondNumberOfTransfers = 0
  firstTransfer = ''
  secondTransfer = ''
  transferDecl = ['пересадка', 'пересадки', 'пересадок']
  calculateFlightTime(): void {
    this.firstFlightTime = CalculateFlightTime.calculateTime(
      this.flight.firstTicket.arrivalTime,
      this.flight.firstTicket.departureTime
    )
    this.secondFlightTime = CalculateFlightTime.calculateTime(
      this.flight.secondTicket.arrivalTime,
      this.flight.secondTicket.departureTime
    )
  }
  declOfNum(num: number, words: string): string {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? Math.abs(num) % 10 : 5]
    ]
  }
  getNumberOfTransfers(): void {
    this.firstNumberOfTransfers = this.flight.firstTicket.transferPoints.length
    this.secondNumberOfTransfers =
      this.flight.secondTicket.transferPoints.length
    this.firstTransfer = `${this.firstNumberOfTransfers} ${this.declOfNum(
      this.firstNumberOfTransfers,
      this.transferDecl
    )}`
    this.secondTransfer = `${this.secondNumberOfTransfers} ${this.declOfNum(
      this.secondNumberOfTransfers,
      this.transferDecl
    )}`
  }
  created(): void {
    this.calculateFlightTime()
    this.getNumberOfTransfers()
  }
}
</script>
<style lang="scss" scoped>
.item-container {
  display: flex;
  flex-direction: column;
  padding: 26px 20px;
}
.item-container-header {
  display: flex;
  justify-content: space-between;
}
.item-container-body {
  display: flex;
  flex-wrap: wrap;
}
.body-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 14px;
}
.body-item:not(:last-child) {
  margin-right: 80px;
}
</style>
