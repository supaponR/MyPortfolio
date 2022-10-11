window.onload = pageLoadProject;

function pageLoadProject(){
    var ProjectPage = document.getElementById("button");
    ProjectPage.onclick= htmlLoadSupaponPage;
    
}

function htmlLoadSupaponPage(){
    window.location.href = 'Supapon.html';
}
