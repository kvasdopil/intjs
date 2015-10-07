import Wrapper from "./Wrapper";

class FwdWrapper extends Wrapper {
  icon() { return 'https://cdn2.iconfinder.com/data/icons/free-basic-icon-set-2/300/15-64.png'; }
  description() { return 'Перенаправление'; }
}

export const fwdWrapper = new FwdWrapper();