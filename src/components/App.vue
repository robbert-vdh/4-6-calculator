<template>
<div>
  <Config :coffee-weight.sync="coffeeWeight" :ratio.sync="ratio"
          :intensity.sync="intensity" :acidity.sync="acidity" />
  <p>Total mass: {{ totalMass }} g</p>
  <ul>
    <li>First pour: {{ firstPart[0] }} g</li>
    <li>Second pour: {{ firstPart[1] }} g</li>
    <li v-for="(amount, index) in secondPart">
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
  /** Used for naming the pours in the second part. */
  readonly ORDINALS = ['Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh'];

  acidity = 5;
  coffeeWeight = 20.0;
  ratio = 15.0;
  intensity = 3;

  get totalMass(): number {
    return Math.round(this.coffeeWeight * this.ratio);
  }

  /**
   * The first two pours controlling acidity and sweetness.
   */
  get firstPart(): [number, number] {
    const ratio = this.acidity / TOTAL_ACIDITY_SWEETNESS;
    const total = this.totalMass * FIRST_PART_RATIO;

    return [Math.round(total * ratio), Math.round(total)];
  }

  /**
   * The first two pours controlling acidity and sweetness.
   */
  get secondPart(): number[] {
    const ratio = 1.0 / this.intensity;
    const total = this.totalMass * SECOND_PART_RATIO;

    let pours = [];
    const offset = this.totalMass * FIRST_PART_RATIO;
    for (let i = 1; i <= this.intensity; i++) {
      pours.push(offset + total * ratio * i);
    }

    return pours;
  }
}
</script>
