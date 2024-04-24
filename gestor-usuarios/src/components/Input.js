import './Input.css'

const Input = ({label, ...rest}) => {
    return (
        <div class="field" >
            <label>{label} </label>
            <input {...rest} />
        </div>
)}

export default Input

//El label es un objeto normal porque solo ha de cambiar su texto, el input tiene el ...rest porque contiene funciones...?