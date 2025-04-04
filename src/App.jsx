import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { ContentEditor } from './components/ContentEditor';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 минут
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContentEditor />
      <Toaster position="top-right" />
    </QueryClientProvider>
  );
} 