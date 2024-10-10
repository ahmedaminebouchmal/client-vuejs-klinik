<template>
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Krankenhaus-Abrechnungssystem</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn @click="logout" color="error">Abmelden</v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary>
    <v-list>
      <v-list-item to="/patients" prepend-icon="mdi-account-group">
        Patienten
      </v-list-item>
      <v-list-item to="/invoices" prepend-icon="mdi-file-document">
        Rechnungen
      </v-list-item>
      <v-list-item to="/statistics" prepend-icon="mdi-chart-bar">
        Statistiken
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const drawer = ref(false)

const logout = () => {
  store.commit('setUser', null)
  router.push('/login')
}
</script>