import type { Component } from 'solid-js';

interface Props {
    onClick: () => void;
    children: string;
}

export const Button: Component<Props> = (props: Props) => {
    return (
        <button onClick={() => props.onClick()} class='text-white bg-blue-500 py-2 px-4 shadow border-[1px] border-white/10 border-solid hover:bg-blue-500/60' >
            {props.children}
        </button>
    )
}
