import { createSignal } from "solid-js"
import Users from "../../components/Users/Users"
import { company, setAnonymousUse, setSignedIn, user } from "../../App"
import { initializePendo } from "../../utils/utils"
import { useNavigate } from "@solidjs/router"
import routes from "../../utils/routes"
import "./SelectUser.scss"

const SelectUser = () => {
  const navigate = useNavigate()
  const [buttonText, setButtonText] = createSignal("use app anonymously")
  const handleAuth = () => {
    if (user()) {
      setSignedIn(true)
      initializePendo(user(), company())
    }
    if (!user()) {
      setAnonymousUse(true)
      initializePendo(null, null)
    }
    navigate(routes.reports)
  }

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
