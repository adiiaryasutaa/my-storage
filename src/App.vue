<script>
import Navbar from '@/components/Navbar';
import { getUser } from '../app/services/Authentication';
import { ref } from 'vue';

export default {
	name: 'My Storage',
	components: { Navbar },
};
</script>

<template>
	<Navbar/>
	<router-view/>
</template>