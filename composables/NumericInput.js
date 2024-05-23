import { computed, watch, getCurrentInstance } from "vue";

export default function ({ min, max, quantity }) {
    const vm = getCurrentInstance();
    const _emit = vm?.emit;

    const increment = () => {
        quantity.value++;
        _emit('update:modelValue', quantity.value)

    };
    const decrement = () => {
        quantity.value--;
        _emit('update:modelValue', quantity.value)
    };

    const inputEvt = (e) => {
        quantity.value = parseInt(e.target.value);
        _emit('update:modelValue', quantity.value)
    }

    const validation = computed(() => {
        if (quantity.value > max)
            return {
                error: true,
                message: `Cannot select quantity more than ${max} at this point.`
            }
        else if (quantity.value < min)
            return {
                error: true,
                message: `Select at least ${min} quantity.`
            }
        else
            return {
                error: false,
                message: ''
            }
    });

    watch(quantity, (newQ, oldQ) => {
        if (!newQ) {
            quantity.value = 0;
            _emit('update:modelValue', quantity.value)
        }
    })

    return {
        increment,
        decrement,
        inputEvt,
        validation
    };
}