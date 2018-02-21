import React from 'react';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {'address': '', 'zipcode': ''};
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.propertyRequire(this.state).then(this.props.history.push('/packages'));
  }

  handleInput(type){
    return (e)=>{
      this.setState({[type]: e.target.value});
    }
  }

  render(){
    return (
      <div className='home'>
        <h1>Homeco</h1>
        <div className='home-page-background-container'>
          <img src=''/>
        </div>
        <form className='home-page-address' onSubmit={(e)=>this.handleSubmit(e)}>
          <input type='text' onChange={this.handleInput('address')} value={this.state.address} placeholder='Please input your homeadress to get quote'/>
          <input type='text' onChange={this.handleInput('zipcode')} value={this.state.zipcode} placeholder='zipcode'/>
          <input type='submit' onClick={(e)=>this.handleSubmit(e)}/>
        </form>
      </div>
    )
  }
}

export default Home;
