import { createRoot } from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from '@routes/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store';

// Tanstack Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <AppRouter />
            <ReactQueryDevtools />
        </QueryClientProvider>
    </Provider>

)
