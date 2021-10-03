import * as React from 'react';
import Table1 from './muitable'
import Form1 from './muitextbar'

export default class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {user_id: [{}], user_stat: [{}], searched: false}
    }
    handleChangeuser = (dict) => {
        console.log(dict)
        this.setState({user_id: dict['user_id']});
        console.log(this.state.user_id)
    }
    handleChangestat = (dict) => {
        this.setState({user_stat: dict['user_stat']});
    }
    changeSearched = () => {
        this.setState({searched: true})
    }
    render(){
        return(
            <div>
            <Form1
                handleChangeuser = {this.handleChangeuser}
                handleChangestat = {this.handleChangestat}
                changeSearched = {this.changeSearched} //pass down state functions
            />
            <Table1
            searched = {this.state.searched} //pass down state variables
            user_id = {this.state.user_id}
            user_stat = {this.state.user_stat}
            />
            </div>
        )
    }
}
