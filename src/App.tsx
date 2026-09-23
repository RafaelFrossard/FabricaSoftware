import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import HomePage from "./pages/home"
import ProjetoTemplate from "./pages/project-lumini"
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="project-lumini" element={<ProjetoTemplate />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
  )
}

export default App