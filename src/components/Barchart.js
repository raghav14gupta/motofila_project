import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Barchart = () => {
  
  const [data, setData] = useState([
    { name: "jan", value: 0 },
    { name: "feb", value: 0 },
    { name: "Mar", value: 1500 },
    { name: "Apr", value: 0 },
    { name: "May", value: 900 },
    { name: "Jun", value: 0 },
    { name: "Jul", value: 0 },
    { name: "Aug", value: 0 },
    { name: "Sep", value: 500 },
    { name: "Oct", value: 0 },
    { name: "Nov", value: 2000 },
    { name: "Dec", value: 0 },
  ]);

  const svgRef = useRef();

  useEffect(() => {
    const margin = { top: 10, right: 80, bottom: 30, left: 40 };
    const width = 1000 - margin.left - margin.right; // Increased width
    const height = 500 - margin.top - margin.bottom; // Increased height

    const svg = d3.select(svgRef.current)
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleBand()
      .domain(data.map(d => d.name))
      .range([0, width])
      .padding(0.2); // Decreased padding

    const yScale = d3.scaleLinear()
      .domain([0, 2500])
      .range([height, 0]);

    const yAxis = d3.axisLeft(yScale)
      .tickValues([0, 100, 500, 1000, 1500, 2000]); // Explicitly set tick values
    svg.append("g")
      .attr("class", "y-axis")
      .call(yAxis);

    // Add horizontal grid lines
    svg.selectAll(".grid-line")
      .data([0, 100, 500, 1000, 1500, 2000])
      .enter().append("line")
      .attr("class", "grid-line")
      .attr("x1", 0)
      .attr("y1", d => yScale(d))
      .attr("x2", width)
      .attr("y2", d => yScale(d))
      .attr("stroke", "rgba(204, 204, 204, 1)")
      .attr("stroke-width", 1)
      // .attr("stroke-dasharray", "4");

    const xAxis = d3.axisBottom(xScale);
    svg.append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(xAxis);

    svg.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", d => xScale(d.name))
      .attr("y", d => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", d => height - yScale(d.value))
      .attr("fill", "rgba(224, 68, 14, 1)");

  }, [data]);

  return (
    <svg
      ref={svgRef}
      style={{ padding: "0px", marginTop: "0px", width: "100%", height: "90%" }} // Adjusted width and height
    ></svg>
  );
};

export default Barchart;
