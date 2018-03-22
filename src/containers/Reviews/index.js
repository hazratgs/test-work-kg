import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import s from './style.pcss'

import PrevIconButton from '../../public/svg/button-arrow-prev.svg'
import NextIconButton from '../../public/svg/button-arrow-next.svg'
import VideoIcon from '../../public/svg/video.svg'
import GoalIcon from '../../public/svg/goal.svg'
import RIcon from '../../public/svg/r.svg'

@withRouter
@connect(
  state => ({
    reviews: state.App.reviews,
    activeReview: state.App.activeReview
  })
)
@CSSModules(s)
export default class Reviews extends PureComponent {
  render () {
    const [active] = this.props.reviews.filter(item => item.id === this.props.activeReview)
    const reviews = this.props.reviews.map(item =>
      <button
        key={item.id}
        styleName='item' className={`${s[item.color]} ${active.id === item.id && s.active}`}
      >
        <div styleName='face'>
          <img src={item.face} />
        </div>
        <div styleName='name'>
          <span>{item.type}</span>
          <p>{item.name}</p>
        </div>
      </button>
    )

    return (
      <div styleName='reviews'>
        <div styleName='head'>
          <h2 styleName='title'>Отзывы</h2>
          <div styleName='buttons'>
            <button styleName='item'>
              <PrevIconButton/>
            </button>
            <button styleName='item'>
              <NextIconButton/>
            </button>
          </div>
        </div>
        <div styleName='content'>
          <div styleName='wrapper'>
            <div styleName='img'>
              <img src={active.img} />
              <div styleName='bottom'>
                {active.video && (
                  <button styleName='video'>
                    <VideoIcon />
                  </button>
                )}
                <p styleName='user'>
                  {active.name}
                </p>
              </div>
            </div>
            <div styleName='data'>
              <div styleName='header'>
                <div styleName='label'>
                  <GoalIcon/>
                  <span>Цель</span>
                </div>
                <p>{active.title}</p>
              </div>
              <div styleName='text'>
                <p>{active.text}</p>
                <Link to='/'>Читать целиком</Link>
              </div>
              <RIcon styleName='background'/>
            </div>
          </div>
          <div styleName='users'>
            {reviews}
          </div>
        </div>
      </div>
    )
  }
}
