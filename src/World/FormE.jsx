import React, { useState } from 'react'

function FormE() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mess, setMess] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name} ${email},${mess}` );
        setName("");
        setEmail("");
        setMess("");
      }
  return (
    <form onSubmit={handleSubmit} id="formS" className='formS'>
         <div className="containerForm">
	<div className="row">
			<h1 className='contacme'>Contact me</h1>
	</div>
	<div className="row">
			<h4 className='idlike' >I'd like to hear from you!</h4>
	</div>
	<div className="row input-container">
			<div className="col-xs-12">
				<div className="styled-input wide">
					<input type="text" required  value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
					<label>Name</label> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input wide">
					<input type="text" required value={email}
                      onChange={(e) => setEmail(e.target.value)} />
					<label>Email</label> 
				</div>
			</div>
			
			<div className="col-xs-12">
				<div className="styled-input wide">
					<textarea required value={mess}
                      onChange={(e) => setMess(e.target.value)}>

                      </textarea>
					<label>Message</label>
				</div>
			</div>
			
            <div className="con-btn" >
            <div className="skills-list">
            <a href="#" className="fa fa-instagram"></a>
            <a href="#" className="fa fa-twitter"></a>
            <a href="https://co.linkedin.com/" className="fa fa-linkedin"></a>
            <a href="#" className="fa fa-google"></a>
            <a href='#' className="fa fa-github"></a>
        </div>
            <input className="btn-lrg submit-btn" type="submit" value="Send" />
            
            
			</div> 
            
	</div>
</div>
    </form>

    
   

  )
}

export default FormE