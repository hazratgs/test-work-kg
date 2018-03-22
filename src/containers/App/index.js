import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import s from './style.pcss'

@withRouter
export default class App extends PureComponent {
  render () {
    return (
      <div className={s.app}></div>
    )
  }
}
