'use client'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './Contact.module.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name.trim()) {
      setErrors(prevErrors => ({ ...prevErrors, name: 'Le nom est requis' }));
      return;
    }
    if (!email.trim()) {
      setErrors(prevErrors => ({ ...prevErrors, email: 'L\'email est requis' }));
      return;
    }
    if (!message.trim()) {
      setErrors(prevErrors => ({ ...prevErrors, message: 'Le message est requis' }));
      return;
    }

    // Envoi de l'e-mail via EmailJS avec les scopes nécessaires
    emailjs.send('service_q1btomi', 'template_d8hggxb', {
      from_name: name,
      from_email: email,
      message: message
    }, {
      user_id: 'vC8OVZ_k6bvBQQFX7', // Remplacez par votre identifiant utilisateur EmailJS
      gmail: {
        scopes: 'https://www.googleapis.com/auth/gmail.send'
      }
    })
      .then((result) => {
        console.log('Email envoyé avec succès:', result.text);

        // Envoi de la réponse automatique
        emailjs.send('service_q1btomi', 'template_d33nOIh', {
          to_name: name,
          to_email: email,
          message: message
        }, 'vC8OVZ_k6bvBQQFX7') // Remplacez par votre identifiant utilisateur EmailJS
          .then((response) => {
            console.log('Réponse automatique envoyée avec succès:', response.text);
          })
          .catch((error) => {
            console.error('Erreur lors de l\'envoi de la réponse automatique:', error.text);
          });

        // Réinitialisation du formulaire et de l'état local
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
        setErrors({});
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi de l\'e-mail:', error.text);
        setErrors({ submit: 'Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer plus tard.' });
      });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contactez-nous</h1>
      {submitted ? (
        <p>Votre message a été envoyé avec succès.</p>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="name" className={styles.label}>Nom:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${styles.input} ${errors.name && styles.error}`}
          />
          {errors.name && <p className={styles.errorText}>{errors.name}</p>}
          <br />

          <label htmlFor="email" className={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${styles.input} ${errors.email && styles.error}`}
          />
          {errors.email && <p className={styles.errorText}>{errors.email}</p>}
          <br />

          <label htmlFor="message" className={styles.label}>Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${styles.textarea} ${errors.message && styles.error}`}
          />
          {errors.message && <p className={styles.errorText}>{errors.message}</p>}
          <br />

          {errors.submit && <p className={styles.errorText}>{errors.submit}</p>}

          <button type="submit" className={styles.button}>Envoyer</button>
        </form>
      )}
    </div>
  );
}
