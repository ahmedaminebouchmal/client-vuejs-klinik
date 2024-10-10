<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">{{ isEditing ? 'Rechnung ansehen' : 'Neue Rechnung erstellen' }}</h2>
    <form @submit.prevent="saveInvoice" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="patientId">
          Patient
        </label>
        <select v-model="invoice.patientId" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="patientId" required>
          <option v-for="patient in patients" :key="patient.id" :value="patient.id">{{ patient.name }}</option>
        </select>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="amount">
          Betrag
        </label>
        <input v-model.number="invoice.amount" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="amount" type="number" step="0.01" required>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="date">
          Datum
        </label>
        <input v-model="invoice.date" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" required>
      </div>
      <div class="flex items-center justify-between">
        <button v-if="!isEditing" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Rechnung erstellen
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
// ... (rest of the script remains the same)
</script>