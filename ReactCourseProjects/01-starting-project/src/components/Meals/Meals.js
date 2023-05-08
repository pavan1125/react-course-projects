import React from "react"
import MealsData from "./MealsData"
import MealsSummary from "./MealsSummary"


export default function Meals(){
     return(
        <section>
             <MealsSummary/>
             <MealsData />
        </section>
     )
}