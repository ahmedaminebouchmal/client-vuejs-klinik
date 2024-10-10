<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Rechnungsliste</h2>
    <router-link to="/invoices/new" class="bg-green-500 text-white px-4 py-2 rounded mb-4 inline-block">Neue Rechnung erstellen</router-link>
    <table class="w-full bg-white shadow-md rounded">
      <thead>
        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th class="py-3 px-6 text-left">Rechnungs-ID</th>
          <th class="py-3 px-6 text-left">Patientenname</th>
          <th class="py-3 px-6 text-left">Betrag</th>
          <th class="py-3 px-6 text-left">Datum</th>
          <th class="py-3 px-6 text-center">Aktionen</th>
        </tr>
      </thead>
      <tbody class="text-gray-600 text-sm font-light">
        <tr v-for="invoice in invoices" :key="invoice.id" class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left whitespace-nowrap">{{ invoice.id }}</td>
          <td class="py-3 px-6 text-left">{{ invoice.patientName }}</td>
          <td class="py-3 px-6 text-left">{{ invoice.amount.toFixed(2) }} €</td>
          <td class="py-3 px-6 text-left">{{ new Date(invoice.date).toLocaleDateString('de-DE') }}</td>
          <td class="py-3 px-6 text-center">
            <router-link :to="`/invoices/${invoice.id}`" class="text-blue-500 hover:underline mr-2">Ansehen</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
// ... (rest of the script remains the same)
</script>