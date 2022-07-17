<template>
  <div class="flex flex-col">
    <label class="text-sm text-slate-400 font-lato font-bold" :for="id">
      {{ label }}
    </label>
    <input
      class="bg-slate-50 border-2 border-slate-200 rounded text-slate-900 font-lato font-bold px-2 py-1 focus:bg-slate-100 focus:outline-none focus:border-indigo-600"
      :id="id"
      :type="type"
      v-model="inputRef"
      @input="checkInput"
    />
    <ErrorMessage :error="error" />
  </div>
</template>

<script>
import { ref } from "vue";
import ErrorMessage from "./ErrorMessage.vue";

export default {
  name: "Input",
  props: {
    id: String,
    label: String,
    type: String,
    error: String,
  },
  setup(props, context) {
    const inputRef = ref("");

    const checkInput = () => {
      context.emit("update:modelValue", inputRef.value);
    };

    return { inputRef, checkInput };
  },
  components: { ErrorMessage },
};
</script>
