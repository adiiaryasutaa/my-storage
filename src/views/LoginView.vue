<script>
import Input from '@/components/Input';
import Alert from '@/components/Alert';
import { ref } from 'vue';
import { authenticate } from '../../app/services/Authentication';
import IconSpinner from '@/Icons/Spinner';

export default {
	name: 'LoginView',
	setup() {
		const email = ref('');
		const password = ref('');
		const error = ref('');
		const onLoggingIn = ref(false);

		const login = () => {
			error.value = '';
			onLoggingIn.value = true;

			authenticate(email.value, password.value)
				.catch(e => {
					error.value = 'Login failed';
				})
				.finally(() => {
					onLoggingIn.value = false;
				});
		};

		return { email, password, error, onLoggingIn, login };
	},
	components: { IconSpinner, Alert, Input },
};
</script>

<template>
	<div class="container mx-auto px-4">
		<div class="block flex flex-col items-stretch space-y-8 mt-20 max-w-sm mx-auto">
			<h1 class="text-slate-900 text-2xl text-center font-lato font-bold">
				Login
			</h1>
			<Alert v-show="error" :message="error" type="error"/>
			<div class="flex flex-col space-y-4">
				<Input v-model="email" id="email" label="Email" type="email"/>
				<Input v-model="password" id="password" label="Password" type="password"/>
			</div>
			<button :disabled="onLoggingIn" @click="login" :class="{ 'space-x-2': onLoggingIn }"
							class="inline-flex items-center justify-center bg-indigo-600 rounded text-slate-50 font-lato font-bold px-4 py-2 hover:bg-indigo-700 active:bg-indigo-800 focus:ring focus:ring-indigo-400 disabled:bg-indigo-500">
				<IconSpinner v-show="onLoggingIn" :size="5"/>
				<span>Submit</span>
			</button>
		</div>
	</div>
</template>
