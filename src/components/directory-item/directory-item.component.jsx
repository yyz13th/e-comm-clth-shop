import './directory-item.styles.scss';
import { Link } from 'react-router-dom';

const DirectoryItem = ({category}) => {

    const {imageUrl, title} = category;

  return (
    <div className="directory-item-container">
      <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className="directory-item-body">
          <Link to={`shop/${title}`}>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </Link>
      </div>
    </div>
  )
}

export default DirectoryItem;