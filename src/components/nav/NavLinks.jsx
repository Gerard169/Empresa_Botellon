const NavLinks = (
    {
        text,
        href,
        classNames
    }
) => {
    return (
        <li>
            <a href={href} className={["navlink", ...classNames].join(' ')}>
                {text}
            </a>
        </li>
    );
};

export default NavLinks;