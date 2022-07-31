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
		component: () => import('../views/ProjectView.vue'),
		meta: {
			title: 'Project',
		},
		children: [
			{
				path: 'add',
				name: 'add-project',
				component: () => import('../views/Project/AddView.vue'),
			},
		],
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
