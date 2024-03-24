import './Input.css'

const Input = ({label, ...rest}) => {
    return (
        <div class="field" >
            <lable>{label} </lable>
            <input {...rest} />
        </div>
)}

export default Input