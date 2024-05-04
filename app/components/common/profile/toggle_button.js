
const ToggleButton = ({ text1, text2, activeTab, setActiveTab }) => {

    return (
        <div>
            <div className="flex my-4 bg-dark_text rounded-lg w-fit">
                <button
                    className={`rounded-lg px-3 md:px-8 py-3 text-white text-sm md:text-lg font-medium ${activeTab == 1 ? "bg-primary" : "bg-black"
                        }`}
                    onClick={() => setActiveTab(1)}
                >
                    {text1}
                </button>
                <button
                    className={`rounded-lg px-3 md:px-8 py-3 text-white text-sm md:text-lg font-medium ${activeTab == 2 ? "bg-primary" : "bg-black"
                        }`}
                    onClick={() => setActiveTab(2)}
                >
                    {text2}
                </button>
            </div>
        </div>
    );
}

export default ToggleButton;