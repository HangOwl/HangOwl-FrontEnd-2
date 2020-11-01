import React from 'react';
import Card from '../components/BarCard/BarCardMatch';
import '../components/BarCard/BarCard.css';


function BarInfo () {
    return (
        <div>
             <h1 style={{color:'white'}}>Bar Name</h1>
                <div className="box2">
                    <div className="box3">
                        <div className="card_for_bar_info"></div>
                    </div>
                    <div className="box3">
                        <div className="card_for_bar_info"></div>
                    </div>
                    <div className="box3">
                        <div className="card_for_bar_info"></div>
                    </div>
                </div>

            <div className="bar_info">
            </div>
        </div> 
    );

}

export default BarInfo;