<template>
    <div>
        <slot :increment="increment"
              :decrement="decrement"
              :onInput="onInput"
              :inputValue="inputValue"
              :validation="validation"
              :quantity="quantity">
        </slot>
    </div>
</template>
<script>
import { ref, watch, computed } from "vue";
export default {
    props: {
        min: {
            type: Number,
        },
        max: {
            type: Number,
        },
    },
    setup(props) {
        const quantity = ref(props.min);
        const increment = () => {
            quantity.value++;
        };
        const decrement = () => {
            quantity.value--;
        };

        function onInput(e) {
            quantity.value = parseInt(e.target.value);
        }

        const inputValue = computed(() => {
            return { value: quantity.value };
        });

        const { validation } = useValidation({ value: quantity, min: props.min, max: props.max });

        watch(quantity, (newQ, oldQ) => {
            if (!newQ) {
                quantity.value = 0;
            }
        });

        return {
            increment,
            decrement,
            inputValue,
            onInput,
            validation,
            quantity
        };
    },
};
</script>