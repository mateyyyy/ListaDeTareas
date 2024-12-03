import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderGoBack from '../../components/molecules/HeaderGoBack'
import styles from './StoriesOfEpic.module.css'
import Stories from '../../components/molecules/Stories';
import { get, post } from '../../utils/ApiRequests';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InfoDisplay from '../../components/molecules/ProjectInfo';
import Loading from '../../components/atoms/Loading';
import AddForm from '../../components/molecules/AddForm';

export default function StoriesOfEpic() {
  const {m} = useParams();
  const {j} = useParams();

  const [showForm, setShowForm] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const [blur, setBlur] = useState(false);

  const [tasks, setTasks] = useState(undefined);
  const [story, setStory] = useState(undefined); 
  const [newState, setNewState] = useState(0);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [due, setDue] = useState('');
  const [startDate, setStartDate] = useState(new Date());

  const updateState = () => {
    setNewState(newState+1);
  }

  const addTask = (e) => {
    e.preventDefault();
    if(name==''){
      setShowForm(false);
    }
    const bodySend = {
      "done": false,
      "name": name,
      "description": description,
      "story": j,
      "created": Date.now(),
      "dueDate": startDate,
    };
    
    post(`/tasks`, bodySend)
      .then((data) => {
          if(data.status!="error"){
          console.log(data),
          setNewState(newState+1),
          setShowForm(false)
          setShowError(false)
          setName('');
          setDescription('');
        }
        else{
          setShowError(true),
          setErrMessage(data.message.message)
        }
      })
  }

  useEffect(() => {
    get(`/stories/${j}/tasks`, setTasks)
    .then((data) => console.log(data));
    get(`/stories/${j}`, setStory)
    .then((data) => console.log(data));

  },[newState])

  return (
    <>
      <HeaderGoBack titulo={"Historia de usuario"}>
      </HeaderGoBack>
      {story!=undefined ? 
      <InfoDisplay element={story} url={'stories'} updateState={updateState} idstory={j} blur={blur}></InfoDisplay>
      : null}
      

      <div id={styles.PrinDivProject}>
        <div id={styles.addTask}><AddForm type='tasks' updateState={updateState} idStory={j} blur={blur} setBlur={setBlur}></AddForm></div>

        {showForm? <div id={styles.formContainer}>
          <h2>TASK</h2>
          
          <form action="" id={styles.form} onSubmit={(e) => (addTask(e))}>
            {showError? <h3>Error : {errMessage}</h3>: null}
            <input type="text" className={styles.input} placeholder='Nombre' value={name}  onChange={(e) => setName(e.target.value)}/>
            <input type="text" className={styles.input} placeholder='Descripcion' value={description} onChange={(e) => setDescription(e.target.value)}/>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  dateFormat="yyyy-MM-dd"/>
            <button>ADD</button>
          </form>
        </div>: null}
        
      {
        tasks!=undefined? 
        (tasks.length==0?
           <p>No hay tareas</p> : 
           <Stories tasks={tasks} updateState={updateState} blur={blur}/>
          )
        :
        (<Loading/>)
      }
      
        
      </div>
 </>
  )
}
