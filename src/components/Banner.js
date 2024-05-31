function Banner({ title, text, primaryBtnText, secondaryBtnText }) {
    return (
      <div className="banner">
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="buttons">
          <button className="btn primary">{primaryBtnText}</button>
          <button className="btn secondary">{secondaryBtnText}</button>
        </div>
      </div>
    );
  }
  
  export default Banner;