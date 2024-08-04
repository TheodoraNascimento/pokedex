import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Pokedex } from "../pages/pokedex"
import { Pokemon } from "../pages/pokemon"
import { Type } from "../pages/types"
import { Names } from "../pages/name"

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/pokedex' element={<Pokedex />} />
            <Route exact path='/pokedex/pokemon/:name' element={<Pokemon />} />
            <Route exact path='/pokedex/:type' element={<Type />}/>
            <Route exact path='/pokedex/search/:name' element={<Names />}/>
        </Routes>
    </BrowserRouter>
)

export { AppRoutes }