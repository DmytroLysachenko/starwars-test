'use client';

import React, { useCallback, useEffect, useState } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  {
    id: 'hidden-1',
    type: 'input',
    data: { label: 'Node 1' },
    position: { x: 250, y: 5 },
  },
  { id: 'hidden-2', data: { label: 'Node 2' }, position: { x: 100, y: 100 } },
  { id: 'hidden-3', data: { label: 'Node 3' }, position: { x: 400, y: 100 } },
  { id: 'hidden-4', data: { label: 'Node 4' }, position: { x: 800, y: 200 } },
];

const initialEdges = [
  { id: 'hidden-e1-2', source: 'hidden-1', target: 'hidden-2' },
  { id: 'hidden-e1-3', source: 'hidden-1', target: 'hidden-3' },
  { id: 'hidden-e3-4', source: 'hidden-3', target: 'hidden-4' },
];

const hide = (hidden) => (nodeOrEdge) => {
  return {
    ...nodeOrEdge,
    hidden,
  };
};

const Page = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );

  return (
    <div className="h-mobPageHeight md:h-tabPageHeight overflow-y-auto">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Page;
