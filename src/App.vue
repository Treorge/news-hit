<script setup>
import { useUserStore } from '@/stores'
const userStore = useUserStore()
</script>

<template>
  <div>
    <router-view></router-view>
    app
    <plugin></plugin>
    <el-button @click="userStore.setToken('23109fnak')">elbutton</el-button>
    <div>{{ userStore.token }}</div>
  </div>
</template>

<style scoped></style>
