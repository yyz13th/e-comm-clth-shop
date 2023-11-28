// import './form-input.styles.scss';
import { FormInputLabel, Input, Group } from "./form-input.styles";

const FormInput = ({label, ...otherProps }) => {
    return (

        //if label exists => assign styles
        <Group>
            <Input {...otherProps} />
            {label && (
                <FormInputLabel 
                shrink={otherProps.value.length}>
                    {label}
                </FormInputLabel>
            )}

        </Group>
    )
}

export default FormInput;