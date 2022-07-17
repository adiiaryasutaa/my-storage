export const firebaseConfig = {
	apiKey: process.env.VUE_APP_API_KEY,
	authDomain: process.env.VUE_APP_AUTH_DOMAIN,
	projectId: process.env.VUE_APP_PROJECT_ID,
	messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
	appId: process.env.VUE_APP_APP_ID,
	storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
};

export const databasePath = {
	PROJECT: process.env.VUE_APP_DB_PATH_PROJECT,
};

export const storagePath = {
	PROJECT_THUMBNAIL: process.env.VUE_APP_STORAGE_PATH_PROJECT_THUMBNAIL,
	TEMPORARY: process.env.VUE_APP_STORAGE_PATH_TEMPORARY,
};

export const storageFile = {
	DEFAULT_PROJECT_THUMBNAIL: process.env.VUE_APP_DEFAULT_PROJECT_THUMBNAIL,
};
