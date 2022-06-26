import React from 'react';
interface HeaderProps{
    tabItems: string[],
    setCurrentTab(menu: string): any
};

class NavBar extends React.PureComponent<HeaderProps>{
    constructor(props: HeaderProps){
        super(props);
    }
    render(): React.ReactNode {
        const{tabItems, setCurrentTab} = this.props;
        return(
            <ul className='d-inline-flex'>
            {tabItems.map(menu => 
                <li className='d-inline m-3' onClick={() => setCurrentTab(menu)}>{menu}</li>
            )}
            </ul>
        );
    }
}
export default NavBar;