import React from "react"
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5"
import AddUser from "./AddUser"

class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            editForm: false
        }
    }
    user = this.props.user
    render(){
        return (<div className="user" >
        <IoCloseCircleSharp className="delete-icon" onClick={()=> this.props.onDelete(this.user.id)}/>
        <IoHammerSharp className="edit-icon" onClick={()=> {this.setState({editForm: !this.state.editForm})}}/>
        <h2>{this.user.first_name} {this.user.last_name}</h2>
        <img src={this.user.avatar} alt="No ava"/>
        <p>{this.user.email}</p>
        <h3>{this.user.isHappy ? "Счастлив :)" : "Не счастлив :("}</h3>
        {/* запись ниже означает, что если состояние editForm имеет значение
        true, то будет выводиться форма AddUser */}
        {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit}/>}
    </div>)
    }
}

export default User