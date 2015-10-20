import React from 'react';
import ListView from './components/ListView'
import * as actions from './actions';
import Big from './components/Big';
import FormView from './components/FormView';
import Toolbar from './components/Toolbar';

import {Modal,Button,Input,Panel,Table,Glyphicon} from 'react-bootstrap';

import {connect} from 'react-redux';

class Application extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {formShown: false};
  }

  showForm()
  {
    console.log('show form');
    this.setState({formShown: true});
  }

  closeForm()
  {
    console.log('hide form');
    this.setState({formShown: false});
  }

  renderTree()
  {
    return <Panel className="region-center region-layout-vertical" header="i am tree">
      <Toolbar items={[{title:'Add'},{title:"Remove"},'-',{title:'Edit'}]} className="region-north"/>
      <Table fill={true} striped hover condensed>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ip</th>
            <th>Traffic/day</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Glyphicon glyph="triangle-bottom" className='w16'/>

              <span className='w16 users'/>
              Админы
            </td>
            <td>192.168.1.2</td>
            <td>0 mb</td>
          </tr>
          <tr>
            <td>
              <Glyphicon glyph="none" className='w16'/>
              <Glyphicon glyph="triangle-right" className='w16'/>
              <span className='w16 users'/>
              Бездельники
            </td>
            <td>192.168.1.2</td>
            <td>0 mb</td>
          </tr>
          <tr>
            <td>
              <Glyphicon glyph="none" className='w16'/>
              <Glyphicon glyph="none" className='w16'/>
              <span className='w16 user'/>
              Мариванна
             </td>
            <td>192.168.1.2</td>
            <td>0 mb</td>
          </tr>
          <tr>
            <td><Glyphicon glyph="none" className='w16'/>

              <span className='w16 admin'/>
            Директор
            </td>
            <td>192.168.1.2</td>
            <td>0 mb</td>
          </tr>
        </tbody>
      </Table>
    </Panel>
  }

  render() {
    var data = {
      forwards: [
        {otype: 'Fwd', name:'Перенаправление почты', dst:'6.6.6.6', dstport: '110', proto: 'tcp', status: 'не работает'},
        {otype: 'Fwd', name:'Ещё перенаправление', dst: '8.8.8.8', dstport:'567'},
        {otype: 'Rdr', dst: '192.168.1.1', dstport: '123', status: 'нет пинга'},
        {otype: 'Nat', name:'А вот нате вам', status: 'норм'}
      ]
    };

    var config = {
      title: 'Перенаправления портов',
      items: data.forwards,
      tbar: [
        { title: "Добавить", glyph: 'plus', menu: ['Перенаправление', 'Редирект', 'Правило NAT'] },
        '->',
        { alt: "Обновить", glyph: "refresh" },
        '-',
        { type: "SearchBox" },
      ],
      bbar: [{type:"Button", title: "Shalala", onClick: () => this.showForm()}]
    }

    var formConfig = {
      title: 'Редактирование перенаправления портов',
      items: [
        {title: 'Название'},

        '-',
        {title: 'Источник', placeholder: "(любой)", addonAfter:"...", width: 8, optional: true},
        {title: 'Порт', placeholder: "(любой)", addonAfter:"...", width: 8, optional: true},

        {type: '-', optional: true},
        {title: 'Назначение', addonAfter:"...", width: 8, optional: true},
        {title: 'Порт', addonAfter:"...", width: 8},

        {type: '-', optional: true},
        {title: 'Протокол', placeholder: "TCP/UDP", addonAfter:"...", width: 4, optional: true},
        {title: 'Интерфейс', placeholder: "(любой)", addonAfter:"...", width: 4, optional: true},

        '-',
        {title: 'Перенаправить на адрес', addonAfter:"...", width: 8},
        {title: 'Порт', addonAfter:"..."},
        {title: 'Использовать NAT', type: 'checkbox'},

        '-',
        {title: 'Время действия', placeholder: "(любое)", addonAfter:"..."},
        {title: 'Разрешить подключаться из локальной сети', type: 'checkbox'},
        {title: 'Автоматически создать разрешающее правило', type: 'checkbox', checked: true},

      // <Input type="text" label="Название:" labelClassName="col-xs-4" wrapperClassName="col-xs-6" />
      //         <br />
      //         <Input type="text" label="Источник:" labelClassName="col-xs-4" wrapperClassName="col-xs-8" addonAfter="..." placeholder="(любой)"/>
      //         <Input type="text" label="Порт:" labelClassName="col-xs-4" wrapperClassName="col-xs-8"  addonAfter="..." placeholder="(любой)"/>
      //         <br />
      //         <Input type="text" label="Назначение:" labelClassName="col-xs-4" wrapperClassName="col-xs-8"  addonAfter="..."/>
      //         <Input type="text" label="Порт:" labelClassName="col-xs-4" wrapperClassName="col-xs-8"  addonAfter="..."/>
      //         <br />
      //         <Input type="text" label="Протокол:" labelClassName="col-xs-4" wrapperClassName="col-xs-4" addonAfter="v"/>
      //         <Input type="text" label="Интерфейс:" labelClassName="col-xs-4" wrapperClassName="col-xs-8"  addonAfter="..." placeholder="(любой)"/>
      //         <br />
      //         <Input type="text" label="Перенаправить на адрес:" labelClassName="col-xs-4" wrapperClassName="col-xs-8"  addonAfter="..."/>
      //         <Input type="text" label="Порт:" labelClassName="col-xs-4" wrapperClassName="col-xs-8" addonAfter="..."/>
      //         <Input type="checkbox" label="Использовать NAT" wrapperClassName="col-xs-offset-4 col-xs-8" />
      //         <br />
      //         <Input type="text" label="Время действия" labelClassName="col-xs-4" wrapperClassName="col-xs-8" placeholder="(любое)" addonAfter="..."/>

      ]
    }

    return <div className="region-layout-horizontal" style={{height: "inherit"}}>
        <div style={{padding: 10}}>
          <Panel header="Пользователи и статистика">
            <ul>
              <li>Пользователи</li>
              <li>Роли</li>
              <li>Диапазоны адресов</li>
              <li>Отчёты</li>
            </ul>
          </Panel>
        </div>

        {//<ListView {...config} />
        }

        {this.renderTree()}

        <FormView show={this.state.formShown} onClose={() => this.closeForm()} {...formConfig} />
      </div>;
  }
}

function propMap(store) {
  return {
    forwards: store.forwards
  }
}

export const App = connect(propMap, actions)(Application);
