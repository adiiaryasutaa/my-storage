<script>
import { PlusIcon } from '@heroicons/vue/solid';

export default {
	name: 'ProjectView',
	components: { PlusIcon },
	setup() {

	},
};
</script>

<template>
	<section class="container mx-auto p-4">
		<div class="">
			<router-link
				to="/project/add"
				class="inline-flex items-center space-x-2 bg-indigo-600 rounded text-slate-50 font-lato px-4 py-2 hover:bg-indigo-700 active:bg-indigo-700 focus:ring focus:ring-indigo-400 focus:outline-0"
			>
				<PlusIcon class="w-5 h-5 text-slate-50"/>
				<span>Add Project</span>
			</router-link>
		</div>
	</section>
</template>