import {Link} from "react-router-dom";
import {Container} from "@mui/material";
import {Card} from "primereact/card";
import {Button} from "primereact/button";
import {useGlobalContext} from "../Context/LoginContext";
import ProfilePage from "./ProfilePage";

const Home = () => {
    const { isLogin } = useGlobalContext();

    return (
        <div className="App-header">
            <Container maxWidth="sm">
                {!isLogin
                    ? (<Card title="Welcome">
                        <Link to="/register">
                            <Button className="p-button" label="Register"/>
                        </Link>
                        <Link to="/login" style={{ marginLeft: '10px' }}>
                            <Button className="p-button" label="Login"/>
                        </Link>
                    </Card>)
                    : (<ProfilePage/>)}
            </Container>
        </div>
    )
}

export default Home;