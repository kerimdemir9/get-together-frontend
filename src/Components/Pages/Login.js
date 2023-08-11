import {Container} from "@mui/material";
import {Card} from "primereact/card";
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Button} from "primereact/button";
import {useState} from "react";
import {Link} from "react-router-dom";

const Login = () => {
    const [userName, setUserName] = useState((""))
    const [password, setPassword] = useState("");


    const handleOnClick = (e) => {
        e.preventDefault();
        // TODO do what you want with the values
        console.log("userName: ", userName)
        console.log("password: ", password)
        setUserName("");
        setPassword("");
    }

    return (
        <div className="App-header">
            <Container maxWidth="sm">
                <Card title="Login">
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
                        <Link to="/register">
                            <Button className="p-button" label="Register" />
                        </Link>
                    </div>
                </Card>
            </Container>
        </div>
    )
}
export default Login;