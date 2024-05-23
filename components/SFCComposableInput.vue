<template>
    <div class="py-4 text-center flex items-center justify-center flex-col">
        <span class="block pb-2 font-mono">SFC with Composable</span>
        <kbd class="block"> quantity: ref({{ quantity }}) </kbd>
        <div class="grid grid-rows-2 grid-flow-col gap-0 p-2 text-center w-max my-0 mx-auto">
            <input
                type="number"
                class="border-2 border-r-0 row-span-2 p-4 w-14 rounded-tl-lg rounded-bl-lg"
                v-model.lazy="quantity"
            />
            <button
                type="button"
                class="border-2 px-0.5 border-b bg-purple-500 text-gray-50 rounded-tr-lg hover:opacity-80"
                @click="increment"
            >
            <Icon icon="ri-arrow-up-s-line" :ssr="true" class="text-xl"/>
            </button>
            <button
                type="button"
                class="border-2 px-0.5 border-t bg-purple-500 text-gray-50 rounded-br-lg hover:opacity-80"
                @click="decrement"
            >
            <Icon icon="ri-arrow-down-s-line" :ssr="true" class="text-xl"/>
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
import { Icon } from '@iconify/vue';
export default {
    components: {
        Icon,
    },
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
