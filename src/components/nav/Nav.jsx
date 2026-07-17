import NavLinks from "./NavLinks";

const Nav = (
    {
        links
    }
) => {
    return (
        <nav>
            <ul>
                { (links ?? []).map((o)=> {
                    return (<NavLinks
                        key={o.text}
                         text={o.text} 
                         href={o.href}
                         classNames={o.classNames ?? []} />);
                }) }
                <NavLinks text="Home" href="" classNames={[]} />
                <NavLinks text="About" href="" classNames={[]} />
                <NavLinks text="Sign In" href="" classNames={[]} />
            </ul>
        </nav>
    );
}

export default Nav;