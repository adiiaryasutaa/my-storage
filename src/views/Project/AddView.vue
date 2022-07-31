<script>
import ThumbnailInput from '@/components/Inputs/ThumbnailInput';
import Input from '@/components/Inputs/Input';
import TextArea from '@/components/Inputs/TextArea';
import TagInput from '@/components/Inputs/TagInput';

export default {
	name: 'AddView',
	components: { TagInput, TextArea, Input, ThumbnailInput },
	setup() {
		/**
		 *
		 * @param path {String}
		 */
		const getUploadedThumbnail = (path) => {
			console.log(path);
		};

		return { getUploadedThumbnail };
	},
};
</script>

<template>
	<section class="container mx-auto p-4">
		<div class="flex flex-col items-center space-y-4">
			<h1 class="text-2xl text-slate-900 font-lato font-bold">Add Project</h1>
			<div class="flex flex-col space-y-4 w-full md:w-96">
				<ThumbnailInput id="thumbnail" @uploadedThumbnailPath="getUploadedThumbnail"/>
				<Input id="title" label="Title" type="text"/>
				<TextArea id="description" label="Description" />
				<Input id="demoUrl" label="Demo" type="text"/>
				<Input id="Repository" label="Repository" type="text"/>
				<TagInput id="tag" label="Tags" />
			</div>
		</div>
	</section>
</template>