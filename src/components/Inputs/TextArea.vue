<script>
import { ref } from 'vue';

export default {
	props: {
		id: String,
		label: String,
	},
	setup() {
		const inputRef = ref('');

		return { inputRef };
	},
};
</script>

<template>
	<div class="flex flex-col space-y-1">
		<label class="text-sm text-slate-500 font-medium" :for="id">{{ label }}</label>
		<textarea
			class="border border-slate-200 rounded text-slate-600 font-bold px-2 py-1 focus:outline-none focus:border-slate-300"
			rows="5"
			:id="id"
			v-model="inputRef"
			@input="$emit('update:modelValue', $event.target.value)"
		></textarea>
	</div>
</template>