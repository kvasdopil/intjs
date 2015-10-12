import React from 'react';
import Toolbar from './Toolbar';
import Big from './Big';

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

  renderHeader()
  {
    if(!this.props.title)
      return null;

    return (
      <div className="panel-heading region-north">
        <h3 className="panel-title">
          {this.props.title}
        </h3>
      </div>
    );
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

    return (
      <div className="list-group region-center listview-body" style={{overflowY: "auto"}}>
          {items.map((item,id) => {
            var selected = (this.state.selection == id);
            return <li className={"list-group-item " + (selected ? "listview-item-selected" : "")} onClick={() => {this.updateSelection(id)}}>
                <Big {...item} toggle={selected ? 1 : 0} />
              </li>
            })}
      </div>
    );

    //
  }

  render()
  {
    var regionClass = "";
    if(this.props.region)
      regionClass = "region-" + this.props.region;

    return (
      <div className={"panel panel-default region-layout-vertical " + regionClass} style={{marginBottom: 0}}>
        {this.renderHeader()}
        {this.renderTbar()}
        {this.renderContent()}
        {this.renderBbar()}
      </div>
    );
  }
}
