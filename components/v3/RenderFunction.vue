<template>
  <div class="py-4 text-center flex items-center justify-center flex-col text-sm">
      <span class="pb-2 font-bold">Render Function Component</span>
      <UiPre> quantity: ref({{ quantity }}) </UiPre>
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