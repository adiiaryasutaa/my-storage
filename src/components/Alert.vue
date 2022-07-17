<template>
  <div
		class="border border rounded font-lato font-semibold px-4 py-2"
		:class="{
  		'bg-green-200 border-green-400 text-green-600': type === 'success',
  		'bg-red-200 border-red-400 text-red-600': type === 'error',
  		'bg-orange-200 border-orange-400 text-orange-600': type === 'warning',
    }"
  >
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    message: String,
    type: String,
  }
}
</script>
