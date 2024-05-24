<template>
    <!-- Logic comes from renderless component -->
    <RenderlessCompAsRenderFn v-model="quantity"
                              :min="min"
                              :max="max"
                              v-slot="{ inputAttrs, input, increment, decrement, validation }">
        <span class="pb-2 font-bold">Renderless Component as a Render Fn (parent) </span>
        <UiPre> quantity: ref({{ quantity }}) </UiPre>
        <div class="centered-box">
            <!-- UI Bling -->
            <FunctionalInputAsRenderFn :decrement="decrement"
                                       :increment="increment"
                                       :inputAttrs="inputAttrs"
                                       :inputEvents="input"
                                       :validation="validation"
                                       accent="rose" />
        </div>
    </RenderlessCompAsRenderFn>
</template>

<script>
import { ref } from "vue";
import RenderlessCompAsRenderFn from "./RenderlessCompAsRenderFn";
import FunctionalInputAsRenderFn from "./FunctionalInputAsRenderFn";
export default {
    components: { RenderlessCompAsRenderFn, FunctionalInputAsRenderFn },
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
</script>