import React, { useRef, useState } from 'react';
import { debounce } from 'lodash';

import ProtoButton from '../protoButton';

const ProtoSearchBar = ({
  placeholder = 'Rechercher un nom, un SIRET, une adresse',
  defaultValue = '',
  debounceRate = 100,
  small = false,
}) => {
  const [focus, setFocus] = useState(false);
  const searchInput = useRef(null);
  const [searchTerm, setSearchTerm] = useState(null);

  const onChange = debounce(() => {
    if (!searchInput || !searchInput.current) {
      return;
    }
    setSearchTerm(searchInput.current.value);
  }, debounceRate);

  return (
    <>
      <div id="proto-search-wrapper">
        <div className={`search-bar ${focus ? 'focus' : ''}`}>
          <input
            placeholder={placeholder}
            onChange={onChange}
            type="text"
            ref={searchInput}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            defaultValue={defaultValue}
          />
        </div>
        <div className="button">
          <ProtoButton href={`/proto/search/${searchTerm || ''}`} small={small}>
            Lancer la recherche
          </ProtoButton>
        </div>
        <style jsx>{`
          #proto-search-wrapper {
            max-width: 550px;
            width: 100%;
            display: flex;
          }
          input[type='text'] {
            font-size: ${small ? '0.9rem' : '1.1rem'};
            background-color: #fff;
            width: 100%;
            border: 2px solid #ccc;
            border-radius: 0;
            display: flex;
            transition: border-color 300ms ease-in-out;
            line-height: ${small ? '30px' : '40px'};
            padding: 0 10px;
            margin: 0;
          }

          input[type='text']:focus {
            border-color: #000091;
            outline: none;
          }

          .search-bar {
            flex-grow: 1;
          }

          .button {
            flex-shrink: 0;
          }
        `}</style>
      </div>
    </>
  );
};

export default ProtoSearchBar;
