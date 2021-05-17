import {useState, useEffect} from "react"

export default () => {

    const [tiempo, setWeather] = useState(null);
    
    useEffect(() => {
       
        fetch('https://www.el-tiempo.net/api/json/v2/provincias/08', {
          method: "GET",
          headers: {
          Accept: "application/json",
          },
        })

        .then(data => data.json())
        .then(data => setWeather(data.ciudades[6].stateSky.description)); 

    }, []); 
    

    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-light bg-light py-1">
          <p id="weather" className="weather">Avui: {tiempo} </p>
        </nav>
      </header>
    );
};