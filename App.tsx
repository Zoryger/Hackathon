import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./src/navigation/Navigator";

const queryClient = new QueryClient({});

const App2 = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

// always export default App otherwise Expo is not happy
export default App2;
