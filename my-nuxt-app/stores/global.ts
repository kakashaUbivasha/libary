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
    },
});
