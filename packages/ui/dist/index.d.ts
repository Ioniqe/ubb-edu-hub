import React from 'react';

type Route = {
    name: string;
    route: string;
    iconName: string;
};

type WrapperProps = {
    title: string;
    routes: Route[];
    children: React.ReactNode;
};
declare const Wrapper: ({ title, routes, children }: WrapperProps) => JSX.Element;

declare enum Colors {
    MAIN_BLUE = "#162949",
    MAIN = "#F0F2F3",
    MAIN_LIGHT = "#F7F7F7",
    WHITE = "#FFFFFF",
    TEXT = "#8F9296",
    ACCENT_YELLOW = "#FFC37B",
    ACCENT_BLUE = "#5C97C4",
    ACCENT_SALMON = "#F47976",
    RED_TEST = "#670a07"
}

export { Colors, Route, Wrapper };
