import { ref, computed, watch, h } from 'vue'
import { Icon } from '@iconify/vue';
import useNumericInput from "../../composables/NumericInput";

const min = 0;
const max = 25;
const gblQty = ref(min);
const { increment, decrement, validation } = useNumericInput({
  min,
  max,
  gblQty,
});

export default {
  props: {
    modelValue: {
      type: Number,
    },
    min: {
      type: Number
    },
    max: {
      type: Number
    }
  },
  setup(props) {
    const min = props.min
    const max = props.max
    const quantity = ref(props.min);

    const { inputEvt, increment, decrement, validation } = useNumericInput({
      min,
      max,
      quantity,
    });

    const inputElement = () => // this has to be a function for value: quantity.value, to be reactive
      h('input', {
        id: 'input-field',
        type: 'number',
        class: "row-span-2 p-4 w-14 bg-zinc-100 rounded-l-lg",
        name: props.modelValue,
        value: quantity.value,
        onInput: (e) => inputEvt(e)
      })

    const upArrow = h(Icon, {
      icon: "ri-arrow-up-s-line",
      class: 'text-xl'
    })

    const downArrow = h(Icon, {
      icon: "ri-arrow-down-s-line",
      class: 'text-xl'
    })

    const buttons = [
      h('button', {
        id: "btn-up",
        type: "button",
        class: "px-0.5 bg-blue-500 text-gray-100 rounded-tr-lg opacity-80 hover:opacity-100",
        onClick: () => increment()
      }, upArrow),
      h('button', {
        id: "btn-down",
        type: "button",
        class: "px-0.5 bg-blue-500 text-gray-100 rounded-br-lg opacity-80 hover:opacity-100",
        onClick: () => decrement()
      }, downArrow)
    ]

    // Must be fn for reactive value: quantity.value
    const NumericInput = () => h('div',
      {
        id: 'wrapper-div',
        class: 'grid grid-rows-2 grid-flow-col p-2 text-center w-max my-0 mx-auto'
      },
      [inputElement(), buttons]
    )

    const ErrorMessage = () => validation.value.error ? h('div', { class: 'text-red-400' }, validation.value.message) : null

    return () => [
      h('div',
        { class: "border border-blue-200 p-4 rounded-md" },
        ['Reactive Input As a Render Fn Component', NumericInput(), ErrorMessage()]
      )
    ]

  }
}