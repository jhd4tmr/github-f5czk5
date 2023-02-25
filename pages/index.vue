<template>
  <div>
    index
    <br />
    <a href="/p-p1-page">p-p1-page</a>
    <br />
    <a href="/p1-p2-page">p1-p2-page</a>
    {{ data.test }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data } = await useFetch('/api/test');
</script>
