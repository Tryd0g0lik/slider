- резиновая вёрстка;
- pixel-perfect;
- mobile-first и desktop-first.

arhive.zip

```code
Сверстать слайдер товаров по макету из figma, с использованием: react js, scss.
```

Вопрос. Делать сам интерфейс/sripts слайдера? Или только верстка в компоненте нужна.\
В задании не однозначно сказано. 

## Команды
```js
{
   "scripts": {
    "lint": "eslint src --ext jsx,ts,tsx", // Запуск "npm run lint" чистим ком
    "cssstyle": "npx @tailwindcss/cli -i ./src/styles/style.css -o ./src/output.css --watch"// После запуска сервера запускаем cssstyle. Работает с файлом "src\styles" Установлен, чтоб получить нулевой стиль.
    "build": "webpack --mode=production --config webpack.config.js", // сборка
    "server": "webpack server --mode=development  --config webpack.config.js", // Запускаем сервер
    "pushing": "git push origin master",
    "prepare": "husky" // Запуск "npm run prepare" для автоматичиской чистки кода
  }
}
```

## Маршруты
```code
"src\infographics" для SVG файлов и прочей инфографики.

"src\pictures" - для изображения колеса. Изображение размером 152 × 272 px.
После сборки, в корне результата сборки создайте директорию "pictures".
"pictures" для изображений колеса в production.

или
В "webpack" настройте "copy-webpack-plugin" для создания маршрута и переноса файла при сборке.
"https://www.npmjs.com/package/copy-webpack-plugin"

```
