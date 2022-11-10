import { useContext } from "react";
import { BiUpvote, BiDownvote, BiMessageAlt } from "react-icons/bi";
import Moment from 'react-moment';
import AppContext from "../../context/Context";

const ForumItem = ({ data }) => {
    return (
        <div className="w-3/4 bg-white rounded-lg border shadow-md mb-4">
            <div className="p-4 bg-white rounded-lg md:p-8">
                <div className="flex items-center justify-between mb-2">
                    <div class="flex items-center space-x-4">
                        {/* <img
                            class="w-10 h-10 rounded-full"
                            src={`https://avatars.dicebear.com/api/adventurer/jeseleos.svg`}
                            alt=""
                        /> */}
                        
                        <div class="font-medium flex ">
                            <h4 className="text-gray-500 ">Posted by <span className=""> {data.username}</span> </h4>  
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                    <Moment fromNow>
                        {data.created}
                    </Moment>
                            
                    </p>
                </div>
                <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-gray-900">
                    {data.title}
                </h2>
                <p className="mb-3 text-gray-500">{data.text}</p>
                <div className="flex items-center justify-around">
                    <ActionBtn Icon={BiUpvote} />
                    <ActionBtn Icon={BiDownvote} />
                    <ActionBtn Icon={BiMessageAlt} />
                </div>
            </div>
        </div>
    );
};

const ActionBtn = ({ Icon }) => {
    // const {tokens} = useContext(AppContext)

    //     const getCommentsCount = async() => {
    //             const response = await fetch(`http://127.0.0.1:8000/api/forum/5/count-comments`,{
    //                 method:"GET",
    //                 headers: {
    //                   "Authorization": "Bearer " + String(tokens.access)
    //                 }
    //               })
              
    //               const data = await response.json()
    //               console.log(response);
    //     }
    return (
    
        <button
            type="button"
            className="inline-flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
            
        >
            <Icon className="w-6 h-6 mr-3" />
            <span className="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                1
            </span>
        </button>
    );
}

export default ForumItem;
