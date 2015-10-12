import React from 'react';
import ListView from './components/ListView'
import * as actions from './actions';
import Modal from './components/Modal';

import {connect} from 'react-redux';

class Application extends React.Component {
  showForm()
  {
    console.log('show form');
    $('#editForm').modal({})
  }

  doSmth()
  {
    console.log('atata');
    store.dispatch({type: 'KILL_USER', id:123});
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

    return <Modal id="editForm" {...config} />;
  }

  render() {
    var config = {
      title: 'Перенаправления портов',
      items: this.props.forwards,
      tbar: [
        { type: "Button", title: "Добавить", glyph: 'plus', menu: ['Перенаправление', 'Редирект', 'Правило NAT'] },
        { type: "Button", title: "Удалить", disabled: true },
        '-',
        { type: "Button", title: "Действия", menu: ['Выключить', '-', 'Удалить'] },
        { type: "Button", title: "Изменить", onClick: () => this.showForm()},
        '->',
        { type: "Button", alt: "Обновить", glyph: "refresh" },
        '-',
        { type: "SearchBox" },
      ],
      bbar: [{type:"Button", title: "Shalala", onClick: () => this.doSmth()}]
    }

    return <div className="region-layout-horizontal" style={{height: "inherit"}}>
        <div style={{padding: 10}}>
          Navigation
        </div>
        <ListView {...config} region="center" />
        {this.renderDialogs()}
      </div>;
  }
}

function propMap(store) {
  return {
    forwards: store.forwards
  }
}

export const App = connect(propMap, actions)(Application);
