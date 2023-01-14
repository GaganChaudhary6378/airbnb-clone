import React from "react";
import Hero from "./Hero"
import Navbar from "./Navbar"
import data from "./data";
import Card from "./Card";

export default function App(){
    const content=data.map(item => {
        return (
        <Card 
        key={item.id} //thats because for ignore the warning that each should have a different key
        img={item.coverImg} 
        rating={item.stats.rating} 
        reviewCount={item.stats.reviewCount} 
        country={item.location} 
        title={item.title} 
        price={item.price} 
        spots={item.openSpots}
        />
        )
    })

    return (
        <div>
            <Navbar/>
            <Hero/>
            <section className="cards-list">{content}</section>
        </div>
    )
}