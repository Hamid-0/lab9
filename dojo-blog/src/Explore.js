import RecipeList from "./RecipeList";
import useFetch from "./useFetch";
import YoutubeEmbed from "./YoutubeEmbed";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import HelpBar from "./helpBar";
const Explore = () => {
  const { error, isPending, data: recipes } = useFetch('http://localhost:8000/recipes')


  return (

    <div className="explore">

      <h3>Recipes Picked for you...</h3>
      <div className="block">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {recipes && <RecipeList recipes={recipes} />}
      </div>
      <br />
      

      <h3>Videos from your favourite chefs..</h3>
      
      <div className="block">
        <Container>
          <Row>
            <Col><YoutubeEmbed embedId="ctRo3pmFaKQ" /></Col>
            <Col><YoutubeEmbed embedId="nsw0Px-Pho8" /></Col>
           </Row>
           <Row>
            <Col><YoutubeEmbed embedId="ctRo3pmFaKQ" /></Col>
            <Col><YoutubeEmbed embedId="nsw0Px-Pho8" /></Col>
           </Row>
         
         
        </Container>

      </div>
      <div className="help"><HelpBar/></div>

    </div>

  );
}

export default Explore;