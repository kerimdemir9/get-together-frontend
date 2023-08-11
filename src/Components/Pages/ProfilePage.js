import {useGlobalContext} from "../Context/GlobalContext";
import {Button} from "primereact/button";


const ProfilePage = () => {
    const { isLogin, setIsLogin } = useGlobalContext();

    return (
        <div>
            Hello, You are logged in successfully!!!
            <br/>
            <div className="p-button">
                <Button onClick={() => setIsLogin(false)}>Log out</Button>
            </div>
        </div>
    )
}

export default ProfilePage;