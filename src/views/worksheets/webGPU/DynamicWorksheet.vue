<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  unit: String,
  part: String
})

const Worksheet = defineAsyncComponent(() =>
    import(`./w${props.unit}${props.part}.vue`)
)
</script>

<template>
  <Worksheet />
</template>


<style scoped>

</style>