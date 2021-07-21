import React, { Component, Fragment } from 'react';
import MenuOption from './MenuOption';

interface Load{
     key: string; 
     name: any;
      choices: any;
}



class MenuItem extends Component <{ name: any; onSelect: any; choices: any; onSelectOption: any; }> {
    //public static propTypes = {};
    state = {
        showMenuItems: false
    }

    showMenuItems = () => {
        this.setState({ showMenuItems: !this.state.showMenuItems })
        if (typeof this.props.onSelect === 'function') {
            this.props.onSelect(this.state.showMenuItems)
        }
    }

    render() {
        const { name, choices, onSelectOption }= this.props
        return (
            <Fragment>
                <MenuOption 
                    name={name} 
                    onSelect={this.showMenuItems} />
                    <div className="menuItemIndent">
                        {this.state.showMenuItems ? 
                            choices.map((choice) => (
                                <MenuOption
                                    key={choice.name}
                                    name={choice.name}
                                    onSelect={() => ( onSelectOption ? onSelectOption(name, choice.name) : null )} />
                            ))
                        : ''}
                    </div>
            </Fragment>
        )
    }
}



export default MenuItem
