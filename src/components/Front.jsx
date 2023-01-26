import React from "react";
import ReactTypingEffect from 'react-typing-effect';

function Front(){
    return(
        <>
            <div className="front-head">
            <ReactTypingEffect
                text={["<> I am Kushagra Shukla </>", "<> I am a Full Stack Web Developer </>" , "<> I love Software Engineering </>" , "< Hire Me !..... />"]}
                cursorRenderer={cursor => <h1>{cursor}</h1>}
                displayTextRenderer={(text, i) => {
                return (
                    <h1 className="text-center" style={{fontWeight : "700"}}>
                    {
                        text.split('').map((char, i) => {
                        const key = `${i}`;
                        return (
                        <span
                            key={key}
                                style={i%3 === 0 ? { color: 'black'} : { color : 'blue'}}>
                            {char}
                        </span>
                        );
                        })}
                    </h1>
                );
                }}        
            />
            <br/>
            <h3 className="text-center m-4 p-4">Download Resume/CV</h3>
            <h2 className="text-center m-4 p-3"><a href="https://drive.google.com/file/d/1Hdn4JuPstrSQR1UmXoC7oZgcYvQ11Ona/view?usp=sharing" className="text-decoration-none"><i className="fa fa-solid fa-download"/></a></h2>
            </div>
        </>
    );
}
export default Front;