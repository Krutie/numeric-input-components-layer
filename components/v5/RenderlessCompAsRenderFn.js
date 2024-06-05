import { ref, watch, h, computed } from 'vue';
export default {
  props: {
    min: {
      type: Number
    },
    max: {
      type: Number
    }
  },
  emits: ['update:modelValue'],
  setup(props, { slots }) {
    const quantity = ref(props.min);
    const increment = () => {
      quantity.value++;
    }
    const decrement = () => {
      quantity.value--;
    }
    const { validation } = useValidation({ value: quantity, min: props.min, max: props.max });

    const inputValue = computed(() => {
      return { value: quantity.value };
    });

    watch(quantity, (newQ, oldQ) => {
      if (!newQ) {
        quantity.value = 0;
      }
    })

    return () => [
      h('div',
        {
          class: "py-4 text-center flex items-center justify-center flex-col text-sm"
        },
        slots.default({
          decrement,
          increment,
          validation: validation.value, // dont forget the .value
          inputValue: inputValue.value, // // dont forget the .value
          quantity: quantity.value,
          input: (e) => {
            quantity.value = parseInt(e.target.value)
          },
        })
      )
    ]
  }
}