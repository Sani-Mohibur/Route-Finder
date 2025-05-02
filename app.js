const routesData = [
    {route: "Dhaka - Chattogram", time: "07:00 AM", bus: "Green Line"},
    {route: "Dhaka - Sylhet", time: "08:00 AM", bus: "Soudia"},
    {route: "Dhaka - Cox's Bazar", time: "09:00 AM", bus: "Shyamoli"},
    {route: "Dhaka - Khulna", time: "10:00 AM", bus: "Hanif"},
    {route: "Dhaka - Rajshahi", time: "11:00 AM", bus: "Eagle"},
    {route: "Dhaka - Barisal", time: "12:00 PM", bus: "Shyamoli"},
    {route: "Dhaka - Rangpur", time: "01:00 PM", bus: "Green Line"},
    {route: "Dhaka - Bogura", time: "02:00 PM", bus: "Soudia"},
    {route: "Dhaka - Mymensingh", time: "03:00 PM", bus: "Hanif"},
    {route: "Dhaka - Pabna", time: "04:00 PM", bus: "Eagle"},
    {route: "Dhaka - Jamalpur", time: "05:00 PM", bus: "Shyamoli"},
    {route: "Dhaka - Kishoreganj", time: "06:00 PM", bus: "Green Line"},
    {route: "Dhaka - Chandpur", time: "07:00 PM", bus: "Soudia"},
    {route: "Dhaka - Faridpur", time: "08:00 PM", bus: "Hanif"},
    {route: "Dhaka - Madaripur", time: "09:00 PM", bus: "Eagle"},
    {route: "Dhaka - Manikganj", time: "10:00 PM", bus: "Shyamoli"},
    {route: "Dhaka - Netrakona", time: "11:00 PM", bus: "Green Line"},
    {route: "Dhaka - Sherpur", time: "12:00 AM", bus: "Soudia"}
];

function searchRoutes() {
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