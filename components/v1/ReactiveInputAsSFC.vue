<template>
    <div class="p-4 text-center flex items-center justify-center flex-col text-sm">
        <span class="pb-2 font-bold">Reactive Input as an SFC</span>
        <UiPre> quantity: ref({{ quantity }}) </UiPre>
        <div class="grid grid-flow-col p-2 mx-auto">
            <input type="number"
                   class="row-span-2 p-4 w-16 bg-zinc-100 rounded-tl-lg rounded-bl-lg"
                   v-model="quantity" />
            <button type="button"
                    class="px-0.5 bg-orange-500 text-gray-50 rounded-tr-lg hover:opacity-80"
                    @click="increment">
                <Icon icon="ri-arrow-up-s-line"
                      :ssr="true"
                      class="text-xl" />
            </button>
            <button type="button"
                    class="px-0.5 bg-orange-500 text-gray-50 rounded-br-lg hover:opacity-80"
                    @click="decrement">
                <Icon icon="ri-arrow-down-s-line"
                      :ssr="true"
                      class="text-xl" />
            </button>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { Icon } from '@iconify/vue';

export default {
    components: {
        Icon,
    },
    setup() {
        const quantity = ref(0);
        const increment = () => {
            quantity.value++;
        };
        const decrement = () => {
            quantity.value--;
        };

        watch(() => quantity.value, (newValue) => {
            if (!newValue) {
                quantity.value = 0;
            }
        })
        return {
            quantity,
            increment,
            decrement,
        };
    },
};
</script>
<style>
/* Numeric input */
input[type="number"] {
    @apply text-slate-800 dark:text-slate-800 !important;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0px;
}

input[type="number"] {
    -moz-appearance: textfield;

    /* for iPad, iPhone Safari */
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
</style>
<!-- 
https://www.telerik.com/blogs/passing-variables-to-css-on-a-vue-component
-->