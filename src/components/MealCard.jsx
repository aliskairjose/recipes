import React from 'react'

export default function MealCard({meal}) {
  return (
    <div className='h-[370px] w-[250px] my-2 rounded overflow-hidden shadow-md border border-gray-300'>
      <img className="p-2" src={meal.image} alt={meal.label} />
      <div className="p-2">
        <div className='text-sm h-14'>{meal.label}</div>
        <div className='flex justify-around uppercase text-xs mb-2'>
          <div >180 calorias</div>
          <div >{meal.ingredients.length} ingredientes</div>
        </div>
        <a href={meal.shareAs} className='text-xs text-gray-500 font-semibold'>{meal.source}</a>
      </div>
    </div>
  )
}
