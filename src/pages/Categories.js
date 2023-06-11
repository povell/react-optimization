import { useLocation } from 'react-router-dom';
import { useEffect, useState, useRef, useCallback } from 'react';
import CategoriesElement from '../components/CategoriesElement';
import { useSearchCategories } from '../hooks/useSearchCategories';

const Categories = () => {
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);
  const [pageNumber, setPageNumber] = useState(1);

  const {
    loading,
    error,
    data,
    hasMore,
  } = useSearchCategories(`https://rickandmortyapi.com/api${pathname}`, pageNumber);

  const observer = useRef();

  const lastNodeRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prev => prev + 1);
      }
    })

    if (node) {
      observer.current.observe(node);
    }
  },[loading, hasMore]);

  useEffect(() => {
    setPathname(location.pathname);
    setPageNumber(1);
  }, [location.pathname]);

  return (
    <div className='categories-list'>
      <ul>
        {data.map((el, index) => {
          if (data.length === index + 1) {
            return (
              <li ref={lastNodeRef} key={el.id}>
                  <CategoriesElement el={el} />
              </li>
            )
          } else {
            return (
              <li key={el.id}>
                  <CategoriesElement el={el} />
              </li>
            )
          }
        })}
      </ul>
      { loading && <div>Loading...</div> }
      { error && <div>Error</div> }
    </div>
  );
}

export default Categories;