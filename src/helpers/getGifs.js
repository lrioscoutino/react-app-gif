export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=JIkC1pScCtKQ9jqIaJGJNpyRGlNCk8WF&q=${category}&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();
    //console.log(data);
    const gifs = data.map( img => {
        return{
            id: img.id,
            url: img.images.downsized_medium.url,
            title: img.title
        }
    })
    //response.then(response => response)
    // console.log(gifs);
    
    return gifs;
}
