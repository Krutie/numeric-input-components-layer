<template>
    <div class="p-4 text-center flex items-center justify-center flex-col text-sm">
        <span class="pb-2 font-bold">Reactive Input Component with Composable</span>
        <UiPre> quantity: ref({{ quantity }}) </UiPre>
        <div class="grid grid-flow-col p-2 mx-auto">
            <input type="number"
                   class="row-span-2 p-4 w-16 bg-zinc-100 rounded-tl-lg rounded-bl-lg"
                   v-model.lazy="quantity" />
            <button type="button"
                    class="px-0.5 bg-purple-500 text-gray-50 rounded-tr-lg hover:opacity-80"
                    @click="increment">
                <Icon icon="ri-arrow-up-s-line"
                      :ssr="true"
                      class="text-xl" />
            </button>
            <button type="button"
                    class="px-0.5 bg-purple-500 text-gray-50 rounded-br-lg hover:opacity-80"
                    @click="decrement">
                <Icon icon="ri-arrow-down-s-line"
                      :ssr="true"
                      class="text-xl" />
            </button>
        </div>
        <div v-if="validation.error"
             class="text-red-400">
            {{ validation.message }}
        </div>
    </div>
</template>
<script setup>
import { Icon } from '@iconify/vue';
const min = 0;
const max = 25;
const { increment, decrement, validation, number: quantity } = useNumericInput({
    min,
    max
});
</script>