// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {lightMode: true}

  lightMode = () => {
    this.setState(prevState => ({lightMode: !prevState.lightMode}))
  }

  render() {
    const {lightMode} = this.state
    const text = lightMode ? 'Light Mode' : 'Dark Mode'
    const newClassName = lightMode ? 'dark-mode' : 'light-mode'

    return (
      <div className="bg-container">
        <div className={`border-container ${newClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.lightMode}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
