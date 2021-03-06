// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type Person = {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: string[],
    species: [],
    vehicles: string[],
    starships: string[],
    created: string,
    edited: string,
    url: string
}

export type ExtendedPerson = {
    id: string
} & Person

// State
export type People = Array<ExtendedPerson>
export type PeopleState = {
    data: People | null;
    isFetching: boolean
}

// Contracts
export type BaseContact<T = any> = CaseReducer<PeopleState, PayloadAction<T>>

