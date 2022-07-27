<script>
import { getUser, logout } from '../../app/services/Authentication';
import { ref } from 'vue';
import { auth } from '../../database/firebase';
import MenuIcon from '@/icons/Menu';

export default {
	name: 'Navbar',
	components: { MenuIcon },
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
	<nav class="navbar z-10">
		<div class="container flex flex-wrap justify-between items-center h-full mx-auto md:space-x-4">
			<div class="navbar-brand space-x-1">
				<img :src="require('@/assets/logo.png')" class="h-6 sm:h-9" alt="My Storage Logo"/>
				<h1 class="self-center text-xl font-lato font-semibold whitespace-nowrap">My Storage</h1>
			</div>
			<template v-if="isLoggedIn">
				<button @click="toggleNavbarDrawer" class="navbar-drawer-toggler">
					<MenuIcon :size="6"/>
				</button>
				<div :class="{'hidden': !showNavbarDrawer}" class="grow navbar-drawer">
					<div
						class="flex flex-col justify-between divide-y divide-slate-200 w-full md:flex-row md:divide-y-0 md:mt-0 md:text-sm">
						<div class="flex flex-col mb-2 md:justify-between md:items-center md:flex-row md:space-x-2 md:mb-0">
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
						<div class="pt-2 md:pt-0">
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
	@apply bg-white border-b border-slate-200 h-16 px-2 py-2.5 sm:px-4;
}

.navbar-brand {
	@apply flex items-center;
}

.navbar-drawer-toggler {
	@apply inline-flex items-center p-2 text-sm text-slate-500 rounded md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200;
}

.navbar-drawer {
	@apply w-full border border-slate-200 rounded mt-6 p-2 md:block md:flex md:w-auto md:border-0 md:mt-0 md:p-0;
}

.navbar-link {
	@apply block font-lato font-bold rounded py-2 px-4 md:bg-transparent;
}

.navbar-link:not(.router-link-active) {
	@apply text-slate-900 hover:bg-indigo-600 hover:text-slate-50 active:bg-indigo-700 md:bg-transparent md:text-slate-600 md:hover:text-indigo-700 md:hover:bg-transparent md:active:text-indigo-800;
}

.router-link-active, .router-link-exact-active {
	@apply bg-indigo-800 text-slate-50 md:bg-transparent md:text-indigo-800;
}

.logout-button {
	@apply border border-indigo-600 rounded text-slate-900 font-lato font-bold w-fit px-4 py-2 hover:bg-indigo-700 hover:text-slate-50 active:bg-indigo-800 focus:ring focus:ring-indigo-400;
}
</style>