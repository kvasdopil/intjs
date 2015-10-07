import {Map,List,fromJS} from 'immutable';

const defaultState = {
  forwards: [
    {otype: 'Fwd', name:'Перенаправление почты', dst:'6.6.6.6', dstport: '110', proto: 'tcp', status: 'не работает'},
    {otype: 'Fwd', name:'Ещё перенаправление', dst: '8.8.8.8', dstport:'567'},
    {otype: 'Rdr', dst: '192.168.1.1', dstport: '123', status: 'нет пинга'},
    {otype: 'Nat', name:'А вот нате вам', status: 'норм', toggle: true}
  ]
};

export default function(state, action) {
  console.log(state, action);

  if(state === undefined)
    state = defaultState;

  switch(action.type) {
  case 'ADD':
    return state.update('forwards', items => items.push(action.item))

  default:
    return state;
  }
}