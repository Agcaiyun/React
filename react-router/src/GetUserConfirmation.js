import React from 'react'
import { Prompt } from 'react-router'
import { BrowserRouter, Link } from 'react-router-dom';

export default function GetUserConfirmation() {
    return (
        <BrowserRouter
        // basename={'/home'}
        // getUserConfirmation={() => { console.log('getUserConfirrmation') }}
        >
            <div>
                <form>

                    <Prompt
                        when={true}
                        message={'Are you sure to leave'}
                    />
                    {/* <Link to={'/test'}>ceshi</Link>
                <Route path={'/test'} component={Test} /> */}
                </form>
            </div>
        </BrowserRouter>
    )
}

