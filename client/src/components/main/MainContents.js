import React            from 'react';
import TableHeader      from './TableHeader';
import TableContents    from './TableContents';

const MainContents = (props) => {
    return (
        <div className='table ' >
            <TableHeader
                disabled={!props.activeList._id} addItem={props.addItem}
                setShowDelete={props.setShowDelete} setActiveList={props.setActiveList}


                sort = {props.sort}
                sortLowerOrUpper = {props.sortLowerOrUpper}
                
                // deleteList = {props.deleteList}
                // activeList = {props.activeList}

            />
            <TableContents
                key={props.activeList._id} activeList={props.activeList}
                deleteItem={props.deleteItem} reorderItem={props.reorderItem}
                editItem={props.editItem}

                isCurrent = {props.isCurrent}
            />
        </div>
    );
};

export default MainContents;