const Button = (props) => {
  
    const { children, bgColor, type, onClick } = props; // Changed `onclick` to `onClick`
    
    return (
      <div>
        <button type={type} className={`${bgColor}`} onClick={onClick} >{children}</button>
      </div>
    );
  };
  
  export default Button;