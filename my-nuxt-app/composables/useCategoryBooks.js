export const useCategoryBooks = async(category) => {
try{
    const apiKey = 'AIzaSyAcwU-p-csUT5UbMbRKBuss_N5jb4A4M0o'
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${category}&maxResults=40&key=${apiKey}`)
    if (!response.ok) {
        throw new Error(`Ошибка при получении данных о книге с ID: ${id}`);
    }
    const data = await response.json();
    return data.volumeInfo;
}
catch(err){
    console.log(err);
    return null;
}
}