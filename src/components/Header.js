import { Component } from "react";

class Header extends Component {
  render() {
    const { title } = this.props;
    return (
      <header>
        <div className="container head">
          <h1>{title}</h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
