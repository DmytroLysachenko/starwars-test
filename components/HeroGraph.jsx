'use client';

import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  BackgroundVariant,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { createInitialData } from '@utils/reactFlowHelpers';
import { useCallback } from 'react';
import dynamic from 'next/dynamic';

const CheckboxInput = dynamic(() => import('./CheckboxInput'), {
  loading: () => <p>Loading...</p>,
});

// HeroGraph component creating graph for our hero with connections to films hero participated in and starships hero was on during these films

const hide = (nodeOrEdge, hidden) => {
  return {
    ...nodeOrEdge,
    hidden,
  };
};

// hide Function is for edges/nodes hidding feature in Graph. It could be useful in case of too many edges on the graph between films and starships.

const HeroGraph = ({ hero, films, starships = [] }) => {
  // As props getting hero object, films array with films where this hero appeared and starships hero was onboard of.
  // Starships has as a default value empty array as hero could not be onboard any ships.

  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );

  // onConnect is used for connecting nodes in graph

  const { initialNodes, initialEdges } = createInitialData(
    hero,
    films,
    starships
  );

  // createInitialData function creating for us object with two properties - initialNodes and initialEdges - initial data for our graph.
  // As params function taking object hero, films array with films where this hero appeared and starships hero was onboard of.
  // PLEASE BE NOTICED - starships array we are passing to function is already filtered to only these, where our hero was. Filtering carried out in createHeroStarshipsIdsArray function.

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Hooks from react-flow for out nodes and edges

  const changeNodesAndEdges = (id, value) => {
    setNodes((nodes) =>
      nodes.map((node) => (node.id === id ? hide(node, value) : node))
    );
    setEdges((edges) =>
      edges.map((edge) => (edge.id.includes(id) ? hide(edge, value) : edge))
    );
  };

  // changeNodesAndEdges function for hiding/unhiding nodes and edges used later in CheckboxInput component

  return (
    <div className=" relative h-[600px] w-[320px] md:w-[700px] xl:w-[1200px] border border-solid border-[#7473736c] rounded-2xl shadow-lg p-2 bg-blue-950 text-black">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <Background
          color="rgba(255, 255, 255, 0.27)"
          variant={BackgroundVariant.Dots}
        />
        {films.map((film, index) => (
          <CheckboxInput
            changeNodesAndEdges={changeNodesAndEdges}
            film={film}
            index={index}
            key={`${film.id} + ${index}`}
          />
        ))}
      </ReactFlow>
    </div>
  );
};

export default HeroGraph;
