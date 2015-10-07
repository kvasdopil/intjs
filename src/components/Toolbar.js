import React from 'react';
import Button from './Button';
import SearchBox from './SearchBox';

export default class Tbar extends React.Component {

  getGroups(items) {
    if(items === undefined)
      items = [];

    // find groups
    var groups = [];
    var group = {items:[]};
    var right = false;
    items.forEach(function(item) {
      if(item == '-')
      {
        groups.push(group);
        group = {items:[]};
        if(right)
          group.float = 'right';

        return;
      }

      if(item == '->')
      {
        groups.push(group);
        right = true;

        group = {items:[]};
        if(right)
          group.float = 'right';

        return;
      }

      group.items.push(item);
    })
    groups.push(group);

    return groups;
  }

  renderContent(groups)
  {
    return groups.map(group => {
        var style={};
        if(group.float)
          style.float = group.float;

        return <div className="btn-group" role="group" style={style}>
          {group.items.map(item => {
            switch(item.type)
            {
            case "SearchBox":
              return <SearchBox {...item} />
            case "Button":
              return <Button {...item} />
            }
          })}
        </div>
      });
  }

  render() {
    var groups = this.getGroups(this.props.items);

    var tbarStyle = this.props.style ? this.props.style : {padding: "10px"};

    if(this.props.bottom)
    {
      return <div className="panel-footer region-south" flexShrink="0" style={tbarStyle}>
        {this.renderContent(groups)}
      </div>
    }

    return <div className="btn-toolbar region-north" role="toolbar" style={tbarStyle}>
        {this.renderContent(groups)}
      </div>
  }
}

