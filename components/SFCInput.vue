<template>
    <div class="py-4 text-center flex items-center justify-center flex-col">
        <span class="pb-2 font-mono">SFC Component</span>
        <pre> quantity: ref({{ quantity }}) </pre>
        <div class="grid grid-rows-2 grid-flow-col gap-0 p-2 text-center w-max my-0 mx-auto">
            <input type="number"
                   class="border-2 border-r-0 row-span-2 p-4 w-14 rounded-tl-lg rounded-bl-lg"
                   v-model="quantity" />
            <button type="button"
                    class="border-2 px-0.5 border-b bg-orange-500 text-gray-50 rounded-tr-lg hover:opacity-80"
                    @click="increment">
                    <Icon icon="ri-arrow-up-s-line" :ssr="true" class="text-xl"/>
            </button>
            <button type="button"
                    class="border-2 px-0.5 border-t bg-orange-500 text-gray-50 rounded-br-lg hover:opacity-80"
                    @click="decrement">
                <Icon icon="ri-arrow-down-s-line" :ssr="true" class="text-xl"/>
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