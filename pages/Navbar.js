import React from 'react';
import Link from 'next/link'
import Header from './Header'
import { Button } from 'react-bootstrap'
import Head from 'next/head'

export default function App() {
    return(
        <div> 
            <ul >
                <li><Link  href="/"><a>Home</a></Link></li>
                <li><Link  href="/About"><a>ABOUT</a></Link ></li>
                <li><Link  href="/Catalogue"><a>CATALOGUE</a></Link ></li>
                <li><Link  href="/Shop"><a>SHOP</a></Link ></li>
                <li><Link  href="/Arrivals"><a>NEW ARRIVALS</a></Link ></li>
                <li><Link  href="/Contact"><a>CONTACT</a></Link ></li>
            </ul>
        </div>
    )
}