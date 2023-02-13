
import { writable, type Writable } from "svelte/store";


export enum PageState {
    NoTransition,
    NeedTransition,
    Transitioning,
    ReadyToNav
}

export const pageState: Writable<PageState> = writable(PageState.NoTransition);
export const navDest: Writable<string> = writable('');

