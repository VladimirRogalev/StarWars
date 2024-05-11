import React, {Component} from 'react';
import friend1 from '../Images/friend1.jpg';
import friend2 from '../Images/friend2.jpg';
import friend3 from '../Images/friend3.jpg';
import friend4 from '../Images/friend4.jpg';
import friend5 from '../Images/friend5.jpg';
import friend6 from '../Images/friend6.jpg';
import friend7 from '../Images/friend7.jpg';
import friend8 from '../Images/friend8.jpg';
import friend9 from '../Images/friend9.jpg';

// import IMAGES from "../utils/constants.js";

class DreamTeam extends Component {

    render() {
        // const images = [];
        // for (let i = 1; i <= 9; i++) {
        //     images.push(import(`../Images/friend${i}`))
        // }
        return ( // TODO fix images 2:27:00  well done
            <section className="float-end w-50 row border mx-1">
                <h2 className="col-12 text-center">Dream Team</h2>
                {/*{images.map((key, index) => (*/}
                {/*    <img key={index} className={'col-4 p-1'} src={key} alt={index+1}/>*/}
                {/*))}*/}
                <img className="col-4 p-1" src={friend1} alt="friend"/>
                <img className="col-4 p-1" src={friend2} alt="friend"/>
                <img className="col-4 p-1" src={friend3} alt="friend"/>
                <img className="col-4 p-1" src={friend4} alt="friend"/>
                <img className="col-4 p-1" src={friend5} alt="friend"/>
                <img className="col-4 p-1" src={friend6} alt="friend"/>
                <img className="bottom-left col-4 p-1" src={friend7} alt="friend"/>
                <img className="col-4 p-1" src={friend8} alt="friend"/>
                <img className="bottom-right col-4 p-1" src={friend9} alt="friend"/>
            </section>
        );
    }
}

export default DreamTeam;