console.log("Dashboard Loaded");

const token = localStorage.getItem("token");

if(!token){
    window.location.href = "index.html";
}

loadDashboard();

async function loadDashboard(){
    try{
        const response = await fakeApi();

        document.getElementById("dashboard").innerHTML = `
            <h2>${response.name}</h2>
            <p>Revenue: ${response.revenue}</p>
        `;
    } catch(error){
        console.error("Dashboard API Failed", error);
        // Intentional bug: blank dashboard
    }
}

function fakeApi(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject({
                status:500,
                message:"Internal Server Error"
            });
        },1000);
    });
}