import {Container} from "@mui/material";
import {Card} from "primereact/card";
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Button} from "primereact/button";
import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {useGlobalContext} from "../Context/LoginContext";
import ProfilePage from "./ProfilePage";
import {Message} from "primereact/message";

const Login = () => {
    const { isLogin, setIsLogin } = useGlobalContext();
    const [userName, setUserName] = useState((""))
    const [password, setPassword] = useState("");
    const [error1, setError1] = useState(false);
    const [error2, setError2] = useState(false);
    const [loginError, setLoginError] = useState(false);

    const handleOnClick = async (e) => {
        e.preventDefault();

        if(userName === "") {
            setError1(true);
            return;
        }
        else {
            setError1(false);
        }
        if(password === "") {
            setError2(true);
            return;
        }
        else {
            setError2(false);
        }
        try {
            const response = await axios.get("http://localhost:8888/v1/user/find_by_user_name/" + userName);
            setLoginError(false);
            console.log("response: ", response);
            const data = response.data;
            console.log(data);
            if(data.password === password) {
                setIsLogin(true);
            }
            setUserName("");
            setPassword("");
            setError1(false);
            setError2(false);
            console.clear();
        } catch (error) {
            //if(error.response.status === 404)
            setLoginError(true);
            console.error(error);
            console.log("Error code: ", error.response.status);
        }
    }

    return (
        <div className="App-header">
            <Container maxWidth="sm">
                {!isLogin
                ? <Card title="Login">
                        <div className="card flex flex-column md:flex-row gap-3">
                            <InputText value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Username" />
                            {error1
                                ? <Message severity="error" text="UserName is Required!"/>
                                : null}
                        </div>
                        <br/>
                        <div className="card flex flex-column md:flex-row gap-3">
                            <Password value={password} onChange={(e) => setPassword(e.target.value)} placeholder={"Password"} feedback={false} />
                            {error2
                                ? <Message severity="error" text="Password is Required!"/>
                                : null}
                        </div>
                        <br/>
                            {loginError
                                ?
                                <>
                                    <Message severity="error" text="Wrong userName or Password!"/>
                                    <br/>
                                    <br/>
                                </>
                                : null}
                        <div className="p-inputwrapper">
                            <Button className="p-button" onClick={(e) => handleOnClick(e)} label="Login" />
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