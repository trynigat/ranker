import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import GameCard from "./GameCard.jsx";

function SortableItem({ id, title, img, index }) {


    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        marginBottom: '10px',
        opacity: isDragging ? 0.6 : 1,
        zIndex: isDragging ? 100 : 1,
        touchAction: 'none'
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <GameCard
                title={title}
                img={img}
                position={index + 1}
            />
        </div>
    );
}

export default SortableItem;