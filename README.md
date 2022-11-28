<div align="center">
  <h2>🪄 GitHub Readme Tech Stack 🪄</h2>
</div>

<div align="center">
  Dynamically generated, customizable technologies cards for your GitHub README.
</div>

<br>

<div align="center">
  <img src="https://img.shields.io/github/contributors/0l1v3rr/github-readme-tech-stack" alt="Contributors">
  <img src="https://img.shields.io/github/issues-raw/0l1v3rr/github-readme-tech-stack" alt="Open Issues">
  <img src="https://img.shields.io/github/issues-pr/0l1v3rr/github-readme-tech-stack" alt="Open PRs">
  <img src="https://img.shields.io/github/package-json/v/0l1v3rr/github-readme-tech-stack" alt="Version">
</div>

<br>

<div align="center">
  <a href="https://github-readme-tech-stack.vercel.app/api/cards?theme=github_dark&lineCount=2&line1=node.js,node.js,0;typescript,typescript,0;express,express,0&line2=html5,html,0;react,react,0;tailwindcss,tailwind,0&title=This%20Project%27s%20Tech%20Stack">
    <img  src="https://github-readme-tech-stack.vercel.app/api/cards?theme=github_dark&lineCount=2&line1=node.js,node.js,0;typescript,typescript,0;express,express,0&line2=html5,html,0;react,react,0;tailwindcss,tailwind,0&title=This%20Project%27s%20Tech%20Stack" title="Tech Stack">
  </a>
</div>

<hr>

- [❓How do I use the card?](#how-do-i-use-the-card)
- [🕹️ Customize the card](#️-customize-the-card)
- [🔨 How to customize a line](#-how-to-customize-a-line)
- [🪁 Themes](#-themes)
  - [📚 Adding a new theme](#-adding-a-new-theme)
- [🧠 Tips](#-tips)
  - [🪢 Align the card in the markdown](#-align-the-card-in-the-markdown)
  - [🎭 Adding custom SVG logo](#-adding-custom-svg-logo)
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
| **align** | `?align=center` | left | The alignment of the badges. (`left`, `center`, `right`) |
| **lineCount** | `?lineCount=2` | 1 | The number of lines you want to add to your card. |
| **line{n}** | `?line1=typescript,typescript,2D79C7` | - | The current line of the badge, where {n} is a number. *`(1 <= n <= lineCount)`* Learn how to create a line like this [here](#-how-to-customize-a-line). |

<hr>

## 🔨 How to customize a line
Creating a line seems complicated, but it's very easy.  

Lines are created of **badges**.  
Every badge is built like this: `{logoName},{logoTitle},{logoColor}` (e.g `typescript,typescript,2D79C7`).  
The `logoColor` has to be a hexadecimal color code, without the `#` symbol.  
We need to separate the values with commas. (`,`)

> **Note**  
> If you set the `logoColor` to `auto`, it will use the default color of the SVG logo.

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
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=github&title=github&lineCount=1&line1=node.js,node.js,auto;typescript,typescript,auto;express,express.js,auto">
    </td>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=github_dark&title=github_dark&lineCount=1&line1=node.js,node.js,auto;typescript,typescript,auto;express,express.js,auto">
    </td>
  </tr>

  <tr>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=react&title=react&lineCount=1&line1=node.js,node.js,auto;typescript,typescript,auto;express,express.js,auto">
    </td>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=vue&title=vue&lineCount=1&line1=node.js,node.js,auto;typescript,typescript,auto;express,express.js,auto">
    </td>
  </tr>

  <tr>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=angular&title=angular&lineCount=1&line1=node.js,node.js,auto;typescript,typescript,auto;express,express.js,auto">
    </td>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=node&title=node&lineCount=1&line1=node.js,node.js,auto;typescript,typescript,auto;express,express.js,auto">
    </td>
  </tr>

  <tr>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=one_dark&title=one_dark&lineCount=1&line1=node.js,node.js,auto;typescript,typescript,auto;express,express.js,auto">
    </td>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=dracula&title=dracula&lineCount=1&line1=node.js,node.js,auto;typescript,typescript,auto;express,express.js,auto">
    </td>
  </tr>

  <tr>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=monokai&title=monokai&lineCount=1&line1=node.js,node.js,auto;typescript,typescript,auto;express,express.js,auto">
    </td>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=material&title=material&lineCount=1&line1=node.js,node.js,auto;typescript,typescript,auto;express,express.js,auto">
    </td>
  </tr>

  <tr>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=night_owl&title=night_owl&lineCount=1&line1=node.js,node.js,auto;typescript,typescript,auto;express,express.js,auto">
    </td>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=ayu&title=ayu&lineCount=1&line1=node.js,node.js,auto;typescript,typescript,auto;express,express.js,auto">
    </td>
  </tr>

  <tr>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=radical&title=radical&lineCount=1&line1=node.js,node.js,auto;typescript,typescript,auto;express,express.js,auto">
    </td>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=merko&title=merko&lineCount=1&line1=node.js,node.js,auto;typescript,typescript,auto;express,express.js,auto">
    </td>
  </tr>

  <tr>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=tokyonight&title=tokyonight&lineCount=1&line1=node.js,node.js,auto;typescript,typescript,auto;express,express.js,auto">
    </td>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=darcula&title=darcula&lineCount=1&line1=node.js,node.js,auto;typescript,typescript,auto;express,express.js,auto">
    </td>
  </tr>

  <tr>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=gotham&title=gotham&lineCount=1&line1=node.js,node.js,auto;typescript,typescript,auto;express,express.js,auto">
    </td>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=chess.com&title=chess.com&lineCount=1&line1=node.js,node.js,auto;typescript,typescript,auto;express,express.js,auto">
    </td>
  </tr>

  <tr>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=blood&title=blood&lineCount=1&line1=node.js,node.js,auto;typescript,typescript,auto;express,express.js,auto">
    </td>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=blood_dark&title=blood_dark&lineCount=1&line1=node.js,node.js,auto;typescript,typescript,auto;express,express.js,auto">
    </td>
  </tr>

  <tr>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=hacker&title=hacker&lineCount=1&line1=node.js,node.js,auto;typescript,typescript,auto;express,express.js,auto">
    </td>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=android&title=android&lineCount=1&line1=node.js,node.js,auto;typescript,typescript,auto;express,express.js,auto">
    </td>
  </tr>

  <tr>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=windows&title=windows&lineCount=1&line1=node.js,node.js,auto;typescript,typescript,auto;express,express.js,auto">
    </td>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=java&title=java&lineCount=1&line1=node.js,node.js,auto;typescript,typescript,auto;express,express.js,auto">
    </td>
  </tr>

  <tr>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=halloween&title=halloween&lineCount=1&line1=node.js,node.js,auto;typescript,typescript,auto;express,express.js,auto">
    </td>
    <td>
      <img src="https://github-readme-tech-stack.vercel.app/api/cards?theme=christmas&title=christmas&lineCount=1&line1=node.js,node.js,auto;typescript,typescript,auto;express,express.js,auto">
    </td>
  </tr>
</table>

### 📚 Adding a new theme
Would you like to add a new theme to the list? Check this [issue](https://github.com/0l1v3rr/github-readme-tech-stack/issues/2), please. **Thanks!**

<hr>

## 🧠 Tips

### 🪢 Align the card in the markdown
If you're using markdown, you may want to align your cards. There's an easy way to do it with the align attribute:
```html
<img align="center" src="https://github-readme-tech-stack.vercel.app/api/cards" alt="My Tech Stack" />
```

### 🎭 Adding custom SVG logo
Let's assume that you have a [line created](#-how-to-customize-a-line) and want to use your own SVGs. We support that using [Base64](https://en.wikipedia.org/wiki/Base64) format.  
**[\*](https://stackoverflow.com/questions/38985050/how-do-i-use-the-logo-option-in-shields-io-badges) Here's an easy 3-step guide:**
1. Download the image and use one of the many online tools, e.g. [http://b64.io/](http://b64.io/), to encode it.
2. Encode the Base64 string in [percent-encoding](https://en.wikipedia.org/wiki/Percent-encoding). Take the Base64 string and use one of the many online tools, e.g. [http://meyerweb.com/eric/tools/dencoder/](http://meyerweb.com/eric/tools/dencoder/), to encode the string.
3. Finally, replace the first element of the badge (the `logoName`) with this string. (e.g `<Base64>,typescript,2D79C7;`)

> **Note**  
> Sometimes the encoded string, of either step 2 or 3, may be too long to be used. You should then try to reduce the size (total pixels) of the image and try again.

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

# 3. Install husky (optional, but recommended)
npm run prepare

# 4. Run the application:
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
