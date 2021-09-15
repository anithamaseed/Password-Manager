import './index.css'

const PasswordManagerItem = props => {
  const {PasswordManagerDetails, onDeletePassword} = props
  const {id, website, username, password} = PasswordManagerDetails
  const initial = website[0].toUpperCase()
  const onDeleteItem = () => {
    onDeletePassword(id)
  }

  return (
    <li className="list-item">
      <p className="initial">{initial}</p>
      <div className="info">
        <p className="website">{website}</p>
        <p className="username">{username}</p>
        <p className="password">{password}</p>
      </div>
      <button
        className="del-btn"
        type="button"
        testid="delete"
        onClick={onDeleteItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}
export default PasswordManagerItem
