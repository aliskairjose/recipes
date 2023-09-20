import React from 'react'
import PropTypes from "prop-types";

export default function MealCard({meal}) {
  return (
    <div className='h-[370px] w-[265px] rounded overflow-hidden shadow-md border border-gray-300'>
      <img className="p-2" src={meal.image} alt={meal.label} />
      <div className="p-2">
        <div className='text-sm h-10'>{meal.label}</div>
        <div className='flex justify-around uppercase text-xs mb-2'>
          <div >180 calorias</div>
          <div >{meal.ingredients.length} ingredientes</div>
        </div>
        <a href={meal.url} className='text-xs text-gray-500 font-semibold'>{meal.source}</a>
      </div>
    </div>
  )
}

MealCard.propTypes = {
  meal: PropTypes.object,
}
