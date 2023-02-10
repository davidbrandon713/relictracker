// import { relicList } from "./components/Relics";

// Sorts alphabetically
export const compare = (a, b) => {
  if ( a.name < b.name ){
          return -1;
      }
      if ( a.name > b.name ){
          return 1;
      }
      return 0;
}

// export const setSearchField = (text) => {
//     return {
//         type: 'CHANGE_SEARCH_FIELD',
//         payload: text
//     }
// }