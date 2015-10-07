import React from 'react';

export default class SearchBox extends React.Component {
  render() {
    return <span className="input-group">
          <input type="text" className="form-control" placeholder="Поиск..." />
        </span>
  }
}

