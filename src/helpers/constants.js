export const ACTION_TYPES = {
  ADD_FRIEND: "ADD_FRIEND",
  REMOVE_FREIND: "REMOVE_FREIND",
  TOGGLE_BEST_FRIEND: "TOGGLE_BEST_FRIEND",
  SEARCH_FRIEND: "SEARCH_FRIEND",
  CHANGE_PAGE_NUMBER: "CHANGE_PAGE_NUMBER",
  OPEN_DELETE_MODAL: "OPEN_DELETE_MODAL",
  CLOSE_DELETE_MODAL: "CLOSE_DELETE_MODAL",
};
export class Friend {
  constructor(name) {
    this.name = name;
    this.isFavorite = false;
    this.id = Date.now();
  }
}
