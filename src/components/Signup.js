import React from "react";

const Signup = () => {
    return (
        <div className="signup">
            <input type="text" name="email" placeholder="Email"/>
            <br></br>
            <input type="text" name="password" placeholder="password"/>
            <br></br>
            <input type="text" name="firstname" placeholder="First Name"/>
            <br></br>
            <input type="text" name="lastname" placeholder="Last Name"/>
            <br></br>
            <textarea name="desc" placeholder="Tell us about yourself "/>
            <br></br>
            <button>Register</button>
            <br></br>
            <a href="/">Login here</a>
        </div>
    );
}

export default Signup;