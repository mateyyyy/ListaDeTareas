export const bodySet = (type, name, description, idProject, idEpic, idStory, startDate) =>{
    if(type=="stories"){
        return {
        "assignedTo": [],
        "points": 5,
        "status": "todo",
        "name": name,
        "description": description,
        "epic": idEpic,
        "created": Date.now(),
        "owner": localStorage.getItem('userID')
        };
    }

    if(type=="epics"){
    return {
        "project" : idProject,
        "name": name,
        "description": description,
        "icon": null
        };
    }
  
    if(type=="projects"){
      return {      
        "members": localStorage.getItem('userID'),
        "name": name,
        "description": description,
        "icon": null
        };
    }

    if(type=="tasks"){
        return {      
            "done": false,
            "name": name,
            "description": description,
            "story": idStory,
            "created": Date.now(),
            "dueDate": startDate,
          };
      }



}
