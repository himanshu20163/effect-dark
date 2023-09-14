import React, { useContext } from 'react'
import { mycontext } from './Mycontext'

const Themeheader = () => 
    {
    const mydata = useContext(mycontext);
    console.log(mydata[0]);
    return (
        <div>
            <p>I have changed theme to Light</p>
            <div style={{ backgroundColor: `${mydata[1]}`, color: `${mydata[0]}` }}>
                <a href="#">Geekster</a><br />
                <a href="#">Home</a>
                <a href="#">Contact</a>
                <a href="#">Service</a>
                <br />
                Our service are not available
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae quas aliquid necessitatibus eius voluptate expedita, sed esse, minus officia recusandae illo hic commodi aliquam officiis culpa sit, modi asperiores?
            </div>
        </div>
    )
}

export default Themeheader
