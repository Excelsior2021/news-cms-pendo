import "./TeamMemberItem.scss"

const TeamMemberItem = props => {
  return (
    <li class="team-member-item">
      <div class="team-member-item__img-container">
        <img
          class="team-member-item__img"
          src="./images/profile-pic.svg"
          alt="profile pic"
        />
      </div>
      <div class="team-member-item__details">
        <p class="team-member-item__name">{props.member.name}</p>
        <p>{props.member.role}</p>
      </div>
    </li>
  )
}

export default TeamMemberItem
