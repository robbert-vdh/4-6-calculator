<template>
<div>
  <Config :coffee-weight.sync="coffeeWeight" :intensity.sync="intensity"
          :ratio.sync="ratio" :sweetness-ratio.sync="sweetnessRatio" />
  <p>
    Weight: {{ coffeeWeight }}
  </p>
</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

import Config from './Config.vue';

@Component({
  components: {Config}
})
export default class App extends Vue {
  coffeeWeight = 20.0;
  ratio = 15.0;
  sweetnessRatio = 0.42;
  intensity = 2;
}
</script>
