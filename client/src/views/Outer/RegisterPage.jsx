import React, { PureComponent } from 'react'
import { Card, CardBody, CardHeader, Button } from 'reactstrap'
import { Link} from 'react-router-dom'
import axios from 'axios'
export default class RegisterPage extends PureComponent {
  constructor(){
    super()
    this.state={
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      err:{}
    }
  }
  
  changeHandler= (event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  submitHandler= (event)=>{
    event.preventDefault()
    axios.post('http://localhost:5000/register', {...this.state})
    .then(res=>{
      window.location.href='/login-page'
    })
    .catch(err=>{
      this.setState({
        err:err.response.data
      })
      console.log(this.state.err)
    })
    
  }
  render() {
    return (
      <div>
        <Card className="col-md-4 offset-md-4 mt-5">
          <CardHeader>
            <h3>Register Here </h3>
          </CardHeader>
          <CardBody>
            <form>
              <label>First Name</label>
              <input onChange={this.changeHandler} name="firstName" placeholder="Enter first name " value={this.state.firstName} className="form-control"/>
              {this.state.err.firstName?
              <p className="text-danger">{this.state.err.firstName}</p>:''
              }
              <label>Last Name</label>
              <input onChange={this.changeHandler} name="lastName" placeholder="Enter last name " value={this.state.lastName} className="form-control"/>
              {this.state.err.lastName?
              <p className="text-danger">{this.state.err.lastName}</p>:''
              }
              <label>Email</label>
              <input onChange={this.changeHandler} type="email" name="email" placeholder="Enter your email" value={this.state.email} className="form-control"/>
              {this.state.err.email?
              <p className="text-danger">{this.state.err.email}</p>:''
              }
              <label>Password</label>
              <input onChange={this.changeHandler} type="password" name="password" placeholder="Enter your password" value={this.state.password} className="form-control"/>
              {this.state.err.password?
              <p className="text-danger">{this.state.err.password}</p>:''
              }
               {this.state.err.massage?
              <p className="text-danger">{this.state.err.massage}</p>:''
              }
              <Button onClick={this.submitHandler} color="">Sign Up</Button>
              <p>Allready have account  ? Go to <Link to='/login-page'> Login</Link>  page </p>
            </form>
           
          </CardBody>
        </Card>
      </div>
    )
  }
}
