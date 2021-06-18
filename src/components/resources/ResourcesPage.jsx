import React from 'react';
import resources from './mockResourcesData';
import { Description, Header2, ResourceName, ResourceWrapper, Image, OutsideDiv } from './ResourceElements';


const ResourcesPage = () => { 
  return ( 
    <OutsideDiv>
      <Header2>Additional Resources</Header2>
      <div>
        {resources.map(resource => <ResourceWrapper key={resource.resource_id}>
          <a href={resource.resource_url}>
            <Image src={resource.resource_image}/>
          </a>
          <ResourceName>{resource.resource_name} </ResourceName>
          <Description>{resource.resource_description}</Description>

        </ResourceWrapper>)}
      </div>
    </OutsideDiv>
  );
};

export default ResourcesPage;
