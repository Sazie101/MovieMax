
function Gallery(props) {
    return (
      <div className="gallery">
        {props.images.map((url, index) => (
          <img key={index} src={url} alt={`Gallery image ${index + 1}`} />
        ))}
      </div>
    );
}
  
export default Gallery;

