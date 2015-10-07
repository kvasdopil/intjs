import React from 'react';
import ListView from './components/ListView'
import * as actions from './actions';

import {connect} from 'react-redux';

class Application extends React.Component {
  render() {
    var config = {
      title: 'Перенаправления портов',
      items: this.props.forwards,
      tbar: [
        { type: "Button", title: "Добавить", glyph: 'plus', menu: ['Перенаправление', 'Редирект', 'Правило NAT'] },
        { type: "Button", title: "Удалить", disabled: true, onClick: (a) => {console.log("hello world 2")} },
        '-',
        { type: "Button", title: "Действия", menu: ['Выключить', '-', 'Удалить'] },
        { type: "Button", title: "Изменить" },
        '->',
        { type: "Button", alt: "Обновить", glyph: "refresh" },
        '-',
        { type: "SearchBox" },
      ],
      bbar: [{type:"Button", title: "Shalala", onClick: (a) => {console.log("hello world 2")}  }]
    }

    return <div className="region-layout-horizontal" style={{height: "inherit"}}>
        <div style={{padding: 10}}>
          Sidebar here
        </div>
        <ListView {...config} region="center" />
      </div>;
  }
}

function propMap(store) {
  return {
    forwards: store.forwards
  }
}

export const App = connect(propMap, actions)(Application);
