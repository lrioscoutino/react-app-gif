import { useFetchGifs } from "../hooks/useFetchGifs";
import GifItem from "./GifItem";


export const GifGrid = ({category}) => {
    // const [images, setImages] = useState([]);
    // Esto se quita para agregar un Hook llamado useFetchGifs    
    /*  const getImages = async() =>{
      const newImages = await getGifs( category );
      setImages (newImages);
    }
    useEffect( () => {
      getImages();

    }, []);
 */

  const {images, isLoading} = useFetchGifs(category);
  return (
    <>
     <h2>{category}</h2>
     { isLoading && (<h2> Cargando .....</h2>) }
     <div className="card-grid">
      {
        //Desesctructurar la image con image = {id, title, url}
        images.map( (image) =>(
          <GifItem 
          key={image.id}
          {...image} // Esta linea esparce los props el contenido del arreglo de image
          />
        ))
        
      }
     </div>
    </>
  )
}

