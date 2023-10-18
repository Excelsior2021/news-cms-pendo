import { For } from "solid-js"
import TeamMemberItem from "../../components/TeamMemberItem/TeamMemberItem"
import users from "../../data/users"
import { company } from "../../App"
import "./Team.scss"

const Team = () => {
  const teamMembers = users.filter(user => user.companyId === company().id)
  return (
    <div class="team">
      <h1 class="team__heading">Team</h1>
      <ul class="team__list">
        <For each={teamMembers}>
          {member => <TeamMemberItem member={member} />}
        </For>
      </ul>
    </div>
  )
}

export default Team
