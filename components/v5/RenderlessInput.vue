<template>
  <!-- Logic -->
  <RenderlessCompAsRenderFn
      v-model="quantity"
      :min="min"
      :max="max"
      v-slot="{ inputAttrs, input, increment, decrement, validation }"
  >
      <span class="block pb-2">Renderless Component as a Render Fn (parent) </span>
      <pre class="inline-block text-sm mb-3 bg-yellow-100 rounded"> quantity: ref({{ quantity }}) </pre>
      <div class="centered-box">
          <!-- UI Bling -->
          <FunctionalInputAsRenderFn
              :decrement="decrement"
              :increment="increment"
              :inputAttrs="inputAttrs"
              :inputEvents="input"
              :validation="validation"
              accent="rose"
          />
      </div>
  </RenderlessCompAsRenderFn>
</template>

<script>
import { ref } from "vue";
import RenderlessCompAsRenderFn from "./RenderlessCompAsRenderFn";
import FunctionalInputAsRenderFn from "./FunctionalInputAsRenderFn";
export default {
  components: { RenderlessCompAsRenderFn, FunctionalInputAsRenderFn },
  setup() {
      const min = 0;
      const max = 25;
      const quantity = ref(min);
      return {
          quantity,
          min,
          max,
      };
  },
};
</script>