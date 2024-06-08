'use client'
import React, { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    setSubmitted(true);

   
    setName('');
    setEmail('');
    setMessage('');

    setTimeout(() => {
      setSubmitted(false);
      
      window.location.href = '/'; 
    }, 2000); 
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contactez-nous</h1>
      {submitted ? (
        <p>Votre message a été envoyé avec succès. Vous allez être redirigé vers la page principale.</p>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="name" className={styles.label}>Nom:</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className={styles.input} 
          />
          <br />

          <label htmlFor="email" className={styles.label}>Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className={styles.input} 
          />
          <br />

          <label htmlFor="message" className={styles.label}>Message:</label>
          <textarea 
            id="message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            className={styles.textarea} 
          />
          <br />

          <button type="submit" className={styles.button}>Envoyer</button>
        </form>
      )}
    </div>
  );
}
