import { Link, NavLink } from "react-router-dom";
import jsonData from '../components/blog_posts.json';

const BlogDisplay = () => {
    return ( 
        <>
            
            {jsonData.map((content, index) => (
                <div key={index}>
                    <h3><a href={'/article/' + content.blogTitle}>{content.blogTitle}</a></h3>
                    <a href={'/article/' + content.blogTitle}><img src={content.headerImage}></img></a>
                    <h6><a href="">{content.blogTitle.author}{content.blogTitle.data}</a></h6>
                    <a href={'/article/' + content.blogTitle}>Read More</a>
                </div>
                
            ))}
        </>
     );
}
 
export default BlogDisplay;