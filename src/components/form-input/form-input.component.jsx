import './form-input.styles.scss';

const FormInput = ({label, ...otherProps }) => {
    return (

        //if label exists => assign styles
        <div className="group">
            <input className="form-input" {...otherProps} />
            {label && (
                <label 
                className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>
            )}

        </div>
    )
}

export default FormInput;