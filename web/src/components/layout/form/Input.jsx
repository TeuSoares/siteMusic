import "./Input.css"

const Input = ({name, type, value, handleOnChange, id}) => {
    return <input name={name} id={id} type={type} className="input" value={value} onChange={handleOnChange} />
}
 
export default Input;