import React from 'react';
import Tbar from './Tbar';
import Big from './Big';
import Modal from './Modal';

export default class ListView extends React.Component {
  render() {
    var items = this.props.items ? this.props.items : [];

    return <div className="panel panel-default" style={{height:"inherit", "margin":0}}>
      {this.props.title ? <div className="panel-heading"><h3 className="panel-title">{this.props.title}</h3></div> : ""}
      {this.props.tbar ? <Tbar items={this.props.tbar} /> : ""}

      <div className="list-group">
          {items.map(item => {
            return <li className="list-group-item">
                <Big {...item} />
              </li>
            })}
      </div>

      {this.props.bbar ? <Tbar items={this.props.bbar} /> : ""}

      <Modal title="Редактирование перенаправления" items={[
            {
              type: 'textbox',
              label: 'Название',
              id: 'name',
              placeholder: "Введите имя"
            },{
              type:'email',
              label:'Email',
              id: 'email',
              placeholder: "Введите адрес"
            },{
              type: 'password',
              label:'Пароль',
              id: 'pwd',
              placeholder: "Введите пароль"
            },{
              type:'checkbox',
              id: 'pingYaRu',
              title: 'Пиновать ya.ru'
            },
      ]}/>
    </div>
  }
}
