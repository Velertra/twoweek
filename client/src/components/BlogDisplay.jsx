import { Link, NavLink } from "react-router-dom";
import jsonData from '../components/blog_posts.json';

const BlogDisplay = () => {
    return ( 
        <div className="blog-content">
            {jsonData.map((content, index) => (
                <div key={index}>
                    <h3>
                        <a href={'/article/' + content.blogTitle.slice(0, 14)}>{content.blogTitle}</a>
                    </h3>
                    <a href={'/article/' + content.blogTitle.slice(0, 14)}>
                        <img src={content.headerImage}></img>
                    </a>
                    <h6>by {content.author}{", "}{content.data}</h6>
                    <a href={'/article/' + content.blogTitle}>Read More</a>
                </div>
            ))}
        </div>
     );
}
 
export default BlogDisplay;