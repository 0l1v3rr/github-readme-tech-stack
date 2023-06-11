<div align="center">
  <a href="https://github-readme-tech-stack.vercel.app">
    <img src="https://github-readme-tech-stack.vercel.app/api/cards?title=GitHub+Readme+Tech+Stack&align=center&titleAlign=center&fontSize=20&lineHeight=10&lineCount=2&theme=ayu&width=450&bg=%25230B0E14&badge=%2523151B26&border=%2523151B26&titleColor=%231c9eff&line1=react%2Creact%2Cauto%3Btailwindcss%2Ctailwind%2Cauto%3Bprettier%2Cprettier%2Cauto%3B&line2=next.js%2Cnext.js%2Cffffff%3Btypescript%2Ctypescript%2Cauto%3Bstorybook%2Cstorybook%2Cauto%3B" alt="GitHub Readme Tech Stack" />
  </a>
</div>

<div align="center">
  Show off your favorite technologies, tools, or the tech stack your project uses with these fully customizable, great-looking cards on your GitHub README!
</div>

<hr>

## ⚡ Quick Start

The easiest way to get started is to visit our website, where you can customize and preview your card live.  
[https://github-readme-tech-stack.vercel.app](https://github-readme-tech-stack.vercel.app)

<p align="center">
  <img src="./docs/README.gif" alt="tutorial">
</p>

<hr>

## ❓ Why?

As a developer, it's important to showcase your expertise in different technologies to potential collaborators and employers. With **github-readme-tech-stack**, you can easily create a visual representation of the technologies used in your GitHub repository and include it in your **profile README**. This can help you stand out and attract the attention of others who are looking for developers with specific skill sets.

The images are fully customizable, so you can choose the technologies you want to showcase and even adjust the colors, icons, and the alignment to match your personal brand.

Personally, I've always wanted to show off my skills in a clean and modern way. I could do that with just the badges, but they didn't match the style of [github-readme-streak-stats](https://github.com/DenverCoder1/github-readme-streak-stats) and [github-readme-stats](https://github.com/anuraghazra/github-readme-stats). With **github-readme-tech-stack**, that's no longer a problem, it naturally matches those cards!

<hr>

## 👉 Features

- **Easy to use:** Creating a Tech Stack image is as simple as adding a markdown tag to your `profile README`.
- **Demo website:** github-readme-tech-stack has a demo website, where you can build your own card with no effort.
- **Customizable:** Choose the technologies you want to showcase and customize the colors and icons to match your personal brand.
- **Custom icons:** You can even upload and use your **own** `svg` icons if they don't already exist.
- **Multiple themes:** These cards come with several pre-made themes that you can use. However, if none of the themes suits your style, you can easily create your **own**!
- **Badges:** github-readme-tech-stack uses [shields.io](https://shields.io/) badges and [simple-icons](https://simpleicons.org/) under the hood.
- **Style:** github-readme-tech-stack is designed to match the style of [github-readme-streak-stats](https://github.com/DenverCoder1/github-readme-streak-stats), [github-readme-stats](https://github.com/anuraghazra/github-readme-stats) and many other cool tools.
- **Open-source:** github-readme-tech-stack is open source and actively maintained, so you can be sure it will continue to be a reliable tool for showcasing your tech stack. Contributions and feature requests are always welcome.

<hr>

## 🔧 Query parameters

None of the fields are required. Each query parameter has a default value, which is listed below.

| Parameter        | Example                  | Default value | Description                                                                               |
| ---------------- | ------------------------ | ------------- | ----------------------------------------------------------------------------------------- |
| **title**        | `title=My%20Title`       | My Tech Stack | The title of the card. `%20` can be used as a space.                                      |
| **theme**        | `theme=github_dark`      | github        | The theme of the card. You can browse between the themes [here](docs/THEMES.md).          |
| **align**        | `align=center`           | left          | The alignment of the badges. (`left`, `center`, `right`)                                  |
| **titleAlign**   | `align=center`           | left          | The alignment of the title. (`left`, `center`, `right`)                                   |
| **showBorder**   | `showBorder=false`       | true          | Display the border around the card or not. (`true`, `false`)                              |
| **hideTitle**    | `hideTitle=true`         | false         | Display the title of the card or not. (`true`, `false`)                                   |
| **hideBg**       | `hideBg=true`            | false         | If true, sets the background to transparent. (`true`, `false`)                            |
| **borderRadius** | `borderRadius=12.5`      | 4.5           | Number between 0 and 50.                                                                  |
| **fontFamily**   | `fontFamily=consolas`    | Segoe UI      | The font family of the title. If the specified family doesn't exist, the default is used. |
| **fontSize**     | `fontSize=20`            | 18            | The size of the title. Accepts a number between 15 and 30.                                |
| **fontWeight**   | `fontWeight=normal`      | semibold      | The thickness of the title. (`thin`, `normal`, `semibold`, `bold`)                        |
| **width**        | `width=500`              | 495           | The width of the card. Accepts a valid number.                                            |
| **gap**          | `gap=15`                 | 10            | The gap between the badges. Accepts a number between 0 and 30.                            |
| **lineHeight**   | `lineHeight=10`          | 7             | The gap between the lines. Accepts a number between 0 and 30.                             |
| **lineCount**    | `lineCount=2`            | 1             | The number of lines you want to add to your card.                                         |
| **line{n}**      | `line1=html5,html5,auto` | -             | The current line of the badge, where {n} is a number. _`(1 <= n <= lineCount)`_           |
| **bg**           | `bg=%2383324c`           | -             | The color of the background.                                                              |
| **border**       | `border=%232da7c7`       | -             | The color of the border.                                                                  |
| **badge**        | `badge=%2383324c`        | -             | The color of the badges.                                                                  |
| **titleColor**   | `titleColor=%232da7c7`   | -             | The color of the title.                                                                   |

<hr>

## 🪁 Themes

These cards come with several built-in themes that you can use. You can find them all by clicking [here](docs/THEMES.md).  
If you have a cool new theme in mind, or want to add one for yourself and others, please see [#45](https://github.com/0l1v3rr/github-readme-tech-stack/issues/45).  
You can also customize the themes. It's easier to do with the [demo website](#⚡-quick-start).

<hr>

## ⚒️ Building from source

If you don't have NodeJS, [download and install it](https://nodejs.org/en/).  
Then open a terminal and type the following commands:

```sh
# Clone the project:
git clone https://github.com/0l1v3rr/github-readme-tech-stack.git
cd github-readme-tech-stack

# Install the dependencies:
npm i
npm run prepare

# Run the application:
npm run dev
```

<hr>

## 🧑‍🤝‍🧑 Contributing

All contributions are welcome.  
You can find a contributing guideline [here](CONTRIBUTING.md).  
This project is released under the [MIT License](LICENSE).

<hr>

## 💡 Inspiration

- [github-readme-streak-stats](https://github.com/DenverCoder1/github-readme-streak-stats)
- [github-readme-stats](https://github.com/anuraghazra/github-readme-stats)
- [github-profile-summary-cards](https://github.com/vn7n24fzkq/github-profile-summary-cards)
- [markdown-badges](https://github.com/Ileriayo/markdown-badges)
- [shields.io](https://shields.io/)
- [simple-icons](https://simpleicons.org/)
