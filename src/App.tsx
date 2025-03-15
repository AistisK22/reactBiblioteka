import Avatar from "./Avatar";
import Button from "./Button";
import Card from "./Card";
import Divider from "./Divider";
import ImageView from "./ImageView";
import MenuBar, { MenuItem } from "./MenuBar";

function App() {
  const menuItems: MenuItem[] = [
    { label: "Home", link: "/" },
    {
      label: "Services",
      submenu: [
        { label: "Web Development", link: "/services/web" },
        { label: "Mobile Apps", link: "/services/mobile" },
      ],
    },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <>
      <MenuBar color="black" shadow rounded items={menuItems} />
      <Button label="Click" variant={"square"} size={"normal"} />
      <ImageView
        title="Beautiful landscape"
        imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.devotional-reflections-from-the-bible.com%2Fimages%2F2020RF21.jpg&f=1&nofb=1&ipt=f85f4710ef77f419d33797e33d84d509ec8d31c497965449171ba3166b0d0b6a&ipo=images"
      />
      <Card
        title="Click"
        shadow
        includeImage
        imageUrl={
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.devotional-reflections-from-the-bible.com%2Fimages%2F2020RF21.jpg&f=1&nofb=1&ipt=f85f4710ef77f419d33797e33d84d509ec8d31c497965449171ba3166b0d0b6a&ipo=images"
        }
        body={
          "teteetetetetetetteteetetetetetetteteetetetetet" +
          "etteteetetetetetetteteetetetetetetteteetetetetetetteteetetetetetet" +
          "teteetetetetetet"
        }
      />
      <Divider color="red" size="small" rounded />
      <Avatar
        shadow
        includeImage
        size="large"
        imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2F3d-rendering-boy-wearing-cap-with-letter-r_1142-40523.jpg%3Fsemt%3Dais_hybrid&f=1&nofb=1&ipt=506f3b386a9dde9ffd254305a039d168b4b6e51b948019b39caaab1759cffda2&ipo=images"
      />
    </>
  );
}

export default App;
