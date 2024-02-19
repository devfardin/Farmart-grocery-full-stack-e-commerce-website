import { BsSearch } from "react-icons/bs";
const Search = () => {
  return (
    <div className="flex bg-gray-100 p-3 rounded-md  items-center ">
    <select name="product_cat" class="outline-none bg-transparent text-gray-500 text-sm font-medium text-left uppercase mr-2 w-2/5">
      <option value="0" selected="selected">All Categories</option>
      <option class="level-0" value="breads-sweets">Breads Sweets</option>
      <option class="level-1" value="chocolate">&nbsp;&nbsp;&nbsp;Chocolate</option>
      <option class="level-1" value="cupcakes">&nbsp;&nbsp;&nbsp;Cupcakes</option>
      <option class="level-1" value="fruit-filling">&nbsp;&nbsp;&nbsp;Fruit Filling</option>
      <option class="level-1" value="stouffer">&nbsp;&nbsp;&nbsp;Stouffer</option>
      <option class="level-0" value="coffees-and-teas">Coffees and Teas</option>
      <option class="level-1" value="fizzy-drinks">&nbsp;&nbsp;&nbsp;Fizzy Drinks</option>
      <option class="level-1" value="hot-drinks">&nbsp;&nbsp;&nbsp;Hot Drinks</option>
      <option class="level-1" value="tea-coffee">&nbsp;&nbsp;&nbsp;Tea &amp; Coffee</option>
      <option class="level-1" value="water">&nbsp;&nbsp;&nbsp;Water</option>
      <option class="level-0" value="foodcupboard">Food Cupboard</option>
      <option class="level-1" value="breakfast-cereals">&nbsp;&nbsp;&nbsp;Breakfast Cereals</option>
      <option class="level-1" value="chocolate-sweets">&nbsp;&nbsp;&nbsp;Chocolate &amp; Sweets</option>
      <option class="level-1" value="crisps-snacks-nuts">&nbsp;&nbsp;&nbsp;Crisps, Snacks &amp; Nuts</option>
      <option class="level-1" value="tins-cans">&nbsp;&nbsp;&nbsp;Tins &amp; Cans</option>
      <option class="level-0" value="frozen-seafoods">Frozen Seafoods</option>
      <option class="level-1" value="buitoni">&nbsp;&nbsp;&nbsp;Buitoni</option>
      <option class="level-1" value="buttercream">&nbsp;&nbsp;&nbsp;Buttercream</option>
      <option class="level-1" value="freshly">&nbsp;&nbsp;&nbsp;Freshly</option>
      <option class="level-1" value="hot-pockets">&nbsp;&nbsp;&nbsp;Hot Pockets</option>
      <option class="level-0" value="fruits-vegetables">Fruits &amp; Vegetables</option>
      <option class="level-1" value="fruit">&nbsp;&nbsp;&nbsp;Fruit</option>
      <option class="level-1" value="meat-poultry">&nbsp;&nbsp;&nbsp;Meat &amp; Poultry</option>
      <option class="level-1" value="milk-butter-eggs">&nbsp;&nbsp;&nbsp;Milk, Butter &amp; Eggs</option>
      <option class="level-1" value="vegetables">&nbsp;&nbsp;&nbsp;Vegetables</option>
      <option class="level-0" value="milks-and-dairies">Milks and Dairies</option>
      <option class="level-1" value="bouncers">&nbsp;&nbsp;&nbsp;Bouncers</option>
      <option class="level-1" value="nursery">&nbsp;&nbsp;&nbsp;Nursery</option>
      <option class="level-1" value="pushchairs">&nbsp;&nbsp;&nbsp;Pushchairs</option>
      <option class="level-1" value="toys">&nbsp;&nbsp;&nbsp;Toys</option>
      <option class="level-0" value="pet-foods">Pet Foods</option>
      <option class="level-1" value="cookware">&nbsp;&nbsp;&nbsp;Cookware</option>
      <option class="level-1" value="cutlery">&nbsp;&nbsp;&nbsp;Cutlery</option>
      <option class="level-1" value="dinnerware">&nbsp;&nbsp;&nbsp;Dinnerware</option>
      <option class="level-1" value="utensils">&nbsp;&nbsp;&nbsp;Utensils</option>
      <option class="level-0" value="raw-meats">Raw Meats</option>
      <option class="level-1" value="chinese">&nbsp;&nbsp;&nbsp;Chinese</option>
      <option class="level-1" value="indian">&nbsp;&nbsp;&nbsp;Indian</option>
      <option class="level-1" value="italian">&nbsp;&nbsp;&nbsp;Italian</option>
      <option class="level-1" value="traditional-british">&nbsp;&nbsp;&nbsp;Traditional British</option>
      <option class="level-0" value="wines-alcohol-drinks">Wines &amp; Alcohol Drinks</option>
      <option class="level-1" value="bottle">&nbsp;&nbsp;&nbsp;Bottle</option>
      <option class="level-1" value="carlsberg">&nbsp;&nbsp;&nbsp;Carlsberg</option>
      <option class="level-1" value="fruit-purees">&nbsp;&nbsp;&nbsp;Fruit Purees</option>
      <option class="level-1" value="heineken">&nbsp;&nbsp;&nbsp;Heineken</option>
    </select>

    <input className='text-base border-l pl-3 border-gray-300 font-medium  bg-transparent outline-none grow ' placeholder='I’m searching for...'/>
    <BsSearch className='text-xl  justify-self-center'/>

  </div>
  )
}

export default Search