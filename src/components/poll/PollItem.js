const PollItem = ({ text }) => {
    const handleBtn = (text) => alert(`You voted ${text}`)
    return (
        <div className="w-3/5 bg-white rounded-lg border shadow-md mb-4">
            <div className="p-4 bg-white rounded-lg md:p-8">
                <p className="mb-5 text-gray-500">
                   {text}
                </p>
                <div className="flex items-center justify-around">
                    <button
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                        onClick={() => handleBtn('Yes')}
                    >
                        Yes
                    </button>
                    <button
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                        onClick={() => handleBtn('No')}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PollItem;
