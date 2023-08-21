import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <main className="w-screen h-screen bg-cyan-50 flex items-center justify-center">
      <Routes>
        <Route path="*" element={<Main />} />
      </Routes>
    </main>
  );
}

export default App;
