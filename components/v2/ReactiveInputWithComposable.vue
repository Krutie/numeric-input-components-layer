<template>
  <div class="border border-purple-200 rounded-lg py-4 text-center flex items-center justify-center flex-col">
      <span class="block pb-2">Reactive Input Component with Composable</span>
      <pre class="inline-block text-sm mb-3 bg-yellow-100 rounded"> quantity: ref({{ quantity }}) </pre>
      <div class="grid grid-flow-col p-2 mx-auto">
          <input
              type="number"
              class="row-span-2 p-4 w-14 bg-zinc-100 rounded-tl-lg rounded-bl-lg"
              v-model.lazy="quantity"
          />
          <button
              type="button"
              class="px-0.5 bg-purple-500 text-gray-50 rounded-tr-lg hover:opacity-80"
              @click="increment"
          >
          <Icon icon="ri-arrow-up-s-line" :ssr="true" class="text-xl"/>
          </button>
          <button
              type="button"
              class="px-0.5 bg-purple-500 text-gray-50 rounded-br-lg hover:opacity-80"
              @click="decrement"
          >
          <Icon icon="ri-arrow-down-s-line" :ssr="true" class="text-xl"/>
          </button>
      </div>
      <div v-if="validation.error" class="text-red-400">
          {{ validation.message }}
      </div>
  </div>
</template>

<script>
import { ref } from "vue";
import useNumericInput from '../../composables/NumericInput'
import { Icon } from '@iconify/vue';
export default {
  components: {
      Icon,
  },
  setup() {
      const min = 0;
      const max = 25;
      const quantity = ref(min);
      const { increment, decrement, validation } = useNumericInput({
          min,
          max,
          quantity,
      });
      return {
          quantity,
          increment,
          decrement,
          validation,
      };
  },
};
</script>
