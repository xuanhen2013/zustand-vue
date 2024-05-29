import { StoreApi } from "zustand/vanilla";
import { TSubscribeCache, TObject } from "./vue";
export declare const executeEqualityFn: <T, S>(nextState: T, previousState: T, selection?: (state: T) => S, equalityFn?: (a: S, b: S) => boolean) => boolean;
export declare function defineProxy<T, S>(store: S, subscribeCache: TSubscribeCache, api: StoreApi<T>, selection?: (state: T) => S, equalityFn?: (a: S, b: S) => boolean): object;
export declare function defineSet<T extends TObject, S>(rootState: T, observableStore: T, subscribeCache: TSubscribeCache, api: StoreApi<T>, selection: (state: T) => S, equalityFn?: (a: S, b: S) => boolean): T | S;
export declare const defineReactive: <T, S>(store: S, subscribeCache: TSubscribeCache, api: StoreApi<T>, selection?: (state: T) => S, equalityFn?: (a: S, b: S) => boolean) => void;
