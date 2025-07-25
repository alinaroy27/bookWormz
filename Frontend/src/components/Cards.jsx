import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3 px-2 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border-white">
        <div className="card bg-base-100 w-96 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 duration-1000">
          <figure>
            <img
  src={item.image}
  alt={item.name}
  className="w-fit h-80  object-cover rounded-t-lg"
/>

          </figure>
          <div className="card-body space-y-2">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between items-center">
              <div className="badge badge-outline">{item.price}</div>
              <div className="cursor-pointer px-3 py-1 rounded-lg border hover:bg-pink-500 hover:text-white duration-300">
                Buy now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;