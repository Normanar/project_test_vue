<template>
  <div id="app" class="app">
    <select v-model="selected" class="select">
      <option v-for="country in countries" v-bind:key="country.id">{{ country }}</option>
    </select>
    <button v-on:click="showBtn" class="btn">Show</button>
    <div>
      <select v-model="selectedYearStart" class="select_year_1">
        <option v-for="year in yearsStart" v-bind:key="year.id">{{ year }}</option>
      </select>
      -
      <select v-model="selectedYearEnd" class="select_year_2">
        <option v-for="year in yearsEnd" v-bind:key="year.id">{{ year }}</option>
      </select>
      <span v-if="selectedYearEnd <= selectedYearStart" class="error">First year must be less than the second year!</span>
    </div>
    <div class="text">CO<sub>2</sub> emissions(kt) in {{selected}} from {{selectedYearStart}} to {{selectedYearEnd}}</div>
    <LineChart :data="arr"/>
  </div>
</template>

<script>
import {countriesList, yearArrStart, yearArrEnd} from './data'
import LineChart from "@/LineChart";
import dataOfCO2 from './dataCO2/Выбросы CO2 по годам и странам.json'

export default {
  components: {LineChart},
  data() {
    return {
      data_new: dataOfCO2,
      countries: countriesList,
      selected: 'Aruba',
      arr: [{year: '', emission: 0},],
      yearsStart: yearArrStart,
      yearsEnd: yearArrEnd,
      selectedYearStart: "1960",
      selectedYearEnd: "2020",
    }

  },
  methods: {
    showBtn() {

      const index = this.countries.indexOf(this.selected)
      const arr = this.data_new[index]
      const keysYears = Object.keys(arr)
      const valuesEmission = Object.values(arr)
      const newArr = []
      for (let i = 0; i < keysYears.length - 1; i++) {
        newArr.push({year: keysYears[i], emission: valuesEmission[i]})
      }
      const newArrYears = newArr.slice(0, -3)
      this.arr = newArrYears.slice((+this.selectedYearStart) - 1960, 61 - (2020 - (+this.selectedYearEnd)))

    }
  }
}
</script>

<style>
.select {
  outline: none;
  padding: 8px 10px;
  border-radius: 5px;
  border: 2px solid teal;
  color: teal;
  font-weight: bold;
}

.btn {
  background: none;
  border: 2px solid teal;
  padding: 8px 10px;
  color: teal;
  font-weight: bold;
  margin-left: 15px;
  border-radius: 5px;
}

.btn:hover {
  background-color: teal;
  color: antiquewhite;
  cursor: pointer;
}

.select_year_1 {
  outline: none;
  padding: 8px 10px;
  border-radius: 5px;
  border: 2px solid teal;
  color: teal;
  font-weight: bold;
  margin-top: 15px;
  margin-right: 6px;
}

.select_year_2 {
  outline: none;
  padding: 8px 10px;
  border-radius: 5px;
  border: 2px solid teal;
  color: teal;
  font-weight: bold;
  margin-top: 15px;
  margin-left: 6px;
}

.error {
  color: red;
  font-weight: bold;
  font-size: 20px;
  margin-left: 15px;
}

.app {
}

.text {
  text-align: center;
  color: teal;
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;

}

</style>