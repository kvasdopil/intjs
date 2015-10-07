import React from 'react';
import ListView from './components/ListView'
import * as actions from './actions';

import {connect} from 'react-redux';

class Application extends React.Component {

  test1() {
    this.props.addItem('hello');
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
        { type: "Button", title: "Изменить" },
        '->',
        { type: "Button", alt: "Обновить", glyph: "refresh" },
        '-',
        { type: "SearchBox" },
      ]
    }

    return <div className="container">
      <ListView {...config} />
    </div>;
  }
}

function propMap(store) {
  return {
    forwards: store.forwards
  }
}

export const App = connect(propMap, actions)(Application);
