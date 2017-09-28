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
              <input :value="coffeeWeight" @input="$emit('update:coffeeWeight', Number($event.target.value))"
                     id="coffee-weight" class="input-group-field" type="number" min="0">
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
              <input :value="ratio" @input="$emit('update:ratio', Number($event.target.value))"
                     id="ratio" class="input-group-field" type="number" min="0" step="0.1">
            </div>
          </div>
        </div>
      </div>
      <div class="medium-6 cell">
        <div class="grid-x grid-padding-x">
          <div class="shrink cell">
            <label for="sweetness-ratio" class="text-right middle">Acidity/sweetness ratio</label>
          </div>
          <div class="auto cell">
            <slider :value.sync="acidity" @input="$emit('update:acidity', Number($event))"
                    :min="0" :max="12" :interval="1" formatter="{value}:12" class="range-slider" id="sweetness-ratio" />
          </div>
        </div>
      </div>
      <div class="medium-6 cell">
        <div class="grid-x grid-padding-x">
          <div class="shrink cell">
            <label for="intensity" class="text-right middle">Intensity</label>
          </div>
          <div class="auto cell">
            <slider :value.sync="intensity" @input="$emit('update:intensity', Number($event))"
                    :min="1" :max="5" :interval="1" class="range-slider" id="intensity" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import Slider from 'vue-slider-component/src/vue2-slider.vue';

@Component({
  components: {Slider}
})
export default class Config extends Vue {
  /**
   * The acidity/sweetness ratio of the first 40% of the pour on a scale of 0 to
   * 12. A value of 50 corrosponds to Tetsu Kasuya's original 50:70 ratio.
   */
  @Prop({type: Number, required: true})
  acidity: number;

  /** The total weight of the coffee grounds. */
  @Prop({type: Number, required: true})
  coffeeWeight: number;

  /** The 1:x coffee to water ratio, in mass. */
  @Prop({type: Number, required: true})
  ratio: number;

  /** The number of pours the last 60% will be devided into. */
  @Prop({type: Number, required: true})
  intensity: number;
}
</script>

<style lang="scss">
.range-slider {
  // Hack the slider into alignment, for now
  padding-top: 1.1rem !important;
}
</style>
