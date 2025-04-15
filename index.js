const addDays = require('date-fns/addDays')

const getDateAfterXDays = days => {
  let newDate = addDays(new Date(2020, 7, 22), days)
  console.log(`${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`)
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`
}
getDateAfterXDays(10)
module.exports = getDateAfterXDays
