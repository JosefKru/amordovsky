import './Header.scss'

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <h1 className='logo'>AM.</h1>
        <nav>
          <ul>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
            <li>
              <a href='#lang'>Rus</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
