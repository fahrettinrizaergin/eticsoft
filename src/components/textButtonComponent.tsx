import React from "react";
import {Link} from "react-router-dom";

interface TextButtonComponentProps {
    children?: JSX.Element | string;
    href?: string;
    text: string;
    onClick?: () => void;
    state?: object;
}

const TextButtonComponent: React.FC<TextButtonComponentProps> = ({
                                                                     onClick,
                                                                     href = "#",
                                                                     text,
                                                                     children = null,
                                                                     state
                                                                 }) => {
    const [dropdownVisiblity, setDropdownVisiblity] = React.useState(false);
    const onMouseEnter = () => {
        setDropdownVisiblity(true);
    };
    const onMouseLeave = () => {
        setDropdownVisiblity(false);
    };

    return (
        <>
            {href !== "#" && (
                <Link
                    className="bg-transparent rounded p-1 hover:text-yellow-500"
                    onClick={onClick}
                    to={href}
                    state={state}
                >
                    {text}
                </Link>
            )}
            {href === "#" && (
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className="bg-transparent rounded p-1 hover:text-yellow-500"
                    onClick={onClick}
                >
                    {dropdownVisiblity && href === "#" && children !== null && (
                        <div className="absolute mt-5 bg-white border text-black border-gray-200 rounded p-2">
                            {children}
                        </div>
                    )}
                    {text}
                </div>
            )}
        </>
    );
};

export default TextButtonComponent;
