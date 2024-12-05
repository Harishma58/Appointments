import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {name: '', date: '', appointmentsList: []}

  filterStarredAppointments = () => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.filter(eachAppointment => {
        if (eachAppointment.isStarred === true) {
          return eachAppointment
        }
      }),
    }))
  }

  onClickFavorite = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  onSubmitAppointment = event => {
    event.preventDefault()
    const {name, date} = this.state

    const newAppointment = {
      id: uuidv4(),
      name,
      date,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      name: '',
      date: '',
    }))
  }
  onChangeInputName = event => {
    this.setState({name: event.target.value})
  }
  onChangeInputDate = event => {
    this.setState({date: event.target.value})
  }

  render() {
    const {name, date, appointmentsList} = this.state

    return (
      <div className="bgContainer">
        <div className="appointmentCont">
          <div className="topCont">
            <div>
              <h1 className="heading">Add Appointment</h1>
              <form onSubmit={this.onSubmitAppointment}>
                <label htmlFor="name" className="name">
                  TITLE
                </label>
                <br />
                <input
                  type="text"
                  id="name"
                  className="inputName"
                  value={name}
                  placeholder="Title"
                  onChange={this.onChangeInputName}
                />
                <br />
                <label htmlFor="date" className="name">
                  Date
                </label>
                <br />
                <input
                  type="date"
                  id="date"
                  className="inputDate"
                  onChange={this.onChangeInputDate}
                  value={date}
                  placeholder="dd/mm/yyyy"
                />
                <br />
                <button className="Button" type="submit">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
          <hr className="separator" />
          <div className="bottomCont">
            <h1 className="appointments">Appointments</h1>
            <button
              className="Starred"
              onClick={this.filterStarredAppointments}
            >
              Starred
            </button>
          </div>
          <ul className="appointmentsList">
            {appointmentsList.map(eachAppointment => (
              <AppointmentItem
                appointmentDetails={eachAppointment}
                key={eachAppointment.id}
                onClickFavorite={this.onClickFavorite}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
