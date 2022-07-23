<script>
import { getUser, logout } from '../../app/services/Authentication';
import { ref } from 'vue';
import { auth } from '../../database/firebase';

export default {
	name: 'Navbar',
	setup() {
		const isLoggedIn = ref(!!getUser());
		const showNavbarDrawer = ref(false);

		auth.onAuthStateChanged(user => {
			isLoggedIn.value = !!user;
		});

		const toggleNavbarDrawer = () => {
			showNavbarDrawer.value = !showNavbarDrawer.value;
		};

		return { isLoggedIn, showNavbarDrawer, toggleNavbarDrawer, logout };
	},
};
</script>

<template>
	<nav class="navbar">
		<div class="container flex flex-wrap justify-between items-center h-full mx-auto">
			<div class="navbar-brand">
				<img :src="require('@/assets/logo.png')" class="mr-3 h-6 sm:h-9" alt="My Storage Logo"/>
				<h1 class="self-center text-xl font-lato font-semibold whitespace-nowrap">My Storage</h1>
			</div>
			<template v-if="isLoggedIn">
				<button @click="toggleNavbarDrawer"
								class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
					<svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
							 xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clip-rule="evenodd"></path>
					</svg>
				</button>
				<div v-show="showNavbarDrawer" class="navbar-drawer">
					<div class="flex flex-col divide-y divide-slate-200 md:flex-row md:space-x-8 md:mt-0 md:text-sm">
						<div class="flex flex-col mb-2">
							<router-link
								:to="{ name: 'home' }"
								class="navbar-link"
							>Home
							</router-link>
							<router-link
								:to="{ name: 'project' }"
								class="navbar-link"
							>Project
							</router-link>
							<router-link
								:to="{ name: 'blog' }"
								class="navbar-link"
							>Blog
							</router-link>
						</div>
						<div class="pt-2">
							<button
								@click="logout"
								class="logout-button"
							>Logout
							</button>
						</div>
					</div>
				</div>
			</template>
		</div>
	</nav>
</template>

<style scoped>
.navbar {
	@apply bg-white border-b border-gray-200 h-16 px-2 py-2.5 sm:px-4;
}

.navbar-brand {
	@apply flex items-center;
}

.navbar-drawer {
	@apply w-full border border-slate-200 rounded mt-4 p-2 md:block md:w-auto;
}

.navbar-link {
	@apply block font-lato rounded py-2 px-4 md:bg-transparent md:p-0;
}

.navbar-link:not(.router-link-active) {
	@apply text-slate-900 hover:bg-indigo-600 hover:text-slate-50 active:bg-indigo-700;
}

.router-link-active, .router-link-exact-active {
	@apply bg-indigo-800 text-slate-50
}

.logout-button {
	@apply w-fit rounded text-slate-900 font-lato font-bold px-4 py-2 hover:bg-indigo-600 hover:text-slate-50 active:bg-indigo-800 focus:ring focus:ring-indigo-400;
}
</style>