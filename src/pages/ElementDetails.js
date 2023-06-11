import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchItem } from '../hooks/useSearchItem';

const ElementDetails = () => {
  const location = useLocation();

  const {
    data,
  } = useSearchItem(`https://rickandmortyapi.com/api${location.pathname}`);
  
  const getJSX = (key) => {
    if (typeof data[key] === 'object' || Array.isArray(data[key]) ) {
      return;
    }
    if (key === 'image') {
      return (
        <img key={key} src={data[key]} alt={data.name ? data.name : ''} />
      );
    }
    return (
      <div key={key}>
        {key}: {data[key]}
      </div>
    );
  }

  return (
    <div className="element-details">
      {Object.keys(data).map((key) => getJSX(key, data))}
    </div>
  )
}

export default ElementDetails;