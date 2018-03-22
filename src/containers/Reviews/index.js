import React, { PureComponent } from 'react'
import { withRouter, Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import s from './style.pcss'

import PrevIconButton from '../../public/svg/button-arrow-prev.svg'
import NextIconButton from '../../public/svg/button-arrow-next.svg'
import VideoIcon from '../../public/svg/video.svg'
import GoalIcon from '../../public/svg/goal.svg'
import RIcon from '../../public/svg/r.svg'

@withRouter
@CSSModules(s)
export default class Reviews extends PureComponent {
  render () {
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
              <img src='https://ae01.alicdn.com/kf/HTB1KlsZNVXXXXa5apXXq6xXFXXX1/-.jpg_640x640.jpg' />
              <div styleName='bottom'>
                <button styleName='video'>
                  <VideoIcon/>
                </button>
                <p styleName='user'>
                  Константина Константинопольская
                </p>
              </div>
            </div>
            <div styleName='data'>
              <div styleName='header'>
                <div styleName='label'>
                  <GoalIcon/>
                  <span>Цель</span>
                </div>
                <p>Пробеги полумарафон в Вероне</p>
              </div>
              <div styleName='text'>
                <p>Очень долго хотела скинуть лишний вес да и вообще начать вести здоровый образ жизни. Но все было некогда. Знакомые позвали на открытую тренировку в школу бега с мастером спорта. Чем черт не шутит, решила сходить, тем более интересно было узнать, почему.</p>
                <Link to='/'>Читать целиком</Link>
              </div>
              <RIcon styleName='background'/>
            </div>
          </div>
          <div styleName='users'>
            <button styleName='item' className={s.green}>
              <div styleName='face'>
                <img src='https://zengarden.in/wp-content/uploads/2012/10/tesla.jpg'/>
              </div>
              <div styleName='name'>
                <span>SWIMING</span>
                <p>Никола <br/>Тесла</p>
              </div>
            </button>
            <button styleName='item' className={s.blue}>
              <div styleName='face'>
                <img src='http://books.atheism.ru/atheists/einstein2.jpg'/>
              </div>
              <div styleName='name'>
                <span>CYCLING</span>
                <p>Альберт <br/>Эйнштейн</p>
              </div>
            </button>
            <button styleName='item' className={`${s.red} ${s.active}`}>
              <div styleName='face'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Muhammad_Ali_NYWTS.jpg/440px-Muhammad_Ali_NYWTS.jpg'/>
              </div>
              <div styleName='name'>
                <span>RUNNING</span>
                <p>Мохаммед <br/>Али</p>
              </div>
            </button>
            <button styleName='item' className={s.yellow}>
              <div styleName='face'>
                <img src='https://24smi.org/public/media/235x307/celebrity/2017/11/22/nwv7kqyvs72t-alan-tiuring.jpg'/>
              </div>
              <div styleName='name'>
                <span>RUNNING</span>
                <p>Алан <br/>Тьюринг</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
