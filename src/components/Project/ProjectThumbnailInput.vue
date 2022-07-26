<script>
import SpinnerIcon from '@/Icons/Spinner';
import { ref } from 'vue';
import FileInput from '@/components/Inputs/FileInput';

export default {
	name: 'ProjectThumbnailInput',
	components: { FileInput, SpinnerIcon },
	setup(props, context) {
		const previewUrl = ref('');
		const showUploadSpinner = ref(false);

		const uploadFile = async (file) => {
			showUploadSpinner.value = true;

			/* Upload */

			/* Get Download URL */

			context.emit('thumbnailDBPath', null);

			showUploadSpinner.value = false;
		};

		return { previewUrl, showUploadSpinner, uploadFile };
	},
};
</script>

<template>
	<div class="flex flex-col space-y-2">
		<div class="border border-slate-200 p-2">
			<template v-if="previewUrl">
				<div class="group relative w-fit">
					<img
						class="rounded h-52 w-fit mb-2 group-hover:brightness-50 group-hover:cursor-pointer"
						:src="previewUrl"
						alt="Preview Image"
					/>
					<div
						class="hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-400 group-hover:inline-block"
					>
					</div>
				</div>
			</template>
			<div class="flex items-center space-x-4">
				<FileInput accept="image/png, image/jpeg" @getFile="uploadFile"/>
				<SpinnerIcon v-show="showUploadSpinner" :size="6"/>
			</div>
		</div>
	</div>
</template>