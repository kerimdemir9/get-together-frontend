import {useGlobalContext} from "../Context/LoginContext";
import {Button} from "primereact/button";


const ProfilePage = () => {
    const { setIsLogin } = useGlobalContext();

    return (
        <div>
            Hello, You are logged in successfully!!!
            <br/>
            <div className="p-inputwrapper">
                <Button onClick={() => setIsLogin(false)}>Log out</Button>
            </div>
        </div>
    )
}

export default ProfilePage;