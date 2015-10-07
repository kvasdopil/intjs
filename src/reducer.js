import {Map,List,fromJS} from 'immutable';

const defaultState = {
  forwards: [
    {otype: 'Fwd', name:'Перенаправление почты', dst:'6.6.6.6', dstport: '110', proto: 'tcp', status: 'не работает'},
    {otype: 'Fwd', name:'Ещё перенаправление', dst: '8.8.8.8', dstport:'567'},
    {otype: 'Rdr', dst: '192.168.1.1', dstport: '123', status: 'нет пинга'},
    {otype: 'Nat', name:'А вот нате вам', status: 'норм'}
  ]
};

export default function(state = defaultState, action) {
  switch(action.type) {
  default:
    return state;
  }
}