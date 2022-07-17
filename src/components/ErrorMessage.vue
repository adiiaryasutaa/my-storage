<template>
  <p v-show="error" class="text-red-600 text-xs font-lato font-bold">{{ error }}</p>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ErrorMessage",
  props: {
    error: String,
  },
  setup(props) {
    const error = ref(props.error);

    return { error };
  },
};
</script>
