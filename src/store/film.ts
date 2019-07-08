import { Module } from "storeon";

interface State {
  film: object;
}

const film: Module<State> = store => {
  store.on("@init", () => ({ film: {} }));
  store.on("film/save", (state, film) => {
    return { film: film };
  });
  store.on("film/search", async (_, film) => {
    try {
      const resp = await fetch(`http://www.omdbapi.com/?t=${film}&apikey=${process.env.API_KEY}`);
      const response = await resp.json();
      store.dispatch("film/save", response);
    } catch (error) {
      await console.log(error);
    }
  });
};

export default film;
