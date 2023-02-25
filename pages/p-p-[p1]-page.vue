<template>
  <div>
    {{ route.params.p1 }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
