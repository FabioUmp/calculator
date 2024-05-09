"use client"
import React from "react"

const defaultButtonClasses = "border-2 text-white font-semibold py-3 px-4 rounded-md transition duration-200"

export const Button = ({
    label,
    onClick,
    active,
    highlight
}: {
    label: string,
    onClick: () => void
    active: boolean,
    highlight: boolean
}) => {
    const background = highlight ? "bg-white-500 border-2 border-black-100 text-black hover:bg-white-600" : "bg-blue-500 hover:bg-blue-600"

    return (
        <button
            type="button"
            onClick={onClick}
            className={
                active ? `${defaultButtonClasses} bg-green-800` : defaultButtonClasses + " " + background
            }>
            {label}
        </button>
    )
}