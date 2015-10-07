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
        { type: "Button", title: "Удалить", disabled: true },
        '-',
        { type: "Button", title: "Действия", menu: ['Выключить', '-', 'Удалить'] },
        { type: "Button", title: "Изменить" },
        '->',
        { type: "Button", alt: "Обновить", glyph: "refresh" },
        '-',
        { type: "SearchBox" },
      ],
      bbar: [{type:"Button", title: "Shalala"}]
    }

    return <div style={{display: "flex", flexDirection: "row", alignItems: "stretch", height: "inherit"}}>
        <div style={{padding: 10}}>
          Sidebar here
        </div>
        <div style={{flexGrow: 1, alignItems:"stretch", display: "flex"}}>
          <ListView {...config} />
        </div>
      </div>;
  }
}

//<ListView {...config} />

function propMap(store) {
  return {
    forwards: store.forwards
  }
}

export const App = connect(propMap, actions)(Application);
