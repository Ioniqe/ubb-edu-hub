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
    ACCENT_YELLOW = "#FFC37B",
    ACCENT_BLUE = "#5C97C4",
    ACCENT_SALMON = "#F47976",
    RED_TEST = "#670a07",
    RED_TEST_LIGHT = "#9f4b49"
}

type ThemeStore = {
    theme: Theme;
    colorMode: PaletteMode;
    switchColorMode: () => void;
};
declare const useAppTheme: zustand.UseBoundStore<zustand.StoreApi<ThemeStore>>;

export { Colors, Route, Wrapper, useAppTheme };
