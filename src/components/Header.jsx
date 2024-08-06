import SelectKid from "./SelectKid";

const Header = () => {
  return (
    <div className= "text-xl">
      <div className="grid grid-cols-3 gap-4 p-10">
        <div className="flex justify-self-start pl-20">
          <SelectKid />
        </div>
        <div className="flex justify-self-center font-bold p-4 text-3xl">
          <h1>Docházka</h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
