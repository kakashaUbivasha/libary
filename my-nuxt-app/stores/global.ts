import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
    state: () => ({
        count: 0,
        items: [],
        isAuthenticated: false,
    }),
    actions: {
        increment() {
            this.count++;
        },
        async searchBooks(keyword: string) {
            try {
                const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(keyword)}&maxResults=40`)
                const data = await response.json();
                console.log(`items:`,data)
                this.items = data.items?.map((item: any) => ({
                    id: item.id,
                    title: item.volumeInfo.title,
                    author: item.volumeInfo.authors?.join(", ") || 'Автор неизвестен',
                    imageLink: item.volumeInfo.imageLinks?.thumbnail||""

                }))||[];
            }
            catch(error) {
                console.log(error);
            }
        }
    },
});
