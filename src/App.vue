<template>
  <v-app>
    <v-main>
      <v-container fluid class="fill-height">
        <Navbar v-if="isLoggedIn" />
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import Navbar from './components/Navbar.vue'

const store = useStore()
const isLoggedIn = computed(() => !!store.state.user)
</script>