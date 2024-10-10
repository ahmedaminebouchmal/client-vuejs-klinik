import { createApp } from 'vue'
import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { de } from 'vuetify/locale'
import '@mdi/font/css/materialdesignicons.css'

import './style.css'
import App from './App.vue'
import Login from './components/Auth/Login.vue'
import PatientList from './components/Patients/PatientList.vue'
import PatientForm from './components/Patients/PatientForm.vue'
import InvoiceList from './components/Invoices/InvoiceList.vue'
import InvoiceForm from './components/Invoices/InvoiceForm.vue'
import BillingStatistics from './components/BillingStatistics.vue'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light'
  },
  locale: {
    locale: 'de',
    messages: { de },
  },
})

const apolloClient = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_URL || '/graphql', // Use environment variable or default to relative path
  cache: new InMemoryCache(),
})

const store = createStore({
  state() {
    return {
      user: null
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  }
})

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/patients', component: PatientList },
    { path: '/patients/new', component: PatientForm },
    { path: '/patients/:id', component: PatientForm },
    { path: '/invoices', component: InvoiceList },
    { path: '/invoices/new', component: InvoiceForm },
    { path: '/invoices/:id', component: InvoiceForm },
    { path: '/statistics', component: BillingStatistics },
  ]
})

const app = createApp(App)

app.use(vuetify)
app.use(router)
app.use(store)
app.provide(DefaultApolloClient, apolloClient)
app.mount('#app')