import { Navigate, Route, Routes } from "react-router-dom";

import ClaimListPage from "./pages/ClaimListPage";
import CreateClaimPage from "./pages/CreateClaimPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/claim-list" replace/>}  />
      <Route path="/claim-list" element={<ClaimListPage />} />
      <Route path="/create-claim" element={<CreateClaimPage />} />
    </Routes>
  );
}

export default App;
