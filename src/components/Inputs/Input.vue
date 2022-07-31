<script>
import { ref } from 'vue';

export default {
	props: {
		id: String,
		label: String,
		type: String,
	},
	setup(props, context) {
		const inputRef = ref('');

		const checkInput = () => {
			context.emit('update:modelValue', inputRef.value);
		};

		return { inputRef, checkInput };
	},
};
</script>
<template>
	<div class="flex flex-col space-y-1">
		<label class="text-sm text-slate-500 font-medium" :for="id">
			{{ label }}
		</label>
		<input
			class="border border-slate-200 rounded text-slate-600 px-2 py-1 focus:outline-none focus:border-slate-300"
			:id="id"
			:type="type"
			v-model="inputRef"
			@input="checkInput"
			@change="checkInput"
		/>
	</div>
</template>