import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import HomePage from "./pages/home"
import Error404Page from "./pages/error404"
import WeightCarePage from "./pages/projects/weightcare"
import LuminiPage from "./pages/projects/lumini"
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="project-lumini" element={<LuminiPage />} />
        <Route path="project-weightcare" element={<WeightCarePage />} />
        <Route path="*" element={<Error404Page />} />
      </Route>
    </Routes>
  )
}

export default App