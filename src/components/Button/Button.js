const Button = ({title, className , onHandlerClick, type}) => {
    
    return (
        <button type={type} className={`btn ${className} `} onClick ={onHandlerClick}>{title}</button>
    )
}


export default Button