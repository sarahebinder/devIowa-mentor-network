

var width = 800,
    height = 800;

var color = d3.scale.ordinal().range(["#F91776", "#FFB800", "#FF8B00", "#22A8F0"]);

var m = 20 //number of clusters

var force = d3.layout.force()
      .charge(-300)
    //.charge(function(d){return (d.skill) ? "10" : "-30"; })
    //.linkDistance(30)
    //.chargeDistance(300)
    //.gravity(function(d){return (d.skill) ? "0.9" : "0.1"})
    .linkStrength(0.01)
    .size([width, height])
    //.friction(0.7); //closer to 0, nodes move slower/less

var svg = d3.select("#graphicchild").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json("/data", function(error, graph) {
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
          .attr("r", function(d) { 
            return (d.skill) ? 5 : 15; //if a skill, radius 5, if not, radius 15
          })
          .style("fill", function(d) {return color(d.group); })

      node.append("image") //adding images is a WIP
          .attr("xlink:source", function(d) { 
            return (d.skill) ? "" : function(d){return d.image; }; //if a skill, no image, if not, add the icon
          }) //make a folder called images inside public
          .attr("x", -8)
          .attr("y", -8)
          .attr("width", 24)
          .attr("height", 24);

  node.append("text")
      .attr("dx", 18)
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


