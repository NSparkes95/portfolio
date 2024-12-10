import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;