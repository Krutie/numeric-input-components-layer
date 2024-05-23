<template>
  <div class="py-4 text-center flex items-center justify-center flex-col">
      <span class="block pb-2">Render Function Component</span>
      <pre class="inline-block text-sm mb-3 bg-yellow-100 rounded"> quantity: ref({{ quantity }}) </pre>
      <InputAsRenderFn v-model="quantity" :min="min" :max="max" />
  </div>
</template>

<script>
import { ref } from "vue";
import InputAsRenderFn from "./InputAsRenderFn";
export default {
  components: { InputAsRenderFn },
  setup() {
      const min = 0;
      const max = 25;
      const quantity = ref(min);

      return {
          min,
          max,
          quantity,
      };
  },
};
</script>