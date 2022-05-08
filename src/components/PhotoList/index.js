import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
    const [photos] = useState([
        {
            name: 'Grocery aisle',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, blah blah'
        },
        {
            name: 'Grocery booth',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, blah blah'
        },
        {
            name: 'Building exterior',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, blah blah'
        },
        {
            name: 'Restaurant table',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, blah blah'
        },
        {
            name: 'Cafe interior',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, blah blah'
        },
        {
            name: 'Cat green eyes',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, blah blah'
        },
        {
            name: 'Green parrot',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, blah blah'
        },
        {
            name: 'Yellow macaw',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, blah blah'
        },
        {
            name: 'Pug smile',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, blah blah'
        },
        {
            name: 'Pancakes',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, blah blah'
        },
        {
            name: 'Burrito',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, blah blah'
        },
        {
            name: 'Scallop pasta',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, blah blah'
        },
        {
            name: 'Burger',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, blah blah'
        },
        {
            name: 'Fruit bowl',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Green river',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Docks',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Panoramic village by sea',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Domestic landscape',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Park bench',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          }
    ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [currentPhoto, setCurrentPhoto] = useState();
    const toggleModal = (image, i) => {
        setCurrentPhoto({...image, index: i});
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div>
            {isModalOpen && (
                <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
            )}
            <div className='flex-row'>
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/small/${category}/${i}.jpg`)}
                        alt={image.name}
                        className='img-thumbnail mx-1'
                        onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default PhotoList;