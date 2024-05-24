import { ref, watch, h, computed } from 'vue';
export default {
  props: {
    modelValue: {
      type: Number
    },
    min: {
      type: Number
    },
    max: {
      type: Number
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit, slots }) {
    const quantity = ref(props.min);
    const increment = () => {
      quantity.value++;
      emit('update:modelValue', quantity.value);
    }
    const decrement = () => {
      quantity.value--;
      emit('update:modelValue', quantity.value);
    }

    const validation = computed(() => {
      if (quantity.value > props.max)
        return {
          error: true,
          message: `Cannot select quantity more than ${props.max} at this point.`
        }
      else if (quantity.value < props.min)
        return {
          error: true,
          message: `Select at least ${props.min} quantity.`
        }
      else
        return {
          error: false,
          message: ''
        }
    });

    const inputAttrs = computed(() => {
      return { value: quantity.value };
    });

    watch(quantity, (newQ, oldQ) => {
      if (!newQ) {
        quantity.value = 0;
        emit("update:modelValue", 0);
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
          inputAttrs: inputAttrs.value, // // dont forget the .value
          input: (e) => {
            quantity.value = parseInt(e.target.value)
            return emit('update:modelValue', quantity.value);
          },
        })
      )
    ]
  }
}