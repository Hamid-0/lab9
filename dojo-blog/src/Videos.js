
import YoutubeEmbed from "./YoutubeEmbed";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import HelpBar from "./helpBar";

const Videos = () => {
    return (
        <div className="videos">
                <Container>
                    <Row>
                        <Col><YoutubeEmbed embedId="ctRo3pmFaKQ" /></Col>
                        <Col><YoutubeEmbed embedId="nsw0Px-Pho8" /></Col>
                    </Row>
                    <Row>
                        <Col><YoutubeEmbed embedId="ctRo3pmFaKQ" /></Col>
                        <Col><YoutubeEmbed embedId="nsw0Px-Pho8" /></Col>
                    </Row>
                    <Row>
                        <Col><YoutubeEmbed embedId="ctRo3pmFaKQ" /></Col>
                        <Col><YoutubeEmbed embedId="nsw0Px-Pho8" /></Col>
                    </Row>
                    <Row>
                        <Col><YoutubeEmbed embedId="ctRo3pmFaKQ" /></Col>
                        <Col><YoutubeEmbed embedId="nsw0Px-Pho8" /></Col>
                    </Row>


                </Container>
            <div className="help"><HelpBar/></div>

        </div>
    );
}

export default Videos;