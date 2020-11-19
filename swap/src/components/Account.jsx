import { Component } from "react";
import styled from "styled-components";

const Main = styled.div`

`;

class Account extends Component {
  constructor(props) {
    super(props);
    const firstName = localStorage.getItem('firstName')
    const lastName = localStorage.getItem('lastName')
    this.state = {
      formEnabled: false,
      firstName: firstName ? firstName : 'firstName',
      lastName: lastName ? lastName : 'lastName',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
  }

  handleClick(event) {
      const { firstName, lastName } = this.state;
    event.preventDefault();
    localStorage.setItem('firstName', firstName)
    localStorage.setItem('lastName', lastName)
    this.setState({
      formEnabled: !this.state.formEnabled,
    });
  }

  handleChangeFirstName(event) {
    this.setState({
      firstName: event.target.value,
    });
  }

  handleChangeLastName(event) {
    this.setState({
      lastName: event.target.value,
    });
  }

  render() {
    const { formEnabled, firstName, lastName } = this.state;
    navigator.geolocation.getCurrentPosition((position) => {
      localStorage.setItem("latitude", position.coords.latitude);
      localStorage.setItem("longitude", position.coords.longitude);
    });
    return (
      <div className="Account">
        <form onSubmit={this.handleClick}>
          <img src="https://via.placeholder.com/200x120" alt="" />
          <label htmlFor="firstName">
            <input
              disabled={!formEnabled}
              value={firstName}
              type="text"
              onChange={this.handleChangeFirstName}
              id="firstName"
              name="firstName"
            />
          </label>
          <label htmlFor="lastName">
            <input
            disabled={!formEnabled}
            value={lastName}
              type="text"
              onChange={this.handleChangeLastName}
              id="lastName"
              name="lastName"
            />
          </label>
          <fieldset>
            <legend>Mes coordonnées GPS</legend>
            <div>latitude : {localStorage.getItem("latitude")}</div>
            <div>longitude : {localStorage.getItem("longitude")}</div>
          </fieldset>
          <button
            type="button"
            onClick={this.handleClick}
          >
            {formEnabled ? 'Enregistrer' : 'Modifier'}
          </button>
        </form>
      </div>
    );
  }
}

export default Account;
