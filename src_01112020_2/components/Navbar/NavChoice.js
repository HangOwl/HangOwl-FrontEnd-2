import React from 'react';
import MyModal from '../../Modal';

const login_choice = ({items, selected, onSelectedChange}) => {

  

  const renderOption = items.map((item) => {
    if(item.path === selected.path){
        return null;

    };    
    {console.log('hi')}
    return (
      
        <div 
            key={items.index} 
            onClick={() => {onSelectedChange(items)}}>
            {items.path}
            {console.log(items.path)}
        </div>
    );

    // return <MyModal items={renderOption} mystate={onSelectedChange()} />
});
};
export default login_choice;