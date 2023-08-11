import {Container} from "@mui/material";
import {Card} from "primereact/card";
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Button} from "primereact/button";
import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {useGlobalContext} from "../Context/GlobalContext";
import ProfilePage from "./ProfilePage";

const Login = () => {
    const { isLogin, setIsLogin } = useGlobalContext();
    const [userName, setUserName] = useState((""))
    const [password, setPassword] = useState("");

    const handleOnClick = async (e) => {
        e.preventDefault();

        const response = await axios.get("http://localhost:8888/v1/user/find_by_user_name/" + userName);
        console.log("response: ", response);
        const data = response.data;
        console.log(data);
        if(data.password === password) {
            setIsLogin(true);
        }
        setUserName("");
        setPassword("");
    }

    return (
        <div className="App-header">
            <Container maxWidth="sm">
                {!isLogin
                ? <Card title="Login">
                        <div className="card flex flex-column md:flex-row gap-3">
                            <InputText value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Username" />
                        </div>
                        <br/>
                        <div className="card flex flex-column md:flex-row gap-3">
                            <Password value={password} onChange={(e) => setPassword(e.target.value)} placeholder={"Password"} feedback={false} />
                        </div>
                        <br/>
                        <div className="p-inputwrapper">
                            <Button className="p-button" onClick={(e) => handleOnClick(e)} label="Submit" />
                            <Link to="/register" style={{ marginLeft: '10px' }}>
                                <Button className="p-button" label="Register" />
                            </Link>
                            <Link to="/" style={{ marginLeft: '10px' }}>
                                <Button className="p-button">Home</Button>
                            </Link>
                        </div>
                    </Card>
                : <ProfilePage/>}
            </Container>
        </div>
    )
}
export default Login;