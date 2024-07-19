'use client';

import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  Controls,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { createInitialData } from '@utils/reactFlowHelpers';

const HeroFlow = ({ hero }) => {
  const { films = [], starships = [] } = hero;

  const { initialNodes, initialEdges } = createInitialData(
    hero,
    films,
    starships
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="w-[90%] h-2/3 overflow-y-auto border border-solid border-[#7473736c] rounded-2xl shadow-lg absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 p-2">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default HeroFlow;
