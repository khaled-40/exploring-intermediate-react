import React from 'react';

const Link = ({route}) => {
    return (
        <li className="mr-10 px-4 hover:bg-amber-400 w-full"><a href={route.path}>{route.name}</a></li>
    );
};

export default Link;