import React, { Fragment, Suspense } from 'react';

export default function OtherComponent() {
    return (
        <Fragment>
            <h1>
                {'React.lazy learning when Components in one file...'}
            </h1>
        </Fragment>
    )
}

export function MyComponent() {
    const OtherComponent = React.lazy(() => import('./MyComponent'))

    return (
        <Fragment>
            <Suspense fallback={<div>{'Loading...'}</div>}>
                <OtherComponent />
            </Suspense>
        </Fragment>
    )
}


