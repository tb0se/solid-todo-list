import type { Component } from 'solid-js';
import { Delete, Check } from '../assets';


interface Props {
  index: number;
  name: string;
  done: boolean;
  onDone: (done: boolean) => void;
  onRemove: (index: number) => void;
}

export const Todo: Component<Props> = (props: Props) => {


  return (
    <div class='flex w-full max-w-[600px] p-4 border-t-[1px] border-solid border-white'>
      <p classList={{ 'text-lg text-white': true, 'line-through': props.done }}>{props.name}</p>
      <div class='flex gap-2 ml-auto'>
        <img onClick={() => props.onDone(true)} class='h-[25px] w-[25px] cursor-pointer' src={Check} alt='done' />
        <img onClick={() => props.onRemove(props.index)} class='h-[25px] w-[25px] cursor-pointer' src={Delete} alt='delete' />
      </div>
    </div>
  )
}
