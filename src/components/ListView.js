import React from 'react';
import Toolbar from './Toolbar';
import Big from './Big';
import Modal from './Modal';

export default class ListView extends React.Component {
  renderHeader()
  {
    if(!this.props.title)
      return null;

    return <div className="panel-heading region-north">
        <h3 className="panel-title">
          {this.props.title}
        </h3>
      </div>
  }

  renderTbar()
  {
    if(!this.props.tbar)
      return null;

    return <Toolbar items={this.props.tbar} />
  }

  renderBbar()
  {
    if(!this.props.bbar)
      return null;

    return  <Toolbar items={this.props.bbar} bottom="1" />
  }

  renderContent()
  {
    var items = this.props.items ? this.props.items : [];

    return <div className="list-group region-center" style={{overflowY: "auto"}}>
          {items.map(item => {
            return <li className="list-group-item">
                <Big {...item} />
              </li>
            })}
      </div>
  }

  renderDialogs()
  {
    var config = {
      title: "Редактирование перенаправления",
      items: [{
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
        }]
    };

    return <Modal {...config} />;
  }

  render()
  {
    var regionClass = "";
    if(this.props.region)
      regionClass = "region-" + this.props.region;

    return <div className={"panel panel-default region-layout-vertical " + regionClass} style={{marginBottom: 0}}>
      {this.renderHeader()}
      {this.renderTbar()}
      {this.renderContent()}
      {this.renderBbar()}

      {this.renderDialogs()}
    </div>
  }
}
