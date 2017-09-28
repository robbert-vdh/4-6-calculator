<template>
<div>
  <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
  <button @click="decrement">-</button>
  <button @click="increment">+</button>
</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class hello extends Vue {
  @Prop()
  name: string;
  @Prop()
  initialEnthusiasm: number;

  enthusiasm = this.initialEnthusiasm;

  get exclamationMarks(): string {
    return Array(this.enthusiasm + 1).join('!');
  }

  increment() {
    this.enthusiasm++;
  }

  decrement() {
    if (this.enthusiasm > 1) {
      this.enthusiasm--;
    }
  }
}
</script>

<style>
.greeting {
  font-size: 20px;
}
</style>
