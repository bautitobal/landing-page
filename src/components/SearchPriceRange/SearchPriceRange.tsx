import { useState } from "react";
import { GrFormDown, GrTag, GrFormUp } from "react-icons/gr";

export function SearchPriceRange() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        >
            <GrTag />

            <div>
                <p>Precio</p>
                <p className="text-xs">Selecciona tu rango de precio (en dólares)</p>
            </div>
            {isOpen ? (
                <GrFormUp />
            ): (
                <GrFormDown />
            )}

            {isOpen && (
                <div className="absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0">
                    <p>Cualquier rango</p>
                    <p>20.000 - 30.000</p>
                    <p>13.000 - 20.000</p>
                    <p>10.000 - 13.000</p>
                    <p>30.000 - 100.000</p>
                </div>

            )}
        </div>
    )
}
