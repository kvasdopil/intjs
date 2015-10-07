import React from 'react';

import {fwdWrapper} from '../wrappers/FwdWrapper';
import {natWrapper} from '../wrappers/NatWrapper';
import {rdrWrapper} from '../wrappers/RdrWrapper';

import Tbar from "./Tbar";

export default class Big extends React.Component {

  getName() {
    if(this.props.name !== undefined)
      return this.props.name;
    return 'no-name';
  }

  renderMainInfo(wrapper)
  {
    if(this.props.name == undefined)
      var name = wrapper.description();
    else
      name = this.props.name;

    return <tr style={{"vertical-align": "top"}}>
        <td style={{width:"32", "vertical-align": "middle"}}>
          <img src={wrapper.icon()} width="32px" height="32px" />
        </td>

        <td style={{"padding-left": "7px"}}>
          <div><b>{name}</b></div>
          <div style={{"font-size": "small"}} >{wrapper.description()}</div>
        </td>

        <td style={{"text-align": "right"}}>
          <b><small>{this.props.status !== undefined ? this.props.status : ""}</small></b>
        </td>
      </tr>
  }

  renderReport(wrapper)
  {
    if(!this.props.toggle)
      return "";

    return <tr>
        <td colSpan="999" style={{"padding-top":"10px", "font-size":"small"}} >
          <table>
            {wrapper.getReport().map(item => {
              return <tr><td style={{"text-align": "right"}}>{item.name}:&nbsp;</td><td>{item.value}</td></tr>
            })}
          </table>
        </td>
      </tr>
  }

  renderButtons(wrapper)
  {
    if(!this.props.toggle)
      return "";

    return <div width="100%">
          <Tbar style={{"padding-top": "10px"}} items={[
            {type: "Button", title: 'Подробнее...'},
            '->',
            {type: 'Button', title: 'Выключить', menu: ['Выключить','-','на 5 минут', 'на 20 минут', 'на 1 час', 'на 1 день', '-', 'Другое время...']},
            {type: 'Button', title: 'Удалить'},
            {type: 'Button', title: 'Редактировать'},
          ]} />
        </div>
  }

  render() {
    var wrapper = undefined;

    switch(this.props.otype) {
    case "Nat":
      wrapper = natWrapper;
      break;

    case "Fwd":
      wrapper = fwdWrapper;
      break;

    case "Rdr":
      wrapper = rdrWrapper;
      break;
    }

    return <div>
      <table style={{width: "100%", padding: "7px"}}>
        {this.renderMainInfo(wrapper)}
        {this.renderReport(wrapper)}
      </table>

      {this.renderButtons(wrapper)}
    </div>;
  }
}