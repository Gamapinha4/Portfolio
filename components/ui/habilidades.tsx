'use client'

import React from 'react';

interface Props {
    name: string;
    anos: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function Habilidades({ name, anos, Icon }: Props) {
    return (
        <div className="group hover:shadow-md p-6 relative flex justify-center items-center text-1.5em flex-col rounded-16 text-default-color cursor-pointer overflow-hidden text-white uppercase font-semibold transition-all ease duration-300">
            <svg className="icon transition-all ease duration-300 group-hover:translate-y-[-40px] group-hover:scale-50">
                <Icon className="w-16 h-16" />
            </svg>
            <div className="absolute opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 mt-16 text-center text-white">
                <p className="text-lg font-semibold">{name}</p>
                <p className="text-sm">{anos} anos de prática</p>
            </div>
        </div>
    );
}
