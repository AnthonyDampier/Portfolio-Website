import './Portfolio.css';
import { useState } from 'react';

function Portfolio(){

    //state of each block with one set to true. 
    const [expandOne, setExpandOne] = useState(false);
    const [expandTwo, setExpandTwo] = useState(false);
    const [expandThree, setExpandThree] = useState(true);
    const [expandFour, setExpandFour] = useState(false);

    const expandClick = (id) => {
        //console.log(id);
        // resets expanded block to original states
        resetExpansion();
        //switch state based on users selection
        switch (id) {
            case '1':
                console.log(id);
                setExpandOne(true);
                break;
            case '2':
                console.log(id);
                setExpandTwo(true);
                break;
            case '3':
                console.log(id);
                setExpandThree(true);
                break;
            case '4':
                console.log(id);
                setExpandFour(true);
                break;
        }
    }

    //resets all block fields to their base state
    const resetExpansion = () => {
        setExpandOne(false);
        setExpandTwo(false);
        setExpandThree(false);
        setExpandFour(false);
    }


    return(
        <div id='portfolio-background'>
            <div id='portfolio'>
                <div
                    className={expandOne ? 'block expanded' : 'block condensed'}
                    id='1' 
                    onClick={(event) => expandClick(event.target.id)}
                    >
                    <h4>Feedback Quiz</h4>
                    <p>React, JavaScript, HTML, CSS, SQL, Node.js, MUI Icons, Postgres, Postman, et cetera</p>

                </div>
                <div  
                    className={expandTwo ? 'block expanded' : 'block condensed'}
                    id='2' 
                    onClick={(event) => expandClick(event.target.id)}>
                    <h4>Prime Pizza</h4>
                    <p>React, JavaScript, HTML, CSS, SQL, Node.js, MUI Icons, Postgres, Postico, & Git</p>
                </div>
                <div  
                    className={expandThree ? 'block expanded' : 'block condensed'}
                    id='3'
                    onClick={(event) => expandClick(event.target.id)}>
                    <h4>Gamify</h4>
                    <p>React, JavaScript, HTML, CSS, User Authentication, & Twilio API</p>
                </div>
                <div  
                    className={expandFour ? 'block expanded' : 'block condensed'}
                    id='4' 
                    onClick={(event) => expandClick(event.target.id)}>
                    <h4>Client</h4>
                    <p>React, JavaScript, HTML, CSS, SQL, Node.js, MUI Icons, Postgres, Postman, et cetera</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
