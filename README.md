<div align="center">
  <h2>🪄 GitHub Readme Tech Stack</h2>
</div>

<div align="center">
  This project is currently under development, but a beta version is available. <br/>
  Dynamically generated, customizable technologies cards for your GitHub README.
</div>
<br>
<div align="center">
  <img src="https://img.shields.io/github/contributors/0l1v3rr/github-readme-tech-stack" alt="Contributors">
  <img src="https://img.shields.io/github/issues-raw/0l1v3rr/github-readme-tech-stack" alt="Open Issues">
  <img src="https://img.shields.io/github/issues-pr/0l1v3rr/github-readme-tech-stack" alt="Open PRs">
  <img src="https://img.shields.io/github/package-json/v/0l1v3rr/github-readme-tech-stack" alt="Version">
</div>

<hr>

- [❓How do I use the card?](#how-do-i-use-the-card)
- [🕹️ Customize the card](#️-customize-the-card)
- [🔨 How to customize a line](#-how-to-customize-a-line)
- [🪁 Themes](#-themes)
  - [📚 Adding a new theme](#-adding-a-new-theme)
- [🧠 Tips](#-tips)
  - [🪢 Align the card in the markdown](#-align-the-card-in-the-markdown)
- [⚒️ Building from source](#️-building-from-source)
- [📝 License](#-license)
- [🧑‍🤝‍🧑 Contributing](#-contributing)
- [💡 Inspiration](#-inspiration)

<hr>

## ❓How do I use the card?
It's pretty simple, just copy and paste this line of markdown:
```md
[![My Tech Stack](https://github-readme-tech-stack.vercel.app/api/cards)](https://github-readme-tech-stack.vercel.app/api/cards)
```
> **Note**  
> This will create an empty card. You can customize this as you want. [Here](#️-customize-the-card) are the available options.

<hr>

## 🕹️ Customize the card
We are planning on building a generator website to generate these cards more easily and conveniently.  
Here are all the currently available query parameters.

| Parameter | Example | Default value | Description|
|---------- |---------|---------------|------------|
| **title** | `?title=My%20Custom%20Title` | My Tech Stack | The title of the card. %20 can be used as a space. |
| **theme** | `?theme=github_dark` | github | The theme of the card. You can browse between the themes [here](#-themes). |
| **lineCount** | `?lineCount=2` | 1 | The number of lines you want to add to your card. |
| **line{n}** | `?line1=typescript,typescript,2D79C7` | - | The current line of the badge, where {n} is a number. *`(1 <= n <= lineCount)`* Learn how to create a line like this [here](#-how-to-customize-a-line). |

<hr>

## 🔨 How to customize a line
Creating a line seems complicated, but it's very easy.  

Lines are created of **badges**.  
Every badge is built like this: `{logoName},{logoTitle},{logoColor}` (e.g `typescript,typescript,2D79C7`).  
The `logoColor` has to be a hexadecimal color code, without the `#` symbol.  
We need to separate the values with commas. (`,`)

Now that we know how to create badges, we can move on to creating a line.  
We just simply put badges next to each other separated by semicolons. (`{badge};{another one};{another one}`)

Congrats, you have successfully created your line of badges. Here is an example:
```
https://github-readme-tech-stack.vercel.app/api/cards?lineCount=1&line1=node.js,node.js,539E43;typescript,typescript,2D79C7;express,express.js,61DAFB
```

> **Note**  
> These cards use [shields.io](https://shields.io/) badges under the hood.

<hr>

## 🪁 Themes
Here are the themes spread in a table. The card title is the name of the theme.

<table>
  <tr>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=github&title=github&lineCount=1&line1=node.js,node.js,539E43;typescript,typescript,2D79C7;express,express.js,61DAFB">
    </td>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=github_dark&title=github_dark&lineCount=1&line1=node.js,node.js,539E43;typescript,typescript,2D79C7;express,express.js,61DAFB">
    </td>
  </tr>
</table>

### 📚 Adding a new theme
Would you like to add a new theme to the list? You're lucky, every new theme is welcomed!  
It's actually pretty easy to add a new theme. 

After following our contributing guidelines, you should have your own fork cloned locally. If so, search for the [themes.ts](https://github.com/0l1v3rr/github-readme-tech-stack/blob/master/src/cards/themes.ts) file. Please follow the code structure you see there.

You only have to specify a `set` method:
```ts
// the theme name should be snake_case
themes.set("theme_name", {
  backgroundColor: "#ffffff", // the background color of the card
  borderColor: "#ffffff",     // the border color of the card
  textColor: "#ffffff",       // the text color inside the badge
  titleColor: "#ffffff",      // the title color
  badgeColor: "#ffffff",      // the background color of the badges
});
```
> **Note**  
> Adding the theme to the README is not necessary.

<hr>

## 🧠 Tips

### 🪢 Align the card in the markdown
If you're using markdown, you may want to align your cards. There's an easy way to do it with the align attribute:
```html
<img align="center" src="https://github-readme-tech-stack.vercel.app/api/cards" alt="My Tech Stack" />
```

<hr>

## ⚒️ Building from source
If you don't have NodeJS, [download and install it](https://nodejs.org/en/).  
Then open a terminal and type these commands:

```sh
# 1. Clone the project:
git clone https://github.com/0l1v3rr/github-readme-tech-stack.git
cd github-readme-tech-stack

# 2. Install the dependencies:
npm i

# 3. Run the application:
npm run dev
```

<hr>

## 📝 License
This project is licensed under the [MIT License](LICENSE).

<hr>

## 🧑‍🤝‍🧑 Contributing
Every contribution is welcomed.  
You can find a contributing guideline [here](CONTRIBUTING.md).

<hr>

## 💡 Inspiration
I was inspired by dozens of other projects, check 'em out as well!
- [github-readme-streak-stats](https://github.com/DenverCoder1/github-readme-streak-stats)
- [github-readme-stats](https://github.com/anuraghazra/github-readme-stats)
- [github-profile-summary-cards](https://github.com/vn7n24fzkq/github-profile-summary-cards)
- [markdown-badges](https://github.com/Ileriayo/markdown-badges)
- [shields.io](https://shields.io/)