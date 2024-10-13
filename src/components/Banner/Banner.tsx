import { FloatedSearch } from "../FloatedSearch";

export function Banner() {
    return (
        <div className="container relative mx-auto">
            <div className="pt-20 md:pt-0 min-h-[88vh] bg-banner bg-no-repeat bg-cover bg-center rounded-3xl relative flex flex-col items-center md:justify-center">
                <div className="max-w-3xl text-center text-white">
                    <h2 className="text-5xl font-semibold">Descubre las mejores casas de Argentina</h2>
                    <h2 className="mt-2 text-xl md:mt-8">Con más de 30 años de experiencia, en TuLandingPage tenemos a los mejores profesionales para lo que necesites.</h2>
                </div>
                <FloatedSearch />
            </div>
        </div>
    )
}
