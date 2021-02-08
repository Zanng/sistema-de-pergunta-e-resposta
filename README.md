# sistema-de-pergunta-e-resposta

## technology used

```sh
    body-parser": "^1.19.0",
    "dotenv": "^8.2.0",
    "ejs": "^3.1.5",
    "express": "^4.17.1",
    "mysql2": "^2.2.5",
    "sequelize": "^6.5.0"
    "nodemon": "^2.0.7"

```

## Installation

first you need to do clone this app 
```sh
git clone https://github.com/Zanng/sistema-de-pergunta-e-resposta.git
```

## Usage

#### Check local playlist file:

```sh
iptv-checker /path-to-playlist/example.m3u
```

#### Check playlist URL:

```sh
iptv-checker https://some-playlist.lol/list.m3u
```

#### Pipe playlist from `stdin`:

```sh
cat ~/some-playlist.m3u | iptv-checker
```

Arguments:

- `-o, --output`: change default output directory
- `-t, --timeout`: specifies the number of milliseconds before the request will be aborted (default to 60000)
- `-a, --user-agent`: set custom HTTP User-Agent
- `-k, --insecure`: allow insecure connections when using SSL
- `-p, --parallel`: Batch size of channels to check concurrently (default to 1)

## Contribution

If you find a bug or want to contribute to the code or documentation, you can help by submitting an [issue](https://github.com/freearhey/iptv-checker/issues) or a [pull request](https://github.com/freearhey/iptv-checker/pulls).

## License

[MIT](http://opensource.org/licenses/MIT)
