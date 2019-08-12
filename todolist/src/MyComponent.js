import React, { Fragment, Suspense } from 'react';

function MyComponent() {
    const OtherComponent = React.lazy(() => import('./OtherComponent'))

    return (
        <Fragment>
            <Suspense fallback={<div>{'Loading...'}</div>}>
                <OtherComponent />
            </Suspense>
        </Fragment>
    )
}

export default MyComponent;


