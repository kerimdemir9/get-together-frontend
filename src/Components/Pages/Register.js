import {Container} from "@mui/material";
import {Card} from "primereact/card";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {useState} from "react";
import {Password} from "primereact/password";
import axios from "axios";

const Register = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        mail: "",
        password: ""
    })

    const handleOnChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        setUser((user) => ({...user, [name]: value}));

    }


    const handleOnClick = async (e) => {
        e.preventDefault();

        try {
             const response = await axios.post("http://localhost:8888/v1/user/save", user);
             console.log(response);
             setUser({
                firstName: "",
                lastName: "",
                userName: "",
                mail: "",
                password: ""
            });
        } catch (e) {
            console.error("Request error: ", e);
        }
    }


    return (
        <div className="App-header">
            <Container maxWidth="sm">
                <Card title="Register">
                    <div className="card flex flex-column md:flex-row gap-3">
                        <div className="p-inputgroup">
                            <InputText name="firstName" value={user.firstName} onChange={(e) => handleOnChange(e)} placeholder="FirstName" />
                            <InputText name="lastName" value={user.lastName} onChange={(e) => handleOnChange(e)} placeholder="LastName" />
                        </div>
                        <br/>
                        <div className="p-inputgroup">
                            <InputText name="userName" value={user.userName} onChange={(e) => handleOnChange(e)} placeholder="UserName" />
                            <Password name="password" value={user.password} onChange={(e) => handleOnChange(e)} placeholder="Password" feedback={true} />
                        </div>
                        <br/>
                        <InputText name="mail" value={user.mail} onChange={(e) => handleOnChange(e)} placeholder="Mail" />
                    </div>
                    <br/>
                    <Button className="p-button" onClick={handleOnClick} label="Submit" />
                </Card>
            </Container>
        </div>
    )
}


export default Register;