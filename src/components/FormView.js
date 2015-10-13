import React from 'react';

import {Modal,Button,Input,Panel} from 'react-bootstrap';

export default class FormView extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {showOptional: false};
  }

  showOptional(val)
  {
    this.setState({showOptional: val});
  }

  renderItem(item,id)
  {
    if(item == '-')
      item = {type:'-'};

    if(item.optional)
      if(!this.state.showOptional)
        return null;

    switch(item.type)
    {
    case '-':
      return <br />

    case 'button':
      return <Button>{item.title}</Button>;

    case 'checkbox':
      return <Input type="checkbox" label={item.title} wrapperClassName="col-xs-offset-4 col-xs-8" checked={item.checked}/>

    case 'text':
    default:
      var wi="col-xs-6";
      if(item.width)
        wi="col-xs-" + item.width;

      return <Input type="text" label={item.title + ":"} addonAfter={item.addonAfter} placeholder={item.placeholder} labelClassName="col-xs-4" wrapperClassName={wi} />;
    }
  }

  renderContent(items = [])
  {
    return <form className="form-horizontal">
      {items.map((item,id) => {
        return this.renderItem(item, id)
      })}
    </form>
  }

  hasOptionals()
  {
    for(var i in this.props.items)
      if(this.props.items[i].optional)
        return true;
    return false;
  }

  renderLessButton()
  {
    //if(!this.hasOptionals())
    //  return null;

    if(this.state.showOptional)
      return <Button className="btns-left" onClick={() => this.showOptional(false)}>Меньше параметров...</Button>;
    else
      return <Button className="btns-left" onClick={() => this.showOptional(true)}>Больше параметров...</Button>;
  }

  render() {
    return <Modal show={this.props.show} onHide={this.props.onClose}  bsSize="large">
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.renderContent(this.props.items)}
          </Modal.Body>
          <Modal.Footer>
            {this.renderLessButton()}
            <Button bsStyle="primary">Сохранить</Button>
            <Button>Отмена</Button>
          </Modal.Footer>
        </Modal>
  }
}