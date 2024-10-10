import gql from 'graphql-tag'

export const GET_PATIENTS = gql`
  query GetPatients {
    patients {
      id
      name
      email
    }
  }
`

export const GET_PATIENT = gql`
  query GetPatient($id: ID!) {
    patient(id: $id) {
      id
      name
      email
    }
  }
`

export const GET_INVOICES = gql`
  query GetInvoices {
    invoices {
      id
      patientName
      amount
      date
    }
  }
`

export const GET_INVOICE = gql`
  query GetInvoice($id: ID!) {
    invoice(id: $id) {
      id
      patientId
      amount
      date
    }
  }
`

export const GET_BILLING_STATISTICS = gql`
  query GetBillingStatistics {
    billingStatistics {
      totalRevenue
      averageInvoiceAmount
      monthlyRevenue {
        month
        revenue
      }
    }
  }
`