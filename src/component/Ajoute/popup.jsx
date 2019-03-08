import React, { Component } from 'react'
import Modal from './modal'

class List extends Component {
    constructor(props){
    super(props);

    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    }

replaceModalItem(index) {
    this.setState({
        requiredItem:index
    })
};
saveModalDetails(item) {
    const requiredItem = this.state.requiredItem;
    let tempbrochure = this.state.brochure;
    tempbrochure(requiredItem) = item;
    this.setState({brochure,tempbrochure});
}
deletItem(index) {
    let tempBrochure = this.state.brochure;
    tempBrochure.splice(index,1);
    this.setState({ brochure,tempBrochure })
}

render(){
    const brochure = this.state.brochure.map((item,index)=>{
        return(
                <button className="btn btn-danger" data-toggle="modal" data-target="empemleModam"
                onClick={()=> this.replaceModalItem(index)}>X</button>
        )
    })
    const requiredItem = this.state.requiredItem;
    let modalData = this.state.brochure[requiredItem];
    return(
        <div>
            <table>
                <tbody>
                    {brochure}
                </tbody>
            </table>
            <div style= {{texteAlign: "center"}}>
            <Modal 
            title={modalData.title}
            msg={modalData.mag}
            saveModalDetails={this.saveModalsDetails}/> 
            </div>
        </div>
    )
}
}

export default List;

{props.users.length > 0 ? (
    props.users.map(user => (
        <div key={user.id}>
            <button	onClick={() =>{props.deleteUser(user.id)}}
                className="btn btn-danger">Oui</button>
        </div>
    ))
)
}