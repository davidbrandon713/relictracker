// import { relicList } from "./components/Relics";

// Sorts alphabetically
export const compare = (a, b) => {
  if ( a.id < b.id ){
          return -1;
      }
      if ( a.id > b.id ){
          return 1;
      }
      return 0;
}

export const setRelic = (name) => {
  
}

// export const setSearchField = (text) => {
//     return {
//         type: 'CHANGE_SEARCH_FIELD',
//         payload: text
//     }
// }