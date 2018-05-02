import React, { Component } from 'react';
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: []
    };
  }
  render() {
    let messageNodes = this.props.message.map((mes) => {
      console.log(mes);
      return (
        <div>
          <tr key={mes}>
            <td style={{ width: '80%', verticalAlign: 'middle'}} className="is-fullwidth has-text-centered">
              {mes}
            </td>
            <td style={{ width: '100%', verticalAlign: 'middle'}} className="is-fullwidth">
              <a href={'tel:' + this.props.message}>
              <img width="40px" src="https://firebasestorage.googleapis.com/v0/b/hotline-e8448.appspot.com/o/phone2.png?alt=media&token=aacc5eef-a6d7-4adb-80f9-6b534c671b0d" />
              </a>
            </td>
          </tr>
        </div>
      )
    });
    return (
      <div>
        <table className="table is-fullwidth ">
          <tbody>
            {messageNodes}
          </tbody>
        </table>
        {/* {messageNodes} */}
      </div>
    )
  }
}
export default Detail