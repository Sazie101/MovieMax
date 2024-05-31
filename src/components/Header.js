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
              <li><a href="/filter">Filter</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
