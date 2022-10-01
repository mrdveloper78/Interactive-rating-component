import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from '../../Context/Context';
import './score.css';




const Score = () => {

    const [num,setNum] = useState();

    const {hide, registerRate, rate} = useContext(MainContext);

    return (
        <section>
            <div className="score__content">
                <div className="score__star">
                    <span className='score__circle-bg'><svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg></span>
                </div>

                <div className="score__desc">
                    <h3>How did we do?</h3>
                    <p>
                        Please let us know we did with your support request.All feedback is appreciated to help us improve our offering!
                    </p>
                </div>

                <div className="score__icon">
                    <ul>
                        <li><span className={rate===1?'active':'score__circle-bg'} onClick={()=>registerRate(1)}>1</span></li>
                        <li><span className={rate===2?'active':'score__circle-bg'} onClick={()=>registerRate(2)}>2</span></li>
                        <li><span className={rate===3?'active':'score__circle-bg'} onClick={()=>registerRate(3)}>3</span></li>
                        <li><span className={rate===4?'active':'score__circle-bg'} onClick={()=>registerRate(4)}>4</span></li>
                        <li><span className={rate===5?'active':'score__circle-bg'} onClick={()=>registerRate(5)}>5</span></li>
                    </ul>
                </div>

                <div className="score__submit">
                    
                    <button className='score__btn' onClick={()=>hide()} >SUBMIT</button>
                    
                </div>
            </div>
        </section>
    )
}

export default Score;
