import React from 'react';

const ListBabyNames = (props) => { 
    return (
        <div className='allBabyNames'>
            {props.babyNames
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((data, index)=> (
                <p key={index} className={data.sex}>{data.name}</p>)
                )
            }
        </div>
    )
}

export default ListBabyNames;