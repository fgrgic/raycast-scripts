Run the setup script before starting:

```sh
./setup.sh
```

Raycast looks for node in `/usr/bin/env`. But if you are, for example, using nvm, it's located in a different place. That's why `setup.sh` script looks for where node is installed and replaces all `.js` files to start with local node location.

If you're using globally installed node, running the setup script won't change anything.
