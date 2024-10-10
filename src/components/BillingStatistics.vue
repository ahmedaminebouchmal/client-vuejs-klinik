<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Abrechnungsstatistiken</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-white p-4 rounded shadow">
        <h3 class="text-lg font-semibold mb-2">Gesamtumsatz</h3>
        <p class="text-2xl font-bold">{{ totalRevenue.toFixed(2) }} €</p>
      </div>
      <div class="bg-white p-4 rounded shadow">
        <h3 class="text-lg font-semibold mb-2">Durchschnittlicher Rechnungsbetrag</h3>
        <p class="text-2xl font-bold">{{ averageInvoiceAmount.toFixed(2) }} €</p>
      </div>
    </div>
    <div class="mt-8">
      <h3 class="text-lg font-semibold mb-2">Monatlicher Umsatz</h3>
      <Bar v-if="chartData.labels.length > 0" :chart-data="chartData" :chart-options="chartOptions" />
      <p v-else>Lade Diagrammdaten...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { GET_BILLING_STATISTICS } from '../gql/queries'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const { result, loading } = useQuery(GET_BILLING_STATISTICS)
const statistics = ref({ totalRevenue: 0, averageInvoiceAmount: 0, monthlyRevenue: [] })

const totalRevenue = computed(() => statistics.value.totalRevenue)
const averageInvoiceAmount = computed(() => statistics.value.averageInvoiceAmount)

const chartData = ref({
  labels: [],
  datasets: [
    {
      label: 'Monatlicher Umsatz',
      backgroundColor: '#4CAF50',
      data: [],
    },
  ],
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
}

watch(result, (newResult) => {
  if (newResult && newResult.billingStatistics) {
    statistics.value = newResult.billingStatistics
    updateChartData()
  }
})

const updateChartData = () => {
  chartData.value = {
    labels: statistics.value.monthlyRevenue.map(item => item.month),
    datasets: [
      {
        label: 'Monatlicher Umsatz',
        backgroundColor: '#4CAF50',
        data: statistics.value.monthlyRevenue.map(item => item.revenue),
      },
    ],
  }
}
</script>