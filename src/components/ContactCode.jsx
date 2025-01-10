import styles from '../styles/ContactCode.module.css';

const contactItems = [
  // {
  //   social: 'website',
  //   link: 'Itzfeminisce.dev',
  //   href: 'https://Itzfeminisce.dev',
  // },
  {
    social: 'email',
    link: 'rofesol.ng@gmail.com',
    href: 'mailto:rofesol.ng@gmail.com',
  },
  {
    social: 'github',
    link: 'Itzfeminisce',
    href: 'https://github.com/Itzfeminisce',
  },
  {
    social: 'linkedin',
    link: '@Itzfeminisce',
    href: 'https://www.linkedin.com/in/Itzfeminisce/',
  },
  // {
  //   social: 'twitter',
  //   link: 'Itzfeminisce',
  //   href: 'https://www.x.com/Itzfeminisce',
  // },
  // {
  //   social: 'instagram',
  //   link: 'Itzfeminisce',
  //   href: 'https://www.instagram.com/Itzfeminisce',
  // },
  // {
  //   social: 'tiktok',
  //   link: '@Itzfeminisce',
  //   href: 'https://www.tiktok.com/Itzfeminisce',
  // },
  // {
  //   social: 'telegram',
  //   link: 'Itzfeminisce',
  //   href: 'https://t.me/Itzfeminisce',
  // },
  {
    social: 'facebook',
    link: '@Itzfeminisce',
    href: 'https://facebook.com/Itzfeminisce',
  },
  // {
  //   social: 'warpcast',
  //   link: 'Itzfeminisce',
  //   href: 'https://warpcast.com/Itzfeminisce',
  // },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>:root</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
