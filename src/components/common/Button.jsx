import React from 'react'

const Button = ({ children, vari, className = "" }) => {
    const variants = {
        primary: " px-4 sm:px-5 md:px-5.75 py-2 sm:py-2.5 md:py-3.5 text-sm sm:text-base md:text-lg bg-orange text-off-gray-100 border border-transparent rounded-lg",
        Secondary: " text-sm sm:text-base md:text-lg text-off-gray-100 ",
        outline: " px-4 sm:px-5 md:px-5.75 py-2 sm:py-2.5 md:py-3.5 text-sm sm:text-base md:text-lg bg-transparent text-off-gray-100 border border-off-gray-100 rounded-lg",
        danger: " px-4 sm:px-5 md:px-5.75 py-2 sm:py-2.5 md:py-3.5 text-sm sm:text-base md:text-lg bg-transparent text-off-black border border-off-black rounded-lg",

    }

    return (
        <button
            className={`group relative isolate overflow-hidden font-medium leading-120 transition-all duration-500 cursor-pointer
                ${variants[vari]} ${className}
            `}
        >
            {vari === "primary" && (
                <span
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        z-0
                        origin-left
                        scale-x-0
                        bg-off-gray-100
                        transition-transform
                        duration-500
                        ease-out
                        group-hover:scale-x-100
                    "
                />
            )}

            {/* OUTLINE HOVER */}
            {vari === "outline" && (
                <span
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        z-0
                        origin-left
                        scale-x-0
                        bg-orange
                        transition-transform
                        duration-500
                        ease-out
                        group-hover:scale-x-100
                    "
                />
            )}

            {/* DANGER HOVER */}
            {vari === "danger" && (
                <span
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        z-0
                        origin-left
                        scale-x-0
                        bg-orange
                        transition-transform
                        duration-500
                        ease-out
                        group-hover:scale-x-100
                    "
                />
            )}

            {/* CONTENT */}
            <span
                className={`
                    relative
                    z-10
                    flex
                    items-center
                    justify-center

                    ${vari === "primary"
                        ? "transition-colors duration-300 group-hover:text-orange"
                        : ""
                    }

                    ${vari === "outline"
                        ? "transition-colors duration-300 group-hover:text-off-gray-100"
                        : ""
                    }

                    ${vari === "danger"
                        ? "transition-colors duration-300 group-hover:text-off-gray-100"
                        : ""
                    }

                    ${vari === "Secondary"
                        ? "gap-2.5 transition-colors duration-300 group-hover:text-orange"
                        : ""
                    }
                `}
            >
                {children}
            </span>
        </button>
    )
}

export default Button