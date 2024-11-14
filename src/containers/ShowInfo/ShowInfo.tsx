import { useEffect, useState } from "react";
import { Show } from "../../types";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShowInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [show, setShow] = useState<Show>();

  useEffect(() => {
    const getShowInfo = async () => {
      const response = await axios.get(`http://api.tvmaze.com/shows/${id}`);
      setShow(response.data);
    };
    getShowInfo();
  }, [id]);

  return (
    <div className="container d-flex gap-3 mx-0 mt-4">
      <div>
        <img
          src={show?.image?.medium}
          alt={show?.name}
          className="rounded rounded-2"
        />
      </div>
      <div>
        <h2 className="text-danger"> {show?.name}</h2>
        <h5>Rating: {show?.rating.average}</h5>
        <span>
          <b>Genres: {show?.genres.join(", ")}</b>
        </span>
        <span dangerouslySetInnerHTML={{ __html: show?.summary || "" }}></span>
      </div>
    </div>
  );
};

export default ShowInfo;
