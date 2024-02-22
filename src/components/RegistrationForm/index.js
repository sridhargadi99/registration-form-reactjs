// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    secondName: '',
    firstNameEmpty: false,
    secondNameEmpty: false,
    result: false,
  }

  firstInput = event => {
    this.setState({firstName: event.target.value})
  }

  secondInput = event => {
    this.setState({secondName: event.target.value})
  }

  firstBlur = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstNameEmpty: true})
    } else {
      this.setState({firstNameEmpty: false})
    }
  }

  secondBlur = () => {
    const {secondName} = this.state
    if (secondName === '') {
      this.setState({secondNameEmpty: true})
    } else {
      this.setState({secondNameEmpty: false})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, secondName, firstNameEmpty, secondNameEmpty} = this.state
    if (firstName !== '' && secondName !== '') {
      this.setState({result: true})
    } else if (firstName === '' && secondName === '') {
      this.setState({
        secondNameEmpty: !secondNameEmpty,
        firstNameEmpty: !firstNameEmpty,
      })
    } else if (firstName !== '' && secondName === '') {
      this.setState({secondNameEmpty: true})
    } else {
      this.setState({firstNameEmpty: true})
    }
  }

  clickButton = () => {
    this.setState({result: false, firstName: '', secondName: ''})
  }

  render() {
    const {
      firstName,
      secondName,
      secondNameEmpty,
      firstNameEmpty,
      result,
    } = this.state

    return (
      <div className="bg-container">
        <h1 className="registration-style">Registration</h1>
        {!result ? (
          <form className="registration-container" onSubmit={this.onSubmitForm}>
            <div className="input-label-container">
              <label className="label-style" htmlFor="firstName">
                FIRST NAME
              </label>
              <input
                className={`input-style ${firstNameEmpty && 'input-style1'}`}
                type="text"
                placeholder="First name"
                id="firstName"
                value={firstName}
                onChange={this.firstInput}
                onBlur={this.firstBlur}
              />
              {firstNameEmpty && <p className="error-message">*Required</p>}
            </div>
            <div className="input-label-container">
              <label className="label-style" htmlFor="lastName">
                LAST NAME
              </label>
              <input
                className={`input-style ${secondNameEmpty && 'input-style1'}`}
                type="text"
                placeholder="Last name"
                id="lastName"
                value={secondName}
                onChange={this.secondInput}
                onBlur={this.secondBlur}
              />
              {secondNameEmpty && <p className="error-message">*Required</p>}
            </div>
            <button type="submit" className="button-style">
              Submit
            </button>
          </form>
        ) : (
          <div className="success-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="success-image-style"
            />
            <p className="submit-style">Submitted Successfully</p>
            <button
              type="button"
              className="button-style1"
              onClick={this.clickButton}
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
