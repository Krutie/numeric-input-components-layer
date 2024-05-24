<template>
    <!-- Logic comes from renderless component -->
    <RenderlessCompAsSFC v-model="quantity"
                         :min="min"
                         :max="max"
                         v-slot="{ inputAttrs, inputEvt, increment, decrement, validation }"
                         class="py-4 text-center flex items-center justify-center flex-col text-sm">
        <span class="pb-2 font-bold">Renderless Component as an SFC (parent)</span>
        <UiPre> quantity: ref({{ quantity }}) </UiPre>
        <div class="centered-box">
            <!-- UI Bling -->
            <FunctionalInputAsSFC :decrement="decrement"
                                  :increment="increment"
                                  :inputAttrs="inputAttrs"
                                  :inputEvents="inputEvt"
                                  :validation="validation"
                                  accent="teal" />
        </div>
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
        const quantity = ref(min);
        return {
            quantity,
            min,
            max,
        };
    },
};
</script>./FunctionalInputAsSFC.vue./RenderlessCompAsSFC.vue