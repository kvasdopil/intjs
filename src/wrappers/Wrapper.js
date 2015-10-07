export default class Wrapper {
  icon() { return 'none'; }
  description() { return "No description"; }

  getReport() {
    return [
      {name: 'desc1', value: 'Some value'},
      {name: 'hello', value: 'Some value'},
      {name: 'oh hello good sir', value: 'AATATATATTATATATTATATAT'},
    ];
  }
}