import React, { Fragment, useState } from 'react';

const List = ({items}) => {

    const [ eleSelected, setEleSelected ] = useState([]);
  
    const selectElement = element => {

        setEleSelected(eleSelected => [
            ...eleSelected,
            element
        ])
    }

    let cleanArray = [...new Set(eleSelected)]

    return ( 
        <Fragment>
            { eleSelected.length === 0 ? 
                <h2>Please select elements!</h2>
                : 
                <div>
                    <h2>ELEMENTS SELECTED</h2>
                    <div className="elements__container">
                        <ul className="List">
                            {cleanArray.map((item, index) => (
                            // Search in state 
                                <li 
                                    key={index} 
                                    className={`no__decoration List__item List__item--${item.color}`}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            }
            { eleSelected.length !== 0 ? <h2>Select more!</h2> : null}
            <ul className="List">
                {items.map(item => (
                // Search in state 
                    <li 
                        key={item.name} 
                        className={ eleSelected.includes(item) ? `isSelected List__item List__item--${item.color}` : `List__item List__item--${item.color}`}
                        onClick={() => selectElement(item)} 
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}
 
export default List;