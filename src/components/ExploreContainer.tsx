import { Link } from 'react-router-dom';
import './ExploreContainer.css';
import download from "../components/download.jpeg"

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <>
   <div className='navbar'>
 <button className='link'>contact</button>
 <button className='link'>About</button>
 <button className='link'>Service</button>
 <button className='link'>Portfolio</button>
  </div>
  <div className='secondiv'>
    <img className='image' src={download}/>
    <p></p>
    <div>
      <img className='image' src={download}/>
      <p>Executive Director at <strong>Sphere Bio Tech</strong></p>
    </div>
    <div>
      <img/>
      <p>Palo Alto,California</p>
    </div>
  </div>
  <hr/>
  <button className='attach'>Link With Me</button>
  <hr/>
  </>
  );
};

export default ExploreContainer;
