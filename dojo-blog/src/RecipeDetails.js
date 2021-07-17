import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
/**
 * 
 * @returns 
 */
const RecipeDetails = () => {
  const { id } = useParams();
  const { data: recipe, error, isPending } = useFetch('http://localhost:8000/recipes/' + id);

  return (
    <div className="recipe-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { recipe && (
        <article>
          <h2>{ recipe.title }</h2>
          <p>Written by { recipe.author }</p>
          <div>{ recipe.body }</div>
        </article>
      )}
    </div>
  );
}
 
export default RecipeDetails;