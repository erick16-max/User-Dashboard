import React from "react";
import Header from "../components/Header";

import { BiUpvote, BiDownvote, BiCommentDetail } from "react-icons/bi";
import "./Forums.css";
import ForumItem from "../components/forums/ForumItem";

const Forum = () => {
    const allContent = [
        {
            title: "Water shortage",
            name: "Joan Munde",
            topic: "shortage of water",
            description:
                "water has been an issue, we lack water it is has been one week now",
        },
        {
            title: "Water",
            name: "Mollen Munde",
            topic: "shortage of kibandas",
            description:
                "water has been an issue, we lack water it is has been one week now",
        },
        {
            title: "Water",
            name: "Angela Munde",
            topic: "shortage of electricity",
            description:
                "water has been an issue, we lack water it is has been one week now",
        },
    ];

    return (
        <div className="my-3 px-8">
            <div className="mx-5">
                <Header title="Forums" category="" />
            </div>
            {allContent.map((item, i) => (
                <ForumItem data={item} key={i} />
            ))}
        </div>
    );
};
export default Forum;
