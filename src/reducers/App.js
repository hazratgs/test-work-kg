import {
  CHANGE_ACTIVE_REVIEW
} from '../constants/App'

const initialState = {
  reviews: [
    {
      id: 1,
      name: 'Никола Тесла',
      type: 'scientist',
      video: true,
      face: 'https://zengarden.in/wp-content/uploads/2012/10/tesla.jpg',
      img: 'https://ae01.alicdn.com/kf/HTB1KlsZNVXXXXa5apXXq6xXFXXX1/-.jpg_640x640.jpg',
      color: 'red',
      title: 'Пробеги полумарафон в Вероне',
      text: 'Очень долго хотела скинуть лишний вес да и вообще начать вести здоровый образ жизни. Но все было некогда. Знакомые позвали на открытую тренировку в школу бега с мастером спорта. Чем черт не шутит, решила сходить, тем более интересно было узнать, почему.'
    },
    {
      id: 2,
      name: 'Альберт Эйнштейн',
      type: 'scientist',
      video: false,
      face: 'https://euroislam.pl/app/uploads/2012/08/Albert-Einstein.jpg',
      img: 'https://ae01.alicdn.com/kf/HTB1KlsZNVXXXXa5apXXq6xXFXXX1/-.jpg_640x640.jpg',
      color: 'blue',
      title: 'Пробеги полумарафон в Вероне',
      text: 'Очень долго хотела скинуть лишний вес да и вообще начать вести здоровый образ жизни. Но все было некогда. Знакомые позвали на открытую тренировку в школу бега с мастером спорта. Чем черт не шутит, решила сходить, тем более интересно было узнать, почему.'
    },
    {
      id: 3,
      name: 'Мохаммед   Али',
      type: 'boxer',
      video: true,
      face: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Muhammad_Ali_NYWTS.jpg/440px-Muhammad_Ali_NYWTS.jpg',
      img: 'https://ae01.alicdn.com/kf/HTB1KlsZNVXXXXa5apXXq6xXFXXX1/-.jpg_640x640.jpg',
      color: 'green',
      title: 'Пробеги полумарафон в Вероне',
      text: 'Очень долго хотела скинуть лишний вес да и вообще начать вести здоровый образ жизни. Но все было некогда. Знакомые позвали на открытую тренировку в школу бега с мастером спорта. Чем черт не шутит, решила сходить, тем более интересно было узнать, почему.'
    },
    {
      id: 4,
      name: 'Алан Тьюринг',
      type: 'developer',
      video: false,
      face: 'https://24smi.org/public/media/235x307/celebrity/2017/11/22/nwv7kqyvs72t-alan-tiuring.jpg',
      img: 'https://ae01.alicdn.com/kf/HTB1KlsZNVXXXXa5apXXq6xXFXXX1/-.jpg_640x640.jpg',
      color: 'yellow',
      title: 'Пробеги полумарафон в Вероне',
      text: 'Очень долго хотела скинуть лишний вес да и вообще начать вести здоровый образ жизни. Но все было некогда. Знакомые позвали на открытую тренировку в школу бега с мастером спорта. Чем черт не шутит, решила сходить, тем более интересно было узнать, почему.'
    }
  ],
  activeReview: 1
}

export default function appState (state = initialState, action) {
  switch (action.type) {
    case CHANGE_ACTIVE_REVIEW:
      return { ...state, activeReview: action.payload }

    default:
      return state
  }
}
