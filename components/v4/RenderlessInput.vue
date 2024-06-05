<template>
    <!-- Logic comes from renderless component -->
    <RenderlessCompAsSFC :min="min"
                         :max="max"
                         class="py-4 text-center flex items-center justify-center flex-col text-sm">
        <template v-slot:default="{
        inputValue,
        onInput,
        increment,
        decrement,
        validation,
        quantity
    }">
            <span class="pb-2 font-bold">... Renderless Component as an SFC (parent)</span>
            <UiPre> quantity: ref({{ quantity }}) </UiPre>
            <div class="centered-box">
                <!-- UI Bling -->
                <FunctionalInputAsSFC :decrement="decrement"
                                      :increment="increment"
                                      :inputValue="inputValue"
                                      :inputEvent="onInput"
                                      :validation="validation"
                                      accent="teal" />
            </div>
        </template>
    </RenderlessCompAsSFC>
</template>

<script>
import { ref } from "vue";
import RenderlessCompAsSFC from "./RenderlessCompAsSFC.vue";
import FunctionalInputAsSFC from "./FunctionalInputAsSFC.vue";
export default {
    components: { RenderlessCompAsSFC, FunctionalInputAsSFC },
    setup() {
        const min = 0;
        const max = 25;
        // const quantity = ref(min);
        return {
            // quantity,
            min,
            max,
        };
    },
};
</script>