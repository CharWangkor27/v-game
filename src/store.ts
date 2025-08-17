import { create } from 'zustand';

interface BookQuery{
  categoryId? : number;
  sortOrder? : string;
  searchText?: string;
}

interface BookQueryStore{
bookQuery: BookQuery;
setSearchText: (searchText: string)=>void;
setCategoryId: (categoryId: number)=>void;
setSortOrder: (sortOrder: string)=>void;
}

const useBookQueryStore = create<BookQueryStore>((set) => ({
    bookQuery: {},
    setSearchText: (searchText: string) =>
        set((store) => ({
            bookQuery: { ...store.bookQuery, searchText },
        })),
    setCategoryId: (categoryId: number) =>
        set((store) => ({
            bookQuery: { ...store.bookQuery, categoryId },
        })),
    setSortOrder: (sortOrder: string) =>
        set((store) => ({
            bookQuery: { ...store.bookQuery, sortOrder },
        })),
}));

export default useBookQueryStore;