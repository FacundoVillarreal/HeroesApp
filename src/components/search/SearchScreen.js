import React, { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/gerHeroesByName';
import { HeroCard } from '../heroe/HeroCard';
import queryString from 'query-string';
const SearchScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);
    const [inputValue, setInputValue] = useState(q);

    const heroFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${inputValue}`)
    }

    return (
        <div className='container'>
            <h1>Search Screen</h1>
            <hr />

            <div className='row p-1'>
                <div className='col-5'>
                    <h4>Search Form</h4>
                    <hr />

                    <form className='d-flex m-1 flex-column' onSubmit={handleSearch}>
                        <input
                            type={'text'}
                            placeholder={'Find your hero'}
                            className={'form-control'}
                            defaultValue={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button
                            type='submit'
                            className='btn btn-block btn-outline-primary mt-2'
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className='col-7'>
                    <h4 className='text-center'>Results</h4>
                    <hr />
                    {
                        q !== '' && heroFiltered.length === 0
                        &&
                        <div className='alert alert-danger'>
                            There is no a hero with {q}
                        </div>

                    }
                    {
                        heroFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchScreen