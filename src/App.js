import React, { useEffect } from 'react';
import cytoscape from 'cytoscape';
import Navbar from './APP/navbar';

const MyComponent = () => {
  useEffect(() => {
    cytoscape({
      container: document.getElementById('cy'),
      elements: [
        {
          group: 'nodes',
          data: {
            id: 'n1',

          },
          scratch: {
            _foo: 'bar'
          },
          position: {
            x: 100,
            y: 100
          },
          selected: false,
          selectable: true,
          locked: false,
          grabbable: true,
          pannable: false,
          classes: ['foo', 'bar'],
          style: {
            'background-color': 'yellow'
          }
        },
        {
          group: 'nodes',
          data: { id: 'n2' },
          renderedPosition: { x: 200, y: 200 }
        },
        {
          group: 'nodes',
          data: { id: 'n3', },
          position: { x: 123, y: 234 }
        },
        {
          group: 'edges',
          data: {
            id: 'e1',
            source: 'n1',
            target: 'n2'
          },
          pannable: true
        },
        {
          group: 'nodes',
          data: { id: 'n4' }
        },
        {
          group: 'nodes',
          data: { id: 'n5' }
        },
        {
          group: 'edges',
          data: {
            id: 'e2',
            source: 'n1',
            target: 'n4'
          },
          pannable: true
        },
        {
          group: 'edges',
          data: {
            id: 'e3',
            source: 'n2',
            target: 'n3'
          },
          pannable: true
        },
        {
          group: 'edges',
          data: {
            id: 'e4',
            source: 'n3',
            target: 'n4'
          },
          pannable: true
        }
      ],
      layout: {
        name: 'preset'
      },
      style: [
        {
          selector: 'node',
          style: {
            'label': 'data(id)'
          }
        }
      ]
    });
  }, []);

  const handleFileSelect = (file) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      const json = JSON.parse(event.target.result);
      // Haz algo con el json
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <Navbar />
      <div id="cy" style={{ width: '1000px', height: '600px' }} />

    </div>

  );
};

export default MyComponent;
