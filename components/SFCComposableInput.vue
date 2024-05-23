<template>
    <div class="example">
        <span class="block pb-2 font-mono">SFC with Composable</span>
        <kbd class="block"> quantity: {{ quantity }} </kbd>
        <div
            class="
                grid grid-rows-2 grid-flow-col
                gap-0
                p-2
                text-teal text-center
                w-max
                my-0
                mx-auto
            "
        >
            <input
                type="number"
                class="
                    row-span-2
                    p-4
                    w-14
                    text-gray-700
                    rounded-tl-lg rounded-bl-lg
                "
                v-model.lazy="quantity"
            />
            <button
                type="button"
                class="
                    up
                    col-span-2
                    w-6
                    bg-purple-500
                    text-gray-50
                    rounded-tr-lg
                    opacity-80
                    hover:opacity-100
                "
                @click="increment"
            >
                <ri-arrow-up-s-line class="opacity-50" />
            </button>
            <button
                type="button"
                class="
                    down
                    col-span-2
                    w-6
                    bg-purple-500
                    text-gray-50
                    rounded-br-lg
                    opacity-80
                    hover:opacity-100
                "
                @click="decrement"
            >
                <ri-arrow-down-s-line class="opacity-50" />
            </button>
        </div>
        <div v-if="validation.error" class="text-red-400">
            {{ validation.message }}
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import useNumericInput from "../composables/NumericInput";
export default {
    setup() {
        const min = 0;
        const max = 25;
        const quantity = ref(min);
        const { increment, decrement, validation } = useNumericInput({
            min,
            max,
            quantity,
        });
        return {
            quantity,
            increment,
            decrement,
            validation,
        };
    },
};
</script>
