import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './scss/style.scss'
import './global.css'
import './scss/_mixin.scss'
import ProductsProvider from './context/ProductsProvider.tsx'
import {  QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryCLient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ProductsProvider>
    <QueryClientProvider client={queryCLient}>
    <React.StrictMode>
    <App />
    </React.StrictMode>
    </QueryClientProvider>
  </ProductsProvider>
)
