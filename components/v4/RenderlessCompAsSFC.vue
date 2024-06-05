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
        // modelValue: {
        //     type: Number,
        // },
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
            // emit("update:modelValue", quantity.value);
        };
        const decrement = () => {
            quantity.value--;
            // emit("update:modelValue", quantity.value);
        };

        function onInput(e) {
            quantity.value = parseInt(e.target.value);
            // emit("update:modelValue", quantity.value);
        }

        const inputValue = computed(() => {
            return { value: quantity.value };
        });

        const { validation } = useValidation({ value: quantity, min: props.min, max: props.max });

        watch(quantity, (newQ, oldQ) => {
            if (!newQ) {
                quantity.value = 0;
                // emit("update:modelValue", 0);
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