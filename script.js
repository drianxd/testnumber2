function showPanel() {
    document.getElementById("administrator-panel").style.display = "block";
    document.getElementById("members").style.display = "none";
    document.getElementById("commissions").style.display = "none";
    document.getElementById("tasks").style.display = "none";
    document.getElementById("current-section").innerText = "Administrator > Panel";}


function showMembers() {
    document.getElementById("administrator-panel").style.display = "none";
    document.getElementById("members").style.display = "block";
    document.getElementById("commissions").style.display = "none";
    document.getElementById("tasks").style.display = "none";
    document.getElementById("current-section").innerText = "Administrator > Members";}


function showCommissions() {
    document.getElementById("administrator-panel").style.display = "none";
    document.getElementById("members").style.display = "none";
    document.getElementById("commissions").style.display = "block";
    document.getElementById("tasks").style.display = "none";
    document.getElementById("current-section").innerText = "Administrator > Commissions";}


function showTasks() {
    document.getElementById("administrator-panel").style.display = "none";
    document.getElementById("members").style.display = "none";
    document.getElementById("commissions").style.display = "none";
    document.getElementById("tasks").style.display = "block";
    document.getElementById("current-section").innerText = "Administrator > Tasks";}
