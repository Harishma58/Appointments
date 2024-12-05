// Write your code here
import {format} from 'date-fns'
import './index.css'
const AppontmentItem = props => {
  const {appointmentDetails, onClickFavorite} = props
  const {id, name, date, isStarred} = appointmentDetails
  const resultDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
  const onClickFavoriteItem = () => {
    onClickFavorite(id)
  }
  const star = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="listItem">
      <div className="cont1">
        <p className="nameItem">{name}</p>
        <button
          className="startButton"
          data-testid="star"
          onClick={onClickFavoriteItem}
        >
          <img src={star} alt="star" className="imageItem" />
        </button>
      </div>
      <p className="dateItem">{resultDate}</p>
    </li>
  )
}

export default AppontmentItem
