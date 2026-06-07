console.log('Dashboard Loaded');
const token=localStorage.getItem('token');
if(!token){window.location.href='index.html';}
loadDashboard();
async function loadDashboard(){
 const response=await fetch('https://jsonplaceholder.typicode.com/users/1');
 const data=await response.json();

 // Intentional UI rendering bug
 document.getElementById('dashboard').innerHTML=`
   <h2>${data.userName.toUpperCase()}</h2>
   <p>Email: ${data.email}</p>
 `;
}
