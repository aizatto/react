import React from 'react';
interface Props extends Omit<React.HTMLProps<HTMLElement>, "title"> {
    eventKey: string;
    title: React.ReactNode;
    href?: string;
    render?: () => JSX.Element | null;
}
export declare function Tab(props: Props): JSX.Element;
export {};
//# sourceMappingURL=Tab.d.ts.map