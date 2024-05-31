function Gallery(props) {
    return (
      <div className="gallery">
        {props.images.map((url, index) => (
          <img key={index} src={url}/>
        ))}
      </div>
    );
}

export default Gallery;

