import data1 from './dataCO2/Выбросы CO2 по годам и странам.json'

const keys = Object.keys(data1[1])

const countries = []
export const yearArrStart = keys.slice(0, -5)
export const yearArrEnd = keys.slice(1, -4)

for (let i = 0; i < data1.length - 1; i ++) {
    countries.push(data1[i]["Country Name"])
}

export const countriesList = countries

