// useBooks.js
export const useBooks = () => {
    const fetchRandomBooks = async () => {
        try {
            const response = await fetch('https://openlibrary.org/search.json?q=book&language=rus&limit=20&fields=title,author_name,cover_i');
            const data = await response.json();
            if (!data.docs || data.docs.length === 0) {
                return [];
            }

            // Сортируем случайные 10 книг
            const randomBooks = data.docs.sort(() => Math.random() - 0.5).slice(0, 10);

            return randomBooks.map(book => ({
                title: book.title,
                author: book.author_name?.join(', ') || 'Неизвестный автор',
                coverUrl: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : null
            }));
        } catch (error) {
            console.error('Ошибка при получении книг:', error);
            return [];
        }
    };

    return { fetchRandomBooks };
};
