import InstagramIcon from '../assets/icons/instagram.svg';
import LinkedInIcon from '../assets/icons/linkedin.svg';

// Usage in a component
function SocialLinks() {
  return (
    <div>
      <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <img src={InstagramIcon} alt="Instagram" />
      </a>
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        <img src={LinkedInIcon} alt="LinkedIn" />
      </a>
    </div>
  );
}
