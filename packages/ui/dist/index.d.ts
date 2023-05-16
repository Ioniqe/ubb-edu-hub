import React from 'react';

declare const Button: () => JSX.Element;

declare const Header: ({ text }: {
    text: string;
}) => JSX.Element;

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

export { Button, Header, Wrapper };
