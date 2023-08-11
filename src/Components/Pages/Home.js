import {Link} from "react-router-dom";
import {Container} from "@mui/material";
import {Card} from "primereact/card";
import {Button} from "primereact/button";

const Home = () => {
    return (
        <div className="App-header">
            <Container maxWidth="sm">
                <Card title="Register">
                    <Link to="/register">
                        <Button className="p-button" label="Register"/>
                    </Link>
                    <Link to="/login">
                        <Button className="p-button" label="Login"/>
                    </Link>
                </Card>
            </Container>
        </div>
    )
}

export default Home;