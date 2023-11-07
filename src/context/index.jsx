"use client";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

export const initialReportFormData = {
  name:'',
  visitor:0,
  revenue: 0,
  sales: 0,
  tasks:[]
}
export default function GlobalState({ children }) {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [allTasks, setAllTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [unassignedItems, setUnassignedItems] = useState([]);
  const [todoItems, setTodoItems] = useState([]);
  const [inProgressItems, setInprogressItems] = useState([]);
  const [doneItems, setDoneItems] = useState([]);
  const [reportFormData, setReportFormData] = useState(initialReportFormData);
  const [allReportsData, setAllReportsData]= useState([])

  useEffect(() => {
    setAllTasks(JSON.parse(localStorage.getItem("allTasks")) || []);
    setUnassignedItems(JSON.parse(localStorage.getItem("unassignedItems")) || []);
    setDoneItems(JSON.parse(localStorage.getItem("doneItems")) || []);
    setTodoItems(JSON.parse(localStorage.getItem("todoItems")) || []);
    setInprogressItems(JSON.parse(localStorage.getItem("inProgressItems")) || []);
    setAllReportsData(JSON.parse(localStorage.getItem("allReportsData")) || [])

  }, []);
  return (
    <GlobalContext.Provider
      value={{
        openSideBar,
        setOpenSideBar,
        allTasks,
        setAllTasks,
        newTask,
        setNewTask,
        todoItems,
        setTodoItems,
        unassignedItems,
        setUnassignedItems,
        inProgressItems,
        setInprogressItems,
        doneItems,
        setDoneItems,
        reportFormData, 
        setReportFormData,
        allReportsData, 
        setAllReportsData
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
