import React from 'react';

var btnIds = 0;

export default class Btn extends React.Component {
  render() {

    var gl = "";
    if(this.props.glyph)
      gl = <span className={"glyphicon glyphicon-" + this.props.glyph} aria-hidden="true" style={{"margin-right": (this.props.title === undefined) ? "0px" : "5px"}} />

    var caret = "";
    if(this.props.menu)
      caret = <span className="caret" style={{"margin-left": "5px"}} />

    var id = "dropdownMenu" + (btnIds++);
    var disabled = (this.props.disabled) ? "disabled" : "";

    if(this.props.menu)
      return <div className="btn-group">
        <button className={"btn btn-default dropdown-toggle " + disabled} type="button" id={id} data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          {gl}{this.props.title}{caret}
        </button>

        <ul className="dropdown-menu" aria-labelledby={id}>
          {this.props.menu.map(item => {
            if(item == "-")
              return <li role="separator" className="divider"></li>;
            return <li><a href="#">{item}</a></li>
          })}
        </ul>
      </div>

    return <button className={"btn btn-default " + disabled} type="button" data-toggle="modal" data-target="#myModal">
      {gl}{this.props.title}
    </button>
  }
}