
export const SideBarHeader = ({openSide, handleSide}) => {

    return (
        <div className="logoDetails">
            <i className="bi bi-mortarboard-fill icon"/>
            <div className="logoName">Imprenta</div>
            <i 
                className={`bi bi-text-indent-${!openSide?'left':'right'}`}
                id="btn" 
                onClick={handleSide}
            />
        </div>
    )
}