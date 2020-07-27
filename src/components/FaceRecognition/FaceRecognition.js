import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' alt = '' src={imageUrl} width='500px' height='auto'/>            
                <div 
                    className='bounding-box' 
                    style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
                        <div className="bounding-box-concepts">
                            <div className="concept bounding-box__concept" title={`${box.name} (${box.id}) : ${box.value}`}>
                                <span className="concept__name">{box.name}</span>
                                <span className="concept__prediction-val">{box.value}</span>
                            </div>
                        </div>
                </div>

            </div>
            
        </div>
    );
}

export default FaceRecognition;