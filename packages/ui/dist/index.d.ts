import React from 'react';
import * as zustand from 'zustand';
import { Theme, PaletteMode } from '@mui/material';

type Route = {
    name: string;
    route: string;
    iconName: string;
};

type WrapperProps = {
    title: string;
    customBaseRoute: string;
    customRoutes: Route[];
    standardRoutes: Route[];
    children: React.ReactNode;
};
declare const Wrapper: ({ title, customBaseRoute, customRoutes, standardRoutes, children, }: WrapperProps) => JSX.Element;

declare enum Colors {
    MAIN_BLUE = "#162949",
    MAIN_BLUE_LIGHT = "#30599f",
    MAIN = "#F0F2F3",
    MAIN_LIGHT = "#F7F7F7",
    WHITE = "#FFFFFF",
    TEXT = "#8F9296",
    ERROR = "#F24141",
    RED_TEST = "#670a07",
    RED_TEST_LIGHT = "#9f4b49",
    MAIN_BLUE_CB = "#212C4A",
    MAIN_BLUE_LIGHT_CB = "#3A599D",
    MAIN_CB = "#F5F0F2",
    MAIN_LIGHT_CB = "#FBF5FA",
    TEXT_CB = "#929094",
    ERROR_CB = "#8F8356",
    ACCENT_PURPLE = "#CE77F2",
    ACCENT_SALMON = "#F47976",
    ACCENT_BLUE = "#5C97C4",
    ACCENT_BLUE_LIGHT = "#8DD1E1",
    ACCENT_YELLOW = "#FFC37B"
}

type ThemeStore = {
    theme: Theme;
    colorMode: PaletteMode;
    switchColorMode: () => void;
};
declare const useAppTheme: zustand.UseBoundStore<zustand.StoreApi<ThemeStore>>;

type MultiSelectProps = {
    label: string;
    options: string[];
    selectedOptions: string[];
    setSelectedOptions: (option: string[]) => void;
};
declare const MultiSelect: ({ label, options, selectedOptions, setSelectedOptions, }: MultiSelectProps) => JSX.Element;

type SelectProps = {
    label: string;
    options: string[];
    selectedOption: string;
    setSelectedOption: (option: string) => void;
};
declare const SimpleSelect: ({ label, options, selectedOption, setSelectedOption, }: SelectProps) => JSX.Element;

type CardProps = {
    label: string;
    labelColor: string | null;
    children: React.ReactNode;
};
declare const Card: ({ label, labelColor, children }: CardProps) => JSX.Element;

type BoardProps = {
    labelColor: string | null;
    children: React.ReactNode;
    label?: string;
};
declare const Board: ({ label, labelColor, children }: BoardProps) => JSX.Element;

declare const LoadingScreen: () => JSX.Element;

export { Board, Card, Colors, LoadingScreen, MultiSelect, Route, SimpleSelect, Wrapper, useAppTheme };
