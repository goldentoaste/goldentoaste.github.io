
import { writable, type Writable } from "svelte/store";

export enum PageState {
    NoTransition,
    NeedTransition,
    Transitioning,
    ReadyToNav
}

export const pageState: Writable<PageState> = writable(PageState.NoTransition);
export const navDest: Writable<string> = writable('');


let state = PageState.NeedTransition;
pageState.subscribe((val)=>{
    state = val;
})
export function finishOutro(){
    if (state === PageState.Transitioning){
        pageState.set(PageState.ReadyToNav)
    }
}