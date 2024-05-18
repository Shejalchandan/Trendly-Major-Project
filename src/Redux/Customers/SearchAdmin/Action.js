// searchActions.js
export const setSearchQuery = (query) => ({
    type: 'SET_SEARCH_QUERY',
    payload: query,
  });
  
  export const setSearchResults = (results) => ({
    type: 'SET_SEARCH_RESULTS',
    payload: results,
  });
  
  export const fetchSearchResults = (query) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`/api/admin/products/search?query=${query}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        dispatch(setSearchResults(data));
      } catch (error) {
        console.error('Error searching products:', error);
        // Handle error (e.g., display an error message to the user)
      }
    };
  };
  