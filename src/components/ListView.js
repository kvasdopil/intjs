import React from 'react';
import Big from './Big';
import Toolbar from './Toolbar';

import SearchBox from './SearchBox';

import {
    Panel,
    ListGroup, ListGroupItem,
    ButtonGroup, ButtonToolbar, Button,
    Glyphicon,
    DropdownButton,
    MenuItem
  } from 'react-bootstrap';

export default class ListView extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {selection: -1};
  }

  updateSelection(id)
  {
    if(this.state.selection == id)
      return;

    this.setState({selection: id});
  }

  renderTbar(tbar)
  {
    if(!tbar)
      return null;

    return <Toolbar items={tbar} className="region-north" />
  }

  renderBbar(bbar)
  {
    if(!bbar)
      return null;

    return <Toolbar items={bbar} className="region-south" />
  }

  renderBody(items)
  {
    return <ListGroup fill="true" className="region-center listview-body">
      {this.props.items.map((item, id) => {
        let selected = (id == this.state.selection);

        return <div className={"list-group-item listview-item " + (selected ? "listview-item-selected" : "")} onClick={() => {this.updateSelection(id)}} >
          <Big {...item} toggle={selected ? "true" : null} />
        </div>
      })}
      </ListGroup>
  }

  render()
  {
    return (
      <Panel header={this.props.title} className="region-center region-layout-vertical listview">
        {this.renderTbar(this.props.tbar)}
        {this.renderBody(this.props.items)}
        {this.renderBbar(this.props.bbar)}
      </Panel>
    );
  }
}
