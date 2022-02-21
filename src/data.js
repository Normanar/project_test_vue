// export const dataOfCO2 = [
//     { name: 'Jan', pl: 1000},
//     { name: 'Feb', pl: 2000},
//     { name: 'Apr', pl: 400},
//     { name: 'Mar', pl: 4000},
//     { name: 'May', pl: 200 },
//     { name: 'Jun', pl: 600 },
//     { name: 'Jul', pl: 500 }
// ]

// export const dataOfCO2 = [
//     ['Jan', 1000],
//     ['Feb', 500],
//     ['Apr', 2000],
//
// ]

import data1 from './dataCO2/Выбросы CO2 по годам и странам.json'

const a = data1[1]

const keys = Object.keys(a)

const values = Object.values(a)

const newArr = []
const countries = []
export const yearArrStart = keys.slice(0, -5)
export const yearArrEnd = keys.slice(1, -4)

for (let i = 0; i < keys.length - 1; i ++) {
    newArr.push({year: keys[i], emission : values[i]})
}

for (let i = 0; i < data1.length - 1; i ++) {
    countries.push(data1[i]["Country Name"])
}

// export const dataOfCO2 = newArr.slice(0, -3)
export const countriesNew = countries

