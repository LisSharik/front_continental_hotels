import { Router } from "react-router-dom";
import RegisterForm from "../Formularios/RegisterForm";

const componentes: React.FC = () => {
    // const [isLoginForm, setIsLoginForm] = useState(true);
  
    return (
        <div>

            <Router>
                <RegisterForm />
            <Router/>
        </div>
    );
}