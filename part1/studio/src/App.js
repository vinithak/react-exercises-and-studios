import logo from './logo.svg';

import RecipeIngredients from './components/Ingredients';
import RecipeDescription from './components/Description';
import RecipePhoto from './components/Photos';

function App() {
    return(<div className="App">
      <div>

        <div className="recipePhotoBlock">
            <RecipePhoto />
            <div>
              <RecipeDescription />
              <RecipeIngredients />
            </div>
        </div>
     </div>

    </div>
  );
}

export default App;
