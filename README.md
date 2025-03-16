# IceTea UI

![preview](https://raw.githubusercontent.com/AistisK22/reactBiblioteka/refs/heads/master/public/preview.png)

## Introduction

IceTea UI is a simple modern component library for React Typescript. It provides Avatar, Button, Card and other elements.

## Installation

Install the package via [npm](https://www.npmjs.com/):

```sh
npm install @aiskai/icetea-ui
```

[React](https://www.npmjs.com/package/react) and [react-dom](https://www.npmjs.com/package/react-dom) should be installed before installing IceTea UI.

```json
"peerDependencies": {
  "react": "^17.0.0 || ^18.0.0 || ^19.0.0",
  "react-dom": "^17.0.0 || ^18.0.0 || ^19.0.0"
},
```

## Components

### Avatar

UI element used to display user profile pictures and initials.

![preview](https://raw.githubusercontent.com/AistisK22/reactBiblioteka/refs/heads/master/public/avatar.png)

Example:

```ts
import { Avatar } from "@aiskai/icetea-ui";

function App() {
  return <Avatar shadow includeImage size="large" imageUrl="avatar.png" />;
}

export default App;
```

|     Prop     |  Type   |        Possible values         | Default value |          Description          |
| :----------: | :-----: | :----------------------------: | :-----------: | :---------------------------: |
|   variant    | string  |     "square" \| "rounded"      |   "rounded"   |      The shape of avatar      |
|    shadow    | boolean |         true \| false          |     false     |        Avatar's shadow        |
|    color     | string  |        valid color code        |    "gray"     |       Background color        |
| includeImage | boolean |         true \| false          |     false     | Includes image in the avatar  |
|   imageUrl   | string  |           valid url            |       -       | The _src_ attribute for _img_ |
|     size     | string  | "small" \| "normal" \| "large" |   "normal"    |         Avatar's size         |
|     text     | string  |          string value          |       -       |         Avatar's text         |
|  textColor   | string  |        valid color code        |    "black"    |      Avatar's text color      |

### Button

UI element that allows users to trigger an action or event when clicked. It can be customized with different styles, behaviors, and event handlers.

![preview](https://raw.githubusercontent.com/AistisK22/reactBiblioteka/refs/heads/master/public/button.png)

Example:

```ts
import { Button } from "@aiskai/icetea-ui";

function App() {
  return <Button label="Submit" onClick={() => console.log("Submitted!")} />;
}

export default App;
```

|   Prop    |    Type    |        Possible values         | Default value |           Description           |
| :-------: | :--------: | :----------------------------: | :-----------: | :-----------------------------: |
|   label   |   string   |          string value          |       -       |  Text displayed on the button   |
| textColor |   string   |        valid color code        |    "white"    |       Button's text color       |
|   color   |   string   |        valid color code        |    "black"    |   Button's background's color   |
|  variant  |   string   |     "square" \| "rounded"      |   "rounded"   |       The shape of button       |
|   size    |   string   | "small" \| "normal" \| "large" |   "normal"    |          Button's size          |
|  shadow   |  boolean   |         true \| false          |     false     |         Button's shadow         |
|  onClick  | () => void |               -                |       -       | Function called on button click |

### Card

A reusable UI element used to display grouped content in a structured and visually appealing way.

![preview](https://raw.githubusercontent.com/AistisK22/reactBiblioteka/refs/heads/master/public/card.png)

Example:

```ts
import { Card } from "@aiskai/icetea-ui";

function App() {
  return (
    <Card
      title="Lorem ipsum"
      includeImage
      imageUrl={"landscape.png"}
      body={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
      }
    />
  );
}

export default App;
```

|     Prop     |  Type   |    Possible values    | Default value |           Description           |
| :----------: | :-----: | :-------------------: | :-----------: | :-----------------------------: |
|    title     | string  |     string value      |       -       | Text displayed on card's header |
|     body     | string  |     string value      |       -       |  Text displayed on card's body  |
|    color     | string  |   valid color code    |    "gray"     |       Background's color        |
|  textColor   | string  |   valid color code    |    "white"    |        Card's text color        |
|    shadow    | boolean |     true \| false     |     false     |          Card's shadow          |
| includeImage | boolean |     true \| false     |     false     |   Includes image in the card    |
|   imageUrl   | string  |       valid url       |       -       |  The _src_ attribute for _img_  |
|   variant    | boolean | "square" \| "rounded" |   "rounded"   |        The shape of card        |

### Divider

UI element used to create visual separation between sections of content.

![preview](https://raw.githubusercontent.com/AistisK22/reactBiblioteka/refs/heads/master/public/divider.png)

Example:

```ts
import { Divider } from "@aiskai/icetea-ui";

function App() {
  return <Divider />;
}

export default App;
```

|  Prop   |  Type   |         Possible values         | Default value |     Description      |
| :-----: | :-----: | :-----------------------------: | :-----------: | :------------------: |
|  color  | string  |        valid color code         |    "gray"     |   Divider's color    |
| variant | string  | "dotted" \| "solid" \| "dashed" |    "solid"    |   Divider's style    |
| rounded | boolean |          true \| false          |     false     | The shape of divider |
|  size   | string  | "small" \| "normal" \| "large"  |   "normal"    |    Divider's size    |

### ImageView

Displays an image thumbnail, and when clicked, it opens a full-sized image with a title overlay.

![preview](https://raw.githubusercontent.com/AistisK22/reactBiblioteka/refs/heads/master/public/image-view.png)

Example:

```ts
import { ImageView } from "@aiskai/icetea-ui";

function App() {
  return <ImageView title="Beautiful landscape" imageUrl="landscape.png" />;
}

export default App;
```

|   Prop   |  Type  | Possible values | Default value |          Description          |
| :------: | :----: | :-------------: | :-----------: | :---------------------------: |
| imageUrl | string |    valid url    |       -       | The _src_ attribute for _img_ |
|  title   | string |  string value   |       -       |         Image's title         |

### MenuBar

UI element that provides a list of options or actions that a user can select.

![preview](https://raw.githubusercontent.com/AistisK22/reactBiblioteka/refs/heads/master/public/menu.png)

Example:

```ts
import { MenuBar } from "@aiskai/icetea-ui";

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

  return <MenuBar items={menuItems} />;
}

export default App;
```

|   Prop    |    Type    | Possible values  | Default value |    Description     |
| :-------: | :--------: | :--------------: | :-----------: | :----------------: |
|  rounded  |  boolean   |  true \| false   |     false     | The shape of menu  |
|  shadow   |  boolean   |  true \| false   |     false     |   Menu's shadow    |
|   items   | MenuItem[] |        []        |       -       |    Menu's items    |
|   color   |   string   | valid color code |   "#007bff"   | Background's color |
| textColor |   string   | valid color code |    "white"    | Menu's text color  |

## License

This project is licensed under the MIT License.
