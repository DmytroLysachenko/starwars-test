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

const hide = (nodeOrEdge, hidden) => {
  return {
    ...nodeOrEdge,
    hidden,
  };
};

const HeroFlow = ({ hero, films, starships = [] }) => {
  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );

  const { initialNodes, initialEdges } = createInitialData(
    hero,
    films,
    starships
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const changeNodesAndEdges = (id, value) => {
    setNodes((nodes) =>
      nodes.map((node) => (node.id === id ? hide(node, value) : node))
    );
    setEdges((edges) =>
      edges.map((edge) => (edge.id.includes(id) ? hide(edge, value) : edge))
    );
  };

  return (
    <div className=" relative h-[600px] w-[320px] md:w-[700px] xl:w-[1200px] border border-solid border-[#7473736c] rounded-2xl shadow-lg p-2 bg-blue-950 ">
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
          <div
            style={{
              position: 'absolute',
              left: 10,
              top: 20 * index,
              zIndex: 4,
            }}
            key={`${film.id} + ${index}`}
          >
            <div>
              <label htmlFor={`${film.id}-ishidden`}>
                {`"${film.title}" - hidden`}
                <input
                  id={`${film.id}-ishidden`}
                  type="checkbox"
                  onChange={(event) => {
                    changeNodesAndEdges(
                      `film-${film.id}`,
                      event.target.checked
                    );
                  }}
                  className="ml-2"
                />
              </label>
            </div>
          </div>
        ))}
      </ReactFlow>
    </div>
  );
};

export default HeroFlow;
