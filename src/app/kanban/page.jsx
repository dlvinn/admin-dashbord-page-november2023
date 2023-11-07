"use client";

import { useContext } from "react";
import KanbanCard from "../../components/kanban";
import { GlobalContext } from "../../context";
import { DndContext, rectIntersection } from "@dnd-kit/core";

export default function Kanban() {
  const {
    todoItems,
    setTodoItems,
    unassignedItems,
    setUnassignedItems,
    inProgressItems,
    setInprogressItems,
    doneItems,
    setDoneItems,
  } = useContext(GlobalContext);
  return (
    <DndContext collisionDetection={rectIntersection}
    onDragEnd={(e)=>{
        const container = e.over?.id;
        const title = e.active.data.current?.title ?? '';
        const index = e.active.data.current?.index ?? 0;
        const parent = e.active.data.current?.parent ?? 'ToDo';

        if(parent === 'Unassigned' && container === 'Unassigned'){
            return
        }else if(parent === 'ToDo' && container === 'ToDo'){
            return
        }else if(parent === 'InProgress' && container === 'InProgress'){
            return
        }else if(parent === 'Unassigned' && container === 'Unassigned'){
            return
        }
        if(container === 'ToDo'){
            setTodoItems([...todoItems, {title}])
            localStorage.setItem('todoItems', JSON.stringify([...todoItems, {title}]))
        }else if(container === 'Done'){
            setDoneItems([...doneItems, {title}])
            localStorage.setItem('doneItems', JSON.stringify([...doneItems, {title}]))

        }else if(container === 'InProgress'){
            setInprogressItems([...inProgressItems, {title}])
            localStorage.setItem('inProgressItems', JSON.stringify([...inProgressItems, {title}]))

        }else{
            setUnassignedItems([...unassignedItems, {title}])
            localStorage.setItem('unassignedItems', JSON.stringify([...unassignedItems, {title}] ))
        }//this one will add the item to the container that you just dragged the item to

        if(parent === 'ToDo'){
            setTodoItems([...todoItems.slice(0, index), ...todoItems.slice(index+1)])
            localStorage.setItem('todoItems',JSON.stringify([...todoItems.slice(0, index), ...todoItems.slice(index+1)]))
        }else if(parent === 'Done'){
            setDoneItems([...doneItems.slice(0, index), ...doneItems.slice(index+1)])
            localStorage.setItem('doneItems',JSON.stringify([...doneItems.slice(0, index), ...doneItems.slice(index+1)]))
        }else if(parent === 'InProgress'){
            setInprogressItems([...inProgressItems.slice(0, index), ...inProgressItems.slice(index+1)])
            localStorage.setItem('inProgressItems',JSON.stringify([...inProgressItems.slice(0, index), ...inProgressItems.slice(index+1)]))

        }else{
            setUnassignedItems([...unassignedItems.slice(0, index), ...unassignedItems.slice(index+1)])
            localStorage.setItem('unassignedItems',JSON.stringify([...unassignedItems.slice(0, index), ...unassignedItems.slice(index+1)]))
        }//and this one will remove the item from the parent container
        console.log(e.active.data.current, container);
        
    }}>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <KanbanCard title={"Unassigned"} tasks={unassignedItems} />
        <KanbanCard title={"ToDo"} tasks={todoItems} />
        <KanbanCard title={"InProgress"} tasks={inProgressItems} />
        <KanbanCard title={"Done"} tasks={doneItems} />
      </div>
    </DndContext>
  );
}
