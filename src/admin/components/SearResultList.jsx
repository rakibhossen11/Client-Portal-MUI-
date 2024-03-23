import React from 'react';

const SearResultList = ({results}) => {
    return (
        <div>
            {results.map((result,id) => {
                return(
                    <SearResultList result={result.name} key={id} />
                )
            })}
        </div>
    );
};

export default SearResultList;