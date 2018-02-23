import React from 'react';
import ContractorNavBar from './contractor_nav';

class ContractorShow extends React.Component {
  constructor(props) {
    super(props);
    this.formatDate = this.formatDate.bind(this);
    this.getDayOfWeek = this.getDayOfWeek.bind(this);
  }

  componentDidMount(){
    this.props.fetchContractorSchedules(this.props.currentUser.category);
  }

  formatDate(oldDate) {
    let monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    // debugger;
    let date = new Date(oldDate);
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return `${monthNames[monthIndex]} ${day}, ${year}`;
  }

  getDayOfWeek(oldDate) {
    let dayOfWeek = new Date(oldDate).getDay();
    return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
  }

  render(){
    let ServiceListItems;
    const schedules = Object.values(this.props.schedules);
    const sortSchedules = schedules.sort(function(a, b) {
       const c = new Date(a.workDate);
       const d = new Date(b.workDate);
       return c-d;
     });
    if(schedules.length > 0){
      ServiceListItems = sortSchedules.map((schedule)=>{
        return(
          <div className="service-list-items" key={schedule._id}>
            <div>{this.getDayOfWeek(schedule.workDate)}</div>
            <div>{schedule._service.serviceType}</div>
            <div>Due: {this.formatDate(schedule.workDate)}</div>
            <div>{schedule._package._property.street}</div>
            <div>{`${schedule._package._property.city}, ${schedule._package._property.state}`}</div>
            <button className="button">Finished</button>
          </div>
        );
        });
    }
    return(
      <div className="contractor-container">
        <ContractorNavBar/>
        <div className="service-history-container">
            {ServiceListItems}
        </div>
        <div className="contractor-upload-panel">What</div>
      </div>
    );
  }

}

export default ContractorShow;
