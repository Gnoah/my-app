import React, { Component } from 'react'

class Modal extends Component {
  constructor(props){
    super(props);
    this.handleSave = this.handeleSave.bind(this);
    this.state = {
      title:'',
      msg:'',
    }
  }

titleHandler(e) {
  this.setState({title: e.target.value});
}

msgHandler(e) {
  this.setState({msg: e.target.value});
}

handleSave() {
    const item = this.state;
    this.props.SaveModalDetails(item)
}

render() {
  return(
    <div className="modal fade" id="exempleModal" tabIndex="-1" role="dialog" arial-labelledby="exempleModalLabel" aria-hedden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="Close" data-dismiss="modal" aria-label="Close">
            <span aria-hedden="true"></span>
            </button>            
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-dismiss="modal">Non</button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>{this.handleSave()} }>Oui</button>
          </div>
        </div>
      </div>
    </div>
  )
}
};

export default Modal;