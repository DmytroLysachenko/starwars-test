'use client';

import React, { useCallback, useEffect, useState } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  MiniMap,
  Controls,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const HeroFlow = ({ hero }) => {
  const { films = [], starships = [] } = hero;

  const heroNode = {
    id: 'hero',
    data: { label: hero.name },
    position: { x: 0, y: 0 },
  };
  const initialNodes = [heroNode];
  const initialEdges = [];

  if (starships.length > 0) {
    const starshipsTitleNode = {
      id: 'starships',
      data: { label: 'Starships' },
      position: { x: -100, y: 100 },
    };

    const starshipsNodes = starships.map((starship, index) => ({
      id: `starship-${starship.id}`,
      data: { label: starship.name },
      position: { x: -180 * (index + 1), y: 200 },
    }));
    initialNodes.push(starshipsTitleNode, ...starshipsNodes);
    const heroStarshipsTitleEdge = {
      id: `hero-starships`,
      source: 'hero',
      target: 'starships',
    };
    const starshipsEdges = starshipsNodes.map((starshipNode) => ({
      id: `starships-${starshipNode.id}`,
      source: 'starships',
      target: starshipNode.id,
    }));

    initialEdges.push(heroStarshipsTitleEdge, ...starshipsEdges);
  }
  if (films.length > 0) {
    const filmsTitleNode = {
      id: 'films',
      data: { label: 'Films' },
      position: { x: 100, y: 100 },
    };

    const filmsNodes = films.map((film, index) => ({
      id: `film-${film.id}`,
      data: { label: film.title },
      position: { x: 180 * (index + 1), y: 200 },
    }));

    initialNodes.push(filmsTitleNode, ...filmsNodes);

    const heroFilmsTitleEdge = {
      id: `hero-films`,
      source: 'hero',
      target: 'films',
    };

    const filmsEdges = filmsNodes.map((filmNode) => ({
      id: `films-${filmNode.id}`,
      source: 'films',
      target: filmNode.id,
    }));

    initialEdges.push(heroFilmsTitleEdge, ...filmsEdges);
  }

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
