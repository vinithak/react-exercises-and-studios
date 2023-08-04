import styles from './Description.module.css';
import React from 'react';

const RecipeAuthor = ( ) => {
    let authorLink = "https://www.foodandwine.com/recipes/pulling-pantry-puttanesca";
    let authorPhoto = "https://www.foodandwine.com/thmb/7l-DcWs6cQFAWDS5XFOcuhTscDM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pulling-from-the-Pantry-Puttanesca-FT-recipe0719_0-3a21d6b0d5b44148a23908a309901009.jpg";
    let authorName = "Zoi Antonitsas";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );

}

class RecipeDescription extends React.Component{
    render(){ 
        
        return(<div> 
        <div>
           <h1>Recipe Title</h1>
           <p>Short recipe description</p>
        </div>
        <RecipeAuthor />
     </div>);
    }
}
export default RecipeDescription;