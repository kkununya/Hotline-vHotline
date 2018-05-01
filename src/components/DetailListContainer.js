import React, {Component} from 'react';
import List from './List';
import Search from './Search';
import firebase from 'firebase';
import _ from 'lodash';

class DetailListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: []
    };
    let app = this.props.db.database().ref('สายด่วนฉุกเฉิน');
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });
  }
  getData(values){
    let messagesVal = values;
    let messages = _(messagesVal)
                    .keys()
                    .map(messageKey => {
                      let cloned = _.clone(messagesVal[messageKey]);
                      cloned.key = messageKey;
                      return cloned;
                    }).value();
    this.setState({
      messages: messages
    });
  }
  render(){
    let messageList = this.state.messages;
    return (
      <div>
        <h1 className="title is-5 has-text-centered">สายด่วนฉุกเฉิน</h1>
        <List messageList={messageList} db={firebase}/>
      </div>
    );
  }
}
export default DetailListContainer