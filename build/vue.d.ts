import createStore, { StateCreator, StoreApi, StoreMutatorIdentifier, Mutate } from "zustand/vanilla";
import * as Vue from "vue";
import { defineProxy, defineSet } from "./proxy";
export type ExtractState<S> = S extends {
    getState: () => infer T;
} ? T : never;
declare type Primitive = string | number | boolean | bigint | symbol | Date | Error;
type TIsFunction<T> = T extends Function ? T : T extends Primitive ? Vue.Ref<T> : Vue.UnwrapNestedRefs<T>;
type WithVue<S extends StoreApi<unknown>> = S & {
    getServerState?: () => ExtractState<S>;
};
export type UseBoundStore<S extends WithVue<StoreApi<unknown>>> = {
    (): TIsFunction<ExtractState<S>>;
    <U>(selector: (state: ExtractState<S>) => U, equals?: (a: U, b: U) => boolean): TIsFunction<U>;
} & S;
export type Create = {
    <T, Mos extends [StoreMutatorIdentifier, unknown][] = []>(initializer: StateCreator<T, [], Mos>): UseBoundStore<Mutate<StoreApi<T>, Mos>>;
    <T>(): <Mos extends [StoreMutatorIdentifier, unknown][] = []>(initializer: StateCreator<T, [], Mos>) => UseBoundStore<Mutate<StoreApi<T>, Mos>>;
    <S extends StoreApi<unknown>>(store: S): UseBoundStore<S>;
};
export type TObject = Record<string, any>;
export type TSubscribeCache = Record<string, () => void>;
declare const create: Create;
export { createStore, StateCreator, StoreApi, create, defineProxy, defineSet, };
