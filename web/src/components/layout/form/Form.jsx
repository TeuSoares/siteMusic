import "./Form.css"

const Form = ({text, msg, buttonFlex, contents, submit, classMsg, formRef}) => {
    return ( 
        <>
            <div className="container-form">
                <div className="container-box">
                    <div className="painelControl">
                        <h1 className="title-h1-form">{text}</h1>
                        <form encType="multipart/form-data" ref={formRef} onSubmit={submit} id="form" className="form" method="POST">
                            {contents}
                            <div className="button-flex">{buttonFlex}</div>
                            <span className={classMsg}>{msg}</span>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Form;