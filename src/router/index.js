import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/login',
		name: 'login',
		meta: {
			title: 'Login',
		},
		component: () => import('../views/LoginView.vue'),
	},
	{
		path: '/',
		name: 'home',
		meta: {
			title: 'My Storage',
		},
		component: () => import('../views/HomeView.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	document.title = to.meta.title;
	next();
});

export default router;
