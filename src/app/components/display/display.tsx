import React from 'react';

const Display = ({
    currentValue
}: {
    currentValue: null | string
}) => {
    return (
        <div
            className="bg-gray-200 text-gray-800 text-2xl px-4 py-3 rounded-md shadow-sm overflow-hidden whitespace-nowrap flex items-end justify-end w-full"
        >
            {currentValue || "0"}
        </div>
    )
}

export default React.memo(Display);
