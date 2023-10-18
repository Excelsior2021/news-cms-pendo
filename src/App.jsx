import { createSignal } from "solid-js"
import { Routes, Route, Outlet, Navigate } from "@solidjs/router"
import SelectUser from "./pages/SelectUser/SelectUser"
import routes from "./utils/routes"
import Sidebar from "./components/Sidebar/Sidebar"
import Reports from "./pages/Reports/Reports"
import NewReport from "./pages/NewReport/NewReport"
import Team from "./pages/Team/Team"
import users from "./data/users"
import companies from "./data/companies"
import "./App.scss"

export const [user, setUser] = createSignal(users[0])
export const [company, setCompany] = createSignal(companies[0])
export const [signedIn, setSignedIn] = createSignal(false)
export const [anonymousUse, setAnonymousUse] = createSignal(false)

const App = () => {
  return (
    <div class="app">
      {signedIn() || anonymousUse() ? <Sidebar /> : null}
      <main class={signedIn() || anonymousUse() ? "main" : "main main--start"}>
        <Routes>
          {!signedIn() && !anonymousUse() ? (
            <Route path={routes.root} component={SelectUser} />
          ) : null}
          {!signedIn() && !anonymousUse() ? (
            <Route path={routes.users} component={SelectUser} />
          ) : null}
          <Route
            path={routes.uncaught}
            element={
              signedIn() || anonymousUse() ? (
                <Outlet />
              ) : (
                <Navigate href={routes.users} />
              )
            }>
            <Route path={routes.root} component={Reports} />
            <Route path={routes.reports} component={Reports} />
            <Route path={routes.newReport} component={NewReport} />
            <Route path={routes.team} component={Team} />
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
