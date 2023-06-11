import { useLocation, useNavigate } from 'react-router-dom';

const CategoriesElement = ({ el }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const clickElementHendler = () => {
    navigate(`${location.pathname}/${el.id}`, {state: el} );
  };

  return (
    <div 
    key={el.id}
    className={'categories-list_item'}
    onClick={clickElementHendler}
    >
      {el.name}
    </div>
  );
}

export default CategoriesElement;