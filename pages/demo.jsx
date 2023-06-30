import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Demo = () => {
    const [items, setItems] = useState([
        { id: 'item1', color: 'bg-red-300' },
        { id: 'item2', color: 'bg-red-400' },
        { id: 'item3', color: 'bg-red-500' },
        { id: 'item4', color: 'bg-red-600' },
        { id: 'item5', color: 'bg-black' },
    ]);

    const handleDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const reorderedItems = Array.from(items);
        const [movedItem] = reorderedItems.splice(result.source.index, 1);
        reorderedItems.splice(result.destination.index, 0, movedItem);

        setItems(reorderedItems);
    };

    return (
        <div>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="demo">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided) => (
                                        <div
                                            className={`flex`}
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <div className={`h-10 w-full ${item.color}`}></div>
                                            <button className='h-10 w-40 bg-black text-white'>drag</button>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default Demo;



