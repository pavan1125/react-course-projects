import { Component,Fragment} from 'react';
import ErrorBoundary from './ErrorBoundary';
import Users from './Users';
import classes from './UserFinder.module.css';
import UserContext from './UserContext';



class UserFinder extends Component {
    static contextType=UserContext
    constructor(){
        super()
        this.state={
            filteredUsers:[],
            searchTerm:""
        }
       
    }
    componentDidMount(){
        this.setState({filteredUsers:this.context.users})
    }
    componentDidUpdate(preProps,prevState){
        if(prevState.searchTerm!==this.state.searchTerm){
            this.setState({filteredUsers:this.context.users.filter((user)=>
                user.name.includes(this.state.searchTerm)
            )}) 
        }
    }
   searchChangeHandler = (event) => {
       this.setState({searchTerm:event.target.value});
      };
    
    render(){
        return (
            <Fragment>
              <div className={classes.finder}>
                <input type='search' onChange={this.searchChangeHandler} />
              </div>
              <ErrorBoundary>
              <Users users={this.state.filteredUsers} />
              </ErrorBoundary>
            </Fragment>
          );
    }
 

 
  
 
};

export default UserFinder;