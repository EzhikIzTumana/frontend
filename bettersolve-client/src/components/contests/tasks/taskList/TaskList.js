import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Menu from "../menu/MainMenu";
import "./TaskList.css";
import ListComponent from "./ListComponent";
import { useNavigate, useParams } from "react-router-dom";
import { MakeRequest } from "../../../../API/RequestService";

const TaskList = () => {
  let navigate = useNavigate(); 

  const routeChange = () => { 
    let path = `/contests/1/problem/standings`; 
    navigate(path);
  }

  const [problems, setProblems] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function handleProblems() {
      let response = await MakeRequest(`contest/${id}`, {})
      setProblems(response.data.problems)
    }
    handleProblems();
  }, [id]);


  return (
    <div className="app-wrapper">
      <Menu>
      </Menu>
      <div className="info">
        <div className="taskListForm">
          <p className="taskHeader">Задачи:</p>
          {problems && problems.length > 0 ? (
            problems.map((problem, index) => (
                <ListComponent key={problem.id} task={problem.properties} counter={String.fromCharCode(65 + index)} />
            ))
            ) : (
            <p>Нет доступных задач.</p>
            )}
        </div>
        <button className="standingButton" onClick={routeChange}>Таблица результатов</button>
      </div>
    </div>
  )
}

export default TaskList;
