import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
        // Initial state
        this.state = {
      person: {
        fullName: "hazem eljani",
        bio: "bac info , student in GoMyCode.",
        imgSrc: "https://information.tv5monde.com/sites/tv5-info/files/styles/entete/public/2021-12/field_media_image-46117-iStock-896458598.jpg?itok=02u68m8C",
        profession: "merchant "
      },
      show: false,
      timeInterval: 0
    };
  }

  componentDidMount() {
        // Start the interval when the component is mounted

    this.setState({ mountedTime: new Date() });
    this.interval = setInterval(() => {
      this.forceUpdate();
    },1000 );
  }

  componentWillUnmount() {
        // Clear the interval when the component is unmounted

    clearInterval(this.interval);
  }

  toggleShow = () => {
    // Toggle the show state when the button is clicked

    this.setState(prevState => ({ show: !prevState.show }));
  }

  render() {

    const { person, show, mountedTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <p>{person.profession}</p>
          </div>
        )}
        <p>Time : {mountedTime && (new Date() - mountedTime) / 1000} seconds</p>
      </div>
    );
  }
}

export default App;