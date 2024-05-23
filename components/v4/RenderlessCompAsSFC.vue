<template>
  <div>
      <slot
          :increment="increment"
          :decrement="decrement"
          :inputEvt="inputEvt"
          :inputAttrs="inputAttrs"
          :validation="validation"
      />
  </div>
</template>
<script>
import { ref, watch, h, computed } from "vue";
export default {
  props: {
      modelValue: {
          type: Number,
      },
      min: {
          type: Number,
      },
      max: {
          type: Number,
      },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
      const quantity = ref(props.min);
      const increment = () => {
          quantity.value++;
          emit("update:modelValue", quantity.value);
      };
      const decrement = () => {
          quantity.value--;
          emit("update:modelValue", quantity.value);
      };

      function inputEvt(e) {
          quantity.value = parseInt(e.target.value);
          emit("update:modelValue", quantity.value);
      }

      const inputAttrs = computed(() => {
          return { value: quantity.value };
      });

      const validation = computed(() => {
          if (quantity.value > props.max)
              return {
                  error: true,
                  message: `Cannot select quantity more than ${props.max} at this point.`,
              };
          else if (quantity.value < props.min)
              return {
                  error: true,
                  message: `Select at least ${props.min} quantity.`,
              };
          else
              return {
                  error: false,
                  message: "",
              };
      });

      watch(quantity, (newQ, oldQ) => {
          if (!newQ) {
              quantity.value = 0;
              emit("update:modelValue", 0);
          }
      });

      return {
          increment,
          decrement,
          inputAttrs,
          inputEvt,
          validation,
      };
  },
};
</script>