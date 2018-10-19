## Getting started
```
yarn install 
```

## Running the dev server:
```
yarn run dev-server
```

## Manually Building for dev:
```
yarn build:dev
```

## Building for production:
yarn build:prod

## Testing production:
Edit index.html to uncomment this and comment out the dev script:
```
    <!-- Uncomment this to test production build -->
    <script src="/bundleProd.js"></script>
```

### Then run:
```
yarn run live-server public
```

## Testing for dev:
### Build for dev:
```
yarn build:dev
```

### Commnet out production in index.html and uncommnet out dev:
```
    <!-- Uncomment this to test dev build -->
    <!--<script src="/bundle.js"></script>-->
```

### Then run:
```
yarn run dev-server
```

## Running node server for production:
run:
```
node server/server.js
```
visit localhost:3000 to see app in browser.

