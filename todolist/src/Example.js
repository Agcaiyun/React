import React, { Fragment, useState } from 'react'

function Example() {
    const [count, setCount] = useState(10)

    return (
        <Fragment>
            <p>
                {
                    `You clicked ${count} times`
                }
            </p>

            <button onClick={() => setCount(count + 10)}>
                {
                    'Click me'
                }
            </button>
        </Fragment>
    )
}

export default Example;