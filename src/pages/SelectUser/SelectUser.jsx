import { createSignal } from "solid-js"
import Users from "../../components/Users/Users"
import "./SelectUser.scss"

const SelectUser = () => {
  const [buttonText, setButtonText] = createSignal("use app anonymously")
  const handleAuth = () => {}
  return (
    <div class="select-user">
      <Users setButtonText={setButtonText} />
      <button class="select-user__button" onclick={handleAuth}>
        {buttonText()}
      </button>
    </div>
  )
}

export default SelectUser
