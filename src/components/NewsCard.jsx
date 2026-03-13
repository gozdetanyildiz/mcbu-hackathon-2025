const NewsCard = ({ title, description, imageUrl, link }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-4">{title}</h3>
          <p className="text-lg mb-6">{description}</p>
          <a href={link} className="text-primary font-semibold hover:text-light">Devamını oku</a>
        </div>
      </div>
    );
  };
  
  export default NewsCard;
  