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
        {...item}
        // item={item} 
        // and we can use spread operator also 
        // Like previously we did that id=item.id
        // img=items.coverImg
        // So spread operator also works in the same way its assign the value to a variable and it doesnt passes the object
        // Now we are going to pass all these items in the form of an object rather writing each component separately
        // img={item.coverImg} 
        // rating={item.stats.rating} 
        // reviewCount={item.stats.reviewCount} 
        // country={item.location} 
        // title={item.title} 
        // price={item.price} 
        // spots={item.openSpots}
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