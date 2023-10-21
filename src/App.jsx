import { createSignal } from "solid-js"
import { Routes, Route, Outlet, Navigate } from "@solidjs/router"
import routes from "./utils/routes"
import { initializePendo } from "./utils/utils"
import Header from "./components/Header/Header"
import SelectUser from "./pages/SelectUser/SelectUser"
import Sidebar from "./components/Sidebar/Sidebar"
import Reports from "./pages/Reports/Reports"
import NewReport from "./pages/NewReport/NewReport"
import Team from "./pages/Team/Team"
import "./App.scss"

export const [user, setUser] = createSignal(null)
export const [company, setCompany] = createSignal(null)
export const [signedIn, setSignedIn] = createSignal(false)
export const [anonymousUse, setAnonymousUse] = createSignal(false)

const App = () => {
  const session = JSON.parse(localStorage.getItem("session"))
  if (session) {
    setSignedIn(true)
    setUser(session.user)
    setCompany(session.company)
    initializePendo(session.user, session.company)
  }

  return (
    <div class="app">
      {signedIn() || anonymousUse() ? <Sidebar /> : null}
      <div
        class={
          signedIn() || anonymousUse() ? "section" : "section section--start"
        }>
        {(signedIn() || anonymousUse()) && <Header />}
        <main class="main">
          <Routes>
            {!signedIn() && !anonymousUse() ? (
              <Route
                path={routes.root}
                component={<Navigate href={routes.users} />}
              />
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
              <Route
                path={routes.root}
                component={<Navigate href={routes.reports} />}
              />
              <Route path={routes.reports} component={Reports} />
              <Route path={routes.newReport} component={NewReport} />
              <Route path={routes.team} component={Team} />
            </Route>
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
