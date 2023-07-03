import { ReactNode } from "react";

interface ListProps<T> {
    items: T[],
    render: (item: T) => ReactNode
}

// There are two ways to present a generic to TS
//     1. <T extends {}>
//     2. <T,>

const List = <T,>({ items, render }: ListProps<T>) => {
    return (
        <ul>
            {items.map((item, i) => (
                <li key={i}>
                    {render(item)}
                </li>
            ))}
        </ul>
    );
};

export default List;