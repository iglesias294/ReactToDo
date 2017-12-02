export var setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    }
};

export var addTodo = () => {
    return {
        type: 'ADD_TODO',
        text
    };
};