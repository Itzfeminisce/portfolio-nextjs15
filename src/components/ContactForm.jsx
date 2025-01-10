"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import styles from '../styles/ContactPage.module.css';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(50, 'Name must be 50 characters or less'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required').max(100, 'Subject must be 100 characters or less'),
  message: z.string().min(1, 'Message is required').max(500, 'Message must be 500 characters or less'),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const submitForm = async (data) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      alert('Your response has been received!');
      reset();
    } else {
      alert('There was an error. Please try again in a while.');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
      <div className={styles.flex}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register('name')}
          />
          {errors.name && <span className={styles.error}>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register('email')}
          />
          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
        </div>
      </div>
      <div>
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          {...register('subject')}
        />
        {errors.subject && <span className={styles.error}>{errors.subject.message}</span>}
      </div>
      <br />
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
        ></textarea>
        {errors.message && <span className={styles.error}>{errors.message.message}</span>}
      </div>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
