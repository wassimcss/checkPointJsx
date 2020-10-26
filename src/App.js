
import './App.css';
import imageInSrc from './imageInSrc.jpg'
import myVideo from './myVideo.mp4'
import './style.css'

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
        <h1 className="title red">Your name here</h1>
        <br />
        <img src={imageInSrc} alt="berg" />
          <br />
          <img src="/imageInPublic.jpg" alt="volcano" />
      </div>
          <video className='red'  width="320" height="240" controls>
            <source src={myVideo} type="video/mp4" />
          </video>
    </div>
  );
}

export default App;
