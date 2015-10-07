import Wrapper from "./Wrapper";

class NatWrapper extends Wrapper {
  icon() { return 'https://cdn2.iconfinder.com/data/icons/free-basic-icon-set-2/300/18-64.png'; }
  description() { return 'Правило NAT'; }
}

export const natWrapper = new NatWrapper();