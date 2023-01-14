import React from "react";
import Hero from "./Hero"
import Navbar from "./Navbar"
import data from "./data";
import Card from "./Card";

export default function App(){
    const content=data.map(item => {
        return (
        <Card 
        img={item.coverImg} 
        rating={item.stats.rating} 
        reviewCount={item.stats.reviewCount} 
        country={item.location} 
        title={item.title} 
        price={item.price} 
        />
        )
    })

    return (
        <div>
            <Navbar/>
            <Hero/>
            {content}
        </div>
    )
}