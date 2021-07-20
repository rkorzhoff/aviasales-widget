export default interface Flight {
  price: number
  firstTicket: {
    departureCity: string
    arrivalCity: string
    departureTime: string
    arrivalTime: string
    transferPoints: Array<string>
  }
  secondTicket: {
    departureCity: string
    arrivalCity: string
    departureTime: string
    arrivalTime: string
    transferPoints: Array<string>
  }
}
