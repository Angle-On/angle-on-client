import React from 'react';
import resources from './mockResourcesData';

const ResourcesPage = () => { 
  return ( 
    <div>
      <h2>RESOURCES</h2>
      <div>
        {resources.map(resource => <div key={resource.resource_id}>
          <p>{resource.resource_name}</p>
          <img src={resource.resource_image} style={{ height: '40vh' }}/>
          <p>{resource.resource_description}</p>
          <a href={resource.resource_url}>Link to Website</a>
        </div>)}
      </div>
    </div>
  );
};

export default ResourcesPage;
