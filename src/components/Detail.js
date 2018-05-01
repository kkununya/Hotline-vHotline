import React, {Component} from 'react';
class Detail extends Component {
  render(){
    return (
      <div>
        <a href={'tel:' + this.props.message }> 
        <div className="columns is-mobile">
          <div className="column is-three-quarters">
            <div>
              {this.props.name}
            </div>
            <div>
              {this.props.message}
            </div>
          </div>
          <div className="column has-text-centered">
              <img src="https://firebasestorage.googleapis.com/v0/b/hotline-e8448.appspot.com/o/phone2.png?alt=media&token=aacc5eef-a6d7-4adb-80f9-6b534c671b0d"/>
          </div>
        </div>
        </a>
      </div>
    )
  }
}
export default Detail