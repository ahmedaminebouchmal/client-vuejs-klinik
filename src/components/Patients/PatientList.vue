<template>
  <v-container>
    <v-row>
      <v-col>
        <h2 class="text-h4 mb-4">Patientenliste</h2>
        <v-btn color="primary" to="/patients/new" class="mb-4">
          Neuen Patienten hinzufügen
        </v-btn>
        <v-data-table
          :headers="headers"
          :items="patients"
          class="elevation-1"
        >
          <template v-slot:item.actions="{ item }">
            <v-btn
              icon
              :to="`/patients/${item.raw.id}`"
              color="primary"
              size="small"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              icon
              @click="deletePatient(item.raw.id)"
              color="error"
              size="small"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useQuery, useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'

const GET_PATIENTS = gql`
  query GetPatients {
    patients {
      id
      name
      email
    }
  }
`

const DELETE_PATIENT = gql`
  mutation DeletePatient($id: ID!) {
    deletePatient(id: $id)
  }
`

const { result } = useQuery(GET_PATIENTS)
const patients = ref([])

const headers = [
  { title: 'ID', key: 'id' },
  { title: 'Name', key: 'name' },
  { title: 'E-Mail', key: 'email' },
  { title: 'Aktionen', key: 'actions', sortable: false },
]

onMounted(() => {
  if (result.value) {
    patients.value = result.value.patients
  }
})

const { mutate: deletePatientMutation } = useMutation(DELETE_PATIENT)

const deletePatient = async (id: string) => {
  if (confirm('Sind Sie sicher, dass Sie diesen Patienten löschen möchten?')) {
    await deletePatientMutation({ id })
    patients.value = patients.value.filter(patient => patient.id !== id)
  }
}
</script>