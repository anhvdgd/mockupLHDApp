import React from "react";
import "./Card.css";
import {Link} from 'react-router-dom';

interface CardItem {
    name: string
    image: string
    gender: string
    species: string
    status: string
    time: string
    total: any
    pos: number
    at: number
    page: number
}

const Card = (props: CardItem) => {
    const path = '/detail/' + (props.pos)
    const detailData = props.total
    return (
        <div className="card-content">
            <div className="flex min-w-0 gap-x-4">
              <img className="h-20 w-20 flex-none rounded-full bg-gray-50" src={props.image} alt=""/>
              <div className="min-w-0 flex-auto">
                <Link to={path} state={detailData}>
                  <p className="text-sm font-semibold leading-6 text-gray-900 textName">{props.name}</p>
                </Link>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{props.gender}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{props.status}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{props.at+1 + (props.page*20-20)}</p>
              </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end infoButton">
              <Link
              to={path}
              state={detailData}
              >
                <svg className="h-5 w-5 text-red-300"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />  <line x1="12" y1="16" x2="12" y2="12" />  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </Link>
            </div>
        </div>
    )
}

export default Card;