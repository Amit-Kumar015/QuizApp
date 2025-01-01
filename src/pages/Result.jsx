import React from "react";
import { Link } from "react-router-dom";

export const Result = ({ points }) => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div className="justify-center items-center">
                <div className="text-5xl font-serif [@media(max-width:430px)]:text-3xl">Congratulations</div>
                <div className="text-center mt-4">
                <span className="text-xl">You scored: </span>
                <span className="text-xl font-bold">{points}/10</span>
                </div>
                <div className="text-center mt-4">
                <Link to="/">
                    <button className="w-40">Play Again</button>
                </Link>
                </div>
            </div>
        </div>
    )
}