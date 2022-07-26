<script>
import PlusIcon from '@/Icons/Plus';

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
				:to="{ name: 'add-project' }"
				class="inline-flex items-center space-x-2 bg-indigo-600 rounded text-slate-50 font-lato px-4 py-2 hover:bg-indigo-700 active:bg-indigo-700 focus:ring focus:ring-indigo-400 focus:outline-0"
			>
				<PlusIcon :size="5"/>
				<span>Add Project</span>
			</router-link>
		</div>
	</section>
</template>