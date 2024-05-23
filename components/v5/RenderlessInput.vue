<template>
    <!-- Logic comes from renderless component -->
    <RenderlessCompAsRenderFn :min="min"
                              :max="max">
        <template v-slot:default="{ quantity, decrement, increment, inputValue, input, validation }">
            <span class="pb-2 font-bold">Renderless Component as a Render Fn (parent) </span>
            <UiPre> quantity: ref({{ quantity }}) </UiPre>
            <div class="centered-box">
                <!-- UI Bling -->
                <FunctionalInputAsRenderFn :decrement="decrement"
                                           :increment="increment"
                                           :inputValue="inputValue"
                                           :inputEvent="input"
                                           :validation="validation"
                                           accent="rose" />
            </div>
        </template>
    </RenderlessCompAsRenderFn>
</template>

<script>
import RenderlessCompAsRenderFn from "./RenderlessCompAsRenderFn";
import FunctionalInputAsRenderFn from "./FunctionalInputAsRenderFn";
export default {
    components: { RenderlessCompAsRenderFn, FunctionalInputAsRenderFn },
    setup() {
        const min = 0;
        const max = 25;
        return {
            min,
            max,
        };
    },
};
</script>