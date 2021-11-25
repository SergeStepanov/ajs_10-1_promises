export default class GameSaving {
  constructor(data) {
    const result = JSON.parse(data);
    this.id = result.id;
    this.created = result.created;
    this.userInfo = result.userInfo;
  }
}
