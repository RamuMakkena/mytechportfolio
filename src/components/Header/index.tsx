import * as React from 'react';
import NavBar from '../NavBar';
interface HeaderProps{
    tabItems: string[],
    setCurrentTab(menu : string): any
};
class Header extends React.PureComponent<HeaderProps>{
    constructor(props:HeaderProps){
        super(props);
    }
    render () {
        
        const {tabItems,  setCurrentTab} = this.props;
        return(
            <div className='d-flex-inline'>
                <h1 className='d-flex-inline'>Ramu Makkena</h1>
                <NavBar tabItems={tabItems}  setCurrentTab={setCurrentTab}/>
            </div>
        );
    }
}

export default Header;