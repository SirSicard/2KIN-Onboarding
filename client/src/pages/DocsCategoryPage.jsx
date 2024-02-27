import React from 'react';
import { useParams } from 'react-router-dom';
import { mockData } from './DocumentationPage'; 
import "../styles/docsCategoryPage.css";

function DocsCategoryPage() {
  const { id } = useParams(); 
  const category = mockData.find(item => item.id === parseInt(id)); 

  return (
    <div className="docsContainer">
      <h2>{category.title}</h2>
      <p>{category.content}</p>
      <img src="https://via.placeholder.com/600x425" alt="Placeholder" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus veritatis cum perspiciatis provident, obcaecati nisi, laboriosam vel mollitia nulla at eius. Dolores, consequuntur facere accusantium voluptates cumque quibusdam officia voluptas?</p>
    </div>
  );
}

export default DocsCategoryPage;
