import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigator } from "./src/navigation/Navigator";

const queryClient = new QueryClient({});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigator />
    </QueryClientProvider>
  );
};

// always export default App otherwise Expo is not happy
export default App;
