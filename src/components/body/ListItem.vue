<template>
  <div class="item-container">
    <div class="item-container-header">
      <span class="price">{{ formatPrice(flight.price) }} &#8381;</span>
      <img src="~@/assets/img/company-logo.svg" alt="company-logo" />
    </div>
    <div class="item-container-body">
      <div class="ticket-wrapper">
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
      </div>
      <div class="ticket-wrapper">
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
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Flight from '@/mock/types'
import CalculateFlightTime from '@/usecases/CalculateFlightTime'
@Component
export default class ListItem extends Vue {
  @Prop() readonly flight!: Flight
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
  formatPrice(price: number): string {
    return price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
  }
  declOfNum(num: number, words: Array<string>): string {
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
  align-items: center;
  margin-bottom: 20px;
  color: #2196f3;
  font-weight: 600;
  font-size: 24px;
}
.item-container-body {
  display: flex;
  flex-direction: column;
}
.ticket-wrapper {
  display: grid;
  grid-template-columns: 250px 150px 200px;
}
.ticket-wrapper:first-child {
  margin-bottom: 20px;
}
.body-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 14px;
}
//.body-item:nth-child(2) {
//  align-items: center;
//}
</style>
