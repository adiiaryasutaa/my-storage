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
			title: 'Home',
		},
		component: () => import('../views/HomeView.vue'),
	},
	{
		path: '/project',
		name: 'project',
		meta: {
			title: 'Project',
		},
		component: () => import('../views/ProjectView.vue'),
	},
	{
		path: '/project/add',
		name: 'add-project',
		meta: {
			title: 'Project',
		},
		component: () => import('../views/Project/AddView.vue'),
	},
	{
		path: '/blog',
		name: 'blog',
		meta: {
			title: 'Blog',
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
