import { ref, computed, watch, h } from 'vue'
import { Icon } from '@iconify/vue';

const FunctionalInputV2 = (props) => {

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
      class: "row-span-2 p-4 w-16 bg-zinc-100 rounded-tl-lg rounded-bl-lg",
      onInput: (e) => props.inputEvents(e),
      value: props.inputAttrs.value,
      name: props.modelValue,
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
      class: `px-0.5 rounded-tr-lg w-6 text-gray-100 ${accents[props.accent]} hover:opacity-80`,
      onClick: props.increment
    }, upArrow),
    h('button', {
      id: "btn-down",
      type: "button",
      class: `px-0.5 rounded-br-lg w-6 text-gray-100 ${accents[props.accent]} hover:opacity-80`,
      onClick: props.decrement
    }, downArrow)
  ]

  const NumericInput = h('div',
    { class: "grid grid-rows-2 grid-flow-col p-2 text-center w-max my-0 mx-auto text-base" },
    [inputElement(), buttons]
  )

  const ErrorMessage = props.validation.error ? h('div', { class: 'text-red-400 text-base' }, props.validation.message) : null

  return [
    h('div',
      { class: "border border-rose-200/50 p-4 rounded-md text-sm" },
      ['Functional Input as a Render Fn Component (child)', NumericInput, ErrorMessage]
    )
  ]
}

export default FunctionalInputV2;