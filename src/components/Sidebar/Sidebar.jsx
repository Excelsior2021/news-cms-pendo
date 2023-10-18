import { For } from "solid-js"
import { useNavigate, A } from "@solidjs/router"
import routes from "../../utils/routes"
import "./Sidebar.scss"

const Sidebar = () => {
  const navigate = useNavigate()

  const navItems = [
    {
      name: "reports",
      route: routes.reports,
    },
    {
      name: "new report",
      route: routes.newReport,
    },
    {
      name: "team",
      route: routes.team,
    },
  ]

  const handleChangePage = (e, route) => navigate(route)

  return (
    <div class="sidebar">
      <span class="sidebar__logo">NEWS|cms</span>

      <nav class="nav">
        <ul class="nav__list">
          <For each={navItems}>
            {item => (
              <li
                class="nav__item"
                onclick={e => handleChangePage(e, item.route)}>
                {item.name}
              </li>
            )}
          </For>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
