// Write your code here

import {Component} from 'react'

import './index.css'

class Welcome extends Component{

    state={isSubscribed:true}

    hasSubscribed=()=>{
        const {isSubscribed}=this.state

        if(isSubscribed===true){
            this.setState({isSubscribed:false})
        }
        else{
            this.setState({isSubscribed:true})
        }
    }
    
    render(){

        const {isSubscribed}=this.state
        
        return(
            <div className="welcome-container">
                <h1 className="heading">Welcome</h1>
                <p className="desc">Thank You! Happy Learning</p>
                {isSubscribed ? ( <button className="btn" type="button" onClick={this.hasSubscribed}>Subscribe</button> ) : ( <button className="btn" type="button" onClick={this.hasSubscribed}>Subscribed</button> )}
            </div>
        )
    }
}

export default Welcome
