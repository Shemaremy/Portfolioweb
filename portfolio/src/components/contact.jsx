import React from "react";
import '../App.css';


function Contact () {
    return (
        <div className="form-container">
            <h2>Contact us</h2>
            <form action="">
                <input type="text" name="" id="" placeholder="Enter your username" required/>
                <input type="text" name="" id="" placeholder="Enter your Email" required/>
                <textarea name="" id="" placeholder="Enter your message" required></textarea>
                <button>Send Message</button>
            </form>
        </div>
    )
}

export default Contact