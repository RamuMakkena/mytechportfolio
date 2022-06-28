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
            <div className='d-inline-flex justify-content-sm-start justify-content-lg-between align-content-center bg-dark text-light flex-wrap col-sm-12 col-md-12 col-lg-12 bg-dark'>
                
                <div className='justify-content-sm-center justify-content-lg-start bg-dark'>
                <h1 className="bg-dark">Ramu Makkena</h1>
                </div>
                <div className='justify-content-between bg-dark' >
                    <NavBar tabItems={tabItems}  setCurrentTab={setCurrentTab}/>
                </div>
            </div>
        );
    }
}

export default Header;