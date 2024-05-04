import {FiSearch} from "react-icons/fi";

const SearchInput = ({className, wrapperClassName, value, onChange, placeholder}) => {
    return (
        <div className={`relative mr-2    ${wrapperClassName || ''}`}>
            <div className="flex relative">
            <input
                className={`form-input ${className || ''}`}
                value={value} onChange={onChange} placeholder={placeholder || 'Search'}/>
                <div className="h-[44px] w-[44px] flex justify-center items-center bg-[#186F65] rounded absolute right-0">
                <FiSearch className=" text-white" size={15}/>
                </div>
                </div>
            {/* <FiSearch className="absolute top-3 left-2.5 text-gray-500"/> */}
        </div>

    )
}
export default SearchInput