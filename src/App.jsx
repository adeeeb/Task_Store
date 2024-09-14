import { QueryClient, QueryClientProvider } from "react-query";
import Dashboard from "./components/Dashboard";
import "./index.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto">
        <Dashboard />
      </div>
    </QueryClientProvider>
  );
};

export default App;
