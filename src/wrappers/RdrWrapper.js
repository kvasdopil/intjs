import Wrapper from "./Wrapper";

class RdrWrapper extends Wrapper {
  icon() { return 'https://cdn2.iconfinder.com/data/icons/free-basic-icon-set-2/300/12-64.png'; }
  description() { return 'Редирект'; }
}

export const rdrWrapper = new RdrWrapper();