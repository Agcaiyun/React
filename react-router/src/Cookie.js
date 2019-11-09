import React from 'react';
import Cookies from 'js-cookie';

export default function CookieFun() {
    Cookies.set('name', 'ssasfe', { expires: 2 })
    Cookies.set('infos', { 'name': 'agcaiyun', 'age': 18, 'sex': 'girl' })
    console.log(Cookies.getJSON())


    return (
        <div>
            234
        </div>
    )
}