import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { Show } from '../../types';
import { Link } from 'react-router-dom';
import { deleteResult, getShows, setInput } from './SearchToolSlice.ts';
import * as React from 'react';


const SearchTool = () => {
  const dispatch = useAppDispatch();
  const { input, result } = useAppSelector((state) => state.search)
const [autocomplete, setAutocomplete] = React.useState<boolean>(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setInput(value));

    if (value.trim() !== '') {
      dispatch(getShows(value));
      setAutocomplete(true);
    } else {
      dispatch(deleteResult());
      setAutocomplete(false);
    }
  }

return (
    <div className="px-3 d-flex gap-3">
      <span>Search for a TV Show:</span>
      <div className="position-relative">
      <input
      type="text"
      className="search-input form-control"
      value={input}
      onChange={onChange}/>
      {autocomplete && (
        <div className="bg-light p-2 rounded border border-2 border-light-subtle d-flex flex-column gap-2 position-absolute w-100">
          {result.map((show:Show) => (
            <Link
            to={`/shows/${show.id}`}
            key={show.id}
            onClick={() => setAutocomplete(false)}
            className="text-dark link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
              {show.name}
            </Link>
          ))}
        </div>
      )}
        </div>
    </div>
  )
}

export default SearchTool;