import moment from 'moment'

class CalculateFlightTime {
  calculateTime(depTime: string, arrTime: string) {
    const todayDate = moment(new Date()).format('MM-DD-YYYY') //Instead of today date, We can pass whatever date
    const startDate = new Date(`${todayDate} ${arrTime}`)
    const endDate = new Date(`${todayDate} ${depTime}`)
    let timeDiff = Math.abs(startDate.getTime() - endDate.getTime())

    let hh = Math.floor(timeDiff / 1000 / 60 / 60).toString()
    hh = ('0' + hh).slice(-2)

    timeDiff -= +hh * 1000 * 60 * 60
    let mm = Math.floor(timeDiff / 1000 / 60).toString()
    mm = ('0' + mm).slice(-2)
    return `${hh}:${mm}`
  }
}

export default new CalculateFlightTime()
