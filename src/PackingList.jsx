function Item({ name, isPacked }) {
    return <li className="item">
        {/* {isPacked ? (<del>{name} ✅</del>) : name} */}
        {name} {isPacked && "✅"}
    </li>;
}

const PackingList = () => {
    return (
        <section>
          <h1>Sally Ride's Packing List</h1>
          <ul>
            <Item 
              isPacked={true} 
              name="Space suit" 
            />
            <Item 
              isPacked={true} 
              name="Helmet with a golden leaf" 
            />
            <Item 
              isPacked={false} 
              name="Photo of Tam" 
            />
          </ul>
        </section>
      );
};

export default PackingList;