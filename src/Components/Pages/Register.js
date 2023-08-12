import {Container} from "@mui/material";
import {Card} from "primereact/card";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {useState} from "react";
import {Password} from "primereact/password";
import axios from "axios";
import {Link} from "react-router-dom";
import {Message} from 'primereact/message';
import {useGlobalContext} from "../Context/LoginContext";
import ProfilePage from "./ProfilePage";

// TODO add validation to the inputs

const Register = () => {
    const {isLogin, setIsLogin} = useGlobalContext();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        mail: "",
        password: ""
    })
    const [checkPass, setCheckPass] = useState("");
    const [error, setError] = useState(false);
    const [error1, setError1] = useState(false);
    const [error2, setError2] = useState(false);
    const [error3, setError3] = useState(false);
    const [error4, setError4] = useState(false);
    const [error5, setError5] = useState(false);

    const handleOnChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        if (name !== "checkPass") {
            setUser((user) => ({...user, [name]: value}));
        }
    }


    const handleOnClick = async (e) => {
        e.preventDefault();

        if ((checkPass !== null && user.password !== null) && checkPass !== user.password) {
            setError(true);
            return;
        } else {
            setError(false);
        }
        if (user.firstName === "") {
            setError1(true);
            return;
        } else {
            setError1(false);
        }
        if (user.lastName === "") {
            setError2(true);
            return;
        } else {
            setError2(false);
        }
        if (user.userName === "") {
            setError5(true);
            return;
        } else {
            setError5(false);
        }
        if (user.password === "") {
            setError4(true);
            return;
        } else {
            setError4(false);
        }
        if (user.mail === "") {
            setError3(true);
            return;
        } else {
            setError3(false);
        }
        try {
            const response = await axios.post("http://localhost:8888/v1/user/save", user);
            console.log(response);
            setIsLogin(true);
            setUser({
                firstName: "",
                lastName: "",
                userName: "",
                mail: "",
                password: ""
            });
            setCheckPass("");
        } catch (e) {
            console.error("Request error: ", e);
        }
    }

    const handleCheckPass = (e) => {
        e.preventDefault();
        setCheckPass(e.target.value);
    }


    return (
        <div className="App-header">
            <Container maxWidth="sm">
                {!isLogin
                    ? <Card title="Register">
                        <div className="card flex flex-column md:flex-row gap-3">
                            <div className="p-inputgroup">
                                <InputText className="p-message-error" name="firstName" value={user.firstName}
                                           onChange={(e) => handleOnChange(e)} placeholder="FirstName and MiddleName"/>
                                {error1
                                    ? <Message severity="error" text="FirstName is Required!"/>
                                    : null}
                            </div>
                            <br/>
                            <div className="p-inputgroup">
                                <InputText name="lastName" value={user.lastName} onChange={(e) => handleOnChange(e)}
                                           placeholder="LastName"/>
                                {error2
                                    ? <Message severity="error" text="LastName is Required!"/>
                                    : null}
                            </div>
                            <br/>
                            <div className="p-inputgroup">
                                <InputText name="userName" value={user.userName} onChange={(e) => handleOnChange(e)}
                                           placeholder="UserName"/>
                                {error5
                                    ? <Message severity="error" text="UserName is Required!"/>
                                    : null}
                            </div>
                            <br/>
                            <div className="p-inputgroup">
                                <Password name="password" value={user.password} onChange={(e) => handleOnChange(e)}
                                          placeholder="Password" feedback={true}/>
                                {error4
                                    ? <Message severity="error" text="Password is Required!"/>
                                    : null}
                            </div>
                            <br/>
                            <div className="p-inputgroup">
                                <Password name="checkPassword" value={checkPass} onChange={(e) => handleCheckPass(e)}
                                          placeholder="Check Password" feedback={false}/>
                                {error
                                    ? <Message severity="error" text="Passwords are not the same!"/>
                                    : null}
                            </div>
                            <br/>
                            <div className="p-inputgroup">
                                <InputText name="mail" value={user.mail} onChange={(e) => handleOnChange(e)}
                                           placeholder="Mail"/>
                                {error3
                                    ? <Message severity="error" text="Mail is Required!"/>
                                    : null}
                            </div>
                        </div>
                        <br/>
                        <Button className="p-button" onClick={handleOnClick} label="Submit"/>
                        <Link to="/" style={{marginLeft: '10px'}}>
                            <Button className="p-button">Home</Button>
                        </Link>
                        <Button style={{marginLeft: '10px'}} className="p-button" onClick={() => {
                            setUser({
                                firstName: "",
                                lastName: "",
                                userName: "",
                                mail: "",
                                password: ""
                            })
                            setCheckPass("")
                            setError(false)
                            setError1(false)
                            setError2(false)
                            setError3(false)
                            setError4(false)
                            setError5(false)
                            console.clear();
                        }}>Clear</Button>
                    </Card>
                    : <ProfilePage/>
                }
            </Container>
        </div>
    )
}


export default Register;