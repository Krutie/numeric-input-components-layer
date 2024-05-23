<template>
    <div class="example">
        <span class="block pb-2 font-mono">SFC components</span>
        <kbd class="block"> quantity: {{ quantity }} </kbd>
        <div class="grid grid-rows-2 grid-flow-col gap-0 p-2 text-teal text-center w-max my-0 mx-auto">
            <input type="number"
                   class="row-span-2 p-4 w-14 text-gray-700 rounded-tl-lg rounded-bl-lg"
                   v-model="quantity" />
            <button type="button"
                    class="up col-span-2 w-6 bg-orange-500 text-gray-50 rounded-tr-lg opacity-80 hover:opacity-100"
                    @click="increment">
                <ri-arrow-up-s-line class="opacity-50" />
            </button>
            <button type="button"
                    class="down col-span-2 w-6 bg-orange-500 text-gray-50 rounded-br-lg opacity-80 hover:opacity-100"
                    @click="decrement">
                <ri-arrow-down-s-line class="opacity-50" />
            </button>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
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

/* Example */
.example {
    @apply py-4 text-center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span {
        @apply text-sm text-gray-400;
    }

    .centered-box {
        @apply p-1 w-max my-0 mx-auto border-2 rounded-xl border-opacity-50 border-gray-800 mt-2;

        span {
            @apply text-sm text-gray-500;
        }
    }
}
</style>
<!-- 
https://www.telerik.com/blogs/passing-variables-to-css-on-a-vue-component
-->