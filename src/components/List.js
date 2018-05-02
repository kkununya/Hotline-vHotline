import React, {Component} from 'react';
import Detail  from './Detail';
import Search from './Search';
import _ from 'lodash';
class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [],
      district: 'สายด่วนติดต่อธนาคาร สถาบันการเงิน'
    };
      let app = this.props.db.database().ref('สายด่วนฉุกเฉิน/'+this.state.district);
      app.on('value', snapshot => {
        this.getData(snapshot.val());
      });
    this.handleSearchChanged = this.handleSearchChanged.bind(this);
  }
  handleSearchChanged(selectedDistrict){
    let app = this.props.db.database().ref('สายด่วนฉุกเฉิน/'+selectedDistrict);
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });
    this.setState({district: selectedDistrict}, () => {
      console.log(typeof(this.state.district), this.state.district);
    });
  };

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
    let messageNodes =  this.state.messages.map((message) => {
        return (
            <div className="card" key={message.key}>
              <div className="card-content">
                <div>{message.key}</div><br/>
                <Detail message = {message}/>
              </div>
            </div>
          )
    });
    return (
        <div>
          <Search messageList={this.props.messageList} callbackParent={(selectedDistrict) => this.handleSearchChanged(selectedDistrict)}/>
          {messageNodes}
        </div>
    );
  }
}
export default List