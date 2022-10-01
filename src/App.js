import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "contexts/auth-context";
import SignUp from "pages/SignUp";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
