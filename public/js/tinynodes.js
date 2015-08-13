var width = 200,
    height = 200;

// var color = d3.scale.ordinal()
//     .domain([])
//     .range(["#FFB800","22A7F0"]);();

var color = d3.scale.category20();

var force = d3.layout.force()
    .charge(-50)
   // .linkDistance(30)
    .linkStrength(0.2)
    .size([width, height]);

var svg = d3.select("#tinynodes").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json("tinynodes.json", function(error, graph) {
  if (error) throw error;

  force
      .nodes(graph.nodes)
      .links(graph.links)
      .start();

  var link = svg.selectAll(".link")
      .data(graph.links)
    .enter().append("line")
      .attr("class", "link")
      .style("stroke-width", function(d) { return Math.sqrt(d.value); });

  var node = svg.selectAll(".node")
      .data(graph.nodes)
    .enter().append("circle")
      .attr("class", "node")
      .attr("r", 5)
      .style("fill", function(d) { return color(d.group); })

      .call(force.drag);

      node.append("circle")
          .attr("r", 15)
          .style("fill", function(d) {return color(d.group); })

  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

//    node.attr("dx", function(d) { return d.x; })
//        .attr("dy", function(d) { return d.y; });
  });
});