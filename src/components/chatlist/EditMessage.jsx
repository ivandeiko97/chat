import React, { Component } from 'react'

export default class EditMessage extends Component {
  state = {
    value: this.props.value,
  }

  editHandler = () => {
    const {
      editMessage,
      changeMode,
      id
    } = this.props;
    editMessage(id, this.state.value)
    changeMode(id)
  }
  
  changeValue = ({ target }) => {
    if (target.value.trim() !== '') {
      this.setState({
        value: target.value,
      })
    }
    return null;
  }

  render() {
    const { id, changeMode} = this.props;

    return (
      <div className="edit">
        <textarea
          defaultValue={this.state.value}
          onChange={this.changeValue}
          className="edit-message"
        />
        <div className="edit-controller">
          <button
            onClick={this.editHandler}
            className="edit-save"
          >
            Save
          </button>
          <button
            onClick={() => changeMode(id)}
            className="edit-cancel"
          >
            Cancel
          </button>
        </div>
      </div>
    )
  }
}
