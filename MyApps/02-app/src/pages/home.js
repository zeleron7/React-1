import React, {useState, useEffect} from "react";
import musicService from '../services/music-group-service';

export function Home() {

  const [wapiInfo, setWapiInfo] = useState();

  useEffect(() => {
    //equvalent to componentDidMount
  
    //package the async in an async iffy
    //Immediately-Invoked Function Expressions (IIFE), pronounced "iffy"
    //(async () => {})()
    (async () => {
      console.log('componentDidMount');
      
      const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
      const info = await service.readInfoAsync();
      setWapiInfo(info);
    })();
  }
  , []);

  return (
    <div className="container px-4 py-4" id="webapi-info">
      <h2 className="pb-2 border-bottom">Home Page</h2>
      <p>Below you see an overview of the content presented by the WebApi. Click on the link to see details. </p>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4 py-5">
        <div className="col d-flex align-items-start">
          <div>
            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Music groups</h3>
            <p>{wapiInfo?.nrSeededMusicGroups}</p>
            <a href="#list-of-friends" className="btn btn-primary">
              See details
            </a>    
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div>
            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Albums</h3>
            <p>{wapiInfo?.nrSeededAlbums}</p>
            <a href="#list-of-friends" className="btn btn-primary">
              See details
            </a>    
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div>
            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Artists</h3>
            <p>{wapiInfo?.nrSeededArtists}</p>
            <a href="#list-of-friends" className="btn btn-primary">
              See details
            </a>    
          </div>
        </div>
      </div>
    </div>
  )
}
