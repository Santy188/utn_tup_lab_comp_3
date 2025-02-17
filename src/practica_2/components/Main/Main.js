import BlogPost from "../BlogPost/BlogPost"
import Body from "../Body/Body"

import "./main.css"

const Main = ({pageBody, link1, link2, pagePhrase}) => {
  return (
    <div>
      <div className="main">
        < Body body = {pageBody}/>
      </div> 
        < BlogPost/>
        <nav>
            <ul>
                <li><a href={link1}>Google</a></li>
                <li><a href={link2}>Mi GitHub</a></li>
            </ul>
        </nav>
        <p>{pagePhrase}</p>
    </div>
  )
}

export default Main