const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  };
};

const initialState = anecdotesAtStart.map(asObject);

const reducer = (store = initialState, action) => {
  switch (action.type) {
    case "LIKE":
      const id = action.data.id;
      const likedAnecdote = store.filter((anecdote) => anecdote.id === id);
      const otherAnecdotes = store.filter((anecdote) => anecdote.id !== id);
      const newAnecdote = {
        ...likedAnecdote[0],
        votes: likedAnecdote[0].votes + 1
      };
      return [...otherAnecdotes, newAnecdote];
    case "NEW_ANECDOTE":
      const anecdote = {
        content: action.data.content,
        id: getId(),
        votes: 0
      };
      return [...store, anecdote];
    default:
      return store;
  }
};

export default reducer;
