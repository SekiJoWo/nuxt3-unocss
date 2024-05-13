<script setup>
const runtimeConfig = useRuntimeConfig();
const { apiSecret } = runtimeConfig;
const { apiBase } = runtimeConfig.public;
</script>

<template>{{ apiBase }}</template>

<style></style>
