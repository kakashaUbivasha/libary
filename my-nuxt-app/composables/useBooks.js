// useBooks.js
export const useBooks = () => {
    const fetchRandomBooks = async () => {
        try {
            // Используйте свой API-ключ Google Books (получить его в Google Cloud Console)
            const apiKey = 'AIzaSyAcwU-p-csUT5UbMbRKBuss_N5jb4A4M0o';

            // Делаем запрос к Google Books API
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=book&langRestrict=ru&maxResults=40&key=${apiKey}`);
            const data = await response.json();

            if (!data.items || data.items.length === 0) {
                return [];
            }

            // Сортируем случайные 10 книг
            const randomBooks = data.items.sort(() => Math.random() - 0.5).slice(0, 10);

            return randomBooks.map(book => ({
                title: book.volumeInfo.title || 'Без названия',
                author: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Неизвестный автор',
                coverUrl: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null,
                id: book.id, // ID книги
            }));
        } catch (error) {
            console.error('Ошибка при получении книг:', error);
            return [];
        }
    };

    return { fetchRandomBooks };
};
