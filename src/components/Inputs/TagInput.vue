<script>
import { ref } from 'vue';
import Pill from '@/components/Pill';

export default {
	name: 'TagInput',
	props: {
		id: String,
		label: String,
	},
	components: { Pill },
	setup(props, context) {
		const inputRef = ref('');
		const tags = ref([]);

		const addTag = () => {
			if (tags.value.indexOf(inputRef.value) < 0) {
				tags.value.push(inputRef.value);
				context.emit('tagAdded', tags.value);
			}
			inputRef.value = '';
		};

		const removeTag = (index) => {
			tags.value.splice(index, 1);
		};

		return { inputRef, tags, addTag, removeTag };
	},
};
</script>

<template>
	<div class="flex flex-col space-y-1">
		<label class="text-sm text-slate-500 font-medium" :for="id">
			{{ label }}
		</label>
		<div class="border border-slate-200 rounded p-2">
			<input
				class="border border-slate-200 rounded text-slate-600 font-medium w-full px-2 py-1 focus:outline-none focus:border-slate-300"
				:id="id"
				type="text"
				v-model="inputRef"
				v-on:keyup.enter="addTag"
			/>
			<p class="font-medium text-xs text-slate-500">Press Enter to add</p>
			<div v-show="tags.length" class="flex flex-wrap gap-2 mt-4">
				<Pill
					v-for="(tag, index) in tags"
					:key="index"
					:pill-key="index"
					:value="tag"
					@delete="removeTag"
				/>
			</div>
		</div>
		<ErrorMessage :error="error"/>
	</div>
</template>