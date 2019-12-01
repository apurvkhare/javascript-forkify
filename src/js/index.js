// Global app controller
// https://api.spoonacular.com/recipes/search?apiKey=4886020c152d4189918015f5985b5374&query=burger

import Search from './models/Search';

/**Global State of the App
 * Search results object
 * current recipe object
 * Shopping list object
 * Liked recipes object
 */
const state = {};

const controlSearch = async () => {
    //1. Get Query from View
    const query = 'garlic';

    if(query){
        //2. add new search object to the state
        state.search = new Search(query);

        //3. Prepare UI for results

        //4. search for recipes
        await state.search.getResults();

        //5. Render the result on UI
        console.log(state.search.result);
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});