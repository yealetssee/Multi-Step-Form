import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <main className="w-full py-20 h-full bg-cyan-50 flex items-center justify-center">
      <Routes>
        <Route path="*" element={<Main />} />
      </Routes>
    </main>
  );
}

export default App;
