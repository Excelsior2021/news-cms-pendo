import { createSignal, For } from "solid-js"
import users from "../../data/users"
import companies from "../../data/companies"
import "./Users.scss"
import { setCompany, setUser } from "../../App"

const Users = props => {
  const [selectedUserId, setSelectedUserId] = createSignal(null)

  const handleSelectedUser = user => {
    if (selectedUserId() === user.id) {
      setSelectedUserId(null)
      props.setButtonText("use app anonymously")
      setUser(users[0])
      setCompany(companies[0])
    } else {
      const company = companies.find(company => user.companyId === company.id)
      setSelectedUserId(user.id)
      props.setButtonText("sign in")
      setUser(user)
      setCompany(company)
    }
  }

  return (
    <div class="users">
      <p class="users__heading">Select a user</p>
      <ul class="users__list">
        <For each={users}>
          {user => (
            <li
              class={
                selectedUserId() === user.id
                  ? "users__user users__user--active"
                  : "users__user"
              }
              onclick={() => handleSelectedUser(user)}>
              {user.name} | {user.company}
            </li>
          )}
        </For>
      </ul>
    </div>
  )
}

export default Users
