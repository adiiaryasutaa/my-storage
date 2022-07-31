<script>
import { XIcon } from '@heroicons/vue/solid';

export default {
	name: 'Pill',
	props: {
		value: String,
		pillKey: Number,
	},
	setup(props, context) {
		const remove = () => {
			context.emit('delete', props.pillKey);
		};
		return { remove };
	},
	components: { XIcon },
};
</script>

<template>
	<div
		class="inline-flex items-center space-x-1 border border-slate-200 rounded text-sm font-medium text-slate-800 px-2 py-1"
	>
		<span>{{ value }}</span>
		<button
			@click="remove"
			class="text-slate-600 rounded p-1 hover:bg-slate-100 active:bg-slate-200"
		>
			<XIcon class="w-3 h-3 text-slate-600"/>
		</button>
	</div>
</template>