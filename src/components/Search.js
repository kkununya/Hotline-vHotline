import React, {Component} from 'react';
import List from './List';
import _ from 'lodash';
class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedDistrict: 'สายด่วนติดต่อธนาคาร สถาบันการเงิน'
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.selectedOption})
    let selectedDistrict = event.target.value;
    this.props.callbackParent(selectedDistrict);
      
  }
  render(){
    let messageNodes = this.props.messageList.map((message) => {
      return (
          <option value={message.key} key={message.key}>{message.key}</option>
        )
      });
      let { selectedDistrict } = this.state
      console.log(messageNodes.messagesVal);
    return (
      <div className="columns is-mobile is-centered selectType">
        <div className="select is-rounded">
          <select value={messageNodes.messagesVal} onChange={this.handleChange.bind(this)}>
            {messageNodes}
          </select>
        </div>
      </div>
      );
  }
}
export default Search