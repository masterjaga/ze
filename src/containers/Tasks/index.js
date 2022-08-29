import { Button, Card } from "@mui/material";
import { useEffect, useState } from "react";
import { API } from "../../global";
import { SideNavbar } from "../SideNavbar";

export function Tasks(){

    const [allTasksData, setAllTasksData] = useState([]);
    const [taskData,setTaskData] = useState({});

    useEffect(()=>{
        getAllTasks();
    },[]);

    async function getAllTasks(){
        const data = await fetch(`${API}/tasks/getAllTasks`).then((data)=>data.json());
        console.log("get all tasks===", data);
        setAllTasksData(data);
    }

    const taskExpand = (value)=>{
        console.log("taksexpand", value);
        setTaskData(value);
    }

    return(
        <div className="tasksContainer">
            <div className = "tasksContentWrapper">
                <TaskInfo taskData = {taskData} />
            </div>
            <div className = "tasksInfoWrapper">
                {allTasksData.map((value,index)=>{
                    return <Button key = {value._id} onClick = {()=>taskExpand(value)}>{value.taskName}</Button>
                })}
            </div>
        </div>
    );
}


export function TaskInfo({taskData}){
   
   const [frontEndSourceURL, setFrontEndSourceURL] = useState();
   const [frontEndDeploymentURL, setFrontEndDeploymentURL] = useState();
   const [backEndSourceURL, setBackEndSourceURL] = useState();
   const [backEndDeploymentURL, setBackEndDeploymentURL] = useState();

    let userDetails = localStorage.getItem("user");
    userDetails = userDetails && JSON.parse(userDetails);
    const userName = userDetails.userName;

   const onFrontEndSourceChange = (e)=>{
    setFrontEndSourceURL(e.target.value);
   }

   const onFrontEndDeploymentURLChange = (e)=>{
    setFrontEndDeploymentURL(e.target.value);
   }

   const onBackEndSourceChange = (e)=>{
    setBackEndSourceURL(e.target.value);
   }

   const onBackEndDeploymentURLChange = (e)=>{
    setBackEndDeploymentURL(e.target.value);
   }

   async function updateTaskStatus(data){
    try{
        const result = await fetch(`${API}/tasks/postTaskSolutions/${taskData.taskName}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {"content-type": "application/json"}
        });
    }catch(error){
        console.log("Error in API for updation of task status - ",error )
    }
}

console.log("taskData.taskName",taskData,taskData.taskName)


   const onSubmit = async (e)=>{
    e.preventDefault();
        var data = {
            frontEndSourceURL: frontEndSourceURL,
            frontEndDeployedURL: frontEndDeploymentURL,
            backEndSourceURL: backEndSourceURL,
            backEndDeployedURL: backEndDeploymentURL,
            userName : userName
        };
        console.log(data);
        updateTaskStatus(data);

   }
   
    return(
        <Card className = "taskCard">
           <div className ="taskDescription">{taskData.taskInfo}</div>
           <form className = "taskSubmissionForm" onSubmit = {(e)=>onSubmit(e)}>
                <label htmlFor = "frontEndSourceURL">Front End Source Code URL:</label> <br/>
                <input id = "frontEndSourceURL" type = "text" onChange = {(e)=>onFrontEndSourceChange(e)} required /> <br/>
                <label htmlFor = "frontEnddeployedURL">Front End Deployment URL:</label><br/>
                <input id = "frontEnddeployedURL" type = "text" onChange = {(e)=>onFrontEndDeploymentURLChange(e)} required /><br/>
                <label htmlFor = "backEndSourceURL">Back End Source Code URL:</label><br/>
                <input id = "backEndSourceURL" type = "text" onChange = {(e)=>onBackEndSourceChange(e)} required /><br/>
                <label htmlFor = "backEnddeployedURL">Back End Deployment URL:</label><br/>
                <input id = "backEnddeployedURL" type = "text" onChange = {(e)=>onBackEndDeploymentURLChange(e)} required /><br/>
                <Button type="submit" variant="contained">Submit</Button>
                <div className="note">* If any input field is not relevant to particular task kindly fill "NA".</div>
           </form>
        </Card>
    );
}