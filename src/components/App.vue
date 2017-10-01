<template>
<div>
  <config :coffee-weight.sync="config.coffeeWeight" :ratio.sync="config.ratio"
          :intensity.sync="config.intensity" :sweetness.sync="config.sweetness" />
  <p>Total water mass: {{ totalMass }} g</p>
  <table class="table table--shrink-first-column">
    <tbody>
      <tr v-for="(amount, index) in pours">
        <td>{{ ORDINALS[index] }} pour</td>
        <td>{{ amount }} g</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

import Config from './Config.vue';
import {State, saveConfig} from '../persistence';

const FIRST_PART_RATIO = 0.4;
const SECOND_PART_RATIO = 0.6;
const TOTAL_SWEETNESS_ACIDITY = 12;

@Component({
  components: {Config}
})
export default class App extends Vue {
  /** Used for naming the pours. */
  readonly ORDINALS = [
    'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh'
  ];

  config: State = {
    sweetness: 5,
    coffeeWeight: 20.0,
    ratio: 15.0,
    intensity: 3
  };

  get totalMass(): number {
    return Math.round(this.config.coffeeWeight * this.config.ratio);
  }

  get pours(): number[] {
    const sweetnessRatio = this.config.sweetness / TOTAL_SWEETNESS_ACIDITY;
    const intensityRatio = 1.0 / this.config.intensity;
    const firstPart = this.totalMass * FIRST_PART_RATIO;
    const secondPart = this.totalMass * SECOND_PART_RATIO;

    let pours = [Math.round(sweetnessRatio * firstPart), Math.round(firstPart)];
    for (let i = 1; i <= this.config.intensity; i++) {
      pours.push(Math.round(firstPart + secondPart * intensityRatio * i));
    }

    return pours;
  }
}
</script>

<style lang="scss">
.table--shrink-first-column {
  td:first-child {
    width: 1%;
    white-space: nowrap;
  }
}
</style>
