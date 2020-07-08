import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';



const API = process.env.REACT_APP_API || 'https://lab32-401.herokuapp.com';

export const LoginContext = React.createContext();

class LoginProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            login: this.login,
	  logout: this.logout,
	  signup : this.signup,
            user: {}
        }
    }

    login = async(username, password) => {

        try {
            const results = await fetch( `${API}/signin`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: new Headers({
                    'Authorization': `Basic ${btoa(`${username}:${password}`)}`
                })
            });

            let res = await results.json();

            this.validateToken(res.token);

        } catch(err) {
	        alert('invalid user name or password');
            console.log('you must sign up');
	  
        }
    }
     signup = async body => {
	const requestOptions = {
		method: 'POST',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
		'Content-Type': 'application/json'
			},
		redirect: 'follow',
		referrerPolicy: 'no-referrer', 
		body: JSON.stringify(body)
		      };
  		try{
		     const results = await fetch( `${API}/signup`, requestOptions);
		    let res = await results.json();
         
	              this.validateToken(res.token);
		} catch(err) {
		   alert('username is already exists');
                       console.log('somthing went wrong');
		}	 
    }

    logout = () => {
        this.setLoginState(false, null, {});
    }

    validateToken = token => {

        try {

	let user = jwt.verify(token, process.env.REACT_APP_SECRET || 'supersecret');
	this.setLoginState(true, token, user);

        } catch (ex) {

	this.logout();
	alert('invalid user name or password');
          console.log("token Validation error")
        }
    }
    
    setLoginState = (loggedIn, token, user) => {
	    
        cookie.save('auth', token);
        this.setState({token, loggedIn, user});
    }

    componentDidMount() {
        const cookieToken = cookie.load('auth');
        const token = cookieToken || null;
        this.validateToken(token);
    }

    render() {
        return (
            <LoginContext.Provider value={this.state}>
                {this.props.children}
            </LoginContext.Provider>
        )
    }
}

export default LoginProvider;