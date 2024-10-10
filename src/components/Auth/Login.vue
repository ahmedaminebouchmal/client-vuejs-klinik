<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="elevation-8 login-card">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Anmelden</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-icon>mdi-hospital-box</v-icon>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="login" v-model="isFormValid" ref="form">
              <v-text-field
                v-model="username"
                :rules="[v => !!v || 'Benutzername ist erforderlich']"
                label="Benutzername"
                name="username"
                prepend-icon="mdi-account"
                type="text"
                required
                autocomplete="username"
                outlined
                dense
                class="mb-4"
              ></v-text-field>
              <v-text-field
                v-model="password"
                :rules="[v => !!v || 'Passwort ist erforderlich']"
                label="Passwort"
                name="password"
                prepend-icon="mdi-lock"
                :type="showPassword ? 'text' : 'password'"
                required
                autocomplete="current-password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                outlined
                dense
                class="mb-4"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="px-4 pb-4">
            <v-btn text color="primary" @click="forgotPassword">
              Passwort vergessen?
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              :loading="isLoading"
              :disabled="!isFormValid || isLoading"
              @click="login"
              class="px-6"
            >
              Anmelden
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-snackbar v-model="showError" color="error" timeout="3000" top>
          {{ errorMessage }}
          <template v-slot:action="{ attrs }">
            <v-btn text v-bind="attrs" @click="showError = false">
              Schließen
            </v-btn>
          </template>
        </v-snackbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const username = ref('')
const password = ref('')
const showPassword = ref(false)
const isLoading = ref(false)
const isFormValid = ref(false)
const showError = ref(false)
const errorMessage = ref('')

const login = async () => {
  if (!isFormValid.value) {
    return
  }

  isLoading.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    if (username.value === 'patient' && password.value === '1234') {
      store.commit('setUser', { username: username.value })
      router.push('/patients')
    } else {
      throw new Error('Ungültige Anmeldedaten')
    }
  } catch (error) {
    errorMessage.value = error.message
    showError.value = true
  } finally {
    isLoading.value = false
  }
}

const forgotPassword = () => {
  // Implement forgot password functionality
  alert('Funktion zum Zurücksetzen des Passworts noch nicht implementiert.')
}
</script>

<style scoped>
.login-card {
  @apply rounded-lg overflow-hidden transition-shadow duration-300 ease-in-out;
}

.login-card:hover {
  @apply shadow-xl;
}

.v-btn {
  @apply text-base font-medium;
}
</style>
