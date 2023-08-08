'use client';
import { createContext, useState, useEffect, useMemo } from "react";
import { ItemProps } from "@/components/item";

export interface contextInterface {
    items: ItemProps[];
    setItems: (items: ItemProps[]) => void;
    clearItems: () => void;
    markItemComplete: (id: number) => void;
    addItem: (item: ItemProps) => void;
    removeItem: (id: number) => void;
    updateItem: (id: number, item: ItemProps) => void;
    getItem: (id: number) => ItemProps | undefined;
};

export const Context = createContext<contextInterface>({
    items: [],
    setItems: () => {},
    clearItems: () => {},
    markItemComplete: () => {},
    addItem: () => {},
    removeItem: () => {},
    updateItem: () => {},
    getItem: () => { return { id: 0, title: "", description: "", completed: false } }
});

export const ContextProvider = ({ children } : {children:React.ReactNode}) => {
    const [items, setItems] = useState<ItemProps[]>([]);

    const clearItems = () => {
        setItems([]);
        if (typeof window !== 'undefined') {
            localStorage.setItem("items", JSON.stringify(items));
        }
    }
    const markItemComplete = (id: number) => {
        const item = getItem(id);
        if (item) {
            item.completed = true;
            updateItem(id, item);
        }
        if (typeof window !== 'undefined') {
            localStorage.setItem("items", JSON.stringify(items));
        }
    }
    const addItem = (item: ItemProps) => {
        setItems([...items, item]);
        if (typeof window !== 'undefined') {
            localStorage.setItem("items", JSON.stringify(items));
        }
    }
    const removeItem = (id: number) => {
        setItems(items.filter(item => item.id !== id));
        if (typeof window !== 'undefined') {
            localStorage.setItem("items", JSON.stringify(items));
        }
    }
    const updateItem = (id: number, item: ItemProps) => {
        const index = items.findIndex(item => item.id === id);
        items[index] = item;
        setItems([...items]);
        if (typeof window !== 'undefined') {
            localStorage.setItem("items", JSON.stringify(items));
        }
    }
    const getItem = (id: number) => {
        return items.find(item => item.id === id);
    }
    
    const context = useMemo<contextInterface> (()=> {
        return {
            items,
            setItems,
            clearItems,
            markItemComplete,
            addItem,
            removeItem,
            updateItem,
            getItem
        };
    }, [items]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const items = localStorage.getItem("items");
            if (items) {
                setItems(JSON.parse(items));
            }
        }
        console.log("Adding test item")
        addItem({ id: 1, title: "Test", description: "This is a test", completed: false });
    }, [])

    return (
        <Context.Provider value={context}>
            {children}
        </Context.Provider>
    )


};
