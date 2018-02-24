import React from 'react';
import HomeCenter from './home-center';
import Footer from './footer';
import { Link } from 'react-router-dom';


class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {'address': '', 'zipcode': '', 'addressclassName': 'hidden', 'zipcodeclassName': 'hidden'};
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    if (!this.state.address) {
      this.setState({'addressclassName': ''})
    } else if (this.zipcode !== 5) {
      this.setState({'zipcodeclassName': ''})
    } else {
      this.props.propertyRequire(this.state).then(this.props.history.push('/packages'));
    }
  }

  handleInput(type){
    return (e)=>{
      this.setState({[type]: e.target.value});
      this.setState({'zipcodeclassName': 'hidden', 'addressclassName': 'hidden'})
    }
  }

  render(){
    return (
      <div>
        <div className='home-nav'>
        {this.props.currentUser ?
          <Link to='/user'><h2>My Home</h2></Link>
           :
          <Link to='/login'><h2>Log In</h2></Link>
        }
        </div>
        <div className='home-background'>
          <img src='https://res.cloudinary.com/ddwejrtgh/image/upload/v1519239149/hero_qxaymn.jpg' />
        </div>
        <div className='home'>
          <h1>Homeco</h1>
          <form className='home-page-address' onSubmit={(e)=>this.handleSubmit(e)}>
            <div className='home-page-address-input'>
              <div className={`hint ${this.state.addressclassName}`}>Please input address</div>
              <input type='text' onChange={this.handleInput('address')} value={this.state.address} placeholder='Please input your homeadress to get quote'/>
              <div className={`hint ${this.state.zipcodeclassName}`}>Please input valid zipcode</div>
              <input className='zipcode' type='text' onChange={this.handleInput('zipcode')} value={this.state.zipcode} placeholder='zipcode'/>
            </div>
            <input type='submit' onClick={(e)=>this.handleSubmit(e)}/>
          </form>
        </div>
        <HomeCenter />
        <Footer />
      </div>
    )
  }
}

export default Home;
