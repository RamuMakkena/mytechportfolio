import * as React from 'react';
import NavBar from '../NavBar';
interface HeaderProps{
    tabItems: string[],
    setCurrentTab(menu : string): any
};
class Header extends React.PureComponent<HeaderProps>{

    render () {
        
        const {tabItems,  setCurrentTab} = this.props;
        return(
            <div className='justify-content-between'>
                <h1 className='d-inline'>Ramu Makkena</h1>
                <NavBar tabItems={tabItems}  setCurrentTab={setCurrentTab}/>
            </div>
        );
    }
}

export default Header;