import style from './Input.module.css'


const Input = ({placeholder, onChange}) => {



    return (
        <>
            <form>

                <input className={style.input} placeholder={placeholder} onChange={onChange}  />

            </form>


        </>

        )

};


export default Input;