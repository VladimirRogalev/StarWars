import React, {Component} from 'react';

class Header extends Component {
    render() {
        const { changePage } = this.props;
        return (
            <header>
                <nav className="fixed-top mt-1 ms-5">
                    <ul className="nav">
                        <li className="nav-item btn btn-danger mx-1" onClick={() => changePage('Home')}>Home</li>
                        <li className="nav-item btn btn-danger mx-1" onClick={() => changePage('AboutMe')}>About me</li>
                        <li className="nav-item btn btn-danger mx-1" onClick={() => changePage('StarWars')}>Star Wars</li>
                        <li className="nav-item btn btn-danger mx-1" onClick={() => changePage('Contacts')}>Contact</li>
                    </ul>
                </nav>
                <h1 className="text-center py-4">Luke Skywalker</h1>

            </header>

        );
    }
}

export default Header;