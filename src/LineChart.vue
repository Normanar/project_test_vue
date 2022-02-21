<template>
  <Chart
      :size="{ width: 1600, height: 450 }"
      :data="data"
      :margin="margin"
      :direction="direction"
      class="chart"
  >

    <template #layers>
      <Grid strokeDasharray="2,2" />
      <Line :dataKeys="['year', 'emission']" />
    </template>
    <template #widgets>
      <Tooltip
          borderColor="#48CAE4"
          :config="{
          year: { color: '#0077b6' },
          emission: { label: 'averange', color: 'red' },
        }"
      />
    </template>

  </Chart>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Chart, Line, Grid } from 'vue3-charts'

export default defineComponent({
  name: 'LineChart',
  components: { Chart, Line, Grid },
  setup() {

    const direction = ref('horizontal')
    const margin = ref({
      left: 0,
      top: 20,
      right: 20,
      bottom: 0
    })

    return { direction, margin }
  }
})
</script>

<style>
.chart {
  /*background-color: teal;*/
  color: teal;
  font-weight: bold;
}
</style>

