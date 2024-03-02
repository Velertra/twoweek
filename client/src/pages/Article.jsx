import jsonData from "../components/blog_posts.json"
import { useParams } from "react-router-dom"

const Article = () => {
    const { articleId } = useParams()

    return (
        <div className="App">
          {jsonData.map((text, index) => (
            <div key={index}>
            {(text.blogTitle).includes(articleId) ? 
            <>
            <h2>{text.blogTitle}</h2>
            <img src={text.headerImage} alt="Header" />

              {text.content1.map((content, index) => (
                <div key={index}>
                  <h3>{content.title}</h3>
                  <p>{content.paragraph}</p>
                </div>
              ))}
              <img src={text.img1}></img>
              {text.content2 ? text.content2.map((content, index) => (
                  <div key={index}>
                    <h3>{content.title}</h3>
                    <p>{content.paragraph}</p>
                  </div>
                )) : null}
              {text.img2 ? <img src={text.img2}></img> : null}
              {text.content3 ? text.content3.map((content, index) => (
                  <div key={index}>
                    <h3>{content.title}</h3>
                    <p>{content.paragraph}</p>
                  </div>
                )) : null}
              {text.img3 ? <img src={text.img3}></img> : null}
            </>
        : 
        null}
            </div>  
          ))}
        
      </div>
     );
}
 
export default Article;