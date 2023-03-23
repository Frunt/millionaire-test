import './App.css';
import hand from './assets/img/hand 1.svg'
import { NavLink, useParams } from 'react-router-dom';

function App() {
  const { money } = useParams();
  
  return (
    <div className={`App${money ? ' end' : ''}`}>
      <img src={hand} alt="" />
      {!money && <div className="triangle-topleft"></div>}
      <header className='text-holder'>
        {money ?
          <>
            <span className='total'>Total score:</span>
            <h1>${money} earned</h1>
          </> : 
          <h1>Who wants to be a millionaire?</h1>
        }
        <NavLink to='/game' className='btn'>{money ? 'Try again' : 'Start'}</NavLink>
      </header>
    </div>
  );
}

export default App;
