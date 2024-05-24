import { ref, computed, h } from 'vue'
import { Icon } from '@iconify/vue';

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
  setup(props, { emit }) {
    const min = props.min
    const max = props.max
    const quantity = ref(props.modelValue)
    const { validation } = useValidation({ value: quantity, min, max })

    const inputElement = () => // this has to be a function to be reactive
      h('input', {
        id: 'input-field',
        type: 'number',
        class: "row-span-2 p-4 w-16 bg-zinc-100 rounded-l-lg",
        value: props.modelValue,
        modelValue: props.modelValue,
        onInput: (event) => {
          if (event.target.value) {
            quantity.value = parseInt(event.target.value)
            emit('update:modelValue', quantity.value)
          }
        },
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
        onClick: () => emit('update:modelValue', quantity.value++),
      }, upArrow),
      h('button', {
        id: "btn-down",
        type: "button",
        class: "px-0.5 bg-blue-500 text-gray-100 rounded-br-lg opacity-80 hover:opacity-100",
        onClick: () => emit('update:modelValue', quantity.value--),
      }, downArrow)
    ]

    // Must be fn for reactive value: quantity.value
    const NumericInput = () => h('div',
      {
        id: 'wrapper-div',
        class: 'grid grid-rows-2 grid-flow-col p-2 text-center w-max my-0 mx-auto'
      },
      [inputElement(), buttons, h('div', { class: 'col-span-2 text-sm text-gray-500' }, quantity)]
    )

    const ErrorMessage = () => validation.value.error ? h('div', { class: 'text-red-400' }, validation.value.message) : null

    return () => [
      h('div',
        { class: "border border-blue-200/50 p-4 rounded-md" },
        ['Reactive Input As a Render Fn Component', NumericInput(), ErrorMessage()]
      )
    ]

  }
}