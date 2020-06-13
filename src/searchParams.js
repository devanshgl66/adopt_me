import React, { useEffect, useState } from "react";
import useDropDown from "./useDropDown";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Result from "./Result";
// pet.breeds("cat").then(console.log,console.error);
const SearchParam = () => {
  const [location, updateLocation] = useState("Seattle, WA");
  const [breeds, updateBreeds] = useState([]);
  const [animal, AnimalDropDown] = useDropDown("Animal", "", ANIMALS);
  const [breed, BreedDropDown] = useDropDown("Breed", "", breeds);
  const [pets, setpets] = useState([]);
  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });
    setpets(animals || []);
    // console.log(animals);
  }
  // pet.animals("dog").then(console.log,console.error);
  //will work after loading of page every time(due to react) .Works as a delay
  //second argument of useEffect is a list which tell to not re render if items of this list changes
  //If not provided it will cause infinite re render cycle
  useEffect(() => {
    //removing any set breeds from list
    updateBreeds([]);
    pet.breeds(animal).then(({ breeds }) => {
      if (breeds){
        const breedString = breeds.map(({ name }) => name);
        updateBreeds(breedString);
      }
    }, console.error);
  }, [animal]);
  // const [breed,BreedDropDown]=useDropDown("Breed",animal)
  return (
    <div className='search-params'>
      <form
        onSubmit={(e) => {
          e.preventDefault(); //Do nothing on submit
          requestPets();
        }}
      >
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          value={location}
          onChange={(e) => updateLocation(e.target.value)}
        />
        <br />  
        <AnimalDropDown />
        <br />
        <BreedDropDown />
        <br />
        <input type="submit" />
      </form>
      <Result pets={pets} />
    </div>
  );
};
export default SearchParam;
