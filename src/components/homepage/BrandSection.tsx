import dovetail from "../../assets/dovetail.svg";
import ifixit from "../../assets/ifixit.svg";
import muller from "../../assets/muller.svg";
import emlakjet from "../../assets/emlakjet.svg";
import theodinproject from "../../assets/theodinproject.svg";
import pearson from "../../assets/pearson.svg";

const BrandSection = () => {
  const data = [dovetail, ifixit, muller, emlakjet, theodinproject, pearson];
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm font-medium mb-8">
          TRUSTED BY LEADING ORGANIZATIONS
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
          {data.map((img, i) => (
            <div
              key={i}
              className="h-8 animate-float"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <img
                src={img}
                alt={`Brand ${i}`}
                width={120}
                height={32}
                className="h-full w-auto grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
