// CardEmbed.jsx - Component to embed standalone profile card via iframe
import './CardEmbed.module.css';

const CardEmbed = () => {
  return (
    <div className="card-embed-container">
      <iframe
        src="https://muaishaq-profile-card.netlify.app"
        title="Muhammed Ishaq Profile Card"
        className="card-iframe"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default CardEmbed;