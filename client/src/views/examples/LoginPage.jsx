import React, { PureComponent } from 'react'
import { Card, CardBody, CardHeader, Button } from 'reactstrap'
import { Link} from 'react-router-dom'
import axios from 'axios'
export default class LoginPage extends PureComponent {
  constructor(){
    super()
    this.state={
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
    axios.post('http://localhost:5000/login', {...this.state})
    .then(res=>{
      if(res.data.token){
        console.log(res.data.token)
        window.localStorage.setItem('token', res.data.token)
        window.location.href='/admin'
      }
      // window.location.href='/admin'
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
            <h3>Login Here </h3>
          </CardHeader>
          <CardBody>
            <form>
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
              <p>Not registered Yet  ? Go to <Link to='/register-page'> Register</Link>  page </p>
            </form>
           
          </CardBody>
        </Card>
      </div>
    )
  }
}
