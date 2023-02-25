<template>
  <div>
    {{route.params.p1}}
    <br>
    {{route.params.p2}}
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>