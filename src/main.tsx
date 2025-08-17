import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import { Provider } from './components/ui/provider';
import { RouterProvider } from 'react-router-dom';
import router from './components/sevices/routes';

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <QueryClientProvider client = {queryClient}>
        <RouterProvider router={router}/>
        <ReactQueryDevtools/>
        </QueryClientProvider>
    </Provider>
      
  </React.StrictMode>
);
