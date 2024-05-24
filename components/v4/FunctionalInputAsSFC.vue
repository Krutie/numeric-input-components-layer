<template>
    <div class="border border-teal-200/50 p-4 rounded-md"> 
<div> Functional Input as an SFC (child) </div>
  <div
      class="grid grid-rows-2 grid-flow-col p-2 text-center w-max my-0 mx-auto"
  >
      <input
          type="number"
          class="row-span-2 p-4 w-16 bg-zinc-100 rounded-tl-lg rounded-bl-lg"
          v-bind="$props.inputAttrs"
          @input="$props.inputEvents"
      />
      <button
          type="button"
          class="px-0.5 text-gray-50 rounded-tr-lg hover:opacity-80"
          :class="buttonAccent"
          @click="$props.increment"
      >
      <Icon icon="ri-arrow-up-s-line" :ssr="true" class="text-xl"/>
      </button>
      <button
          type="button"
          class="px-0.5 text-gray-50 rounded-br-lg hover:opacity-80"
          :class="buttonAccent"
          @click="decrement"
      >
      <Icon icon="ri-arrow-down-s-line" :ssr="true" class="text-xl"/>
      </button>
  </div>
  <div v-if="$props.validation.error" class="text-red-400 text-center pt-2">
      {{ $props.validation.message }}
  </div>
</div>
</template>
<script>
import { Icon } from '@iconify/vue';
export default {
  props: {
      inputAttrs: {
          type: Object,
      },
      inputEvents: {
          type: Function,
      },
      increment: {
          type: Function,
      },
      decrement: {
          type: Function,
      },
      validation: {
          type: Object,
      },
      accent: {
          type: String,
          default: "rose",
      },
  },
  components: {
        Icon,
    },
  setup(props) {
      const accents = {
          rose: "bg-rose-500",
          gray: "bg-gray-500",
          green: "bg-green-500",
          emerald: "bg-emerald-600",
          teal: "bg-teal-600",
      };

      return {
          buttonAccent: accents[props.accent],
      };
  },
};
</script>