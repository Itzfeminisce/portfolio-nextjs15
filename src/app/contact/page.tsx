import ContactForm from '../../components/ContactForm';
import ContactCode from '../../components/ContactCode';
import styles from '../../styles/ContactPage.module.css';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Contact Me",
  description: "Contact Me",
  
}
const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Say Hi 😇</h3>
        <ContactCode />
      </div>
      <div>
        <h3 className={styles.heading}>Let's talk business 📅</h3>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;

