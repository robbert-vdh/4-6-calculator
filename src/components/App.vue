<template>
<div>
  <Config :coffee-weight.sync="coffeeWeight" :ratio.sync="ratio"
          :intensity.sync="intensity" :acidity.sync="acidity" />
  <p>Total mass: {{ totalMass }} g</p>
  <ul>
    <li v-for="(amount, index) in pours">
      {{ ORDINALS[index] }} pour: {{ amount }} g
    </li>
  </ul>
</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

import Config from './Config.vue';

const FIRST_PART_RATIO = 0.4;
const SECOND_PART_RATIO = 0.6;
const TOTAL_ACIDITY_SWEETNESS = 12;

const swek = 69;

@Component({
  components: {Config}
})
export default class App extends Vue {
  /** Used for naming the pours. */
  readonly ORDINALS = [
    'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh'
  ];

  acidity = 5;
  coffeeWeight = 20.0;
  ratio = 15.0;
  intensity = 3;

  get totalMass(): number {
    return Math.round(this.coffeeWeight * this.ratio);
  }

  get pours(): number[] {
    const acidityRatio = this.acidity / TOTAL_ACIDITY_SWEETNESS;
    const intensityRatio = 1.0 / this.intensity;
    const firstPart = this.totalMass * FIRST_PART_RATIO;
    const secondPart = this.totalMass * SECOND_PART_RATIO;

    let pours = [Math.round(acidityRatio * firstPart), Math.round(firstPart)]
    for (let i = 1; i <= this.intensity; i++) {
      pours.push(Math.round(firstPart + secondPart * intensityRatio * i));
    }

    return pours;
  }
}
</script>
