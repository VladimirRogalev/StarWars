import React, {Component} from 'react';
import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import StarWars from "./StarWars.jsx";
import Contacts from "./Contacts.jsx";

class Switcher extends Component {
    render() {
        const {currentPage} = this.props;
        return (
            <div>
                <div>
                    {currentPage === 'Home' && <Home/>}
                    {currentPage === 'AboutMe' && <AboutMe/>}
                    {currentPage === 'StarWars' && <StarWars/>}
                    {currentPage === 'Contacts' && <Contacts/>}

               </div>
            </div>
        );
    }
}

export default Switcher;