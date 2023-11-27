// import './button.styles.scss';
import { BaseButton, GoogleSignInButton, InvertedButton } from './button.styles';

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
}

//object to check whether the button type is in the object and selects accordingly
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton
    
}[buttonType]);

const Button = ({ children, buttonType, ...otherPorps}) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton {...otherPorps}>
            {children} 
        </CustomButton>
    )
}

export default Button;