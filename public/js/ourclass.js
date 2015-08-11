

var width = 500,
    height = 500;

var color = d3.scale.category20();

var force = d3.layout.force()
    .charge(-500)
   // .linkDistance(30)
    .linkStrength(0.2)
    .size([width, height]);

var svg = d3.select("#graphicchild").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json("test.json", function(error, graph) {
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
    .enter().append("g")
      .attr("class", "node")
      //.attr("r", 5)
      .style("fill", function(d) { return color(d.group); })

      .call(force.drag);

      node.append("title")
          .text(function(d) { return d.name; });

      node.append("circle")
          .attr("r", 10)
          .style("fill", function(d) {return color(d.group); })

      node.append("image")
          .attr("xlink:href", "https://github.com/favicon.ico") //make a folder called images inside public
          .attr("x", -8)
          .attr("y", -8)
          .attr("width", 16)
          .attr("height", 16);

  node.append("text")
      .attr("dx", 12)
      .attr("dy", ".35em")
      .text(function(d) { return d.name });

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


