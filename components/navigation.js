import Layout from './layout'
import Container from './container'
import Link from 'next/link'

export default class Navigation extends React.Component{

  state = {
    menuToggle: 'not-active'
  }

  toggleMenuState = (e) => {
    const toggle = this.state.menuToggle === 'not-active' ? 'active' : 'not-active'
    this.setState({
      menuToggle: toggle
    })
  }

  render(){
    return(
      <nav className="main-navigation pt-1 pb-1 shadow-lg z-50 bg-black fixed w-full">
        <div className="flex flex-row">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
            <Link href="/">
              <a className="hover:underline text-white">Sh*tboxSpeaker.</a>
            </Link>
          </h2>
          <div className="menu-button" onClick={this.toggleMenuState}>
            <p className="text-white">menu</p>
          </div>
        </div>
        {/* <div className={`${this.state.menuToggle}`}>
          <Container>
            <Link href="/music">
              Music
            </Link>
          </Container>
        </div> */}

      </nav>
    )
  }
}
