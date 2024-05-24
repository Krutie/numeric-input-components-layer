<template>
  <div class="py-4 text-center flex items-center justify-center flex-col text-sm">
    <span class="pb-2 font-bold">Render Function Component</span>
    <UiPre> quantity: ref({{ quantity }}) </UiPre>
    <InputAsRenderFn :min="min"
                     :max="max"
                     v-model="quantity" />
  </div>
</template>

<script>
import InputAsRenderFn from "./InputAsRenderFn";
export default {
  components: { InputAsRenderFn },
  setup() {
    const min = 0;
    const max = 25;
    const quantity = ref(0);

    return {
      min,
      max,
      quantity,
    };
  },
};
</script>