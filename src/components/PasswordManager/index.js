import {Component} from 'react'
import {v4} from 'uuid'

import PasswordManagerItem from '../PasswordManagerItem'

import './index.css'

class PasswordManager extends Component {
  state = {website: '', username: '', password: '', passwordManagerList: []}

  renderEmptyContainer = () => (
    <div className="empty-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="empty-img"
      />
      <p className="empty-container-content">No Passwords</p>
    </div>
  )

  onDeletePassword = id => {
    const {passwordManagerList} = this.state

    this.setState({
      passwordManagerList: passwordManagerList.filter(each => each.id !== id),
    })
  }

  renderPasswordManagerContainer = () => {
    const {passwordManagerList} = this.state
    return (
      <ul className="list">
        {passwordManagerList.map(eachPasswordManager => (
          <PasswordManagerItem
            key={eachPasswordManager.id}
            PasswordManagerDetails={eachPasswordManager}
            onDeletePassword={this.onDeletePassword}
          />
        ))}
      </ul>
    )
  }

  onAddPassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state

    const newPasswordManager = {
      id: v4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      passwordManagerList: [
        ...prevState.passwordManagerList,
        newPasswordManager,
      ],
      username: '',
      password: '',
      website: '',
    }))
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {website, username, password, passwordManagerList} = this.state
    return (
      <div className="app-bg-container">
        <div className="app-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="addPassword-container">
            <form className="addPassword-content" onSubmit={this.onAddPassword}>
              <h1 className="heading">Add New Password</h1>
              <div className="app-info-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="app-info-logo"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="input-box"
                  value={website}
                  onChange={this.onChangeWebsite}
                />
              </div>
              <div className="app-info-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="app-info-logo"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="input-box"
                  value={username}
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="app-info-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="app-info-logo"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input-box"
                  value={password}
                  onChange={this.onChangePassword}
                />
              </div>
              <div className="btn-container">
                <button type="submit" className="add-btn">
                  Add
                </button>
              </div>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-img"
            />
          </div>
          <div className="saved-password-container">
            <div className="saved-password-header">
              <div className="header-section">
                <p className="saved-password-heading">
                  Your Passwords
                  <span className="count">{passwordManagerList.length}</span>
                </p>
              </div>
              <div className="search-section">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="app-info-logo"
                />
                <input
                  type="search"
                  placeholder="search"
                  className="input-box"
                />
              </div>
            </div>
            <hr />
            <div className="check-box-container">
              <input
                type="checkbox"
                className="check-box"
                id="checkbox-label"
              />
              <label htmlFor="checkbox-label" className="label">
                show passwords
              </label>
            </div>
            <div>
              {passwordManagerList.length === 0
                ? this.renderEmptyContainer()
                : this.renderPasswordManagerContainer()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default PasswordManager
