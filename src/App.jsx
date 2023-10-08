import { createSignal } from "solid-js"
import SelectUser from "./pages/SelectUser/SelectUser"

export const [user, setUser] = createSignal(null)
export const [company, setCompany] = createSignal(null)

const App = () => {
  return (
    <div class="app">
      <SelectUser />
    </div>
  )
}

export default App
