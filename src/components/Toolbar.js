import React from 'react';
import SearchBox from './SearchBox';

import {
    Panel,
    ListGroup, ListGroupItem,
    ButtonGroup, ButtonToolbar, Button,
    Glyphicon,
    DropdownButton,
    MenuItem
  } from 'react-bootstrap';

function ToolButton(props) {
  switch(props.type)
  {
  case "SearchBox":
    return <SearchBox />

  case "Button":
  default:
    var glyph = null;

    if(props.glyph != undefined)
      glyph = <Glyphicon glyph={props.glyph} />;

    if(props.menu === undefined)
      return <Button onClick={props.onClick} >{glyph}{props.title}</Button>

    return <DropdownButton title={props.title}>
      {props.menu.map((item,id) => {
        if(item == '-')
          return <MenuItem divider />
        return <MenuItem>{item}</MenuItem>
      })}
      </DropdownButton>
  }
}

function getGroups(items) {
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

function renderContent(groups)
{
  return groups.map(group => {
      var style={};
      if(group.float)
        style.float = group.float;

      return <ButtonGroup className={group.float ? "btns-right" : ""}>
        {group.items.map((item) => {
          return <ToolButton {...item} />
        })}
      </ButtonGroup>
    });
}

export default function Toolbar(props) {
  //var tbarStyle = props.style ? props.style : {padding: "10px"};

  // if(props.bottom)
  // {
  //   return <div className="panel-footer region-south" style={{margin:0}}>
  //     {renderContent(groups)}
  //   </div>
  // }

  // return <div className="btn-toolbar region-north" role="toolbar" style={tbarStyle}>
  //     {this.renderContent(groups)}
  //   </div>

  return <ButtonToolbar className={props.className ? props.className : null}>
      {renderContent(getGroups(props.items))}
    </ButtonToolbar>
}
