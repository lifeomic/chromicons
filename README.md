# Chromicons

<p align="center">
  <a href="https://github.com/lifeomic/chromicons">
    <img src="https://github.com/lifeomic/chromicons/blob/master/.github/chromicons@2x.png?raw=true" alt="Chromicons" width="300" />
  </a>
</p>

<br>

Handcrafted open source icons from LifeOmic. Ready to use in web, iOS, Android, and desktop apps. Completely open source, MIT licensed, and built with ♥️ by the team at LifeOmic.

## Usage

### npm package 📦

The recommended path for usage is via the package on npm.

1. Install Dependency

```bash
yarn add @lifeomic/chromicons
```

2. Import Icons!

```js
import { Apple } from '@lifeomic/chromicons';
```

**With React-Native**

Icon images are stored in the `src/lined/images` folder. Each icon has its own folder with images for different screen densities (@1x, @1.5x, @2x, ..., @4x). Usage:

```jsx
<Image
  style={{ height: 24, width: 24, tintColor: 'red' }}
  source={require('@lifeomic/chromicons/src/lined/images/apple/apple.png')}
/>
```

**With React-Native (react-native-svg)**

1. Install Dependencies

```bash
yarn add @lifeomic/chromicons-native
```

2. Import the Icon Components

```jsx
import { Apple } from '@lifeomic/chromicons-native';

<Apple stroke="red" />;
```

### Web App 💻

You can view and copy all of the SVGs to your clipboard via the [web app](https://lifeomic.github.io/chromicons.com/). It also provides a link to download all raw SVGs.

## Icon Requests

Have an icon you want designed? File a GitHub issue and we'd be happy to create it for you!
