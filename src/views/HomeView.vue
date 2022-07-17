<template>
	<h1>Home</h1>
	<button @click="logout"
					class="bg-indigo-600 rounded text-slate-50 font-lato font-bold px-4 py-2 hover:bg-indigo-700 active:bg-indigo-800 focus:ring focus:ring-indigo-400">
		Logout
	</button>
</template>

<script>
export default {
	name: 'HomeView',
	setup() {
		const authService = require('../../app/services/Authentication');

		const logout = () => {
			authService.logout();
		};

		return { logout };
	},
};
</script>
