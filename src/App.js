import React from 'react';
import ListView from './components/ListView'
import * as actions from './actions';
import Big from './components/Big';

import {Modal,Button,Input,Panel} from 'react-bootstrap';

import {connect} from 'react-redux';

class Application extends React.Component {
  showForm()
  {
    console.log('show form');
    $('#editForm').modal({})
  }

  renderDialogs()
  {
    // var config = {
    //   title: "Редактирование перенаправления",
    //   items: [{
    //       type: 'textbox',
    //       label: 'Название',
    //       id: 'name',
    //       placeholder: "Введите имя"
    //     },{
    //       type:'email',
    //       label:'Email',
    //       id: 'email',
    //       placeholder: "Введите адрес"
    //     },{
    //       type: 'password',
    //       label:'Пароль',
    //       id: 'pwd',
    //       placeholder: "Введите пароль"
    //     },{
    //       type:'checkbox',
    //       id: 'pingYaRu',
    //       title: 'Пиновать ya.ru'
    //     }]
    // };

    // return <Modal id="editForm" {...config} />;



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
        { title: "Удалить", disabled: true },
        '-',
        { title: "Действия", menu: ['Выключить', '-', 'Удалить'] },
        { title: "Изменить", onClick: () => this.showForm()},
        '->',
        { alt: "Обновить", glyph: "refresh" },
        '-',
        { type: "SearchBox" },
      ],
      bbar: [{type:"Button", title: "Shalala", onClick: () => this.doSmth()}]
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

        <ListView {...config} />

        <Modal show={false}  bsSize="large">
          <Modal.Header closeButton>
            <Modal.Title>Редактирование перенаправления</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal">
              <Input type="text" label="Название:" labelClassName="col-xs-4" wrapperClassName="col-xs-6" />
              <br />
              <Input type="text" label="Источник:" labelClassName="col-xs-4" wrapperClassName="col-xs-8" addonAfter="..." placeholder="(любой)"/>
              <Input type="text" label="Порт:" labelClassName="col-xs-4" wrapperClassName="col-xs-8"  addonAfter="..." placeholder="(любой)"/>
              <br />
              <Input type="text" label="Назначение:" labelClassName="col-xs-4" wrapperClassName="col-xs-8"  addonAfter="..."/>
              <Input type="text" label="Порт:" labelClassName="col-xs-4" wrapperClassName="col-xs-8"  addonAfter="..."/>
              <br />
              <Input type="text" label="Протокол:" labelClassName="col-xs-4" wrapperClassName="col-xs-4" addonAfter="v"/>
              <Input type="text" label="Интерфейс:" labelClassName="col-xs-4" wrapperClassName="col-xs-8"  addonAfter="..." placeholder="(любой)"/>
              <br />
              <Input type="text" label="Перенаправить на адрес:" labelClassName="col-xs-4" wrapperClassName="col-xs-8"  addonAfter="..."/>
              <Input type="text" label="Порт:" labelClassName="col-xs-4" wrapperClassName="col-xs-8" addonAfter="..."/>
              <Input type="checkbox" label="Использовать NAT" wrapperClassName="col-xs-offset-4 col-xs-8" />
              <br />
              <Input type="text" label="Время действия" labelClassName="col-xs-4" wrapperClassName="col-xs-8" placeholder="(любое)" addonAfter="..."/>
              <Input type="checkbox" label="Разрешить подключаться из локальной сети" wrapperClassName="col-xs-offset-4 col-xs-8" />
              <Input type="checkbox" label="Автоматически создать разрешающее правило" wrapperClassName="col-xs-offset-4 col-xs-8" checked/>
              <Button bsStyle="link" class="striped">Меньше параметров...</Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary">Сохранить</Button>
            <Button>Отмена</Button>
          </Modal.Footer>
        </Modal>
      </div>;
  }
}

function propMap(store) {
  return {
    forwards: store.forwards
  }
}

export const App = connect(propMap, actions)(Application);
