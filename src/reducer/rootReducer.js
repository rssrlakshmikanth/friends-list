import { ACTION_TYPES } from "./../helpers/constants";
export const intialState = {
  itemsPerPage: 4,
  friendsList: [],
  displayList: [],
  searchString: "",
  currentPage: 1,
  showModal: false,
  seletedFriend: [],
};

export const reducer = (state, { type, value }) => {
  switch (type) {
    case ACTION_TYPES.ADD_FRIEND: {
      return {
        ...state,
        showLoader: false,
        friendsList: [...state.friendsList, value],
        displayList: [...state.friendsList, value],
      };
    }
    case ACTION_TYPES.OPEN_DELETE_MODAL: {
      return {
        ...state,
        showModal: true,
        seletedFriend: [value],
      };
    }
    case ACTION_TYPES.CLOSE_DELETE_MODAL: {
      return {
        ...state,
        showModal: false,
        seletedFriend: [],
      };
    }
    case ACTION_TYPES.REMOVE_FREIND: {
      const finalArray = state.friendsList.filter(
        (item) => item.id !== value.id
      );

      return {
        ...state,
        friendsList: finalArray,
        displayList: filterSerchedDevices(finalArray, state.searchString),
      };
    }

    case ACTION_TYPES.TOGGLE_BEST_FRIEND: {
      const finalArray = state.friendsList.map((item) => {
        if (item.id === value.id) {
          item.isFavorite = !value.isFavorite;
        }
        return item;
      });
      const sortedArray = finalArray.sort(sortBasedOnBestFriend);

      return {
        ...state,
        friendsList: sortedArray,
        displayList: filterSerchedDevices(sortedArray, state.searchString),
      };
    }
    case ACTION_TYPES.CHANGE_PAGE_NUMBER: {
      return {
        ...state,
        currentPage: value,
      };
    }
    case ACTION_TYPES.SEARCH_FRIEND: {
      return {
        ...state,
        searchString: value,
        currentPage: 1,
        displayList: filterSerchedDevices(state.friendsList, value),
      };
    }

    default:
      return state;
  }
};

function filterSerchedDevices(masterArray, searchString) {
  let filterdArray;
  if (searchString === "") {
    filterdArray = [...masterArray];
  } else {
    const searchvalue = searchString.toLowerCase();
    filterdArray = masterArray.filter((item) => {
      return item.name.toLowerCase().includes(searchvalue);
    });
  }

  return filterdArray;
}

function sortBasedOnBestFriend(a, b) {
  let returnValue = 0;
  if (a.isFavorite || b.isFavorite) {
    if (a.isFavorite && b.isFavorite) {
      returnValue = 0;
    } else if (a.isFavorite) {
      returnValue = -1;
    } else if (b.isFavorite) {
      returnValue = 1;
    }
  }
  return returnValue;
}
