import React from 'react';
import Button from './Button';

const categories = ['All Games', 'Slots', 'Live Casino', 'New'];

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-4">
                {categories.map(category => (
                    <Button
                        key={category}
                        className={`${selectedCategory === category ? 'bg-secondary-bg' : 'text-gray-400 hover:text-white'}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </Button>
                ))}
            </div>
            <Button className="bg-accent-purple">Show All</Button>
        </div>
    );
};

export default CategoryFilter;