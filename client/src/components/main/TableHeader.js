import React from 'react';

import { WButton, WRow, WCol } from 'wt-frontend';

const TableHeader = (props) => {

    const buttonStyle = props.disabled ? ' table-header-button-disabled ' : 'table-header-button ';
    const clickDisabled = () => { };

    return (
        
        <WRow className="table-header">
            {/* /* this was 4 */ }
            <WCol size="3">
                <WButton className='table-header-section' wType="texted"
                
                onClick ={()=>{props.sort('description')}} // without arrow function it gets automatically triggered before pressing. with arrow it gets triggered after actually clicking

                >Task</WButton>
            </WCol>
             {/* /* this was 3 */ }
            <WCol size="2">
                <WButton className='table-header-section' wType="texted">Due Date</WButton>
            </WCol>
             {/* /* this was 2 */ }
            <WCol size="2">
                <WButton className='table-header-section' wType="texted" >Status</WButton>
            </WCol>
   {/* dfsf */}


            {/* This was added by me with the intention of making it a sorting method */} 
            <WCol size="1">
                <WButton className='table-header-section' wType="texted" >AssignedTo</WButton>
            </WCol>

            {/* /* this was 3 */ }
            <WCol size="3">
                <div className="table-header-buttons">
                    <WButton onClick={props.disabled ? clickDisabled : props.addItem} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">add_box</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : props.setShowDelete} wType="texted" className={`${buttonStyle}`}>
                        <i className ="material-icons" >delete_outline</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : () => props.setActiveList({})} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">close</i>
                    </WButton>
                </div>
            </WCol>

        </WRow>
    );
};

export default TableHeader;