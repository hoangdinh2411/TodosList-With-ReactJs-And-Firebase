const Button = ({title, className , onHandlerClick}) => {
    return (
        <button className={`btn ${className}`} onClick ={onHandlerClick}>{title}</button>
    )
}


export default Button