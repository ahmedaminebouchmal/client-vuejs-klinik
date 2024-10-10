import gql from 'graphql-tag'

export const CREATE_PATIENT = gql`
  mutation CreatePatient($input: PatientInput!) {
    createPatient(input: $input) {
      id
      name
      email
    }
  }
`

export const UPDATE_PATIENT = gql`
  mutation UpdatePatient($id: ID!, $input: PatientInput!) {
    updatePatient(id: $id, input: $input) {
      id
      name
      email
    }
  }
`

export const DELETE_PATIENT = gql`
  mutation DeletePatient($id: ID!) {
    deletePatient(id: $id)
  }
`

export const CREATE_INVOICE = gql`
  mutation CreateInvoice($input: InvoiceInput!) {
    createInvoice(input: $input) {
      id
      patientId
      amount
      date
    }
  }
`