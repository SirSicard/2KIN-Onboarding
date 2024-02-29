import React from 'react';
import { useParams } from 'react-router-dom';
import { mockData } from './DocumentationPage';
import "../styles/docsCategoryPage.css";

function DocsCategoryPage() {
  const { id } = useParams();
  const category = mockData.find(item => item.id === parseInt(id));

  return (
    <div className='categoryBackground'>
      <div className="docsContainer">
        <h2 className='catTitle'>{category.title}</h2>
        <p className='cat-text'>{category.content}</p>
        <img src="https://i.gifer.com/7S7P.gif" alt="Placeholder" className='categoryLogo' />
        <p className='cat-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus veritatis cum perspiciatis providentin, obcaecati nisi, laboriosam vel mollitia nulla at eius. Dolores, consequuntur facere accusantium voluptates cumque quibusdam officia voluptas?</p>
      </div>
    </div>
  );
}

export default DocsCategoryPage;
