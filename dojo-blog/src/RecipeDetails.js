import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Spaghetti from "./Images/Spaghetti.jpg";
import Steak from "./Images/Steak.jpg";
import Clicked from "./Images/clicked.png"
import Unclicked from "./Images/unclicked.png"
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import HelpBar from "./helpBar";
/**
 * 
 * @returns 
 */
const RecipeDetails = () => {
  const { id } = useParams();
  const { data: recipe, error, isPending } = useFetch('http://localhost:8000/recipes/' + id);




  return (
    
    <div className="recipe-details">

      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {recipe && (
        
        <article>

          <h2>{recipe.title}</h2>
          <p>Written by {recipe.author}</p>
          <Container>
            <Row>
              <Col>
              <h2>Directions:</h2>
              <div className="block">{recipe.directions}</div>
              
              </Col>
              <Col>
              <h2>Ingredients</h2>
              <div className="block">{recipe.ingredients}</div></Col>
            </Row>
          
          </Container>


          <div className="rImage">
            {(() => {
              switch (recipe.image) {
                case "Spaghetti": return <div className="rImage"><img src={Spaghetti} alt="" /></div>;
                case "Steak": return <img src={Steak} alt="" />;
              }
            })()}
          </div>

          {recipe.imagePath}
          <div className="help"><HelpBar/></div>

        </article>
      )}
    </div>
  );

}

export default RecipeDetails;