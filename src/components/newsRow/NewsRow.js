import "./NewsRow.css";
import {Link} from "react-router-dom"

function NewsRow({ data }) {
  const {
    author,
    content,
    description,
    publishedAt,
    source,
    title,
    url,
    urlToImage,
  } = data;

  return (
    <Link to={`/${publishedAt}`} className="news-row-container">
      <div className="news-header">
        <h3 className="news-title">{title}</h3>
        {author ? <p className="news-author">{author}</p> : null}
        <p className="news-source">{source.name}</p>
      </div>
      {urlToImage ? (
        <img src={urlToImage} alt="news-img" className="news-img" />
      ) : (
        <img
          src="https://media.istockphoto.com/id/187925868/vector/newspaper-cover-page.jpg?s=612x612&w=0&k=20&c=SantJnFi_0dCOD_HUXgRSJxagvgL7Wp_F_e-rFSUV_E="
          alt="news-img"
          className="news-img"
        />
      )}
    </Link>
  );
}

export default NewsRow;
