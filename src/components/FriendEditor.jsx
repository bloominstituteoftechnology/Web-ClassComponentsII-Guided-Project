import React from 'react';


export default class FriendEditor extends React.Component {
  onNameChange = event => {
    // you'll need this.props.inputChange
  }

  onAgeChange = event => {
    // you'll need this.props.inputChange
  }

  render() {
    return (
      <div className='sub-container'>
        {
          this.props.isEditing
            ? <h3>Edit Friend</h3>
            : <h3>Add a new friend!</h3>
        }

        name:
        <input
          type="text"
          value={this.props.form.nameValue}
          onChange={this.onNameChange}
        />

        age:
        <input
          type="text"
          value={this.props.form.ageValue}
          onChange={this.onAgeChange}
        />

        {
          this.props.isEditing
            ? <button onClick={this.onFriendUpdate}>Update Friend!</button>
            : <button onClick={this.onFriendAdd}>Add Friend!</button>
        }
      </div>
    );
  }
}
