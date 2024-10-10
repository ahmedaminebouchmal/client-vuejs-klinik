<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">{{ isEditing ? 'Patient bearbeiten' : 'Neuen Patienten hinzufügen' }}</h2>
    <form @submit.prevent="savePatient" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Name
        </label>
        <input v-model="patient.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" required>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          E-Mail
        </label>
        <input v-model="patient.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" required>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          {{ isEditing ? 'Aktualisieren' : 'Speichern' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
// ... (rest of the script remains the same)
</script>