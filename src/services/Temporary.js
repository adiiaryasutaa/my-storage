import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../database/firebase';
import { storagePath } from '../../database/firebase/config';
import { makeId } from '@/utils';

/**
 *
 * @param path {String}
 * @returns {StorageReference}
 */
const createTempRef = (path) => ref(storage, `${storagePath.TEMPORARY}/${path}`);

/**
 * Upload as temporary file
 *
 * @param file {File, Blob, Uint8Array, ArrayBuffer}
 * @returns {Promise<UploadResult>}
 */
export const uploadAsTemporary = async (file) => {
	try {
		const uploadResult = await uploadBytes(
			createTempRef(`${makeId(50)}.png`),
			file,
		);

		return uploadResult;
	} catch (e) {
		return false;
	}
};

export const getTemporaryFileUrl = async (filename) => {
	return await getDownloadURL(createTempRef(filename));
};