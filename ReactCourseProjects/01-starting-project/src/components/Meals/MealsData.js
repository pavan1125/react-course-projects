import MDataClasses from "./MealsData.module.css";
import Card from "./Card";
import ItemCard from "./ItemCard";
const DUMMY_MEALS = [
{
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

  export default function MealsData(){
    const mealItems=DUMMY_MEALS.map((item)=>{
         return(
            <ItemCard key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} />
         )
    })
    return(
         <section className={MDataClasses.meals}>
            <Card>
            <ul>
             {mealItems}
            </ul>
            </Card>
         </section>
    )
  }