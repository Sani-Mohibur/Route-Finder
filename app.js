async function getRoutesData(){
    try {
        const response = await fetch('routes.json');
        const data = await response.json();
        return data;
    }

catch (error){
    consssole.error("Failed to fetch routes data:", error);
    return [];
}
}

async function searchRoutes() {
    const from = document.getElementById("from-location").value;
    const to = document.getElementById("to-location").value;

    if (!from && !to){
        alert("Please enter departure and destination locations");
        return;
    }
    if (!from){
        alert("Please enter departure location");
        return;
    }
    if (!to){
        alert("Please enter the destination location");
        return;
    }

    const routesData = await getRoutesData();
    const results = routesData.filter (result=>
        result.route.toLowerCase().split(" - ")[0].includes(from.toLowerCase()) && 
        result.route.toLowerCase().split(" - ")[1].includes(to.toLowerCase())
    );

    displayResults(results);
}

function displayResults(routes){
    const container = document.querySelector(".routes-list");
    container.innerHTML = "";

    if (routes.length === 0){
        container.innerHTML = "<p>No routes found.</p>";
        return;
    }

    routes.forEach(finalRoute=>{
        const item = document.createElement("div");
        item.textContent = `${finalRoute.route} | ${finalRoute.time} | ${finalRoute.bus}`;
        container.appendChild(item);
    });
}