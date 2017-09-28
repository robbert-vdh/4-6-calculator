<template>
<div>
  <div>
    <h2>Parameters</h2>
    <div class="grid-x grid-margin-x">
      <div class="medium-6 cell">
        <div class="grid-x grid-padding-x">
          <div class="shrink cell">
            <label for="coffee-weight" class="text-right middle">Coffee</label>
          </div>
          <div class="auto cell">
            <div class="input-group">
              <input v-model="coffeeWeight" id="coffee-weight" class="input-group-field"
                     type="number" min="0">
              <span class="input-group-label">grams</span>
            </div>
          </div>
        </div>
      </div>
      <div class="medium-6 cell">
        <div class="grid-x grid-padding-x">
          <div class="shrink cell">
            <label for="ratio" class="text-right middle">Ratio</label>
          </div>
          <div class="auto cell">
            <div class="input-group">
              <span class="input-group-label">1 :</span>
              <input v-model="ratio" id="ratio" class="input-group-field"
                     type="number" min="0" step="0.1">
            </div>
          </div>
        </div>
      </div>
      <div class="medium-6 cell">
        <div class="grid-x grid-padding-x">
          <span class="shrink cell input-group-label">Sweet</span>
          <input v-model="sweetnessRatio" class="auto cell slider"
                 type="range" min="0" max="1" step="0.02">
          <span class="shrink cell input-group-label">Acidic</span>
        </div>
      </div>
      <div class="medium-6 cell">
        <div class="grid-x grid-padding-x">
          <div class="shrink cell">
            <label for="ratio" class="text-right middle">Intensity</label>
          </div>
          <div class="auto cell">
            <input v-model="intensity" class="auto cell slider"
                   type="range" min="1" max="5" step="1">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class hello extends Vue {
  /** The total weight of the coffee grounds. */
  coffeeWeight = 20.0;
  /** The 1:x coffee to water ratio, in mass. */
  ratio = 15.0;
  /**
   * The acidity/sweetness ratio of the first 40% of the pour. The default
   * corrosponds to Tetsu Kasuya's original 50:70 ratio.
   */
  sweetnessRatio = 0.42;
  /** The number of pours the last 60% will be devided into. */
  intensity = 2;
}
</script>

<style lang="scss">
// TODO: Remove scaffolding
@import '~foundation-sites/scss/foundation';

@include foundation-range-input;

.slider {
  margin: 0 0.5rem;
}
</style>
