<script>
import SpinnerIcon from '@/icons/Spinner';
import { XIcon } from '@heroicons/vue/solid';
import FileInput from '@/components/Inputs/FileInput';
import { ref } from 'vue';
import { getTemporaryFileUrl, uploadAsTemporary } from '@/services/Temporary';

export default {
	name: 'ProjectThumbnailInput',
	props: {
		id: String,
	},
	components: { FileInput, SpinnerIcon, XIcon },
	setup(props, context) {
		const previewUrl = ref('');
		const showUploadSpinner = ref(false);

		/**
		 *
		 * @param file {File, Blob, Uint8Array, ArrayBuffer}
		 * @returns {Promise<void>}
		 */
		const uploadFile = async (file) => {
			showUploadSpinner.value = true;

			try {
				const uploadResult = await uploadAsTemporary(file);
				previewUrl.value = await getTemporaryFileUrl(uploadResult.ref.name);
				context.emit('uploadedThumbnailPath', uploadResult.ref.fullPath);
			} catch (e) {
				console.log(e.message());
			} finally {
				showUploadSpinner.value = false;
			}
		};

		/**
		 *
		 */
		const removeUploadedFile = () => {
			previewUrl.value = '';
		};

		return { previewUrl, showUploadSpinner, uploadFile, removeUploadedFile };
	},
};
</script>

<template>
	<div class="flex flex-col space-y-1">
		<label class="text-slate-600 font-medium text-sm" :for="id">Thumbnail</label>
		<div class="border border-slate-200 rounded p-2">
			<template v-if="previewUrl">
				<div @click="removeUploadedFile" class="group relative w-fit hover:cursor-pointer">
					<img
						class="rounded h-52 w-fit mb-2 group-hover:brightness-50"
						:src="previewUrl"
						alt="Preview Image"
					/>
					<div
						class="hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-400 group-hover:inline-block"
					>
						<XIcon class="w-8 h-8 text-slate-600"/>
					</div>
				</div>
			</template>
			<div class="flex items-center justify-between">
				<FileInput :id="id" accept="image/png, image/jpeg" @getFile="uploadFile"/>
				<SpinnerIcon v-show="showUploadSpinner" :size="6"/>
			</div>
		</div>
	</div>
</template>