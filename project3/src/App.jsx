import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'OLUKE DAMILOLA',
        bio: 'A software developer with a passion for learning and teaching.',
        imgSrc: './src/assets/Images/krane.JPG',
        profession: 'Software Developer',
      },
      show: false,
      timeInterval: 0, 
    };

    this.timer = null; 
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(prevState => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleProfile = () => {
    this.setState(prevState => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeInterval } = this.state;

    return (
      <div className="App">
        <h1>Welcome to the Damilola's Portfolio</h1>
        <button onClick={this.toggleProfile}>
          {show ? 'Hide' : 'Show'} Profile
        </button>

        {show && (
          <div className="profile">
            <h2>{fullName}</h2>
            <p><strong>Profession:</strong> {profession}</p>
            <img src={imgSrc} alt="Profile" />
            <p><strong>Bio:</strong> {bio}</p>
          </div>
        )}

        <p>Time since last mount: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
