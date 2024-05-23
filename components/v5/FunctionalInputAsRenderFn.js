import { h } from 'vue'
import { Icon } from '@iconify/vue';

const FunctionalInputAsRenderFn = (props) => {

  const accents = {
    rose: "bg-rose-500",
    gray: "bg-gray-500",
    green: "bg-green-500",
    emerald: "bg-emerald-600",
    teal: "bg-teal-600",
  };

  const inputElement = () => // this has to be a function for value: quantity.value, to be reactive
    h('input', {
      id: 'input-field',
      type: 'number',
      class: "row-span-2 p-3 w-16 bg-zinc-100 text-xl text-center",
      onInput: (e) => props.inputEvent(e),
      value: props.inputValue.value,
      name: props.modelValue,
    })

  const leftArrow = h(Icon, {
    icon: "ri-arrow-left-s-line",
    class: 'text-4xl'
  })

  const rightArrow = h(Icon, {
    icon: "ri-arrow-right-s-line",
    class: 'text-4xl'
  })

  const rightButton = [
    h('button', {
      id: "btn-up",
      type: "button",
      class: `px-0.5 w-12 flex items-center justify-center rounded-r-lg text-gray-100 ${accents[props.accent]} hover:opacity-80`,
      onClick: props.increment
    }, rightArrow)
  ]

  const leftButton = [
    h('button', {
      id: "btn-down",
      type: "button",
      class: `px-0.5 w-12 flex items-center justify-center rounded-l-lg text-gray-100 ${accents[props.accent]} hover:opacity-80`,
      onClick: props.decrement
    }, leftArrow)
  ]

  const NumericInput = h('div',
    { class: "grid grid-rows-1 grid-flow-col p-2 text-center w-max mx-auto" },
    [leftButton, inputElement(), rightButton]
  )

  const ErrorMessage = props.validation.error ? h('div', { class: 'text-red-400' }, props.validation.message) : null

  return [
    h('div',
      { class: "border border-rose-200/50 p-4 rounded-md" },
      ['Functional Input as a Render Fn Component (child)', NumericInput, ErrorMessage]
    )
  ]
}

export default FunctionalInputAsRenderFn;