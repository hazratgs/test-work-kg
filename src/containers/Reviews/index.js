import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter, Link } from 'react-router-dom'
import { changeActiveReview, activeNextReview } from '../../actions/App'
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
  }),
  dispatch => ({
    changeActiveReview: bindActionCreators(changeActiveReview, dispatch),
    activeNextReview: bindActionCreators(activeNextReview, dispatch)
  })
)
@CSSModules(s)
export default class Reviews extends PureComponent {
  state = {
    active: {}
  }

  componentWillMount () {
    this.findActiveElement(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this.findActiveElement(nextProps)
  }

  findActiveElement = props => {
    const [active] = props.reviews.filter(item => item.id === props.activeReview)
    this.setState({ active })
  }

  nextHandle = () => {
    if (this.state.active.id < this.props.reviews.length) {
      this.props.activeNextReview(this.state.active.id + 1)
    } else {
      this.props.activeNextReview(1)
    }
  }

  prevHandle = () => {
    if (this.state.active.id !== 1) {
      this.props.activeNextReview(this.state.active.id - 1)
    } else {
      this.props.activeNextReview(4)
    }
  }

  render () {
    const reviews = this.props.reviews.map(item =>
      <button
        key={item.id}
        onClick={() => this.props.changeActiveReview(item.id)}
        styleName='item' className={`${s[item.color]} ${this.state.active.id === item.id && s.active}`}
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
            <button styleName='item' onClick={this.prevHandle}>
              <PrevIconButton />
            </button>
            <button styleName='item' onClick={this.nextHandle}>
              <NextIconButton />
            </button>
          </div>
        </div>
        <div styleName='content'>
          <div styleName='wrapper' className={s[this.state.active.color]}>
            <div styleName='img'>
              <img src={this.state.active.img} />
              <div styleName='bottom'>
                {this.state.active.video && (
                  <button styleName='video'>
                    <VideoIcon />
                  </button>
                )}
                <p styleName='user'>
                  {this.state.active.name}
                </p>
              </div>
            </div>
            <div styleName='data'>
              <div styleName='header'>
                <div styleName='label'>
                  <GoalIcon />
                  <span>Цель</span>
                </div>
                <p>{this.state.active.title}</p>
              </div>
              <div styleName='text'>
                <p>{this.state.active.text}</p>
                <Link to='/'>Читать целиком</Link>
              </div>
              <RIcon styleName='background' />
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
