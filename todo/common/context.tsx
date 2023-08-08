'use client';
import { createContext, useState, useEffect, useMemo } from "react";
import { ItemProps } from "@/components/item";

export interface contextInterface {
    items: ItemProps[];
    setItems: (items: ItemProps[]) => void;
    clearItems: () => void;
    markItemComplete: (id: number) => void;
    addItem: (title : string, description : string) => void;
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
    }
    const markItemComplete = (id: number) => {
        const item = getItem(id);
        if (item) {
            item.completed = true;
            updateItem(id, item);
        }
    }
    const addItem = async (title : string, description : string) => {
        const item : ItemProps = {
            id: items.length + 1,
            title: title,
            description: description,
            completed: false
        }
        setItems([...items, item]);
    }
    const removeItem = (id: number) => {
        setItems(items.filter(item => item.id !== id));
    }
    const updateItem = (id: number, item: ItemProps) => {
        const index = items.findIndex(item => item.id === id);
        items[index] = item;
        setItems([...items]);
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
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            console.log("In use effect, setting items to " + JSON.stringify(items));
            localStorage.setItem("items", JSON.stringify(items));
        }

    }, [items])

    return (
        <Context.Provider value={context}>
            {children}
        </Context.Provider>
    )


};
