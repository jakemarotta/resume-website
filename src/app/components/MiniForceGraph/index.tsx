import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import cx from 'classnames';
import { Link, Node } from '@/types/MiniForceGraph';

import styles from './MiniForceGraph.module.scss'

export interface MiniForceGraphProps {
  nodeCount?: number;
}

export const MiniForceGraph: React.FC<MiniForceGraphProps> = (props) => {
  const {
    nodeCount = 0,
  } = props;

  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const svgWrapperRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const resizeListener = () => {
    if (svgWrapperRef.current) {
      const rect = svgWrapperRef.current.getBoundingClientRect();
      setWidth(rect.width);
      setHeight(rect.height)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, []);  

  useEffect(() => {
    resizeListener();
    d3.select(svgRef.current)
      .append('g')
      .attr('class', 'nodeContainer');
    d3.select(svgRef.current)
      .append('g')
      .attr('class', 'linkContainer');
  }, [svgRef]);

  if (svgRef.current) { 
    
    let nodeData: Node[] = [];
    for (let id = 1; id <= nodeCount; id++) {
      nodeData.push({ id })
    }
  
    const linkData: Link[] = nodeData.reduce((links, currentNode, _, nodes) => {
      nodes.forEach(otherNode => {
        if (currentNode.id === otherNode.id) return;
        for (let linkIndex = 0; linkIndex < links.length; linkIndex++) {
          const { source: otherSource, target: otherTarget } = links[linkIndex];
          if (
            (currentNode.id === otherSource && otherNode.id === otherTarget)
            || (currentNode.id === otherTarget && otherNode.id === otherSource)
          ) {
            return links;
          }
        }
        links.push({
          source: currentNode.id,
          target: otherNode.id,
        });
      })
      return links;
    }, [] as Link[]);
  
    const nodeIds = d3.map(nodeData, (node) => node.id);
  
    const nodes = d3.map(nodeData, d => Object.create(d));
    const links = d3.map(linkData, d => Object.create(d));
  
    const forceLink = d3.forceLink(links).id(d => {
      return d.index !== undefined ? nodeIds[d.index] : -1
    });

    let link: any;
    let node: any;
  
    const onTick = (node: d3.Selection<d3.BaseType | SVGCircleElement, any, SVGGElement, undefined>, link: d3.Selection<d3.BaseType | SVGLineElement, any, SVGGElement, undefined>) => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);
  
      node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
    }
  
    const simulation = d3.forceSimulation(nodes)
      .force("link", forceLink)
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width, height))
      .force("collide", d3.forceCollide().radius(20))
      .on('tick', () => onTick(node, link));
  
    const drag: any = (simulation: d3.Simulation<d3.SimulationNodeDatum, undefined>) => {    
      function dragstarted(event: any) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }
      
      function dragged(event: any) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }
      
      function dragended(event: any) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }
      
      return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }
  
    const svg = d3.select(svgRef.current);
  
    link = svg.select('.linkContainer')
      .attr("stroke", "#000000")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", 4)
      .attr("stroke-linecap", "round")
      .attr("pointer-events", "none")
      .selectAll("line")
      .data(links)
      .join("line");
  
    node = svg.select('.nodeContainer')
      .attr("fill", "gray")
      .attr("stroke", "#000000")
      .attr("stroke-opacity", 1)
      .attr("stroke-width", 2)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", 20)
      .call(drag(simulation));
  }

  return (
    <div ref={svgWrapperRef} className={cx('MiniForceGraph__wrapper', styles.MiniForceGraph)}>
      <svg
        ref={svgRef}
        width={width}
        height={height}
        viewBox={`${width / 2},${height / 2},${width},${height}`}
        style={{
          maxWidth: '100%',
          height: 'intrinsic',
        }}
      />
    </div>
  )
}
