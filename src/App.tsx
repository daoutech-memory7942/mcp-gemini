import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, ComponentPage, DashboardPage, CheckoutPage } from "./pages";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <div
        className="min-h-screen"
        data-pimitive-token="Mode-1"
        data-semantic-token="light-mode"
        data-component-token="mint"
      >
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <HomePage />
              </MainLayout>
            }
          />
          <Route
            path="/component"
            element={
              <MainLayout>
                <ComponentPage />
              </MainLayout>
            }
          />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
