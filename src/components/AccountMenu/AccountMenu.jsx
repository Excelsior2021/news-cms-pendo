import {
  anonymousUse,
  setAnonymousUse,
  setCompany,
  setSignedIn,
  setUser,
  user,
} from "../../App"
import "./AccountMenu.scss"

const AccountMenu = () => {
  const logout = () => {
    localStorage.removeItem("session")
    setSignedIn(false)
    setAnonymousUse(false)
    setUser(null)
    setCompany(null)
    location.reload()
  }

  return (
    <div class="account-menu">
      <p class="account-menu__user">
        {anonymousUse() ? "Anonymous" : user() ? user().name : null}
      </p>
      <div class="account-menu__divider"></div>
      <button class="account-menu__button" onclick={logout}>
        logout
      </button>
    </div>
  )
}

export default AccountMenu
