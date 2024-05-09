"use client"
import React from "react"

const defaultButtonClasses = "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-md transition duration-200"

export const Button = ({
    label,
    onClick,
    active
}: {
    label: string,
    onClick: () => void
    active: boolean
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={
                active ? `${defaultButtonClasses} bg-green-800` : defaultButtonClasses
            }>
            {label}
        </button>
    )
}