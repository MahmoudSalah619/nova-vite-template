import useGenerateRoutes from "../routes/useGenerateRoutes";
import MainLayout from "./components/Templates/MainLayout";

function App() {
  const routes = useGenerateRoutes();

  return <MainLayout>{routes}</MainLayout>;
}

export default App;
