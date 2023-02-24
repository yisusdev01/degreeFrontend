///////////----------IMPORTED--STYLES--PROJECT----------///////////
import './ModalContainer.css';

export const ModalContainer = ({children,toogleModal}) => {
    return (
        <div className="modalContainer" >
            <div className='backgrounModal' onClick={toogleModal}>
            </div>
            {children}
        </div>
    )
}