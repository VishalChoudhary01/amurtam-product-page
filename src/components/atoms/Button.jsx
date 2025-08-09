
const Button = ({
  buttonText,
  buttonStyle,
  renderLeftItem,
  renderLeftStyle,
  renderRightItem,
  renderRightStyle,
  buttonOnClick,
  buttonDisabled,
  buttonDisabledStyle 
}) => {
  const conditionalStyles = buttonDisabled 
    ? `opacity-50 cursor-not-allowed ${buttonDisabledStyle}` 
    : `${buttonStyle}`;

  return (
    <button
      className={conditionalStyles}
      onClick={buttonOnClick}
      disabled={buttonDisabled}
    >
      {renderLeftItem && <span className={renderLeftStyle}>{renderLeftItem}</span>}
      {buttonText && buttonText}
      {renderRightItem && <span className={renderRightStyle}>{renderRightItem}</span>}
    </button>
  );
}

export default Button;
