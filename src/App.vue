<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default {
	name: 'My Storage',
	components: { Footer, Navbar },
};
</script>

<template>
	<div class="flex flex-col min-h-screen">
		<Navbar/>
		<main class="grow">
			<router-view/>
		</main>
		<Footer/>
	</div>
</template>