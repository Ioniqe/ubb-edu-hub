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

export { Wrapper };
