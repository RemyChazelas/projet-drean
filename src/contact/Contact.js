import React from 'react';
import './Contact.css';
function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="contact__box">
                    <div className="contact__meta">
                        <p className="hire__text ">Je suis disponible pour du freelance. Connectez-vous avec moi par téléphone :</p>
                        <p className="hire__text "><strong>+33 66 66 66 66</strong> or email <strong>admin@example.com</strong></p>
                    </div>
                    <div className="input__box">
                        <input type="text" className="contact name" placeholder="Nom *" />
                        <input type="text" className="contact email" placeholder="Email *" />
                        <input type="text" className="contact subject" placeholder="Sujet" />
                        <textarea name="message" id="message" placeholder="Ecrivez votre message"></textarea>
                        <button className="btn contact pointer" type="submit">envoyer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact