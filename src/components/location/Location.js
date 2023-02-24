///////////---------------IMPORTED--PACKAGE---------------///////////
import { useLocation } from "react-router-dom";

///////////----------IMPORTED--STYLES--PROJECT----------///////////
import './location.css';

export const Location = () => {

    const location = useLocation()

    return (
        <div className="pathLocation">
            <h5>{`Tú estas en: ${location.pathname}`}</h5>
        </div>
    )
}