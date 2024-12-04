import Features from "../components/Features";
import Hero from "../components/Hero";
import Patterns from "../components/patterns"
import Navbar from "../components/navbar";

export default function Home(){
    return (
        <div className="mx-auto container">
            <Navbar/>
            <Hero/>
            <Features/>
            <Patterns/>

        </div>
    )
}