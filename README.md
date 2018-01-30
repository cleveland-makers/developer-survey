# Cleveland Developer Survey

## Development

The easiest way to hack on this repository is to run three terminals. One for
managing git, one for webpack, and one for pm2.

If you have just cloned the repository make sure to first execute:

```sh
$ yarn install
```

These are the commands that I find the most useful.

```sh
# Runs webpack in watch mode.
$ yarn run webpack

# Quickly kill and restart the app server.
$ pm2 kill && yarn run build-node && yarn run dev && pm2 logs
```

## TODO

* Browser Fingerprinting
* IP Fingerprinting
* Validation
* Saving
* Styling
