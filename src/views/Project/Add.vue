<script>
import ProjectThumbnailInput from '@/components/Project/ProjectThumbnailInput';

export default {
	name: 'Add',
	components: { ProjectThumbnailInput },
};
</script>

<template>
	<section class="container mx-auto p-4">
		<div class="flex flex-col items-center space-y-4">
			<h1 class="text-slate-900 font-lato font-bold">Add Project</h1>
			<div class="w-full md:w-96">
				<ProjectThumbnailInput />
			</div>
		</div>
	</section>
</template>