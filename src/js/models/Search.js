import axios from "axios";

export default class Search {
    constructor(query){
        this.query=query;
    }

    async getResults(query) {
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const key = "4886020c152d4189918015f5985b5374";
        try {
          const res = await axios(
            `${proxy}https://api.spoonacular.com/recipes/search?apiKey=${key}&query=${this.query}`
          );
          this.result = res.data.results;
          console.log(this.result);
        } catch (error) {
          alert(error);
        }
      }
}