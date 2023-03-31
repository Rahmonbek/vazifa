import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-pikaday-datepicker';
 
class App extends React.Component {
  constructor() {
    super();
 
    this.state = {};
  }
 
  onDateChange(date) {
    this.setState({ date });
  }
 
  render() {
    const { date } = this.state;
 
    return (
      <div>
        <DatePicker 
            placeholder="Select Date"
            format="YYYY/MM/DD"
            maxDate={new Date('2020-07-26')}
            value={new Date(date)}
            onChange={this.onDateChange}
        />
    </div>
    );
  }
}
 
ReactDOM.render(
    <App />,
    document.getElementById('example')
);