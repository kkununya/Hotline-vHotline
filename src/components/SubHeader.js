import React, {Component} from 'react';
import List from './List';
import _ from 'lodash';
class SubHeader extends Component {
  constructor(props){
    super(props);
    this.state  = {
      messages: []
    };
    let app = this.props.db.database().ref('โรงพยาบาล')
    app.on('value', snapshot => {
        this.getData(snapshot.val());
        var name = snapshot.key;
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
    let messageNodes = this.state.messages.map((message) => {
      console.log(message);
        return (
            <div className="card" key={message.key}>
              <div className="card-content">
                <Detail message = {message[0]} name = {message.key}/>
              </div>
            </div>
          )
    });
    return (
      <div>
      <a href="">
        {this.props.title}
      </a>
      
      {messageNodes}
    </div>
    )
  }
}
export default SubHeader