import { useEffect, useState } from "react";
import { IFood } from "../../../models/IFood";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import { CompContainer } from "../Home/Home.styles";
import { HeartCard, HeartContainer, HeartHeader } from "./Heart.styles";

const Heart = () => {
  const [hearted, setHearted] = useState<IFood[]>([]);

  const getHearted = () => {
    const hearted = JSON.parse(localStorage.getItem("hearted") || "[]");
    setHearted(hearted);
  };

  useEffect(() => {
    getHearted();
  }, []);

  const handleRemove = (id: string) => {
    const filtered = hearted.filter((item) => item._id !== id);
    setHearted(filtered);
    localStorage.setItem("hearted", JSON.stringify(filtered));
    //bugg i found last second, this is only a workaround for presentation, not a fix.
    window.location.reload();
  };

  return (
    <HeartContainer>
      <CompContainer>
        <Navbar />
      </CompContainer>
      <CompContainer>
        <HeartHeader>
          <h1>Heart</h1>
          <p>Here you find saved meals</p>
        </HeartHeader>
      </CompContainer>
      {hearted.map(
        (item: {
          _id: string;
          img: string;
          title: string;
          description: string;
        }) => (
          <CompContainer>
            <HeartCard key={item._id}>
              <img src={item.img} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <button
                onClick={() => {
                  handleRemove(item._id);
                }}
              >
                Remove
              </button>
            </HeartCard>
          </CompContainer>
        )
      )}
      <CompContainer>
        <Footer />
      </CompContainer>
    </HeartContainer>
  );
};

export default Heart;
