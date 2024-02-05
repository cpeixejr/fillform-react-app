import BrandImg from "../Union.png";

function Brand() {
  return (
    <>
      <div>
        <img src={BrandImg} alt="Brand img" width={43} height={43} />
        <p className="logo">Fillform</p>
      </div>
    </>
  );
}

export default Brand;
