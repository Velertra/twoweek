import jsonData from '../components/blog_posts.json'

const LeaderBoards = () => {
  const twitterHtml = `
  <blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">1ST FNCS GRANDS W BEST PLAYER <a href="https://twitter.com/Merstach?ref_src=twsrc%5Etfw">@Merstach</a> ($170.000) 🏆<br><br>LETS FUCKING GOOOOOOOOOOOOOOOOOOOOOOOO <a href="https://t.co/MquN7e1zbZ">pic.twitter.com/MquN7e1zbZ</a></p>&mdash; GXR Malibuca (@MalibucaFN) <a href="https://twitter.com/MalibucaFN/status/1761866606366392506?ref_src=twsrc%5Etfw">February 25, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    `;
    
    
    return (
        <div className="App">
          {jsonData.map(item => (
            <div key={item.title}>
              <h2>{item.title}</h2>
              <img src={item.headerImage} alt="Header" />
              <div>
                {/* {item.content.map((paragraph, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                ))} */}
                <div></div>
                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
              </div>
            </div>
          ))}
        </div>
      );
}
 
export default LeaderBoards;