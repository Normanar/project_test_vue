<template>
  <Chart
      :size="{ width: this.width > 50 ? 1600 : 1300, height: 450 }"
      :data="data"
      :margin="margin"
      :direction="direction"
      class="chart"
  >

    <template #layers>
      <Grid strokeDasharray="42,2"/>
      <Line :dataKeys="['year', 'emission']" />
    </template>

  </Chart>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Chart, Line, Grid } from 'vue3-charts'

export default defineComponent({
  name: 'LineChart',
  components: { Chart, Line, Grid },
  props : {
    width: {
      required : true,
    }
  },
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
  color: teal;
  font-weight: bold;
}
</style>

