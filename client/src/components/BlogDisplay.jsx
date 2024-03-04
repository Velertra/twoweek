import { Link, NavLink } from "react-router-dom";
import jsonData from '../components/blog_posts.json';

const BlogDisplay = () => {
    return ( 
        <div className="hp-content">
            {jsonData.map((content, index) => (
                <div className="hp-content-card" key={index}>
                    <div className="hp-content-img">
                        <a href={'/article/' + content.blogTitle.slice(0, 14)}>
                            <img src={content.headerImage}></img>
                        </a>
                    </div>
                    <div className="hp-content-details">
                        <h4>
                            <a href={'/article/' + content.blogTitle.slice(0, 14)}>{content.blogTitle}</a>
                        </h4>
                        <h6>by {content.author}{", "}{content.data}</h6>
                        <a href={'/article/' + content.blogTitle}>Read More</a>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default BlogDisplay;