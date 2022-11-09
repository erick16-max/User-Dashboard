import React from "react";
import Header from "../components/Header";
import PollItem from "../components/poll/PollItem";

const Poll = () => {
    const polls = [
        {
            title: "Do you get water? Do you get water? Do you get water? Do you get water?",
        },
        {
            title: "Is power reliable?",
        },
        {
            title: "Are the road systems ok?",
        },
        {
            title: "Is Ruto good?",
        },
        {
            title: "Should the construction continue?",
        },
    ];
    return (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white">
            <Header title="Poll" category="" />
                {polls.map((item, i) => (
                    <PollItem key={i} text={item.title} />
                ))}
            
        </div>
    );
};

export default Poll;
