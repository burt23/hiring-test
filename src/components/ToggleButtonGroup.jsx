import React, { Component } from 'react'

import togglebuttongroup from '../sass/togglebuttongroup.module.sass'

class ToggleButtonGroup extends Component {
  constructor(props) {
    super(props)
    this.state = { currentMattress: props.currentMattress }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.onMattressChanged(event.target.value)
    this.setState({
      currentMattress: event.target.value
    })
  }

  render () {
    const mattressList = Object.keys(this.props.mattresses)
    const items = mattressList.map((key) => {
      const mattress = this.props.mattresses[key]
      return (
        <label className={togglebuttongroup.button} key={key} htmlFor={key}>
          <input
            className={togglebuttongroup.toggle}
            type="radio"
            checked={key === this.state.currentMattress}
            value={key}
            id={key}
            onChange={this.handleChange}
          />
          <div className={togglebuttongroup.label}>{mattress.name}</div>
        </label>
      )
    })
    return (
      <div className={togglebuttongroup.group}>
        {items}
      </div>
    )
  }
}

export default ToggleButtonGroup
