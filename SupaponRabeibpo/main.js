window.onload = pageLoadProject;

function pageLoadProject(){
    
    var clickButton = document.getElementById("Project");
    var LoadAssignPage = document.getElementById('go');

	clickButton.onclick= htmlLoadProject;
    LoadAssignPage.onclick=LoadAssign;
    
}


function htmlLoadProject(){
    window.location.href="Project.html";
}


function LoadAssign(){
    var AssignmentSelect = document.getElementById('Assignment');
    var GetValue = AssignmentSelect.options[AssignmentSelect.selectedIndex].value;
    console.log(GetValue);
    if(GetValue == "Assignment4"){
        alert("assign4");
        window.location.href="Assignments/assignment4/recipe.html";
    }
    else if(GetValue == "Assignment5"){
        alert("assign5");
        window.location.href="Assignments/assignment5/index.html";

    }else if(GetValue == "Assignment6"){
        alert("assign6");
        window.location.href="Assignments/assignment6/register.html";

    }else if(GetValue == "Assignment7"){
        alert("assign7");
        window.location.href="Assignments/assignment7/index.html";
    }
}
