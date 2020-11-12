
const width = 800, 
    height = 400,
    filename = "4c7d08f1d6fac569c83fa87b42a3a727668da55317954637ce500d59e058fe03",
    targetname = "52.45.178.122";

let path,
    dist,
    paths = {0: {"file": "force_0.json", "distance": 100}, 
            1: {"file": "force_1.json", "distance": 70}, 
            2: {"file": "force_2.json", "distance": 40}};

const symbols = {
    "file": {"type": d3.symbolSquare, "color": "white"},
    "relationship": {"type": d3.symbolWye, "color": "white"},
    "ip_address": {"type": d3.symbolTriangle, "color": "white"},
    "domain": {"type": d3.symbolCircle, "color": "white"},
    "url": {"type": d3.symbolDiamond, "color": "white"}};

function update(graph, size, dist){
    //console.log("update", data);
    d3.select("#wrapper").select("svg").remove();
    d3.select("#wrapper").select("div").remove();

    const svg = d3.select("#wrapper")
    .append("svg")
    .attr("viewBox", [0, 0, width, height])
    .call(d3.zoom().on("zoom", function () {
            svg.attr("transform", d3.event.transform)
    }));


    const simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function (d) { return d.id; }).distance(dist).strength(0.5))
        .force("charge", d3.forceManyBody().strength(-5))
        .force("x", isolate(d3.forceX(d => d.type_num * 100).strength(0.5), function(d) { return d.color === 1; }))
        .force("y", d3.forceY(height / 2).strength(0.01));

 
    const tooltip = d3.select("#wrapper").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    const rScale = d3.scaleLinear()
        .domain([0, 0.218]) // input 
        .range([30, 900]); // output 

    const cScale = d3.scaleOrdinal(d3.schemeCategory10);

    const links = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graph.links)
        .enter().append("line")
        .attr("stroke-opacity", d => d.color === 1 ? 0.7 : 0.2)
        .style("stroke-width", d => d.color === 1 ? 1.5 : 0.5)
        .style("stroke", d => d.color === 1 ? "red" : "#aaa");

    const nodes = svg.append("g")
       .attr("class", "nodes")
        .selectAll("circle")
        .data(graph.nodes)
        .enter().append("path")
        .attr("d", d3.symbol().type(d => symbols[d.type]["type"]).size(d => rScale(d.betweenness)))
        .attr("fill", d => d.color === 1 ? "red" : symbols[d.type]["color"])
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged))
            //.on("end", dragended))
        .on("mouseover", mouseOver)
        .on("mousemove", mouseMove)
        .on("mouseout", mouseOut);
  
    simulation
        .nodes(graph.nodes)
        .on("tick", ticked)

    simulation.force("link")
        .links(graph.links);

    function ticked() {
        // nodes
        //     .attr("transform", d => "translate(" + d.x + "," + d.y + ")")

        nodes.attr("transform", function (d) {
            d.x = Math.max(size, Math.min(width-size, d.x));
            d.y = Math.max(size, Math.min(height-size, d.y));
            return "translate(" + d.x + "," + d.y + ")";
        });

        links
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);
    }

    function mouseOver(d){
        const circle = d3.select(this);

        links
            .attr('stroke-opacity', o => (o.source === d || o.target === d ? 1 : 0.2));

        tooltip
            .transition(100)
            .style("opacity", 1);

    }

    function mouseMove(d){
            tooltip
                .html("Type: " + d.type_label + " <br> Id: " + d.id)
                .style("top", (event.pageY + 10)+"px")
                .style("left",(event.pageX + 10)+"px")
        }

    function mouseOut(d){
            tooltip
                .style("opacity", 0)
            links
                .attr('stroke-opacity', d => d.color === 1 ? 0.7 : 0.2);
        } 

    function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }

    function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

    function isolate(force, filter) {
      let initialize = force.initialize;
      force.initialize = function() { initialize.call(force, graph.nodes.filter(filter)); };
      return force;
    }


}

function updateData(){
    let buttons = document.getElementsByName("sel");

    buttons.forEach(function(item){
        if (item.checked) { path = paths[item.value]["file"]; dist = paths[item.value]["distance"]}
    })

    d3.json("json/" + path, function(error, graph) {
        if (error) throw error;
        update(graph, 40, dist);
        }
    );
}

d3.select("#filter").on("change", updateData)

