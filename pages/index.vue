<template>
  <div>
    index
    <br />
    <a href="/p-p1-page">p-p1-page</a>
    <br />
    <a href="/p1-p2-page">p1-p2-page</a>
    <br />
    <a href="/p-p-p2-page">p-p-p2-page</a>
    <br />
    {{ data.test }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data } = await useFetch('/api/test');
console.log(data.value);
</script>
