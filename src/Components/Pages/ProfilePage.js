import {useGlobalContext} from "../Context/LoginContext";
import {Button} from "primereact/button";
import {Container} from '@mui/material';


const ProfilePage = () => {
    const { setIsLogin } = useGlobalContext();

    return (
        <div className="p-panel">
            <Container>
                Hello, You are logged in successfully!!!
                <br/>
                <div className="p-inputwrapper">
                    <Button onClick={() => setIsLogin(false)}>Log out</Button>
                </div>
            </Container>
        </div>
    )
}

export default ProfilePage;