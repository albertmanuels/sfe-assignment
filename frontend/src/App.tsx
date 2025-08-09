import { Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./components/Layout/AppLayout";
import ClaimListPage from "./pages/ClaimListPage";
import CreateClaimPage from "./pages/CreateClaimPage";


function App() {
  return (
    <Routes>
      <Route element={<AppLayout/>} >
        <Route path="/" element={<Navigate to="/claim-list" replace/>}  />
        <Route path="/claim-list" element={<ClaimListPage />} />
        <Route path="/create-claim" element={<CreateClaimPage />} />
      </Route>
    </Routes>
  );
}

export default App;
