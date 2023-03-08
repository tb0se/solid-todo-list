import type { Component } from 'solid-js';
import { createEffect } from 'solid-js'
import { Button } from './Button';
import { Close } from '../assets';

interface Props {
    setShowModal: (state: boolean) => void;
    showModal: boolean;
    addTodo: (name: string) => void
}

export const AddTodo: Component<Props> = (props: Props) => {
    let dialogRef: HTMLDialogElement | undefined;
    let inputRef: HTMLInputElement | undefined;

    createEffect(() => {
        if (dialogRef && props.showModal) {
            dialogRef.showModal();
        }

    }, [props.showModal]);

    function handleClick() {
        if (inputRef && inputRef.value !== '' && dialogRef) {
            props.addTodo(inputRef.value);
            inputRef.value = '';
            dialogRef.close();
        }
    }

    function closeDialog(e: Event) {
        if (e.currentTarget === e.target && dialogRef) {
            dialogRef.close();
        }
    }

    return (
        <dialog ref={dialogRef} onClose={() => props.setShowModal(false)} onClick={closeDialog} class='w-full sm:max-w-[500px] h-full sm:h-fit p-0 shadow-xl rounded-lg' >
            <article onClick={(e) => e.stopPropagation} class='flex flex-col justify-center gap-10 w-full h-full bg-cyan-500 p-8 relative'>
                <header class='flex justify-center w-full'>
                    <h2 class='text-white text-2xl'>Add a new item</h2>
                </header>
                <input ref={inputRef} class='w-full h-[35px] p-2' />
                <Button onClick={handleClick}>Save</Button>
            </article>
            <img onClick={closeDialog} class='h-[25px] w-[25px] cursor-pointer absolute top-4 right-4' src={Close} alt='close' />
        </dialog>
    )
}
