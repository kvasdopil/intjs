import React from 'react';

var formId = 0;

export default class Modal extends React.Component {
  renderItem(item) {
    if(item.label !== undefined)
    {
      var label = <label className="control-label col-sm-2" for={item.id}>{item.label}: </label>;
      var clName = "col-sm-10";
    }
    else
    {
      label = "";
      clName = "col-sm-offset-2 col-sm-10";
    }

    switch(item.type) {
    case 'checkbox':
      return <div className="form-group">
          <div className={"checkbox " + clName}>
            <label><input type="checkbox" id={item.id} />{item.title}</label>
          </div>
        </div>

    case 'textbox':
    case 'password':
    case 'email':
      return <div className="form-group">
          {label}
          <div className={clName}>
            <input type={item.type} className="form-control" id={item.id} placeholder={item.placeholder} />
          </div>
      </div>
    }
  }

  renderBody() {
    var items = this.props.items ? this.props.items : [];

    return <div className="modal-body">
        <form className="form-horizontal" role="form">

          {items.map(item => {
            return this.renderItem(item);
          })}

        </form>
      </div>
  }

  render() {
      if(this.props.id)
        var id = this.props.id;
      else
        id = 'form' + (formId++);

      return <div className="modal fade" id={id} tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">

            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">{this.props.title}</h4>
            </div>

            {this.renderBody()}

            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Сохранить</button>
              <button type="button" className="btn btn-default" data-dismiss="modal">Отмена</button>
            </div>
          </div>
        </div>
      </div>
  }
}
