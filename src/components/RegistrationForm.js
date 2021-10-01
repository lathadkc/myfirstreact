import React, { useState } from 'react'
import './style.css'

function RegistrationForm() {
    
    const [username, setUsername] = useState("jo")
    const [errors, setErrors] = useState({username:"userNameError",emailid:"emailiderror",mobileno:"mobilenoerror",password:"passwordError"})
    const [emailid, setEmailid] = useState("a@gmail.com");
    // const [mobileno, setMobileno] = useState(111111);
    const [mobileno, setMobileno] = useState("1111");
    
    const [password, setPassword] = useState("123");
    function submituserRegistrationForm(e) {
        e.preventDefault();
        const vf = validateForm();
        console.log(vf);
        alert("Form submitted");
        console.log("within submitUser");
    }
    
    function validateForm() {
console.log("withn validateForm");
        
        // let errors = {};
        let formIsValid = true;
  setErrors({});
        if (!username) {
          formIsValid = false;
        //   errors["username"] = "*Please enter your username.";
        setErrors({...errors,username:"*Please enter your username."})
        }
        if (typeof username !== "undefined") {
            alert("usernamedefined");
            if (!username.match(/^[a-zA-Z ]*$/)) {
              formIsValid = false;
               
              setErrors({...errors,username: "*Please enter alphabet characters only."})
            }
          }
          if(!emailid) {
              alert("enteremailid");
              formIsValid = false;
              setErrors({...errors,emailid:"*Please enter your email-ID."})
          }
          if(typeof emailid !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            alert("emailiddefined");
            if (!pattern.test(emailid)) {
                formIsValid = false;
                
                setErrors({...errors,emailid:"*Please enter valid email-ID."});
              }

          }

          if (!mobileno) {
            formIsValid = false;
            setErrors({...errors,mobileno:"*Please enter your mobile no."})
          }
    
          if (typeof mobileno !== "undefined") {
              alert("mobilenldefined")
            if (mobileno.match(/^[0-9]{10}$/)) {
                console.log("ifmobileno");
              formIsValid = true;
              
            }
            else{
                console.log("elsemobileno");
               formIsValid = false;
               setErrors({...errors,mobileno: "*Please enter valid mobile no of 10 digits."})

            }
          }
    
          if (!password) {
            formIsValid = false;
            setErrors({...errors,password:"*Please enter your password."})
          }
    
          if (typeof password !== "undefined") {
            if (!password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
              formIsValid = false;
              setErrors({...errors,password:"*Please enter secure and strong password."})
            }
          }


        return formIsValid;
    }
  
   
    const handleChangeUserName = (e) => {
        setUsername(e.target.value)
    }
    const handleChangeEmailId = (e) => {
        setEmailid(e.target.value)
    }
    const handleChangeMobileNo = (e) => {
        setMobileno(e.target.value);
    }
    
    const handleChangePassword = (e) => {
        setPassword(e.target.value)    ;
    }
    
    return (
        
        <div id="main-registration-container">
        <div id="register">
            <h3>RegistrationPage</h3>
            <form method="post"  name="userRegistrationForm"  onSubmit= {submituserRegistrationForm} >
            <label>Name</label>
        <input type="text" name="username" value={username} onChange={handleChangeUserName} />
        <div className="errorMsg">{errors.username}</div>
        <label>Email ID:</label>
        <input type="text" name="emailid" value={emailid} onChange={handleChangeEmailId}  />
       {emailid} <div className="errorMsg">{errors.emailid}</div>
        
        <label>Mobile No:</label>
        <input type="text" name="mobileno" value={mobileno} onChange={handleChangeMobileNo}   />
        <div className="errorMsg">{errors.mobileno}</div>

        <label>Password</label>
 
        <input type="password" name="password" value={password} onChange={handleChangePassword} />
        <div className="errorMsg">{errors.password}</div>
        <input type="submit" className="button"  value="Register"/>


        </form>
 
        </div>
        </div>
    )
}

export default RegistrationForm
