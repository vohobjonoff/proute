/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


export default function Navbar({login, setLogin}) {

    

  return (
      <div className="nav">
          <div className="logo">
              logo
          </div>
          <div className="list">
              <ul className="list1">
                  <Link to='/contact'>
                  <li className="item">contact</li>
                  </Link>
                  <Link to='/about'>
                  <li className="item">about</li>
                  </Link>
                  <Link to='/support'>
                  <li className="item">support</li>
                  </Link>
                  <Link to='/login'>
                      <button onClick={() => setLogin(!login)}>
                          {login ? 'out' : 'login'}
                  </button>
                  </Link>
              </ul>
          </div>
    </div>
  )
}
