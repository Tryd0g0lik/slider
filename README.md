Кнопки для прелистования елементов в слайдере - работает.
"Смотрите все" просто HTML.
- резиновая вёрстка;
- pixel-perfect;
- mobile-first и desktop-first.


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
"pictures" для изображений колеса в слайдере.
```
